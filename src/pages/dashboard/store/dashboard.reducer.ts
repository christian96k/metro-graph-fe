import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { DashboardState } from '../models/dashboard.model';
import { getGraphMetroSuccess, resetGraphMetroStop, resetMetroLine, resetMetroPath, searchMetroPath, setGraphMetroStop } from './dashboard.actions';

const initialState: DashboardState = {
  graph: null,
  metroStop: null,
  metroPath: null,
  metroLine: null
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


  // search metro path
  builder.addCase(searchMetroPath, (state, action) => {
    const involvedLines: string[] = state.graph?.metro_stops
      .filter((stop) => stop.stop_id === action.payload.from.id || stop.stop_id === action.payload.to.id)
      .flatMap((stop) => stop.line_ids) || [];
    return {
      ...state,
      metroPath: action.payload,
      metroLine: involvedLines,
    };
  });


  // reset metro path
  builder.addCase(resetMetroPath, (state) => {
    return{
      ...state,
      metroPath: {
        from: {name: '', id: '', lineIds: []},
        to: {name: '', id: '', lineIds: []},
      },
      metroStop: initialState.metroStop,
      metroLine: initialState.metroLine
    }
  });


  // reset metro stop active
  builder.addCase(resetGraphMetroStop, (state) => {
    return{ 
      ...state,
      metroStop: initialState.metroStop
    }
  });

  // reset metro line active
  builder.addCase(resetMetroLine, (state) => {
    return {
      ...state,
      metroLine: initialState.metroLine
    }
  });
  
});

export default dashBoardReducer;
