import cytoscape from "cytoscape";
import { getEdgeColor, getLineShape, getNodeBgColor, NODE_COLORS } from './metro-graph.utils';
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
                'background-color': () =>{
                    return '#000000'

                },
                'width': '35px',
                'height': '35px',
                'border-width': '10px',
                'border-color': (cy: cytoscape.NodeSingular) =>{
                    return getNodeBgColor(cy.data('lineType'))
                },
                'color': '#fff',
                'font-size': '16px',
                // @ts-ignore
                "shape": (cy: cytoscape.NodeSingular) => {
                    return getLineShape(cy.data('lineType') )
                }
                
            }
        },
        {
            selector: 'edge',
            css: {
                'width': "20px",
                'line-color': (cy: cytoscape.EdgeSingular) =>{
                    return getEdgeColor(cy.data('lineId'))
                },
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'none',
                'line-cap': 'round',
                'curve-style': 'bezier',
                'opacity': 0.7,
                'line-dash-pattern': [0, 0],              
            }
        },
        // hidden path
        {
            selector: '.hidden-path',
            css: {
             
              'transition-property': 'background-color, line-color',
              'transition-duration': 0.5,
              'opacity': 0.1,
            }
        },
        // selected node
        {
            selector: '.selected',
            css: {
                'background-color': NODE_COLORS.SELECTED.LIGHT,
                'border-color': NODE_COLORS.SELECTED.DARK,
                'border-width': '6px',
                'z-index': 10,
                'color': NODE_COLORS.SELECTED.DARK,
            }
        }, 

    ],
    VIEW:{
        WIDTH:"100%",
        HEIGHT:"100vh"
    },
    WHEEL_SENSITIVITY: 0.1,
    MIN_ZOOM: 0.03,
    MAX_ZOOM: 2,
    GRABIFY: true
}