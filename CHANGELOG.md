# Changelog

## v1.1.1 (2022-12-8 — Insider build)

<!-- _[Changes since v1.0](https://github.com/obsidianmd/obsidian-api/compare/32fe4c3f...TODO)_ -->

- [`file-open`](https://github.com/obsidianmd/obsidian-api/blob/ec589e9762a1d7e2faad01f894cb34c41b10ecaf/obsidian.d.ts#L4189) event is now fired when focusing a Canvas file card.
- Exposed the `activeEditor` on the Workspace. When a markdown view is active, this will point to the underlying `MarkdownEditView`. If a canvas view is active, this will be an EmbeddedEditor component.

With these two changes, plugins should be able to adapt to the new Canvas view quite easily. Custom
views that react the the currently focused views will automatically respond to the user clicking 
on file cards in the canvas. If a plugin is currently accessing the `Editor` using the following
approach:

```ts
let view = app.workspace.getActiveViewOfType(MarkdownView);

if (view) {
    let editor = view.editor;
    // or
    let file = view.file;
}
```

Instead you can access the `editor` or `file` by looking under the `activeEditor`:
```ts
let { activeEditor } = app.workspace;
if (activeEditor) {
    let editor = activeEditor.editor;
    let file = activeEditor.file;
}
```

## v1.1.0 (2022-12-05 — Insider build)

_[Changes since v1.0](https://github.com/obsidianmd/obsidian-api/compare/1b4f6e2...32fe4c3f)_

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

- `setTooltip` now accepts an optional tooltip position.
- The `size?: number` parameter has been removed from `setIcon`. This is now configurable via CSS. You can add override the CSS var `--icon-size` on the parent class of your element to override the sizing (e.g. `.parent-element { --icon-size: var(--icon-xs) } `) The following icon sizes are available out-of-the-box: `--icon-xs`, `--icon-s`, `--icon-m`, and `--icon-l`.
- `editorCallback` no longer passes the active `view: MarkdownView`. Instead, it now provides either the MarkdownView or a MarkdownFileInfo object. This change allows for editor commands to work within a Canvas.
- `registerHoverLinkSource` is now available in the API to register your plugin's view with the Page preview core plugin.

### No longer broken

- Fixed `Editor.replaceSelection` not working when run immediately after closing a modal.

### Notable Changes

- Added support for an optional `donation` field the plugin manifest. The donation URL will be shown in the plugin gallery entry.
- Added macOS calendar entitlements. This allow scripts run from within Obsidian to request calendar access.

## v1.0 (2022-10-13)

_[Changes since v0.15.9](https://github.com/obsidianmd/obsidian-api/compare/ff121cd...1b4f6e2)_

### New

- Added standard [color picker component](https://github.com/obsidianmd/obsidian-api/blob/902badd38ba907689f0917d7b193f7e33d1284fe/obsidian.d.ts#L493).

### Improved

- `getLeaf` can now be used to create a leaf in a new tab, a new tab group, or a new window. The preferred usage of `getLeaf` would be `getLeaf(Keymap.isModEvent(evt))` where `evt` is the user's KeyboardEvent. This allows for a consistent user experience when opening files while a modifier key is pressed.

### Notable Changes

- Workspace information is no longer saved to the `.obsidian/workspace` file. It is now saved to `workspace.json`.
- Added `.has-active-menu` class to file explorer item that received the right-click.
- Added `.list-bullet` class to HTML markup for unordered list items.
