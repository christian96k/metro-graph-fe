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
        <footer className="path-info box-shadow-top  position-relative p-2">
            <div className="path-info__box d-flex flex-column justify-content-between pt-0 p-2">

                <div className="path-info__distance">
                    <p className="font-size-12 mb-0">{distance} {'km'}</p>
                </div>
                <div className="path-info__duration">
                    <p className="font-size-12 mb-0">{duration}</p>
                </div>

            </div>

            <div className="path-info__stops bg-black-gradient col-12 px-0">
            <ul className="list-unstyled p-2 m-0">
                {(() => {
                    let currentLineIds = from?.lineIds || []; 

                    return stops.map((stop, index) => {
                    const nextStop = stops[index + 1];
                    const nextStopData = graphMetro$?.metro_stops.find(s => s.stop_id === nextStop?.id);

                    const nextStopLineIds = nextStopData?.line_ids || [];

                    // Verifica se c'è un cambio rispetto alla linea corrente
                    const isTransfer = nextStop && !currentLineIds.some(lineId => nextStopLineIds.includes(lineId));

                    const li = (
                        <li
                        key={index}
                        className="path-info__stops__item position-relative gap-2 my-2 text-center d-flex flex-column justify-content-center align-items-center"
                        >
                        <div className="d-flex flex-column text-white">
                        
                            <span
                                className={`font-size-10 cursor-pointer ${
                                    from?.id === stop.id || to?.id === stop.id ? 'fw-bolder' : ''
                                }`}
                                onClick={() => onViewMetroStop(stop.id)}
                            >
                                {stop.name.replace(/\s*\(.*?\)\s*/g, '').trim()}
                            </span>

                            <div className="d-flex gap-1 justify-content-center">
                                {stop.lineIds?.map((lineId, i) => (
                                    <img
                                    key={i}
                                    className={`path-info__stops__item__line xs-img my-1 ${lineId}`}
                                    src={IMAGES_PATH[lineId as keyof typeof IMAGES_PATH]}
                                    alt={lineId}
                                    />
                                ))}
                            </div>
                            {isTransfer && stop.id !== from?.id &&  (
                                <div className="text-warning font-size-8 mt-1">
                                    Cambio da {currentLineIds.join(', ')} a {nextStopLineIds.join(', ')}
                                </div>
                            )}    
                        </div>

                        {index !== stops.length - 1 && (
                            <i className="icon-next font-size-14 text-white"></i>
                        )}
                        
                        </li>
                    );

                    if (isTransfer)
                        currentLineIds = nextStopLineIds;

                        return li;
                    });
                })()}
            </ul>


            </div>

           


        </footer>
    )
}

export default PathInfo