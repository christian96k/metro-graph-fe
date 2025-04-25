import { MetroData, MetroStop } from "../../../models/metro-data.model";

export interface DashboardState {
    graph: MetroData | null;
    metroStop: MetroStop | null;
    metroPath: MetroPath | null;
}

export interface MetroPath {
    from : {name: string, id: string, lineIds?: string[]}
    to : {name: string, id: string, lineIds?: string[]}
}