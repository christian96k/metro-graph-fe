import { METRO_GRAPH_CONFIG } from "../../utils/metro-graph.config";
import { mapDataElements } from "../../utils/metro-graph.utils";
import CytoscapeComponent from "react-cytoscapejs";
import "./GraphMetro.scss";
import { useCallback, useRef } from "react";
import { useDashboardFacade } from "../../pages/dashboard/store/dashboard.facade";

function GraphMetro() {
    const cyGraph = useRef<cytoscape.Core | null>(null);
    const { graphMetro$, metroStop$, facadeSetMetroStop, facadeResetMetroStop } = useDashboardFacade();


    // #region handle node selection
    const onNodeClick = useCallback((event: cytoscape.EventObject) => {
        console.log("Node selected:", event.target.data('label'));
        if(graphMetro$){
            const activeMetroStop  = graphMetro$?.metro_stops.find((stop) => stop.stop_id === event.target.data('id'));
            if(activeMetroStop)
                facadeSetMetroStop(activeMetroStop);
        } 
    },[]);

    const onNodeHover = useCallback((event: cytoscape.EventObject) => {
        console.log("Node hovered:", event.target.data('label'));
    },[]);

    const onNodeHoverOut = useCallback((event: cytoscape.EventObject) => {
        console.log("Node hovered out:", event.target.data('label'));
    },[]);

    const onCanvasClick = useCallback((event: cytoscape.EventObject) => {
        console.log("Canvas clicked:", event.target.data('label'));
        if(metroStop$)
            facadeResetMetroStop();
    },[metroStop$]);
    // #endregion handle node selection


    return (
        <section className="graph-metro">
            <CytoscapeComponent 
                elements={mapDataElements(graphMetro$)}
                layout={METRO_GRAPH_CONFIG.LAYOUT}
                stylesheet={
                   METRO_GRAPH_CONFIG.STYLE_SHEET_ICON
                }
                style={{
                    width: METRO_GRAPH_CONFIG.VIEW.WIDTH,
                    height: METRO_GRAPH_CONFIG.VIEW.HEIGHT
                }}
                maxZoom={METRO_GRAPH_CONFIG.MAX_ZOOM}
                minZoom={METRO_GRAPH_CONFIG.MIN_ZOOM}
                autoungrabify={METRO_GRAPH_CONFIG.GRABIFY}
                cy={(cy)=>{
                    cyGraph.current = cy;

                    cy.off('click', 'node');
                    cy.on('click', 'node', onNodeClick);

                    cy.off("tap");
                    cy.on("tap", onCanvasClick);

                    cy.off('tapselect', 'node');
                    cy.on('tapselect', 'node', onNodeClick);

                    cy.off('mouseover', 'node');
                    cy.on('mouseover', 'node', onNodeHover);

                    cy.off('mouseout', 'node');
                    cy.on('mouseout', 'node', onNodeHoverOut);

                }}
            />
        </section>
    )
}

export default GraphMetro