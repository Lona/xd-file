# xd-file

An Adobe XD file is a zip file containing a bunch of JSON/XML/plain text files.

This package aims to make is easier to manipulate such a file.

## Installation

```bash
npm install xd-file
```

## Usage

There are 4 different methods available:

- [`readXDFile`](#readxdfile)
- [`createNewXDFile`](#createnewxdfile)
- [`writeXDFile`](#writexdfile)
- [`generateId`](#generateid)

### `readXDFile`

```js
(filePath: string) => Promise<{
  document: Object,
  interactions: Object,
  metadata: Object,
  resources: Object,
  artboards: Array<Object>,
}>
```

### `createNewXDFile`

```js
(documentId?: string, artboards?: Array<{
  id: string
  name?: string
  layers?: Object[]
  width: number
  height: number
  x: number
  y: number
  viewportHeigh: number
}>) => Promise<{
  document: Object,
  interactions: Object,
  metadata: Object,
  resources: Object,
  artboards: Array<Object>,
}>
```

### `writeXDFile`

```js
(xdFile: {
  document: Object,
  interactions: Object,
  metadata: Object,
  resources: Object,
  artboards: Array<Object>,
}, filePath: string) => Promise<void>
```

### `generateId`

```js
;(seed?: string) => string
```
