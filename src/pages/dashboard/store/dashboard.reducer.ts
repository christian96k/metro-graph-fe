import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { DashboardState } from '../models/dashboard.model';
import { getGraphMetroSuccess, resetGraphMetroStop, resetMetroPath, searchMetroPath, setGraphMetroStop } from './dashboard.actions';

const initialState: DashboardState = {
  graph: null,
  metroStop: null,
  metroPath: null
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
    return {
      ...state,
      metroPath: action.payload
    };
  });

  // reset metro path
  builder.addCase(resetMetroPath, (state) => {
    return{
      ...state,
      metroPath: {
        from: {name: '', id: ''},
        to: {name: '', id: ''}
      },
      metroStop: initialState.metroStop
    }
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
