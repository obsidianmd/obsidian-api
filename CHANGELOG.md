# Changelog

## v1.1.0 (2022-12-05 — Insider build)

_[Changes since v1.0](#TODO)_

### New Metadata API

In anticipation of bigger improvements to metadata and frontmatter in Obsidian, we have introduced a new metadata API.
It is currently defined as follows:

```ts
interface FileManager {
/**
     * Atomically read, modify, and save the frontmatter of a note.
     * The frontmatter is passed in as a JS object, and should be mutated directly to achieve the desired result.
     * @param file - the file to be modified. Must be a markdown file.
     * @param fn - a callback function which mutates the frontMatter object synchronously.
     * @public
     */
    processFrontMatter(file: TFile, fn: (frontMatter: any) => void): Promise<void>
}
```

To use it:

```ts
app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["key1"] = value;
    delete frontmatter["key2"];
});
```

All changes made within the callback block will be applied at once.


### Improved

- Added support for an optional `donation` field the plugin manifest. The donation URL will be shown in the plugin gallery entry.
- Added macOS calendar entitlements. This allow scripts run from within Obsidian to request calendar access.

### No longer broken

- Fixed `Editor.replaceSelection` not working when run immediately after closing a modal.


## v1.0 (2022-10-13)

_[Changes since v0.15.9](https://github.com/obsidianmd/obsidian-api/compare/ff121cd...1b4f6e2)_

### New

- Added standard [color picker component](https://github.com/obsidianmd/obsidian-api/blob/902badd38ba907689f0917d7b193f7e33d1284fe/obsidian.d.ts#L493).

### Notable Changes

- Workspace information is no longer saved to the `.obsidian/workspace` file. It is now saved to workspace.json.
- Added `.has-active-menu` class to file explorer item that received the right-click.
- Added `.list-bullet` class to HTML markup for unordered list items.
