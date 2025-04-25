import { METRO_GRAPH_CONFIG } from "../../utils/metro-graph.config";
import { mapDataElements } from "../../utils/metro-graph.utils";
import CytoscapeComponent from "react-cytoscapejs";
import "./GraphMetro.scss";
import { useCallback, useRef, useState } from "react";
import { useDashboardFacade } from "../../pages/dashboard/store/dashboard.facade";
import cytoscape from 'cytoscape';
import { useShortestPath } from "../../hooks/useShortestPath";
import PathInfo from "../path-info/PathInfo";

function GraphMetro() {
    const cyGraph = useRef<cytoscape.Core | null>(null);
    const { graphMetro$, metroStop$, metroPath$, facadeSetMetroStop, facadeResetMetroStop } = useDashboardFacade();
    const [ pathInfo, setPathInfo ]  = useState<{ pathDistance: string, 
        duration:string, 
        from: {name: string, id:string, lineIds?: string[]}, 
        to: {name:string, id:string, lineIds?: string[]},
        stops: {name: string, id:string, lineIds?: string[], }[]}>({
        pathDistance: '',
        duration: '0',
        from: {name: '', id: '', lineIds: []},
        to: {name: '', id: '', lineIds: []},
        stops: [],
    });

    //#region calculate path
    useShortestPath({
        cy: cyGraph.current,
        metroPath: metroPath$,
        useEuclidean: true,
        onPathFound: (pathDistance, duration, from, to, stops) => {
            setPathInfo(
                {
                    pathDistance,
                    duration,
                    from,
                    to,
                    stops,
                }
            );
        },
    });
      
    //#endregion calculate path


    // #region handle node selection
    const onNodeClick = useCallback((event: cytoscape.EventObject) => {
        console.log("Node selected:", event.target.data('label'));
        if (cyGraph.current) {
            const selectedNode = cyGraph.current.$(`#${event.target.id()}`);
            if(selectedNode.hasClass('hidden-path')) return;
            
            cyGraph.current.animate({
                fit: { eles: selectedNode, padding: 50 },
                duration: 600,
                easing: 'ease-in-out',
            });
            if(graphMetro$){
                const activeMetroStop  = graphMetro$?.metro_stops.find((stop) => stop.stop_id === event.target.data('id'));
                if(activeMetroStop)
                    facadeSetMetroStop(activeMetroStop);
                
            } 
        }
    },[]);

    const onNodeHover = useCallback((event: cytoscape.EventObject) => {
        console.log("Node hovered:", event.target.data('label'));
    },[]);

    const onNodeHoverOut = useCallback((event: cytoscape.EventObject) => {
        console.log("Node hovered out:", event.target.data('label'));
    },[]);

    const onCanvasClick = useCallback((event: cytoscape.EventObject) => {
        if (!event.target || event.target === cyGraph.current) {
            console.log("Canvas clicked, no node selected.");
            if (metroStop$) {
                facadeResetMetroStop();
            }
        }
    }, [metroStop$]);

    const onMetroSnapShot = useCallback((fill:boolean) => {
        if (cyGraph.current) {
            try {
                const img = cyGraph.current.png({
                    full: fill,
                    scale: fill ? 0.5 : 1, 
                });
                const link = document.createElement('a');
                link.href = img;
                link.download = `graph_metro_${fill ? 'full' : 'visible'}.png`;
                link.click();
            } catch (error) {
                console.error('Errore durante il download del grafo:', error);
            }
        }
    }, [cyGraph]);

    const onGraphFitReset = useCallback(() => {
        if (cyGraph.current) {
            cyGraph.current.animate(
                {
                    fit: { eles: cyGraph.current.elements(), padding: 50 },
                    duration: 600,
                    easing: 'ease-in-out',
                }
            );
        }
    },[cyGraph]);


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

                    // cy.off('click', 'node');
                    // cy.on('click', 'node', onNodeClick);

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

            {pathInfo.pathDistance && !metroStop$ &&
                <div className="graph-metro__distance-path w-100 position-absolute d-flex justify-content-center align-items-center">
                    <PathInfo distance={pathInfo.pathDistance} duration={pathInfo.duration} stops={pathInfo.stops} from={pathInfo.from} to={pathInfo.to} />
                </div>
            }

            <div className="graph-metro__tools position-absolute d-flex flex-column gap-3 align-items-center">
                <i role="button" className="icon-gallery text-white font-size-22 d-flex justify-content-center align-items-center cursor-pointer" onClick={()=>onMetroSnapShot(false)}></i>
                <i role="button" className="icon-deep-dive text-white font-size-22 d-flex justify-content-center align-items-center cursor-pointer" onClick={()=>onGraphFitReset()}></i>
            </div>

        </section>
    )
}

export default GraphMetro