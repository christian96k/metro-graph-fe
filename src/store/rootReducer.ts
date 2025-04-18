import { combineReducers } from '@reduxjs/toolkit';
import dashBoardReducer from '../pages/dashboard/store/dashboard.reducer';


// Root reducer for the store of the application
const rootReducer = combineReducers({
  dashboard: dashBoardReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
