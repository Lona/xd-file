// TypeScript Version: 3.4

type UUID = string

type Color = {
  mode: string
  value: {
    r: number
    g: number
    b: number
  }
  alpha: number
}

type Stroke = {
  type: string
  color: Color
}

type XDFile = {
  document: {
    state: 'unmodified' | 'modified'
    name: string
    'uxdesign#fullscreenPrivate': 'false' | 'true'
    'uxdesign#serializationId': string
    'uxdesign#specSharePublic': 'false' | 'true'
    'uxdesign#homeArtboardTypePrivate': string
    'uxdesign#specHomeArtboardTypePrivate': string
    'uxdesign#userDidSetSpecName': 'false' | 'true'
    'uxdesign#requirePasswordPrivate': 'false' | 'true'
    'uxdesign#specAllowCommentsPrivate': 'false' | 'true'
    'manifest-format-version': 6
    'uxdesign#allowCommentsPrivate': 'false' | 'true'
    'uxdesign#includeAssetsPrivate': 'false' | 'true'
    'uxdesign#passwordPublishedPrivate': 'false' | 'true'
    'uxdesign#navigationControlsPrivate': 'false' | 'true'
    'uxdesign#userDidSetPrototypeNamePrivate': 'false' | 'true'
    'uxdesign#id': string
    'uxdesign#allowComments': 'false' | 'true'
    'uxdesign#specPasswordPublished': 'false' | 'true'
    'uxdesign#specRequirePassword': 'false' | 'true'
    'uxdesign#prototypeSharePublic': 'false' | 'true'
    components: [
      {
        rel: 'thumbnail'
        width: number
        height: number
        type: 'image/png'
        state: 'unmodified'
        id: string
        name: 'thumbnail'
        path: 'thumbnail.png'
      },
      {
        rel: 'preview'
        width: number
        height: number
        type: 'image/png'
        state: 'unmodified'
        id: string
        name: 'preview'
        path: 'preview.png'
      },
      {
        rel: 'metadata'
        type: 'application/rdf+xml'
        state: 'unmodified'
        id: string
        name: 'xmp-metadata'
        path: 'META-INF/metadata.xml'
      },
      {
        rel: 'rendition'
        width: number
        height: number
        type: 'image/png'
        id: string
        state: 'unmodified'
        name: 'preview'
        path: string
      }
    ]
    'uxdesign#homeArtboardType': string
    'uxdesign#includeAssets': 'false' | 'true'
    'uxdesign#passwordPublished': 'false' | 'true'
    'uxdesign#navigationControls': 'false' | 'true'
    type: 'application/vnd.adobe.sparkler.project+dcx'
    'uxdesign#requirePassword': 'false' | 'true'
    'uxdesign#specPasswordPublishedPrivate': 'false' | 'true'
    'uxdesign#specRequirePasswordPrivate': 'false' | 'true'
    'uxdesign#specAllowComments': 'false' | 'true'
    'uxdesign#hotspotHints': 'false' | 'true'
    'uxdesign#userDidSetSpecNamePrivate': 'false' | 'true'
    'uxdesign#version': string
    'uxdesign#fullscreen': 'false' | 'true'
    'uxdesign#userDidSetPrototypeName': 'false' | 'true'
    'uxdesign#hotspotHintsPrivate': 'false' | 'true'
    'uxdesign#specHomeArtboardType': string
    children: any[]
    id: string
  }
  interactions: { version: string }
  metadata: any
  resources: {
    version: string
    children: any[]
    resources: {
      gradients: { [id: string]: any }
      clipPaths: { [id: string]: any }
      meta: {
        ux: {
          symbols: any[]
          colorSwatches: any[]
          documentLibrary: {
            version: 4
            elements: any[]
          }
        }
      }
    }
    artboards: {
      width: number
      height: number
      name: string
      x: number
      y: number
      viewportHeight: number
    }[]
  }
  artboards: {
    version: string
    children: [
      {
        type: 'artboard'
        meta: {
          ux: {
            nameL10N: 'SHAPE_RECTANGLE'
            constraintsDisabled: true
            gridStyle: {
              type: 'layout'
              visible: false
              rowStroke: Stroke
              columnStroke: Stroke
              rowSpacing: number
              columnSpacing: number
              defaultLayoutWidth: number
              columns: number
              gutter: number
              marginLeft: number
              marginTop: number
              marginRight: number
              marginBottom: number
              layoutRowStroke: Stroke
              layoutColumnStroke: Stroke
            }
          }
        }
        id: string
        artboard: {
          children: any[]
          meta: {
            ux: {
              path: string
            }
          }
          ref: UUID
        }
        style: {
          fill: Stroke
        }
      }
    ]
    resources: {
      href: '/resources/graphics/graphicContent.agc'
    }
    artboards: {
      href: '/resources/graphics/graphicContent.agc'
    }
  }[]
}

export declare function readXDFile(filePath: string): Promise<XDFile>
export declare function createNewXDFile(
  documentId?: string,
  artboards?: {
    id: UUID
    name?: string
    layers?: Object[]
    width: number
    height: number
    x: number
    y: number
    viewportHeigh: number
  }[],
): XDFile
export declare function writeXDFile(xdFile: XDFile, filePath: string): Promise<void>
export declare function generateId(seed?: string): UUID
