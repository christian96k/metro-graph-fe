import { useEffect, useMemo, useRef, useState } from "react";
import GraphMetro from "../../components/graph-metro/GraphMetro";
import "./Dashboard.scss";
import { useDashboardFacade } from './store/dashboard.facade';
import Loader from "../../components/loader/Loader";
import Panel from "../../components/panel/Panel";
import { IMAGES_PATH } from "../../core/constants/images.path";
import Header from "../../components/header/Header";

function Dashboard() {

  const graphDataFetch = useRef<boolean>(false);
  const { graphMetro$, metroStop$, metroLine$, facadeGetGraphMetro } = useDashboardFacade();
  const availableLines = useMemo(() => [{name: 'MA',image:IMAGES_PATH.MA}, {name: 'MB',image:IMAGES_PATH.MB}, {name: 'MB1',image:IMAGES_PATH.MB1}, {name: 'MC',image:IMAGES_PATH.MC}], []);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    if (!graphDataFetch.current) {
      graphDataFetch.current = true;
      facadeGetGraphMetro();
    }
  },[])


  useEffect(() => {
    if (metroStop$) 
      setShowOffcanvas(true);  
    else 
      setShowOffcanvas(false); 
  }, [metroStop$]);

  return (
    <>
      <Header />
      <section className="dashboard container-fluid row m-0 p-0">
        {/* HEADER */}
        <div className="dashboard__header position-absolute d-flex flex-column gap-2 w-25">
          {availableLines.map((line, index) => (
            <img key={line.name + '-' + index} className={`img-fluid  ${metroLine$ && !metroLine$.includes(line.name) ? 'disabled-metro' : '' }  `} src={line.image} alt=""  />
          ))}
        </div>

        {/* GRAPH METRO */}
        <div className={`dashboard__graph col-12  px-0`}>
          {graphMetro$ ? <GraphMetro /> : <Loader />}
        </div>

        {/* PANEL - Offcanvas */}
        {metroStop$ && (
          <Panel showOffcanvas={showOffcanvas} data={metroStop$} />
        )}
      </section>
    </>
  );
}

export default Dashboard