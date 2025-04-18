import { MetroData, MetroStop } from "../../../models/metro-data.model";

export interface DashboardState {
    graph: MetroData | null;
    metroStop: MetroStop | null;
}