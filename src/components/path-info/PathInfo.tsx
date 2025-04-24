import "./PathInfo.scss";


export interface PathInfoProps {
    distance: string;
    duration?: string;
    from?: { name: string; id: string };
    to?: { name: string; id: string };
    stops: {name: string; id: string}[];
}

function PathInfo( { distance, duration, stops }: PathInfoProps) {
  return (
    <footer className="path-info box-shadow-top row align-items-center p-2">


        <div className="path-info__stops col-12 px-0">
            <ul className="list-unstyled d-flex px-2 pt-3 pt-md-4 pb-1 gap-4 m-0">
                {stops.map((stop, index) => (
                    <li key={index} className="path-info__stops__item w-25 position-relative d-flex justify-content-between align-items-center d-flex diagonal-text">
                        <span className="font-size-8">  {stop.name.replace(/\s*\(.*?\)\s*/g, '').trim()}</span>
                        {/* <span className="font-size-12">{stop.id}</span> */}
                        <marker className="position-absolute">°</marker> 
                    </li>
                ))}
            </ul>
        </div>

        <div className="path-info__distance col-12  px-0 d-none justify-content-between align-items-center">
            <p className="mb-0">{distance} {'km'}</p>
            <div className="path-info__duration">
                <p className="mb-0">{duration} {'min'}</p>
            </div>
        </div>

    </footer>
  )
}

export default PathInfo