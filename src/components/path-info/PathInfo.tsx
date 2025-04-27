import { useCallback } from "react";
import { useDashboardFacade } from "../../pages/dashboard/store/dashboard.facade";
import "./PathInfo.scss";
import { IMAGES_PATH } from '../../core/constants/images.path';


export interface PathInfoProps {
    distance: string;
    duration?: string;
    from?: { name: string; id: string, lineIds?: string[] };
    to?: { name: string; id: string, lineIds?: string[] };
    stops: {name: string; id: string, lineIds?: string[] }[];
}

function PathInfo( { distance, duration, stops, from, to }: PathInfoProps) {
    const { facadeSetMetroStop, graphMetro$ } = useDashboardFacade();


    const onViewMetroStop = useCallback((stopId: string) => {
        if (graphMetro$) {
            const activeMetroStop = graphMetro$?.metro_stops.find((stop) => stop.stop_id === stopId);
            if (activeMetroStop) {
                facadeSetMetroStop(activeMetroStop);
            }
        }
    }, [graphMetro$?.metro_stops]); 

    return (
        <footer className="path-info box-shadow-top bg-black-gradient row align-items-center p-2 position-relative">


            <div className="path-info__stops col-12 px-0">
                <ul className="list-unstyled d-flex p-2 gap-2 m-0 ">
                    {stops.map((stop, index) => (
                        <li key={index} style={{minWidth:'4rem'}} className={`path-info__stops__item position-relative gap-3 align-items-center d-flex`}>

                            <div className="d-flex flex-column text-white">

                                <span className={`font-size-10 cursor-pointer ${from?.id === stop.id || to?.id === stop.id  ? 'fw-bolder' : ''} `} 
                                    onClick={()=>onViewMetroStop(stop.id)}>  
                                        {stop.name.replace(/\s*\(.*?\)\s*/g, '').trim()}
                                </span>
                                <div className="d-flex gap-1">
                                    {stop.lineIds?.map((lineId, index )=>
                                        // <div className={`line-separator ${lineId}`}  key={lineId+index}></div>
                                        <img key={index} className={`path-info__stops__item__line xs-img my-1 ${lineId}`} src={IMAGES_PATH[lineId as keyof typeof IMAGES_PATH]} alt={lineId} />
                                    )}

                                </div>

                            </div>
                            {index !== stops.length - 1 && <i className="icon-next text-white"></i>}

                        </li>
                    ))}
                </ul>
            </div>

            <div className="path-info__box d-flex justify-content-between position-absolute">

                <div className="path-info__distance">
                    <p className="font-size-14 mb-0">{distance} {'km'}</p>
                </div>
                <div className="path-info__duration">
                    <p className="font-size-14 mb-0">{duration} {'min'}</p>
                </div>

            </div>


        </footer>
    )
}

export default PathInfo