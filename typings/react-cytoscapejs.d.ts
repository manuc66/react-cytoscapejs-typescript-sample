declare module "react-cytoscapejs" {
  import cytoscape from "cytoscape";
  import {
    Stylesheet,
    LayoutOptions,
    ElementDefinition,
    ElementsDefinition
  } from "cytoscape";
  import { FC, Component, CSSProperties } from "react";

  type CytoscapeComponentProps = {
    id?: string;
    key?: string;
    cy?: (cy: cytoscape.Core) => void;
    style?: CSSProperties;
    elements: ElementDefinition[];
    layout?: LayoutOptions;
    stylesheet?: Stylesheet | Stylesheet[] | string;
    className?: string;
  };

  const CytoscapeComponent: FC<CytoscapeComponentProps>;

  export = CytoscapeComponent;
}
