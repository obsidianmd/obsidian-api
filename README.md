## Obsidian API

Definitions for the latest [Obsidian](https://obsidian.md) API.

**Warning:** The Obsidian API is still in early alpha and is subject to change at any time!

### Documentation

All API documentation is located in the file `obsidian.d.ts`.
This will include types, properties, methods and comments explaining what everything does.

### Plugin structure

`manifest.json`

- `id` the ID of your plugin.
- `name` the display name of your plugin.
- `description` the long description of your plugin.
- `isDesktopOnly` whether your plugin uses NodeJS or Electron APIs.
- `js` (optional) an alternative js entry point. Defaults to `main.js`
- `css` (optional) a css file that should be injected. Defaults to `styles.css`

`main.js`

- This is the main entry point of your plugin.
- Import any Obsidian API using `require('obsidian')`
- Import NodeJS or Electron API using `require('fs')` or `require('electron')`
- Must export a default class which extends `Plugin`
- Must bundle all external dependencies into this file, using Rollup, Webpack, or another javascript bundler.
