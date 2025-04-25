import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { getGraphMetro, resetGraphMetroStop, resetMetroLine, resetMetroPath, searchMetroPath, setGraphMetroStop, setMetroLine } from "./dashboard.actions";
import { MetroStop } from "../../../models/metro-data.model";
import { MetroPath } from "../models/dashboard.model";



export function useDashboardFacade() {
  const dispatch = useDispatch();
  const graphMetro$ = useSelector((state: RootState) => state.dashboard.graph);
  const metroStop$ = useSelector((state: RootState) => state.dashboard.metroStop);
  const metroPath$ = useSelector((state: RootState) => state.dashboard.metroPath);
  const metroLine$ = useSelector((state: RootState) => state.dashboard.metroLine); 

  
  
  const facadeGetGraphMetro = () => {
    dispatch(getGraphMetro());
  } 
  
  const facadeSetMetroStop = (metroStop:MetroStop) => {
    dispatch(setGraphMetroStop(metroStop));
  }

  const facadeSearchMetroPath = (metroPath:MetroPath) => {
    dispatch(searchMetroPath(metroPath));
  }

  const facadeSetMetroLine = (line: string) => {
    dispatch(setMetroLine(line));
  }

  const facadeResetMetroPath = () => {
    dispatch(resetMetroPath());
  }

  const facadeResetMetroStop = () => {
    dispatch(resetGraphMetroStop());
  }


  const facadeResetMetroLine = () =>{
    dispatch(resetMetroLine());
  }
  

  return {
    graphMetro$,
    metroStop$,
    metroPath$,
    metroLine$,
    facadeGetGraphMetro,
    facadeSetMetroStop,
    facadeSetMetroLine,
    facadeSearchMetroPath,
    facadeResetMetroStop,
    facadeResetMetroPath,
    facadeResetMetroLine
  }
}
