import { DASHBOARD, VERSIONS } from "../../../core/constants/endpoints";
import BaseService from "../../../core/services/Base.service";
import { MetroData } from "../../../models/metro-data.model";
import { METRO_UNIQUE_DATA } from "../../../mocks/metro.mocks";

class DashboardService extends BaseService{
    constructor() {
        super(`${import.meta.env.VITE_API}/${VERSIONS.V1}`);
    }

    public getGraphMetro(): Promise<MetroData> {
        // TODO: api call
        
        return new Promise<MetroData>((resolve) => {
            setTimeout(() => {
                resolve(METRO_UNIQUE_DATA);
            }, 1000);
        });

        return this.apiClient
          .get<MetroData>(`${DASHBOARD.GET_METRO_DATA}`)
          .then((response) => response.data);
      }
}

export default DashboardService;