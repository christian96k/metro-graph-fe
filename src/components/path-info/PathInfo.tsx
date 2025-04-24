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
    <footer className="path-info bg-white box-shadow-top row align-items-center gap-2 p-2">


        <div className="path-info__stops col-12">
            <h6 className="mb-0">{'Fermate'}</h6>
            <ul className="list-unstyled d-flex ">
                {stops.map((stop, index) => (
                    <li key={index} className="path-info__stops__item d-flex justify-content-between align-items-center">
                        <span className="font-size-10">{stop.name}</span>
                        {/* <span className="font-size-12">{stop.id}</span> */}
                    </li>
                ))}
            </ul>
        </div>

        <div className="path-info__distance col-12 d-flex justify-content-between align-items-center">
            <h6 className="mb-0">{distance} {'km'}</h6>
            {/* <p className="font-size-12 text-muted">{duration ?? ''}</p> */}
            <div className="path-info__duration">
                <h6 className="mb-0">{duration} {'min'}</h6>
            </div>
        </div>

    </footer>
  )
}

export default PathInfo