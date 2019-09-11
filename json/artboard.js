const generateId = require('../generateId')

module.exports = (artboard, i) => ({
  version: '1.5.0',
  children: [
    {
      type: 'artboard',
      meta: {
        ux: {
          nameL10N: 'SHAPE_RECTANGLE',
          constraintsDisabled: true,
          gridStyle: {
            type: 'layout',
            visible: false,
            rowStroke: {
              type: 'solid',
              color: {
                mode: 'RGB',
                value: {
                  r: 199,
                  g: 199,
                  b: 199,
                },
                alpha: 0.5019607843137255,
              },
            },
            columnStroke: {
              type: 'solid',
              color: {
                mode: 'RGB',
                value: {
                  r: 199,
                  g: 199,
                  b: 199,
                },
                alpha: 0.5019607843137255,
              },
            },
            rowSpacing: 8,
            columnSpacing: 8,
            defaultLayoutWidth: 375,
            columns: 4,
            gutter: 10,
            marginLeft: 36,
            marginTop: 0,
            marginRight: 36,
            marginBottom: 0,
            layoutRowStroke: {
              type: 'solid',
              color: {
                mode: 'RGB',
                value: {
                  r: 0,
                  g: 255,
                  b: 255,
                },
                alpha: 0.25098039215686274,
              },
            },
            layoutColumnStroke: {
              type: 'solid',
              color: {
                mode: 'RGB',
                value: {
                  r: 0,
                  g: 255,
                  b: 255,
                },
                alpha: 0.25098039215686274,
              },
            },
          },
        },
      },
      id: artboard.id,
      artboard: {
        children: artboard.layers || [],
        meta: {
          ux: {
            path: artboard.id,
          },
        },
        ref: generateId(),
      },
      style: {
        fill: {
          type: 'solid',
          color: {
            mode: 'RGB',
            value: {
              r: 255,
              g: 255,
              b: 255,
            },
          },
        },
      },
    },
  ],
  resources: {
    href: '/resources/graphics/graphicContent.agc',
  },
  artboards: {
    href: '/resources/graphics/graphicContent.agc',
  },
})
