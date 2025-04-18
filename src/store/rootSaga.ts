import { all } from 'redux-saga/effects';
import dashboardSaga from '../pages/dashboard/store/dashboard.saga';

export default function* rootSaga() {
  yield all([
    dashboardSaga()
  ]);
}
