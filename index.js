const fs = require('fs')
const jszip = require('jszip')
const xmljs = require('xml-js')
const path = require('path')

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, res) => {
      if (err) {
        reject(err)
        return
      }
      resolve(res)
    })
  })
}

function readAndParseFileInZip(zip, filePath) {
  return zip
    .file(filePath)
    .async('string')
    .then(res => {
      try {
        return JSON.parse(res)
      } catch (err) {
        return res
      }
    })
}

module.exports.readXDFile = async filePath => {
  const data = await readFile(filePath)
  const zip = await jszip.loadAsync(data)

  const artboardsPromises = []
  zip
    .folder('artwork')
    .filter(relativePath => relativePath !== 'pasteboard/graphics/graphicContent.agc')
    .forEach(({ name }) => artboardsPromises.push(readAndParseFileInZip(zip, name)))

  const [document, interactions, metadata, artboards, resources, pasteboard] = await Promise.all([
    readAndParseFileInZip(zip, 'manifest'),
    readAndParseFileInZip(zip, 'interactions/interactions.json'),
    readAndParseFileInZip(zip, 'META-INF/metadata.xml').then(res =>
      xmljs.xml2js(res, { compact: true }),
    ),
    Promise.all(artboardsPromises),
    readAndParseFileInZip(zip, 'resources/graphics/graphicContent.agc'),
    readAndParseFileInZip(zip, 'artwork/pasteboard/graphics/graphicContent.agc'),
  ])

  return {
    document,
    interactions,
    metadata,
    artboards,
    pasteboard,
    resources,
  }
}

module.exports.createNewXDFile = (documentId, artboards) => {
  if (!documentId) {
    documentId = require('./generateId')()
  }
  if (!artboards) {
    artboards = []
  }

  return {
    document: require('./json/document')(documentId, artboards),
    interactions: require('./json/interactions')(),
    metadata: require('./json/meta')(documentId),
    pasteboard: require('./json/pasteboard')(),
    artboards: artboards.map((p, i) => require('./json/artboard')(p, i)),
    resources: require('./json/resources')(artboards),
  }
}

module.exports.writeXDFile = (
  { document, interactions, metadata, artboards, pasteboard, resources },
  filePath,
) => {
  const zip = new jszip()

  // mimetype shouldn't be compressed
  zip.file('mimetype', 'application/vnd.adobe.sparkler.project+dcxucf', {
    createFolders: false,
    binary: true,
    compression: 'STORE',
  })

  zip.file('manifest', JSON.stringify(document), {
    createFolders: false,
    binary: false,
    compression: 'DEFLATE',
    compressionOptions: {
      level: 1,
    },
  })
  zip.file('META-INF/metadata.xml', xmljs.js2xml(metadata, { compact: true }), {
    createFolders: false,
    binary: true,
    compression: 'STORE',
  })

  artboards.forEach(a =>
    zip.file(
      `artwork/artboard-${a.children[0].id}/graphics/graphicContent.agc`,
      JSON.stringify(a),
      {
        createFolders: false,
        binary: false,
        compression: 'DEFLATE',
        compressionOptions: {
          level: 1,
        },
      },
    ),
  )

  zip.file('artwork/pasteboard/graphics/graphicContent.agc', JSON.stringify(pasteboard), {
    createFolders: false,
    binary: false,
    compression: 'DEFLATE',
    compressionOptions: {
      level: 1,
    },
  })
  zip.file('interactions/interactions.json', JSON.stringify(interactions), {
    createFolders: false,
    binary: false,
    compression: 'DEFLATE',
    compressionOptions: {
      level: 1,
    },
  })
  zip.file('preview.png', fs.readFileSync(path.join(__dirname, './json/preview.png')), {
    createFolders: false,
    compression: 'STORE',
  })
  zip.file(
    'renditions/image-512-512.png',
    fs.readFileSync(path.join(__dirname, './json/image-512-512.png')),
    { createFolders: false, compression: 'STORE' },
  )
  zip.file('resources/graphics/graphicContent.agc', JSON.stringify(resources), {
    createFolders: false,
    binary: false,
    compression: 'DEFLATE',
    compressionOptions: {
      level: 1,
    },
  })
  zip.file('thumbnail.png', fs.readFileSync(path.join(__dirname, './json/thumbnail.png')), {
    createFolders: false,
    compression: 'DEFLATE',
    compressionOptions: {
      level: 1,
    },
  })

  return new Promise((resolve, reject) => {
    zip
      .generateNodeStream({
        type: 'nodebuffer',
        streamFiles: false,
      })
      .pipe(fs.createWriteStream(filePath))
      .on('finish', () => {
        // JSZip generates a readable stream with a "end" event,
        // but is piped here in a writable stream which emits a "finish" event.
        resolve()
      })
      .on('error', reject)
  })
}

module.exports.generateId = require('./generateId')
