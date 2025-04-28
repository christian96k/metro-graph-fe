import { IMAGES_PATH } from "../../core/constants/images.path";
import { MetroStop } from "../../models/metro-data.model";
import Loader from "../loader/Loader";
import { isMobile, isTablet } from 'react-device-detect';

import "./Panel.scss";

export interface PanelProps {
    data: MetroStop | null;
    showOffcanvas: boolean; 
}

const Panel: React.FC<PanelProps> = ({ data, showOffcanvas }) => {
    return (
    <>
        <section className={`offcanvas p-0 fade  offcanvas-${isMobile || isTablet ? 'bottom h-75' : 'end h-100'} ${showOffcanvas ? 'show' : ''} panel text-white bg-black-gradient box-shadow-start d-flex flex-column justify-content-between  p-0`} 
            style={{ visibility: showOffcanvas ? 'visible' : 'hidden' }}
            id="offcanvasPanel"
        >
            <div className="offcanvas-body p-0">
                <section className="top">

                    {/* HEADER */}
                    <div className="panel__header d-flex justify-content-between align-items-center p-3">
                        {/* <i className={`cursor-pointer icon-angle-${isMobile || isTablet ? 'bttom' :'right'}`} onClick={()=>facadeResetMetroStop()}></i> */}

                        <h5 className="mb-0">{data?.stop_name}</h5>
                        <div className="w-25 d-flex justify-content-end align-items-center gap-1 ">
                            {data?.line_ids.map((lineId, index) => {
                                return (
                                    <img key={index} className={`panel__header__line border-black-4 xs-img ${lineId}`} src={IMAGES_PATH[lineId as keyof typeof IMAGES_PATH]} />
                                )
                            })}
                        </div>
                    </div>

                    {/* PHOTO */}
                    <div className="panel__photo p-3 p-md-3 text-center" style={{ position: 'relative' }}>
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
                    <div className="panel__body p-3 p-md-3">
                        <h5>{'Dettagli'}</h5>
                    

                        <div className="panel__body__item  d-flex flex-column my-2">
                            <p className="font-size-14 mb-0  bg-black-gradient p-2 color-black-5">{data?.stop_description ?? 'N/A'}</p>
                        </div>
                        {/* <pre>
                            {JSON.stringify(data, null, 2)}
                        </pre> */}
                    </div>
                </section>

                {/* FOOTER */}
                <div className="panel__footer p-3 p-md-3">
                    <h5 >{'Servizi'}</h5>
                    <div className="panel__body__item d-flex gap-2 my-2">
                        <img loading="lazy" className={`xs-img ${data?.wheelchair_boarding ? '' : 'disabled-element'}`} src={IMAGES_PATH.WCHAIR} alt="wheel chair" />
                        <img loading="lazy" className={`xs-img `} src={IMAGES_PATH.MTICKET}  alt="metro ticket" />
                    </div>
                    
                </div>
            </div>
        </section>
    </>
    )
}

export default Panel