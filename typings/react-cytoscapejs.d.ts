declare module "react-cytoscapejs" {
  import cytoscape, { NodeDataDefinition, EdgeDataDefinition } from "cytoscape";
  import { Stylesheet, LayoutOptions, ElementDefinition } from "cytoscape";
  import { FC, CSSProperties } from "react";

  type CytoscapeComponentProps = {
    id?: string;
    cy?: (cy: cytoscape.Core) => void;
    style?: CSSProperties;
    elements: ElementDefinition[];
    layout?: LayoutOptions;
    stylesheet?: Stylesheet | Stylesheet[] | string;
    className?: string;
    zoom?: number;
    pan?: Position;
    minZoom?: number;
    maxZoom?: number;
    zoomingEnabled?: boolean;
    userZoomingEnabled?: boolean;
    boxSelectionEnabled?: boolean;
    autoungrabify?: boolean;
    autounselectify?: boolean;
  };

  interface CytoscapeComponentInterface extends FC<CytoscapeComponentProps> {
    static normalizeElements(data: {
      nodes: ElementDefinition[];
      edges: ElementDefinition[];
    } | ElementDefinition[]): ElementDefinition[];
  }

  const CytoscapeComponent: CytoscapeComponentInterface;

  export = CytoscapeComponent;
}
