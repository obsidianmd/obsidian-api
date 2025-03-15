
/**
 * A color used to encode color data for nodes and edges
 * can be a number (like '1') representing one of the (currently 6) supported colors.
 * or can be a custom color using the hex format '#FFFFFFF'.
 *
 * @public
 */
export type CanvasColor = string;

/**
 * The overall canvas file's JSON.
 *
 * @public
 */
export interface CanvasData {
    /**
     * The nodes in the canvas.
     *
     * @public
     */
    nodes: AllCanvasNodeData[];
    /**
     * The edges in the canvas.
     *
     * @public
     */
    edges: CanvasEdgeData[];

    /**
     * Support arbitrary keys for forward compatibility.
     *
     * @public
     */
    [key: string]: any;
}

/**
 * A node.
 *
 * @public
 */
export interface CanvasNodeData {
    /**
     * The unique ID for this node.
     *
     * @public
     */
    id: string;
    /**
     * The x position of the node.
     *
     * @public
     */
    x: number;
    /**
     * The y position of the node.
     *
     * @public
     */
    y: number;
    /**
     * The width of the node.
     *
     * @public
     */
    width: number;
    /**
     * The height of the node.
     *
     * @public
     */
    height: number;
    /**
     * The color of this node.
     *
     * @public
     */
    color?: CanvasColor;

    /**
     * Support arbitrary keys for forward compatibility.
     *
     * @public
     */
    [key: string]: any;
}

/**
 * Type of possible canvas node data.
 *
 * @public
 */
export type AllCanvasNodeData = CanvasFileData | CanvasTextData | CanvasLinkData | CanvasGroupData;

/**
 * A node that is a file, where the file is located somewhere in the vault.
 *
 * @public
 */
export interface CanvasFileData extends CanvasNodeData {
    /**
     * The type of the node.
     *
     * @public
     */
    type: 'file';
    /**
     * The file path.
     *
     * @public
     */
    file: string;
    /**
     * An optional subpath which links to a heading or a block. Always starts with a `#`.
     *
     * @public
     */
    subpath?: string;
}

/**
 * A node that is plaintext.
 *
 * @public
 */
export interface CanvasTextData extends CanvasNodeData {
    /**
     * The type of the node.
     *
     * @public
     */
    type: 'text';
    /**
     * The text content of the node.
     *
     * @public
     */
    text: string;
}

/**
 * A node that is an external resource.
 *
 * @public
 */
export interface CanvasLinkData extends CanvasNodeData {
    /**
     * The type of the node.
     *
     * @public
     */
    type: 'link';
    /**
     * The URL of the node.
     *
     * @public
     */
    url: string;
}

/**
 * The background image rendering style
 *
 * @public
 */
export type BackgroundStyle = 'cover' | 'ratio' | 'repeat';

/**
 * A node that represents a group.
 *
 * @public
 */
export interface CanvasGroupData extends CanvasNodeData {
    /**
     * The type of the node.
     *
     * @public
     */
    type: 'group';
    /**
     * Optional label to display on top of the group.
     *
     * @public
     */
    label?: string;
    /**
     * Optional background image, stores the path to the image file in the vault.
     *
     * @public
     */
    background?: string;
    /**
     * Optional background image rendering style; defaults to 'cover'.
     *
     * @public
     */
    backgroundStyle?: BackgroundStyle;
}

/**
 * The side of the node that a connection is connected to
 *
 * @public
 */
export type NodeSide = 'top' | 'right' | 'bottom' | 'left';

/**
 * What to display at the end of an edge
 *
 * @public
 */
export type EdgeEnd = 'none' | 'arrow';

/**
 *  An edge
 *
 * @public
 */
export interface CanvasEdgeData {
    /**
     * The unique ID for this edge
     *
     * @public
     */
    id: string;
    /**
     * The node ID and side where this edge starts
     *
     * @public
     */
    fromNode: string;
    /**
     * The side where this edge starts
     *
     * @public
     */
    fromSide?: NodeSide;
    /**
     * The starting edge end; defaults to 'none'
     *
     * @public
     */
    fromEnd?: EdgeEnd;
    /**
     * The node ID and side where this edge ends
     *
     * @public
     */
    toNode: string;
    /**
     * The side where this edge ends
     *
     * @public
     */
    toSide?: NodeSide;
    /**
     * The ending edge end; defaults to 'arrow'
     *
     * @public
     */
    toEnd?: EdgeEnd;
    /**
     * The text label of this edge, if available
     *
     * @public
     */
    label?: string;
    /**
     * Support arbitrary keys for forward compatibility
     *
     * @public
     */
    [key: string]: any;
}
