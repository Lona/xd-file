module.exports = artboards => ({
  version: '1.5.0',
  children: [],
  resources: {
    gradients: {},
    clipPaths: {},
    meta: {
      ux: {
        symbols: [],
        colorSwatches: [],
        documentLibrary: {
          version: 4,
          elements: [],
        },
      },
    },
  },
  artboards: artboards.reduce((prev, a, i) => {
    prev[a.id] = {
      width: a.width,
      height: a.height,
      name: a.name || `Artboard ${i}`,
      x: a.x,
      y: a.y,
      viewportHeight: a.viewportHeight,
    }
    return prev
  }, {}),
})
