import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { DashboardState } from '../models/dashboard.model';
import { getGraphMetroSuccess, resetGraphMetroStop, setGraphMetroStop } from './dashboard.actions';

const initialState: DashboardState = {
  graph: null,
  metroStop: null
}

const dashBoardReducer: Reducer<DashboardState, PayloadAction<DashboardState>> = createReducer(initialState, (builder) => {
  
  // get metro data 
  builder.addCase(getGraphMetroSuccess, (state, action) => {
    return {
      ...state,
      graph: action.payload    
    };
  });

  // set metro stop active
  builder.addCase(setGraphMetroStop, (state, action) => {
    return {
      ...state,
      metroStop: action.payload
    };
  });


  // reset metro stop active
  builder.addCase(resetGraphMetroStop, (state) => {
    return{
      ...state,
      metroStop: initialState.metroStop
    }
  });
});

export default dashBoardReducer;
