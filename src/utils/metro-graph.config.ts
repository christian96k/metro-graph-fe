import cytoscape from "cytoscape";
import { getEdgeColor, getNodeBgColor } from "./metro-graph.utils";
export interface MetroGraphConfig {
    
    LAYOUT: cytoscape.LayoutOptions;
    STYLE_SHEET_ICON: cytoscape.StylesheetCSS[];

    VIEW: {
        WIDTH:string;
        HEIGHT:string;
    };

    WHEEL_SENSITIVITY: number;
    MIN_ZOOM: number;
    MAX_ZOOM: number;
    GRABIFY: boolean;
}

export const METRO_GRAPH_CONFIG: MetroGraphConfig = {
    LAYOUT: {
        name: 'preset',
        padding: 10,
        animate: true,
        animationDuration: 500,
        fit: true,
    },
    STYLE_SHEET_ICON: [
        {
            selector: 'node',
            css: {
                'label': 'data(label)',
                'background-color': (cy: cytoscape.NodeSingular) =>{
                    return getNodeBgColor(cy.data('lineType'))
                },
                'width': '35px',
                'height': '35px',
                'border-width': '2px',
                'border-color': 'white',
                'color': '#fff',
                'font-size': '16px'
            }
        },
        {
            selector: 'edge',
            css: {
                'width': "10px",
                'line-color': (cy: cytoscape.EdgeSingular) =>{
                    return getEdgeColor(cy.data('lineId'))
                },
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'none'
            }
        }
    ],
    VIEW:{
        WIDTH:"100%",
        HEIGHT:"100vh"
    },
    WHEEL_SENSITIVITY: 0.1,
    MIN_ZOOM: 0.1,
    MAX_ZOOM: 2,
    GRABIFY: true
}