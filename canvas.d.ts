
// A color used to encode color data for nodes and edges
// can be a number (like "1") representing one of the (currently 6) supported colors.
// or can be a custom color using the hex format "#FFFFFFF".
export type CanvasColor = string;

// The overall canvas file's JSON
export interface CanvasData {
    nodes: (CanvasFileData | CanvasTextData | CanvasLinkData)[];
    edges: CanvasEdgeData[];
}

// A node
export interface CanvasNodeData {
    // The unique ID for this node
    id: string;
    // The positional data
    x: number;
    y: number;
    width: number;
    height: number;
    // The color of this node
    color?: CanvasColor;
}

// A node that is a file, where the file is located somewhere in the vault.
export interface CanvasFileData extends CanvasNodeData {
    type: 'file';
    file: string;
}

// A node that is plaintext.
export interface CanvasTextData extends CanvasNodeData {
    type: 'text';
    text: string;
}

// A node that is an external resource.
export interface CanvasLinkData extends CanvasNodeData {
    type: 'link';
    url: string;
}

// The side of the node that a connection is connected to
export type NodeSide = 'top' | 'right' | 'bottom' | 'left';

// An edge
export interface CanvasEdgeData {
    // The unique ID for this edge
    id: string;
    // The node ID and side where this edge starts
    fromNode: string;
    fromSide: NodeSide;
    // The node ID and side where this edge ends
    toNode: string;
    toSide: NodeSide;
    // The color of this edge
    color?: CanvasColor;
    // The text label of this edge, if available
    label?: string;
}
