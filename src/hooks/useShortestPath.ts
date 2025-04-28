import { useEffect, useRef } from "react";
import { Core, EdgeSingular } from "cytoscape";
import { haversineDistance } from "../utils/metro-graph.utils";
import { MetroPath } from "../pages/dashboard/models/dashboard.model";



export interface UseShortestPathOptions {
  cy: Core | null;
  metroPath: MetroPath | null;
  useEuclidean?: boolean;
  onPathFound?: (
        pathDistance: string, 
        duration:string, 
        from: {name: string, id: string, lineIds?: string[]}, 
        to: {name:string, id:string, lineIds?: string[]},
        stops: {name: string, id: string, lineIds?: string[]}[]
    ) => void;
}


export function useShortestPath({
  cy,
  metroPath,
  useEuclidean = false,
  onPathFound,
}: UseShortestPathOptions) {
  const prevMetroPathRef = useRef<MetroPath | null>(null);  

  useEffect(() => {
    if (!cy || !metroPath) return;

    if (prevMetroPathRef.current &&
        prevMetroPathRef.current.from.id === metroPath.from.id && 
        prevMetroPathRef.current.to.id === metroPath.to.id) {
      return; 
    }

    prevMetroPathRef.current = metroPath;

    const { from, to } = metroPath;
    const sourceNode = cy.getElementById(from.id);
    const targetNode = cy.getElementById(to.id);

    if (!sourceNode.nonempty() || !targetNode.nonempty()) {
      cy.elements().removeClass("hidden-path");
      const noHiddenNodes = cy.elements().not('.hidden-path'); 
      cy.animate({
        fit: {
          eles: noHiddenNodes,
          padding: 150, 
        },
        duration: 600, 
        easing: 'ease-in-out', 
      });
      onPathFound?.('', '0', from, to, []); 
      return;
    }

    // @ts-ignore edge mapped to euclidean distance
    const dijkstra = cy.elements().dijkstra(`#${from.id}`, (edge: EdgeSingular) => {
      if (useEuclidean) {
        const src = edge.source().position();
        const tgt = edge.target().position();
        const dx = src.x - tgt.x;
        const dy = src.y - tgt.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
      return 1; // Peso fisso
    });

    const path = dijkstra.pathTo(targetNode);

    cy.elements().addClass("hidden-path");
    path.removeClass("hidden-path");

    cy.animate({
      fit: {
        eles: path,
        padding: 50, 
      },
      duration: 600, 
      easing: 'ease-in-out', 
    });

    let totalDistance = 0;
    const stops: { name: string, id: string, lineIds: string[] }[] = [];

    path.nodes().forEach(node => {
      const name = node.data("label"); 
      const id = node.id();
      const lineIds = node.data("lineIds") || []; 
      stops.push({ name, id, lineIds});
    });

    path.edges().forEach(edge => {
      const src = edge.source();
      const tgt = edge.target();

      const lat1 = src.data("lat");
      const lon1 = src.data("lon");
      const lat2 = tgt.data("lat");
      const lon2 = tgt.data("lon");

      if (lat1 == null || lon1 == null || lat2 == null || lon2 == null) {
        console.warn('Missing coordinates for one or both nodes');
      }

      const distance = haversineDistance(lat1, lon1, lat2, lon2);
      totalDistance += distance;
    });

    const speed = 30; // Velocità media in km/h (puoi modificarla in base al tuo caso d'uso)
    const timeInHours = totalDistance / speed; // Tempo in ore
    const timeInMinutes = timeInHours * 60; // Tempo in minuti
    const formattedTime = formatTime(timeInMinutes);

    // 4. Passiamo le informazioni alla callback
    onPathFound?.(
      totalDistance.toFixed(2), // Distanza totale in km
      formattedTime, // Tempo formato (minuti)
      from, // Nodo di partenza
      to, // Nodo di arrivo
      stops // Fermate del percorso
    );

    onPathFound?.(
      totalDistance.toFixed(2),
      formattedTime, 
      from, 
      to, 
      stops 
    );
  }, [cy, metroPath, useEuclidean, onPathFound]);
}

  
function formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours}h ${mins}m`;
}