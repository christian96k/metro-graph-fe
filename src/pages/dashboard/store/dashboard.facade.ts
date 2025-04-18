import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { getGraphMetro, setGraphMetroStop } from "./dashboard.actions";
import { MetroStop } from "../../../models/metro-data.model";



export function useDashboardFacade() {
  const dispatch = useDispatch();
  const graphMetro$ = useSelector((state: RootState) => state.dashboard.graph);
  const metroStop$ = useSelector((state: RootState) => state.dashboard.metroStop);

  
  
  const facadeGetGraphMetro = () => {
    dispatch(getGraphMetro());
  } 
  
  const facadeSetMetroStop = (metroStop:MetroStop) => {
    dispatch(setGraphMetroStop(metroStop));
  }

  return {
    graphMetro$,
    metroStop$,
    facadeGetGraphMetro,
    facadeSetMetroStop
  }
}
