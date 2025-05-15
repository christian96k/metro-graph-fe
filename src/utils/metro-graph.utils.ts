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
            color: string,
            label?: string
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

            // Calcola distanza in km con haversineDistance
            const distKm = vincentyDistance(current.stop_lat, current.stop_lon, next.stop_lat, next.stop_lon);
            // Formatta la distanza in modo leggibile, es: "0.5 km"
            const distLabel = `${distKm.toFixed(2)} km`;
  
            const edgeId = `${current.stop_id}_${next.stop_id}_${line.id}`;
            edges.push({
                data: {
                    id: edgeId,
                    source: current.stop_id,
                    target: next.stop_id,
                    lineId: line.id,
                    color: line.color,
                    label: distLabel
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
        DARK: '#ffffff',
        LIGHT: '#eeeeee',
    },
    SELECTED: {
        DARK: '#fff700',     
        LIGHT: '#ffffff',  
    },
    WHITE: '#ffffff',
    BLACK: '#000000',
    GRAY: '#a3a3a3',
}

export function getNodeBgColor(lineType: string) {
    switch (lineType) {
        case 'A': 
            return NODE_COLORS.A.LIGHT; 
        case 'B': 
        case 'B1': 
            return NODE_COLORS.B.LIGHT; 
        case 'C': 
            return NODE_COLORS.C.LIGHT; 
        default:
            return NODE_COLORS.DEFAULT.LIGHT; 
    }
}


export function getLineShape(lineType: string) {
    switch (lineType) {
        case 'A': 
            return 'elipse'; 
        case 'B': 
        case 'B1': 
            return 'elipse'; 
        case 'C': 
            return 'elipse'; 
        default:
            return 'elipse'; 
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

export function vincentyDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (deg: number) => deg * Math.PI / 180;

    // Parametri ellissoide WGS-84
    const a = 6378137.0;          // semiasse maggiore in metri
    const f = 1 / 298.257223563;  // appiattimento
    const b = (1 - f) * a;

    const L = toRad(lon2 - lon1);
    const U1 = Math.atan((1 - f) * Math.tan(toRad(lat1)));
    const U2 = Math.atan((1 - f) * Math.tan(toRad(lat2)));

    let sinU1 = Math.sin(U1), cosU1 = Math.cos(U1);
    let sinU2 = Math.sin(U2), cosU2 = Math.cos(U2);

    let lambda = L;
    let lambdaP: number;
    let iterLimit = 100;

    let sinLambda: number, cosLambda: number;
    let sinSigma: number, cosSigma: number, sigma: number;
    let sinAlpha: number, cosSqAlpha: number;
    let cos2SigmaM: number;
    let C: number;

    do {
        sinLambda = Math.sin(lambda);
        cosLambda = Math.cos(lambda);
        sinSigma = Math.sqrt(
            (cosU2 * sinLambda) * (cosU2 * sinLambda) +
            (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) *
            (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda)
        );
        if (sinSigma === 0) return 0;  // coincident points

        cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
        sigma = Math.atan2(sinSigma, cosSigma);
        sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
        cosSqAlpha = 1 - sinAlpha * sinAlpha;
        cos2SigmaM = cosSqAlpha === 0 ? 0 : cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;

        C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        lambdaP = lambda;
        lambda = L + (1 - C) * f * sinAlpha *
            (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));

    } while (Math.abs(lambda - lambdaP) > 1e-12 && --iterLimit > 0);

    if (iterLimit === 0) {
        // formula non convergente
        return NaN;
    }

    const uSq = cosSqAlpha * (a * a - b * b) / (b * b);
    const A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    const B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    const deltaSigma = B * sinSigma * (
        cos2SigmaM + B / 4 * (
            cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
            B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)
        )
    );

    const s = b * A * (sigma - deltaSigma); // distanza in metri

    return s / 1000; // ritorna distanza in km
}
