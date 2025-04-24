import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { getGraphMetro, resetGraphMetroStop, resetMetroPath, searchMetroPath, setGraphMetroStop } from "./dashboard.actions";
import { MetroStop } from "../../../models/metro-data.model";
import { MetroPath } from "../models/dashboard.model";



export function useDashboardFacade() {
  const dispatch = useDispatch();
  const graphMetro$ = useSelector((state: RootState) => state.dashboard.graph);
  const metroStop$ = useSelector((state: RootState) => state.dashboard.metroStop);
  const metroPath$ = useSelector((state: RootState) => state.dashboard.metroPath);


  
  
  const facadeGetGraphMetro = () => {
    dispatch(getGraphMetro());
  } 
  
  const facadeSetMetroStop = (metroStop:MetroStop) => {
    dispatch(setGraphMetroStop(metroStop));
  }

  const facadeSearchMetroPath = (metroPath:MetroPath) => {
    dispatch(searchMetroPath(metroPath));
  }

  const facadeResetMetroPath = () => {
    dispatch(resetMetroPath());
  }

  const facadeResetMetroStop = () => {
    dispatch(resetGraphMetroStop());
  }

  

  return {
    graphMetro$,
    metroStop$,
    metroPath$,
    facadeGetGraphMetro,
    facadeSetMetroStop,
    facadeSearchMetroPath,
    facadeResetMetroStop,
    facadeResetMetroPath,
  }
}
