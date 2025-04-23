import { IMAGES_PATH } from "../../core/constants/images.path";
import { MetroStop } from "../../models/metro-data.model";
import Loader from "../loader/Loader";
import "./Panel.scss";

export interface PanelProps {
    data: MetroStop | null;
}

const Panel: React.FC<PanelProps> = ({ data }) => {

    return (
        <section className="panel d-flex flex-column justify-content-between h-100 p-2 p-md-3">

            <section className="top">

                {/* HEADER */}
                <div className="panel__header d-flex justify-content-between align-items-center">
                    <h4>{data?.stop_name}</h4>
                    {data?.line_ids.map((lineId, index) => {
                        return (
                            <img key={index} className={`panel__header__line xs-img ${lineId}`} src={IMAGES_PATH[lineId as keyof typeof IMAGES_PATH]} />
                        )
                    })}
                </div>

                {/* PHOTO */}
                <div className="panel__photo mt-2 mt-md-3 text-center" style={{ minHeight: '15rem', position: 'relative' }}>
                    <img
                        src={IMAGES_PATH[data?.stop_id as keyof typeof IMAGES_PATH]}
                        alt={data?.stop_name ?? 'station-image-metro'}
                        className="img-fluid fade-in"
                        loading="lazy"
                        onLoad={(e) => e.currentTarget.classList.add('loaded')}
                        onError={(e) => (e.currentTarget.src = 'https://picsum.photos/250')}
                    />
                    <div className="loader-overlay">
                        <Loader />
                    </div>
                </div>


                {/* BODY */}
                <div className="panel__body mt-2 mt-md-3">
                    <h5>{'Dettagli'}</h5>
                

                    <div className="panel__body__item d-flex flex-column my-2">
                        <p className="font-size-14 mb-0">{data?.stop_description ?? 'N/A'}</p>
                    </div>
                    {/* <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre> */}
                </div>
            </section>

            {/* FOOTER */}
            <div className="panel__footer mt-2 mt-md-3">
                <h5 >{'Servizi'}</h5>
                <div className="panel__body__item d-flex flex-column my-2">
                    <img className={`xs-img ${data?.wheelchair_boarding ? '' : 'disabled-element'}`} src={IMAGES_PATH.WCHAIR} alt="" />
                </div>
                
            </div>

        </section>
    )
}

export default Panel