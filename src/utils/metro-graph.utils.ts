import { MetroData, MetroStop } from "../models/metro-data.model";

const SCALE = 30000;

function projectCoordinates(lat: number, lon: number) {
  return {
    x: lon * SCALE,
    y: -lat * SCALE
  };
}

export function mapDataElements(data: MetroData | null) {
    if (!data) return [];
    const nodes = data.metro_stops.map(stop => {
        const lineType = stop.line_ids.map(lineId => {
            if (lineId === 'MA') return 'A';
            if (lineId === 'MB') return 'B';
            if (lineId === 'MB1') return 'B1';
            if (lineId === 'MC') return 'C';
            return '';
        }).join(', '); 
        
        const pos = projectCoordinates(stop.stop_lat, stop.stop_lon);
        return {
            data: {
                id: stop.stop_id,
                label: stop.stop_name,
                lineIds: stop.line_ids,
                lineType: lineType,
                lat: stop.stop_lat,
                lon: stop.stop_lon,
            },
            position: pos,
        };
    });

    const edges:{
        data: {
            id: string,
            source: string,
            target: string,
            lineId: string,
            color: string
        }
    }[] = [];
  
    data.metro_lines.forEach(line => {
        const stopsOnLine = data.metro_stops
            .filter(stop => stop.line_ids.includes(line.id));
  
        if (stopsOnLine.length < 2) return;
  
        let current = stopsOnLine.find(s => s.stop_main) || stopsOnLine[0];
        const used = new Set<string>();
        used.add(current.stop_id);
  
        while (used.size < stopsOnLine.length) {
            const remaining = stopsOnLine.filter(s => !used.has(s.stop_id));
  
            if (!remaining.length) break;
  
            const next = remaining.reduce((closest, s) => {
                const d = distance(current, s);
                const dClosest = distance(current, closest);
                return d < dClosest ? s : closest;
            });
  
      
            const edgeId = `${current.stop_id}_${next.stop_id}_${line.id}`;
            edges.push({
                data: {
                    id: edgeId,
                    source: current.stop_id,
                    target: next.stop_id,
                    lineId: line.id,
                    color: line.color
                },
            });
  
            used.add(next.stop_id);
            current = next;
        }
    });
  
    return [...nodes, ...edges];
}


export const NODE_COLORS = {
    A: {
        DARK: '#ee872a',
        LIGHT: '#f36c21',
    },
    B: {
        DARK: '#076b9e',
        LIGHT: '#0071bb',
    }, 
    B1: {
        DARK: '#076b9e',
        LIGHT: '#0071bb',
    },
    C: {
        DARK: '#008751',
        LIGHT: '#008751',
    },
    DEFAULT: {
        DARK: '#bbbbbb',
        LIGHT: '#eeeeee',
    },
    WHITE: '#ffffff',
    BLACK: '#000000'
}   

export function getNodeBgColor(lineType: string) {
    switch (lineType) {
        case 'A': 
            return NODE_COLORS.A.DARK; 
        case 'B': 
        case 'B1': 
            return NODE_COLORS.B.DARK; 
        case 'C': 
            return NODE_COLORS.C.DARK; 
        default:
            return NODE_COLORS.DEFAULT.DARK; 
    }
}

export function getEdgeColor (lineId: string) {
    switch (lineId) {
        case 'MA': 
            return NODE_COLORS.A.LIGHT; 
        case 'MB':
            return NODE_COLORS.B.LIGHT; 
        case 'MB1': 
            return NODE_COLORS.B1.LIGHT; 
        case 'MC':
            return NODE_COLORS.C.LIGHT; 
        default:
            return NODE_COLORS.DEFAULT.LIGHT; 
    }
} 


function distance(a: { stop_lat: number; stop_lon: number }, b: { stop_lat: number; stop_lon: number }) {
    const R = 6371e3; 
    const toRadians = (degrees: number) => degrees * (Math.PI / 180);

    const lat1 = toRadians(a.stop_lat);
    const lat2 = toRadians(b.stop_lat);
    const deltaLat = toRadians(b.stop_lat - a.stop_lat);
    const deltaLon = toRadians(b.stop_lon - a.stop_lon);

    const haversine = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
                                        Math.cos(lat1) * Math.cos(lat2) *
                                        Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));

    return R * c; 
}


export function deduplicateMetroData(data: MetroData): MetroData {
    const seenStopNames = new Set<string>();
    const uniqueStops: MetroStop[] = [];
  
    for (const stop of data.metro_stops) {
      if (!seenStopNames.has(stop.stop_name)) {
        seenStopNames.add(stop.stop_name);
        uniqueStops.push(stop);
      }
    }
  
    return {
      metro_stops: uniqueStops,
      metro_lines: data.metro_lines, 
    };
}


export function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Raggio della Terra in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // Distanza in km
}