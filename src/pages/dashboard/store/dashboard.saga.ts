import { call, put, takeLatest } from "redux-saga/effects";
import { MetroData } from "../../../models/metro-data.model";
import { getGraphMetro, getGraphMetroSuccess } from "./dashboard.actions";
import DashboardService from "../services/dashboard.service";

// interface GraphActionData {
//   type: string;
//   payload: string;
// }

function* getMetroMapData(): Generator<unknown, void, MetroData> {
  try {
    const dashboardService = new DashboardService();
    const response: MetroData = yield call([
      dashboardService,
      dashboardService.getGraphMetro,
    ]);
    yield put(getGraphMetroSuccess(response));
  } catch (error) {
    console.error("Error while fetching data operations", error);
  }
}



export default function* dashboardSaga() {
  yield takeLatest(getGraphMetro.type, getMetroMapData);
 
}
