import * as CodeMirror from 'codemirror';

declare global {
    interface ObjectConstructor {
        isEmpty(object: Record<string, any>): boolean;
        each<T>(object: {
            [key: string]: T;
        }, callback: (value: T, key?: string) => boolean | void, context?: any): boolean;
        assign(target: any, ...sources: any): any;
        entries(obj: any): any[];
    }
}
declare global {
    interface Array<T> {
        first(): T;
        last(): T;
        contains(target: T): boolean;
        remove(target: T): void;
        shuffle(): this;
    }
}
declare global {
    interface Math {
        clamp(value: number, min: number, max: number): number;
        square(value: number): number;
    }
}
declare global {
    interface StringConstructor {
        isString(obj: any): obj is string;
    }
    interface String {
        contains(target: string): boolean;
        startsWith(searchString: string, position?: number): boolean;
        endsWith(target: string, length?: number): boolean;
        format(...args: string[]): string;
    }
}
declare global {
    interface NumberConstructor {
        isNumber(obj: any): obj is number;
    }
}
declare global {
    interface Window {
        isBoolean(obj: any): obj is boolean;
    }
    function isBoolean(obj: any): obj is boolean;
}
declare global {
    interface Element {
        getText(): string;
        setText(val: string): void;
    }
}
declare global {
    interface Element {
        addClass(...classes: string[]): void;
        addClasses(classes: string[]): void;
        removeClass(...classes: string[]): void;
        removeClasses(classes: string[]): void;
        toggleClass(classes: string | string[], value: boolean): void;
        hasClass(cls: string): boolean;
    }
}
declare global {
    interface Node {
        detach(): void;
        empty(): void;
        insertAfter(other: Node): void;
        indexOf(other: Node): number;
        setChildrenInPlace(children: Node[]): void;
        appendText(val: string): void;
    }
}
declare global {
    interface Element extends Node {
        setAttr(qualifiedName: string, value: string | number | boolean): void;
        setAttrs(obj: {
            [key: string]: string | number | boolean;
        }): void;
        getAttr(qualifiedName: string): string;
        matchParent(selector: string, lastParent?: Element): Element | null;
    }
}
declare global {
    interface HTMLElement extends Element {
        show(): void;
        hide(): void;
        toggle(show: boolean): void;
    }
}
declare global {
    function fish(selector: string): HTMLElement;
    function fishAll(selector: string): HTMLElement[];
    interface Window extends EventTarget, AnimationFrameProvider, GlobalEventHandlers, WindowEventHandlers, WindowLocalStorage, WindowOrWorkerGlobalScope, WindowSessionStorage {
        fish(selector: string): HTMLElement;
        fishAll(selector: string): HTMLElement[];
        ElementList: any;
    }
    interface Element extends Node {
        find(selector: string): Element;
        findAll(selector: string): HTMLElement[];
        findAllSelf(selector: string): HTMLElement[];
    }
    interface HTMLElement extends Element {
        find(selector: string): HTMLElement;
        findAll(selector: string): HTMLElement[];
        findAllSelf(selector: string): HTMLElement[];
    }
}
declare global {
    interface DomElementInfo {
        /**
         * The class to be assigned. Can be a space-separated string or an array of strings.
         */
        cls?: string | string[];
        /**
         * The textContent to be assigned.
         */
        text?: string;
        /**
         * HTML attributes to be added.
         */
        attr?: {
            [key: string]: string | number | boolean;
        };
        /**
         * HTML title (for hover tooltip).
         */
        title?: string;
        /**
         * The parent element to be assigned to.
         */
        parent?: Node;
        value?: string;
        type?: string;
        prepend?: boolean;
        href?: string;
    }
    interface Node {
        /**
         * Create an element and append it to this node.
         */
        createEl<K extends keyof HTMLElementTagNameMap>(tag: K, o?: DomElementInfo, callback?: (el: HTMLElementTagNameMap[K]) => void): HTMLElementTagNameMap[K];
    }
    function createEl<K extends keyof HTMLElementTagNameMap>(tag: K, o?: DomElementInfo, callback?: (el: HTMLElementTagNameMap[K]) => void): HTMLElementTagNameMap[K];
    function createFragment(callback?: (el: DocumentFragment) => void): DocumentFragment;
}
interface EventListenerInfo {
    selector: string;
    listener: Function;
    options?: boolean | AddEventListenerOptions;
    callback: Function;
}
declare global {
    interface HTMLElement extends Element {
        _EVENTS?: {
            [K in keyof HTMLElementEventMap]?: EventListenerInfo[];
        };
        on<K extends keyof HTMLElementEventMap>(this: HTMLElement, type: K, selector: string, listener: (this: HTMLElement, ev: HTMLElementEventMap[K], delegateTarget: HTMLElement) => any, options?: boolean | AddEventListenerOptions): void;
        off<K extends keyof HTMLElementEventMap>(this: HTMLElement, type: K, selector: string, listener: (this: HTMLElement, ev: HTMLElementEventMap[K], delegateTarget: HTMLElement) => any, options?: boolean | AddEventListenerOptions): void;
        onClickEvent(this: HTMLElement, listener: (this: HTMLElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
        trigger(eventType: string): void;
    }
    interface Document {
        _EVENTS?: {
            [K in keyof HTMLElementEventMap]?: EventListenerInfo[];
        };
        on<K extends keyof HTMLElementEventMap>(this: Document, type: K, selector: string, listener: (this: Document, ev: HTMLElementEventMap[K], delegateTarget: HTMLElement) => any, options?: boolean | AddEventListenerOptions): void;
        off<K extends keyof HTMLElementEventMap>(this: Document, type: K, selector: string, listener: (this: Document, ev: HTMLElementEventMap[K], delegateTarget: HTMLElement) => any, options?: boolean | AddEventListenerOptions): void;
    }
}
export interface AjaxOptions {
    method?: 'GET' | 'POST';
    url: string;
    success?: (response: any, req: XMLHttpRequest) => any;
    error?: (error: any, req: XMLHttpRequest) => any;
    data?: object | string | ArrayBuffer;
    headers?: Record<string, string>;
    withCredentials?: boolean;
}
declare global {
    function ajax(options: AjaxOptions): void;
    function ajaxPromise(options: AjaxOptions): Promise<any>;
    function ready(fn: () => any): void;
}

/**
 * @public
 */
export class AbstractTextComponent<T extends HTMLInputElement | HTMLTextAreaElement> extends ValueComponent<string> {
    /**
     * @public
     */
    inputEl: T;
    
    /**
     * @public
     */
    constructor(inputEl: T);
    /**
     * @public
     */
    getValue(): string;
    /**
     * @public
     */
    setValue(value: string): this;
    /**
     * @public
     */
    setPlaceholder(placeholder: string): this;
    /**
     * @public
     */
    onChanged(): void;
    /**
     * @public
     */
    onChange(callback: (value: string) => any): this;
}

/**
 * Adds an icon to the library
 * @param iconId - the icon ID
 * @param svgContent - the content of the SVG, without the <svg>. Must fit viewBox="0 0 100 100".
 * @public
 */
export function addIcon(iconId: string, svgContent: string): void;

/**
 * @public
 */
export class App extends Events {

    /**
     * @public
     */
    workspace: Workspace;

    /**
     * @public
     */
    vault: Vault;
    /**
     * @public
     */
    metadataCache: MetadataCache;

    /**
     * @public
     */
    on(name: 'codemirror', callback: (cm: CodeMirror.Editor) => any, ctx?: any): EventRef;
}

/**
 * @public
 */
export abstract class BaseComponent {
    /**
     * Facilitates chaining
     * @public
     */
    then(cb: (component: this) => any): this;
}

/**
 * @public
 */
export interface BlockCache {
    /**
     * @public
     */
    position: Pos;
    /**
     * @public
     */
    id: string;
}

/**
 * @public
 */
export interface BlockSubpathResult extends SubpathResult {
    /**
     * @public
     */
    type: 'block';
    /**
     * @public
     */
    block: BlockCache;
}

/**
 * @public
 */
export class ButtonComponent extends BaseComponent {
    /**
     * @public
     */
    buttonEl: HTMLButtonElement;
    
    /**
     * @public
     */
    constructor(containerEl: HTMLElement);
    /**
     * @public
     */
    setCta(): this;
    /**
     * @public
     */
    setButtonText(name: string): this;
    /**
     * @public
     */
    setIcon(icon: string): this;
    /**
     * @public
     */
    setClass(cls: string): this;
    /**
     * @public
     */
    onClick(callback: () => any): this;
}

/**
 * @public
 */
export interface CachedMetadata {
    /**
     * @public
     */
    links?: LinkCache[];
    /**
     * @public
     */
    embeds?: EmbedCache[];
    /**
     * @public
     */
    tags?: TagCache[];
    /**
     * @public
     */
    headings?: HeadingCache[];
    /**
     * @public
     */
    blocks?: Record<string, BlockCache>;
    /**
     * @public
     */
    frontmatter?: FrontMatterCache;
}

/**
 * @public
 */
export interface Command {
    /**
     * Globally unique ID to identify this command.
     * @public
     */
    id: string;
    /**
     * Human friendly name for searching.
     * @public
     */
    name: string;
    /**
     * Simple callback, triggered globally.
     * @public
     */
    callback?: () => any;
    /**
     * Complex callback, overrides the simple callback.
     * Used to "check" whether your command can be performed in the current circumstances.
     * For example, if your command requires the active focused pane to be a MarkdownSourceView, then
     * you should only return true if the condition is satisfied. Returning false or undefined causes
     * the command to be hidden from the command palette.
     *
     * @param checking - Whether the command palette is just "checking" if your command should show right now.
     * If checking is true, then this function should not perform any action.
     * If checking is false, then this function should perform the action.
     * @returns Whether this command can be executed at the moment.
     * @public
     */
    checkCallback?: (checking: boolean) => boolean | void;
    /**
     * Sets the default hotkey
     * @public
     */
    hotkeys?: Hotkey[];
}

/**
 * @public
 */
export class Component {

    /**
     * Load this component and its children
     * @public
     */
    load(): void;
    /**
     * Override this to load your component
     * @public
     * @virtual
     */
    onload(): void;
    /**
     * Unload this component and its children
     * @public
     */
    unload(): void;
    /**
     * Override this to unload your component
     * @public
     * @virtual
     */
    onunload(): void;
    /**
     * Adds a child component, loading it if this component is loaded
     * @public
     */
    addChild(component: Component): void;
    /**
     * Removes a child component, unloading it
     * @public
     */
    removeChild(component: Component): boolean;
    /**
     * Registers a callback to be called when unloading
     * @public
     */
    register(cb: () => any): void;
    /**
     * Registers an event to be detached when unloading
     * @public
     */
    registerEvent(eventRef: EventRef): void;
    /**
     * Registers an DOM event to be detached when unloading
     * @public
     */
    registerDomEvent<K extends keyof HTMLElementEventMap>(el: HTMLElement | Document | Window, type: K, callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any): void;
    /**
     * Registers an key event to be detached when unloading
     * @public
     */
    registerScopeEvent(keyHandler: KeymapEventHandler): void;
    /**
     * Registers an interval (from setInterval) to be cancelled when unloading
     * Use {@link window.setInterval} instead of {@link setInterval} to avoid TypeScript confusing between NodeJS vs Browser API
     * @public
     */
    registerInterval(id: number): void;
}

/**
 * @public
 */
export interface Constructor<T> {
    /**
     * @public
     */
    new (...args: any[]): T;
}

/**
 * @public
 */
export interface DataAdapter {
    /**
     * @public
     */
    getName(): string;

    /**
     * @public
     */
    exists(normalizedPath: string, sensitive: boolean): Promise<boolean>;
    /**
     * @public
     */
    list(normalizedPath: string): Promise<ListedFiles>;
    /**
     * @public
     */
    read(normalizedPath: string): Promise<string>;
    /**
     * @public
     */
    readBinary(normalizedPath: string): Promise<ArrayBuffer>;
    /**
     * @public
     */
    write(normalizedPath: string, data: string, immediate?: () => any): Promise<void>;
    /**
     * @public
     */
    writeBinary(normalizedPath: string, data: ArrayBuffer, immediate?: () => any): Promise<void>;
    /**
     * @public
     */
    getResourcePath(normalizedPath: string): string;
    /**
     * @public
     */
    mkdir(normalizedPath: string): Promise<void>;
    /**
     * @public
     */
    trashSystem(normalizedPath: string): Promise<boolean>;
    /**
     * @public
     */
    trashLocal(normalizedPath: string): Promise<void>;
    /**
     * @public
     */
    rmdir(normalizedPath: string, recursive: boolean): Promise<void>;
    /**
     * @public
     */
    remove(normalizedPath: string): Promise<void>;
    /**
     * @public
     */
    rename(normalizedPath: string, normalizedNewPath: string): Promise<void>;
    /**
     * @public
     */
    copy(normalizedPath: string, normalizedNewPath: string): Promise<void>;
    /**
     * @public
     */
    setCtime(normalizedPath: string, ctime: number): Promise<void>;
    /**
     * @public
     */
    setMtime(normalizedPath: string, mtime: number): Promise<void>;

}

/**
 * @public
 */
export class DropdownComponent extends ValueComponent<string> {
    /**
     * @public
     */
    selectEl: HTMLSelectElement;
    
    /**
     * @public
     */
    constructor(containerEl: HTMLElement);
    /**
     * @public
     */
    addOption(value: string, display: string): this;
    /**
     * @public
     */
    addOptions(options: Record<string, string>): this;
    /**
     * @public
     */
    getValue(): string;
    /**
     * @public
     */
    setValue(value: string): this;
    /**
     * @public
     */
    onChange(callback: (value: string) => any): this;
}

/**
 * @public
 */
export abstract class EditableFileView extends FileView {

}

/**
 * @public
 */
export interface EmbedCache extends ReferenceCache {
}

/**
 * @public
 */
export interface EventRef {

}

/**
 * @public
 */
export class Events {

    /**
     * @public
     */
    on(name: string, callback: (...data: any) => any, ctx?: any): EventRef;
    /**
     * @public
     */
    off(name: string, callback: (...data: any) => any): void;
    /**
     * @public
     */
    offref(ref: EventRef): void;
    /**
     * @public
     */
    trigger(name: string, ...data: any[]): void;
    /**
     * @public
     */
    tryTrigger(evt: EventRef, args: any[]): void;
}

/**
 * @public
 */
export class ExtraButtonComponent extends BaseComponent {
    /**
     * @public
     */
    extraSettingsEl: HTMLElement;
    
    /**
     * @public
     */
    constructor(containerEl: HTMLElement);
    /**
     * @public
     */
    setTooltip(tooltip: string): this;
    /**
     * @public
     */
    setIcon(icon: string): this;
    /**
     * @public
     */
    onClick(callback: () => any): this;
}

/**
 * @public
 */
export interface FileStats {
    /**
     * @public
     */
    ctime: number;
    /**
     * @public
     */
    mtime: number;
    /**
     * @public
     */
    size: number;
}

/**
 * @public
 */
export class FileSystemAdapter implements DataAdapter {

    /**
     * @public
     */
    getName(): string;
    /**
     * @public
     */
    getBasePath(): string;

    /**
     * @public
     */
    mkdir(normalizedPath: string): Promise<void>;
    /**
     * @public
     */
    trashSystem(normalizedPath: string): Promise<boolean>;
    /**
     * @public
     */
    trashLocal(normalizedPath: string): Promise<void>;
    /**
     * @public
     */
    rmdir(normalizedPath: string, recursive: boolean): Promise<void>;
    /**
     * @public
     */
    read(normalizedPath: string): Promise<string>;
    /**
     * @public
     */
    readBinary(normalizedPath: string): Promise<ArrayBuffer>;
    /**
     * @public
     */
    write(normalizedPath: string, data: string, immediate?: () => any): Promise<void>;
    /**
     * @public
     */
    writeBinary(normalizedPath: string, data: ArrayBuffer, immediate?: () => any): Promise<void>;
    /**
     * @public
     */
    getResourcePath(normalizedPath: string): string;
    /**
     * @public
     */
    remove(normalizedPath: string): Promise<void>;
    /**
     * @public
     */
    rename(normalizedPath: string, normalizedNewPath: string): Promise<void>;
    /**
     * @public
     */
    copy(normalizedPath: string, normalizedNewPath: string): Promise<void>;
    /**
     * @public
     */
    setCtime(normalizedPath: string, ctime: number): Promise<void>;
    /**
     * @public
     */
    setMtime(normalizedPath: string, mtime: number): Promise<void>;
    /**
     * @public
     */
    exists(normalizedPath: string, sensitive: boolean): Promise<boolean>;
    
    /**
     * @public
     */
    list(normalizedPath: string): Promise<ListedFiles>;

    /**
     * @public
     */
    getFullPath(normalizedPath: string): string;

    /**
     * @public
     */
    static readLocalFile(path: string): Promise<ArrayBuffer>;
    /**
     * @public
     */
    static mkdir(path: string): Promise<void>;
}

/**
 * @public
 */
export abstract class FileView extends ItemView {
    /**
     * @public
     */
    allowNoFile: boolean;
    /**
     * @public
     */
    file: TFile;
    /**
     * @public
     */
    constructor(leaf: WorkspaceLeaf);
    /**
     * @public
     */
    getDisplayText(): string;
    /**
     * @public
     */
    load(): void;

    /**
     * @public
     */
    onMoreOptionsMenu(menu: Menu): void;
    /**
     * @public
     */
    onHeaderMenu(menu: Menu): void;

    /**
     * @public
     */
    canAcceptExtension(extension: string): boolean;
}

/**
 * @public
 */
export interface FrontMatterCache {
    /**
     * @public
     */
    position: Pos;
    /**
     * @public
     */
    [key: string]: any;
}

/**
 * @public
 */
export function getAllTags(cache: CachedMetadata): string[] | null;

/**
@public
 */
export function getLinkpath(linktext: string): string;

/**
 * @public
 */
export interface HeadingCache {
    /**
     * @public
     */
    position: Pos;
    /**
     * @public
     */
    heading: string;
    /**
     * @public
     */
    level: number;
}

/**
 * @public
 */
export interface HeadingSubpathResult extends SubpathResult {
    /**
     * @public
     */
    type: 'heading';
    /**
     * @public
     */
    current: HeadingCache;
    /**
     * @public
     */
    next: HeadingCache;
}

/**
 * @public
 */
export interface Hotkey {

}

/**
 * @public
 */
export interface HoverParent {
    
}

/**
 * @public
 */
export class HoverPopover extends Component {

    /**
     * @public
     */
    state: PopoverState;

    /**
     * @public
     */
    constructor(parent: HoverParent, targetEl: HTMLElement | null, waitTime?: number);

}

/**
 * @public
 */
export abstract class ItemView extends View {

    /**
     * @public
     */
    constructor(leaf: WorkspaceLeaf);

    /**
     * @public
     */
    onMoreOptionsMenu(menu: Menu): void;
    
    /**
     * @public
     */
    addAction(icon: string, title: string, callback: (evt: MouseEvent) => any, size?: number): HTMLElement;
    
    /**
     * @public
     */
    onHeaderMenu(menu: Menu): void;
}

/**
 * Iterate links and embeds. If callback returns true, the iteration process will be interrupted.
 * @returns true if callback ever returns true, false otherwise.
 * @public
 */
export function iterateCacheRefs(cache: CachedMetadata, cb: (ref: ReferenceCache) => boolean | void): boolean;

/**
 * @returns true if callback ever returns true, false otherwise.
 * @public
 */
export function iterateRefs(refs: ReferenceCache[], cb: (ref: ReferenceCache) => boolean | void): boolean;

/**
 * @public
 */
export interface KeymapEventHandler {

}

/**
 * Return `false` to automatically preventDefault
 * @public
 */
export type KeymapEventListener = (ev: KeyboardEvent, modifiers: string, key: string) => boolean | void;

/**
 * @public
 */
export interface LinkCache extends ReferenceCache {
}

/**
 * @public
 */
export interface ListedFiles {
    /**
     * @public
     */
    files: string[];
    /**
     * @public
     */
    folders: string[];
}

/**
 * @public
 */
export interface Loc {
    /**
     * @public
     */
    line: number;
    /**
     * @public
     */
    col: number;
    /**
     * @public
     */
    offset: number;
}

/**
 * @public
 */
export type MarkdownPostProcessor = (el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<any> | void;

/**
 * @public
 */
export interface MarkdownPostProcessorContext {
    /**
     * @public
     */
    docId: string;

}

/**
 * @public
 */
export interface MarkdownPreviewEvents {

}

/**
 * @public
 */
export class MarkdownPreviewRenderer {

    /**
     * @public
     */
    static registerPostProcessor(postProcessor: MarkdownPostProcessor): void;
    /**
     * @public
     */
    static unregisterPostProcessor(postProcessor: MarkdownPostProcessor): void;

}

/**
 * @public
 */
export class MarkdownPreviewView extends MarkdownRenderer implements MarkdownSubView, MarkdownPreviewEvents {

    /**
     * @public
     */
    containerEl: HTMLElement;

    /**
     * @public
     */
    get(): string;
    /**
     * @public
     */
    set(data: string, clear: boolean): void;
    /**
     * @public
     */
    clear(): void;
    /**
     * @public
     */
    rerender(): void;

    /**
     * @public
     */
    getScroll(): number;
    /**
     * @public
     */
    applyScroll(scroll: number): void;

}

/**
 * @public
 */
export abstract class MarkdownRenderer extends Component implements MarkdownPreviewEvents, HoverParent {

}

/**
 * @public
 */
export class MarkdownSourceView implements MarkdownSubView, HoverParent {

    /**
     * @public
     */
    cmEditor: CodeMirror.Editor;

    /**
     * @public
     */
    constructor(view: MarkdownView);

    /**
     * @public
     */
    clear(): void;
    /**
     * @public
     */
    get(): string;
    /**
     * @public
     */
    set(data: string, clear: boolean): void;

    /**
     * @public
     */
    getSelection(): string;

    /**
     * @public
     */
    getScroll(): number;
    /**
     * @public
     */
    applyScroll(scroll: number): void;

}

/**
 * @public
 */
export interface MarkdownSubView {

    /**
     * @public
     */
    getScroll(): number;
    /**
     * @public
     */
    applyScroll(scroll: number): void;

    /**
     * @public
     */
    get(): string;
    /**
     * @public
     */
    set(data: string, clear: boolean): void;
}

/**
 * @public
 */
export class MarkdownView extends EditableFileView {

    /**
     * @public
     */
    sourceMode: MarkdownSourceView;
    /**
     * @public
     */
    previewMode: MarkdownPreviewView;
    /**
     * @public
     */
    currentMode: MarkdownSubView;

    /**
     * In memory data
     * @public
     */
    data: string;
    
    /**
     * @public
     */
    constructor(leaf: WorkspaceLeaf);

    /**
     * @public
     */
    getViewType(): string;

    /**
     * @public
     */
    getMode(): MarkdownViewMode;

    /**
     * @public
     */
    showSearch(replace?: boolean): void;

}

/**
 * @public
 */
export type MarkdownViewMode = 'source' | 'preview' | 'live';

/**
 * @public
 */
export class Menu extends Component {

    /**
     * @public
     */
    constructor();
    
    /**
     * @public
     */
    setNoIcon(): this;
    /**
     * @public
     */
    addItem(cb: (item: MenuItem) => any): this;
    /**
     * @public
     */
    addSeparator(): this;
    /**
     * @public
     */
    showAtPosition(position: Point): this;
    /**
     * @public
     */
    hide(): this;
}

/**
 * @public
 */
export class MenuItem {

    /**
     * @public
     */
    constructor(menu: Menu);
    /**
     * @public
     */
    setTitle(title: string): this;
    /**
     * @public
     */
    setIcon(icon: string | null, size?: number): this;
    /**
     * @public
     */
    setActive(active: boolean): this;
    /**
     * @public
     */
    setDisabled(disabled: boolean): this;
    /**
     * @public
     */
    onClick(callback: (evt: MouseEvent) => any): this;
}

/**
 *
 * Linktext is any internal link that is composed of a path and a subpath, such as "My note#Heading"
 * Linkpath (or path) is the path part of a linktext
 * Subpath is the heading/block ID part of a linktext.
 *
 * @public
 */
export class MetadataCache extends Events {

    /**
     * Get the best match for a linkpath.
     * @public
     */
    getFirstLinkpathDest(linkpath: string, sourcePath: string): TFile;

    /**
     * @public
     */
    getFileCache(file: TFile): CachedMetadata;
    /**
     * @public
     */
    getCache(path: string): CachedMetadata;

    /**
     * Generates a linktext for a file.
     *
     * If file name is unique, use the filename.
     * If not unique, use full path.
     * @public
     */
    fileToLinktext(file: TFile, sourcePath: string, omitMdExtension?: boolean): string;

}

/**
 * @public
 */
export class Modal {
    /**
     * @public
     */
    app: App;
    
    /**
     * @public
     */
    containerEl: HTMLElement;
    /**
     * @public
     */
    modalEl: HTMLElement;
    /**
     * @public
     */
    titleEl: HTMLElement;
    /**
     * @public
     */
    contentEl: HTMLElement;
    /**
     * @public
     */
    shouldRestoreSelection: boolean;
    
    /**
     * @public
     */
    constructor(app: App);
    /**
     * @public
     */
    open(): void;
    /**
     * @public
     */
    close(): void;
    /**
     * @public
     */
    onOpen(): void;
    /**
     * @public
     */
    onClose(): void;
}

/**
 * @public
 */
export class MomentFormatComponent extends TextComponent {
    /**
     * @public
     */
    sampleEl: HTMLElement;
    
    /**
     * Sets the default format when input is cleared. Also used for placeholder.
     * @public
     */
    setDefaultFormat(defaultFormat: string): this;
    /**
     * @public
     */
    setSampleEl(sampleEl: HTMLElement): this;
    /**
     * @public
     */
    setValue(value: string): this;
    /**
     * @public
     */
    onChanged(): void;
    /**
     * @public
     */
    updateSample(): void;
}

/**
 * @public
 */
export function normalizePath(path: string): string;

/**
 * @public
 */
export class Notice {
    
    /**
     * @public
     */
    constructor(message: string, timeout?: number);
    /**
     * @public
     */
    hide(): void;
}

/**
 * @public
 */
export interface OpenViewState {

}

/**
 * @public
 */
export function parseFrontMatterAliases(frontmatter: any | null): string[] | null;

/**
 * @public
 */
export function parseFrontMatterEntry(frontmatter: any | null, key: string | RegExp): any | null;

/**
 * @public
 */
export function parseFrontMatterStringArray(frontmatter: any | null, key: string | RegExp): string[] | null;

/**
 * @public
 */
export function parseFrontMatterTags(frontmatter: any | null): string[] | null;

/**
@public
 */
export function parseLinktext(linktext: string): {

};

/**
 * @public
 */
export abstract class Plugin_2 extends Component {
    /**
     * @public
     */
    app: App;
    /**
     * @public
     */
    manifest: PluginManifest;
    /**
     * @public
     */
    constructor(app: App, manifest: PluginManifest);
    /**
     * Adds a ribbon icon to the left bar.
     * @param icon - The icon name to be used. See {@link addIcon}
     * @param title - The title to be displayed in the tooltip.
     * @param callback - The `click` callback.
     * @public
     */
    addRibbonIcon(icon: string, title: string, callback: (evt: MouseEvent) => any): HTMLElement;
    /**
     * @public
     */
    addStatusBarItem(): HTMLElement;
    /**
     * Register a command globally. The command id and name will be automatically prefixed with this plugin's id and name.
     * @public
     */
    addCommand(command: Command): Command;
    /**
     * @public
     */
    addSettingTab(settingTab: PluginSettingTab): void;
    /**
     * @public
     */
    registerView(type: string, viewCreator: ViewCreator): void;
    /**
     * @public
     */
    registerExtensions(extensions: string[], viewType: string): void;
    /**
     * @public
     */
    loadData(): Promise<any>;
    /**
     * @public
     */
    saveData(data: any): Promise<void>;
    
}
export { Plugin_2 as Plugin }

/**
 * @public
 */
export interface PluginManifest {
    /**
     * @public
     */
    dir?: string;
    /**
     * @public
     */
    id: string;
    /**
     * @public
     */
    name: string;
    /**
     * @public
     */
    author: string;
    /**
     * @public
     */
    version: string;
    /**
     * @public
     */
    minAppVersion: string;
    /**
     * @public
     */
    description: string;
    /**
     * @public
     */
    authorUrl?: string;
    /**
     * @public
     */
    isDesktopOnly?: boolean;
}

/**
 * @public
 */
export abstract class PluginSettingTab extends SettingTab {
    
    /**
     * @public
     */
    constructor(app: App, plugin: Plugin_2);
    /**
     * @public
     */
    load(): void;
}

/**
 * @public
 */
export interface Point {
    /**
     * @public
     */
    x: number;
    /**
     * @public
     */
    y: number;
}

/**
 * @public
 */
export enum PopoverState {

}

/**
 * @public
 */
export interface Pos {
    /**
     * @public
     */
    start: Loc;
    /**
     * @public
     */
    end: Loc;
}

/**
 * @public
 */
export interface Rect {
    /**
     * @public
     */
    x: number;
    /**
     * @public
     */
    y: number;
    /**
     * @public
     */
    w: number;
    /**
     * @public
     */
    h: number;
}

/**
 * @public
 */
export interface ReferenceCache {
    /**
     * @public
     */
    position: Pos;
    /**
     * @public
     */
    link: string;
    /**
     * @public
     */
    original: string;
    /**
     * if title is different than link text, in the case of [[page name|display name]]
     * @public
     */
    displayText?: string;
}

/**
 * @public
 */
export function resolveSubpath(cache: CachedMetadata, subpath: string): HeadingSubpathResult | BlockSubpathResult;

/**
 * @public
 */
export class Scope {

    /**
     * @public
     */
    registerKey(modifiers: string[], key: string, func: KeymapEventListener): KeymapEventHandler;
    /**
     * @public
     */
    unregister(handler: KeymapEventHandler): void;
    
}

/**
 *
 * @param parent - the HTML element to insert the icon
 * @param iconId - the icon ID
 * @param size - the pixel size for width and height, defaults to 16
 * @public
 */
export function setIcon(parent: HTMLElement, iconId: string, size?: number): void;

/**
 * @public
 */
export class Setting {
    /**
     * @public
     */
    settingEl: HTMLElement;
    /**
     * @public
     */
    infoEl: HTMLElement;
    /**
     * @public
     */
    nameEl: HTMLElement;
    /**
     * @public
     */
    descEl: HTMLElement;
    /**
     * @public
     */
    controlEl: HTMLElement;
    /**
     * @public
     */
    constructor(containerEl: HTMLElement);
    /**
     * @public
     */
    setName(name: string): this;
    /**
     * @public
     */
    setDesc(desc: string | DocumentFragment): this;
    /**
     * @public
     */
    setClass(cls: string): this;
    /**
     * @public
     */
    setTooltip(tooltip: string): this;
    /**
     * @public
     */
    setHeading(): this;
    /**
     * @public
     */
    addButton(cb: (component: ButtonComponent) => any): this;
    /**
     * @public
     */
    addExtraButton(cb: (component: ExtraButtonComponent) => any): this;
    
    /**
     * @public
     */
    addToggle(cb: (component: ToggleComponent) => any): this;
    /**
     * @public
     */
    addText(cb: (component: TextComponent) => any): this;
    /**
     * @public
     */
    addTextArea(cb: (component: TextAreaComponent) => any): this;
    /**
     * @public
     */
    addMomentFormat(cb: (component: MomentFormatComponent) => any): this;
    /**
     * @public
     */
    addDropdown(cb: (component: DropdownComponent) => any): this;
    /**
     * @public
     */
    addSlider(cb: (component: SliderComponent) => any): this;
}

/**
 * @public
 */
export abstract class SettingTab {

    /**
     * @public
     */
    app: App;
    
    /**
     * @public
     */
    containerEl: HTMLElement;

    /**
     * @public
     */
    load(): void;
    /**
     * @public
     */
    unload(): void;
    /**
     * @public
     */
    open(): void;
    /**
     * @public
     */
    close(): void;
    /**
     * @public
     */
    abstract display(): void;
}

/**
 * @public
 */
export class SliderComponent extends ValueComponent<number> {
    /**
     * @public
     */
    sliderEl: HTMLInputElement;

    /**
     * @public
     */
    constructor(containerEl: HTMLElement);
    /**
     * @public
     */
    setLimits(min: number, max: number, step: number | 'any'): this;
    /**
     * @public
     */
    getValue(): number;
    /**
     * @public
     */
    setValue(value: number): this;
    /**
     * @public
     */
    getValuePretty(): string;
    /**
     * @public
     */
    setDynamicTooltip(): this;
    /**
     * @public
     */
    showTooltip(): void;
    /**
     * @public
     */
    onChange(callback: (value: number) => any): this;
}

/**
 * @public
 */
export type SplitDirection = 'vertical' | 'horizontal';

/**
 * @public
 */
export interface SubpathResult {
    /**
     * @public
     */
    start: Loc;
    /**
     * @public
     */
    end: Loc | null;
}

/**
 * @public
 */
export abstract class TAbstractFile {
    /**
     * @public
     */
    vault: Vault;
    /**
     * @public
     */
    path: string;
    /**
     * @public
     */
    name: string;
    /**
     * @public
     */
    parent: TFolder;

}

/**
 * @public
 */
export interface TagCache {
    /**
     * @public
     */
    position: Pos;
    /**
     * @public
     */
    tag: string;
}

/**
 * @public
 */
export class TextAreaComponent extends AbstractTextComponent<HTMLTextAreaElement> {
    /**
     * @public
     */
    constructor(containerEl: HTMLElement);
}

/**
 * @public
 */
export class TextComponent extends AbstractTextComponent<HTMLInputElement> {
    /**
     * @public
     */
    constructor(containerEl: HTMLElement);
}

/**
 * @public
 */
export class TFile extends TAbstractFile {
    /**
     * @public
     */
    stat: FileStats;
    /**
     * @public
     */
    basename: string;
    /**
     * @public
     */
    extension: string;

}

/**
 * @public
 */
export class TFolder extends TAbstractFile {
    /**
     * @public
     */
    children: TAbstractFile[];
    
    /**
     * @public
     */
    isRoot(): boolean;
    
}

/**
 * @public
 */
export class ToggleComponent extends ValueComponent<boolean> {
    /**
     * @public
     */
    toggleEl: HTMLElement;

    /**
     * @public
     */
    constructor(containerEl: HTMLElement);
    /**
     * @public
     */
    getValue(): boolean;
    /**
     * @public
     */
    setValue(on: boolean): this;
    /**
     * @public
     */
    onClick(): void;
    /**
     * @public
     */
    onChange(callback: (value: boolean) => any): this;
}

/**
 * @public
 */
export abstract class ValueComponent<T> extends BaseComponent {
    /**
     * @public
     */
    registerOptionListener(listeners: Record<string, (value?: T) => T>, key: string): this;
    /**
     * @public
     */
    abstract getValue(): T;
    /**
     * @public
     */
    abstract setValue(value: T): this;
}

/**
 * @public
 */
export class Vault extends Events {
    /**
     * @public
     */
    adapter: DataAdapter;

    /**
     * Gets the name of the vault
     * @public
     */
    getName(): string;

    /**
     * @public
     */
    getAbstractFileByPath(path: string): TAbstractFile;
    
    /**
     * @public
     */
    getRoot(): TFolder;

    /**
     * @public
     */
    create(path: string, data: string): Promise<TFile>;
    /**
     * @public
     */
    createBinary(path: string, data: ArrayBuffer): Promise<TFile>;
    /**
     * @public
     */
    createFolder(path: string): Promise<void>;
    /**
     * @public
     */
    read(file: TFile): Promise<string>;
    /**
     * @public
     */
    cachedRead(file: TFile): Promise<string>;
    /**
     * @public
     */
    readBinary(file: TFile): Promise<ArrayBuffer>;
    
    /**
     * @public
     */
    getResourcePath(file: TFile): string;
    /**
     * @param file - The file or folder to be deleted
     * @param force  - Should attempt to delete folder even if it has hidden children
     * @public
     */
    delete(file: TAbstractFile, force?: boolean): Promise<void>;
    /**
     * Tries to move to system trash. If that isn't successful/allowed, use local trash
     * @param file - The file or folder to be deleted
     * @param system - Should move to system trash
     * @public
     */
    trash(file: TAbstractFile, system: boolean): Promise<void>;
    /**
     * @public
     */
    rename(file: TAbstractFile, newPath: string): Promise<void>;
    /**
     * @public
     */
    modify(file: TFile, data: string): Promise<void>;
    /**
     * @public
     */
    modifyBinary(file: TFile, data: ArrayBuffer): Promise<void>;

    /**
     * @public
     */
    copy(file: TFile, newPath: string): Promise<TFile>;

    /**
     * @public
     */
    getAllLoadedFiles(): TAbstractFile[];

    /**
     * @public
     */
    static recurseChildren(root: TFolder, cb: (file: TAbstractFile) => any): void;
    /**
     * @public
     */
    getMarkdownFiles(): TFile[];
    /**
     * @public
     */
    getFiles(): TFile[];

    /**
     * @public
     */
    on(name: 'create', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'modify', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'delete', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'rename', callback: (file: TAbstractFile, oldPath: string) => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'closed', callback: () => any, ctx?: any): EventRef;
}

/**
 * @public
 */
export abstract class View extends Component {
    /**
     * @public
     */
    app: App;
    /**
     * @public
     */
    icon: string;
    /**
     * @public
     */
    navigation: boolean;
    /**
     * @public
     */
    leaf: WorkspaceLeaf;
    /**
     * @public
     */
    containerEl: HTMLElement;
    /**
     * @public
     */
    constructor(leaf: WorkspaceLeaf);

    /**
     * @public
     */
    protected onOpen(): Promise<void>;
    /**
     * @public
     */
    protected onClose(): Promise<void>;
    /**
     * @public
     */
    abstract getViewType(): string;
    /**
     * @public
     */
    getState(): any;
    /**
     * @public
     */
    setState(state: any, result: ViewStateResult): Promise<void>;
    /**
     * @public
     */
    getEphemeralState(): any;
    /**
     * @public
     */
    setEphemeralState(state: any): void;
    /**
     * @public
     */
    getIcon(): string;
    /**
     * @public
     */
    onResize(): void;
    /**
     * @public
     */
    abstract getDisplayText(): string;
    /**
     * @public
     */
    onHeaderMenu(menu: Menu): void;
}

/**
 * @public
 */
export type ViewCreator = (leaf: WorkspaceLeaf) => View;

/**
 * @public
 */
export interface ViewState {
    
    /**
     * @public
     */
    type: string;
    /**
     * @public
     */
    state?: any;
    /**
     * @public
     */
    active?: boolean;
    /**
     * @public
     */
    pinned?: boolean;
    /**
     * @public
     */
    group?: WorkspaceLeaf;
}

/**
 * @public
 */
export interface ViewStateResult {

}

/**
 * @public
 */
export class Workspace extends Events {
    
    /**
     * @public
     */
    leftSplit: WorkspaceSidedock;
    /**
     * @public
     */
    rightSplit: WorkspaceSidedock;
    /**
     * @public
     */
    leftRibbon: WorkspaceRibbon;
    /**
     * @public
     */
    rightRibbon: WorkspaceRibbon;
    /**
     * @public
     */
    rootSplit: WorkspaceSplit;
    /**
     * @public
     */
    activeLeaf: WorkspaceLeaf;
    /**
     * @public
     */
    containerEl: HTMLElement;
    /**
     * @public
     */
    layoutReady: boolean;
    /**
     * @public
     */
    requestSaveLayout: () => void;
    /**
     * @public
     */
    requestSaveHistory: () => void;

    /**
     * @public
     */
    changeLayout(workspace: any): Promise<void>;
    
    /**
     * @public
     */
    getLayout(): any;

    /**
     * @public
     */
    createLeafInParent(parent: WorkspaceSplit, index: number): WorkspaceLeaf;
    /**
     * @public
     */
    splitLeaf(source: WorkspaceItem, newLeaf: WorkspaceItem, direction?: SplitDirection, before?: boolean): void;
    /**
     * @public
     */
    createLeafBySplit(leaf: WorkspaceLeaf, direction?: SplitDirection, before?: boolean): WorkspaceLeaf;
    /**
     * @public
     */
    splitActiveLeaf(direction?: SplitDirection): WorkspaceLeaf;
    /**
     * @public
     */
    splitLeafOrActive(leaf?: WorkspaceLeaf, direction?: SplitDirection): WorkspaceLeaf;
    /**
     * @public
     */
    duplicateLeaf(leaf: WorkspaceLeaf, direction?: SplitDirection): Promise<void>;
    /**
     * @public
     */
    getUnpinnedLeaf(type?: string): WorkspaceLeaf;
    /**
     * @public
     */
    getLeaf(newLeaf?: boolean): WorkspaceLeaf;
    /**
     * @public
     */
    openLinkText(linktext: string, sourcePath: string, newLeaf?: boolean, openViewState?: OpenViewState): Promise<void>;
    /**
     * Sets the active leaf
     * @param leaf - The new active leaf
     * @param pushHistory - Whether to push the navigation history, or replace the current navigation history.
     * @public
     */
    setActiveLeaf(leaf: WorkspaceLeaf, pushHistory?: boolean): void;

    /**
     * @public
     */
    getLeafById(id: string): WorkspaceLeaf;
    /**
     * @public
     */
    getGroupLeaves(group: string): WorkspaceLeaf[];
    /**
     * @public
     */
    getMostRecentLeaf(): WorkspaceLeaf;
    /**
     * @public
     */
    getLeftLeaf(shouldSplit: boolean): WorkspaceLeaf;
    /**
     * @public
     */
    getRightLeaf(shouldSplit: boolean): WorkspaceLeaf;
    
    /**
     * @public
     */
    getActiveViewOfType<T extends View>(type: Constructor<T>): T | null;
    /**
     * @public
     */
    getActiveFile(): TFile | null;

    /**
     * @public
     */
    iterateRootLeaves(callback: (leaf: WorkspaceLeaf) => any): void;
    /**
     * @public
     */
    iterateAllLeaves(callback: (leaf: WorkspaceLeaf) => any): void;
    /**
     * @public
     */
    getLeavesOfType(viewType: string): WorkspaceLeaf[];
    /**
     * @public
     */
    detachLeavesOfType(viewType: string): void;
    
    /**
     * @public
     */
    revealLeaf(leaf: WorkspaceLeaf): void;
    /**
     * @public
     */
    getLastOpenFiles(): string[];

    /**
     * @public
     */
    on(name: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'resize', callback: () => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'click', callback: () => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'file-open', callback: (file: TFile) => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'layout-ready', callback: () => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'css-change', callback: () => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;
    
}

/**
 * @public
 */
export abstract class WorkspaceItem extends Events {

}

/**
 * @public
 */
export class WorkspaceLeaf extends WorkspaceItem {

    /**
     * @public
     */
    view: View;

    /**
     * @public
     */
    openFile(file: TFile, openState?: OpenViewState): Promise<void>;
    /**
     * @public
     */
    open(view: View): Promise<View>;

    /**
     * @public
     */
    getViewState(): ViewState;
    /**
     * @public
     */
    setViewState(viewState: ViewState, eState?: any): Promise<void>;
    /**
     * @public
     */
    getEphemeralState(): any;
    /**
     * @public
     */
    setEphemeralState(state: any): void;
    
    /**
     * @public
     */
    togglePinned(): void;
    /**
     * @public
     */
    setPinned(pinned: boolean): void;
    /**
     * @public
     */
    setGroupMember(other: WorkspaceLeaf): void;
    /**
     * @public
     */
    setGroup(group: string): void;
    /**
     * @public
     */
    detach(): void;
    
    /**
     * @public
     */
    getIcon(): string;
    /**
     * @public
     */
    getDisplayText(): string;
    
    /**
     * @public
     */
    onResize(): void;

    /**
     * @public
     */
    on(name: 'pinned-change', callback: (pinned: boolean) => any, ctx?: any): EventRef;
    /**
     * @public
     */
    on(name: 'group-change', callback: (group: string) => any, ctx?: any): EventRef;
}

/**
 * @public
 */
export abstract class WorkspaceParent extends WorkspaceItem {

}

/**
 * @public
 */
export class WorkspaceRibbon {

}

/**
 * @public
 */
export class WorkspaceSidedock extends WorkspaceSplit {

}

/**
 * @public
 */
export class WorkspaceSplit extends WorkspaceParent {

}

/**
 * @public
 */
export class WorkspaceTabs extends WorkspaceParent {

}

export { }
