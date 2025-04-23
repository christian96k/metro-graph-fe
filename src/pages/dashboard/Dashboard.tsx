import { useEffect, useMemo, useRef } from "react";
import GraphMetro from "../../components/graph-metro/GraphMetro";
import "./Dashboard.scss";
import { useDashboardFacade } from './store/dashboard.facade';
import Loader from "../../components/loader/Loader";
import Panel from "../../components/panel/Panel";
import { IMAGES_PATH } from "../../core/constants/images.path";

function Dashboard() {

  const graphDataFetch = useRef<Boolean>(false);
  const { graphMetro$, metroStop$, facadeGetGraphMetro } = useDashboardFacade();
  const availableLines = useMemo(() => [IMAGES_PATH.MA, IMAGES_PATH.MB, IMAGES_PATH.MB1, IMAGES_PATH.MC], []);

  useEffect(() => {
    if (!graphDataFetch.current) {
      graphDataFetch.current = true;
      facadeGetGraphMetro();
    }
  },[])

  return (
    <section className="dashboard container-fluid row m-0 p-0">
      {/* HEADER */}
      <div className="dashboard__header position-absolute d-flex flex-column gap-2 w-50">
        {availableLines.map((line, index) =>
          <img key={index} className="img-fluid" src={line} alt="" />
        )}
      </div>  

      {/* GRAPH METRO */}
      <div className={`dashboard__graph col-12 ${metroStop$ ? 'col-sm-9 ' : ''} px-0`}>
        {graphMetro$ ? 
          <GraphMetro/> : <Loader/> 
        }
      </div>

      {/* PANEL */}
      {metroStop$ && 
        <div className={`dashboard__panel col-12 col-sm-3 p-0`}>
          <Panel data={metroStop$}/>
        </div>
      }
    </section>
  )
}

export default Dashboard