const generateId = require('../generateId')

module.exports = (docId, artboards) => ({
  state: 'unmodified',
  name: 'Unnamed',
  'uxdesign#fullscreenPrivate': 'false',
  'uxdesign#serializationId': 'b18806c4-7127-4f4d-ade2-dabdf13a105d',
  'uxdesign#specSharePublic': 'true',
  'uxdesign#homeArtboardTypePrivate': 'Web',
  'uxdesign#specHomeArtboardTypePrivate': 'Web',
  'uxdesign#userDidSetSpecName': 'false',
  'uxdesign#requirePasswordPrivate': 'false',
  'uxdesign#specAllowCommentsPrivate': 'false',
  'manifest-format-version': 6,
  'uxdesign#allowCommentsPrivate': 'true',
  'uxdesign#includeAssetsPrivate': 'true',
  'uxdesign#passwordPublishedPrivate': 'false',
  'uxdesign#navigationControlsPrivate': 'true',
  'uxdesign#userDidSetPrototypeNamePrivate': 'false',
  'uxdesign#id': '9de1b72a-2f3a-4d98-9b5c-14e404a6efb7',
  'uxdesign#allowComments': 'true',
  'uxdesign#specPasswordPublished': 'false',
  'uxdesign#specRequirePassword': 'false',
  'uxdesign#prototypeSharePublic': 'true',
  components: [
    {
      rel: 'thumbnail',
      width: 512,
      height: 512,
      type: 'image/png',
      state: 'unmodified',
      id: generateId(),
      name: 'thumbnail',
      path: 'thumbnail.png',
    },
    {
      rel: 'preview',
      width: 512,
      height: 512,
      type: 'image/png',
      state: 'unmodified',
      id: generateId(),
      name: 'preview',
      path: 'preview.png',
    },
    {
      rel: 'metadata',
      type: 'application/rdf+xml',
      state: 'unmodified',
      id: generateId(),
      name: 'xmp-metadata',
      path: 'META-INF/metadata.xml',
    },
    {
      rel: 'rendition',
      width: 512,
      height: 512,
      type: 'image/png',
      id: generateId(),
      state: 'unmodified',
      name: 'preview',
      path: 'renditions/image-512-512.png',
    },
  ],
  'uxdesign#homeArtboardType': 'Web',
  'uxdesign#includeAssets': 'true',
  'uxdesign#passwordPublished': 'false',
  'uxdesign#navigationControls': 'true',
  type: 'application/vnd.adobe.sparkler.project+dcx',
  'uxdesign#requirePassword': 'false',
  'uxdesign#specPasswordPublishedPrivate': 'false',
  'uxdesign#specRequirePasswordPrivate': 'false',
  'uxdesign#specAllowComments': 'false',
  'uxdesign#hotspotHints': 'true',
  'uxdesign#userDidSetSpecNamePrivate': 'false',
  'uxdesign#version': '2.1',
  'uxdesign#fullscreen': 'false',
  'uxdesign#userDidSetPrototypeName': 'false',
  'uxdesign#hotspotHintsPrivate': 'true',
  'uxdesign#specHomeArtboardType': 'Web',
  children: [
    {
      children: [
        {
          children: [
            {
              components: [
                {
                  rel: 'primary',
                  type: 'application/vnd.adobe.agc.graphicsTree+json',
                  state: 'unmodified',
                  id: generateId(),
                  name: '',
                  path: 'graphicContent.agc',
                },
              ],
              id: generateId(),
              name: 'graphics',
              path: 'graphics',
            },
          ],
          id: generateId(),
          name: 'pasteboard',
          path: 'pasteboard',
        },
        ...artboards.map((a, i) => ({
          'uxdesign#bounds': {
            width: a.width,
            height: a.height,
            x: a.x,
            y: a.y,
          },
          'uxdesign#viewport': { height: a.viewportHeight },
          children: [
            {
              components: [
                {
                  rel: 'primary',
                  type: 'application/vnd.adobe.agc.graphicsTree+json',
                  state: 'unmodified',
                  id: generateId(),
                  name: '',
                  path: 'graphicContent.agc',
                },
              ],
              id: generateId(),
              name: 'graphics',
              path: 'graphics',
            },
          ],
          id: generateId(),
          name: a.name,
          path: `artboard-${a.id}`,
        })),
      ],
      id: generateId(),
      name: 'artwork',
      path: 'artwork',
    },
    {
      components: [
        {
          rel: 'primary',
          type: 'application/vnd.adobe.uxdesign.interactions+json',
          state: 'unmodified',
          id: generateId(),
          name: 'interactions',
          path: 'interactions.json',
        },
      ],
      id: generateId(),
      name: 'interactions',
      path: 'interactions',
    },
    {
      children: [
        {
          components: [
            {
              rel: 'primary',
              type: 'application/vnd.adobe.agc.graphicsTree+json',
              state: 'unmodified',
              id: generateId(),
              name: '',
              path: 'graphicContent.agc',
            },
          ],
          id: generateId(),
          name: 'graphics',
          path: 'graphics',
        },
      ],
      id: generateId(),
      name: 'resources',
      path: 'resources',
    },
  ],
  id: docId,
})