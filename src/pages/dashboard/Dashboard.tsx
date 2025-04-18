import { useEffect, useRef } from "react";
import GraphMetro from "../../components/graph-metro/GraphMetro";
import "./Dashboard.scss";
import { useDashboardFacade } from './store/dashboard.facade';
import Loader from "../../components/loader/Loader";
import Panel from "../../components/panel/Panel";

function Dashboard() {

  const graphDataFetch = useRef<Boolean>(false);
  const { graphMetro$, metroStop$, facadeGetGraphMetro } = useDashboardFacade();

  useEffect(() => {
    if (!graphDataFetch.current) {
      graphDataFetch.current = true;
      facadeGetGraphMetro();
    }
  },[])

  return (
    <section className="dashboard container-fluid row m-0 p-0">
      <div className="dashboard__graph col-12 col-md-10 px-0">
        {graphMetro$ ? 
          <GraphMetro/> : <Loader/> 
        }
      </div>
      <div className="dashboard__panel col-12 col-md-2">
        <Panel data={metroStop$}/>
      </div>
    </section>
  )
}

export default Dashboard