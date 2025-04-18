import { MetroStop } from "../../models/metro-data.model";
import "./Panel.scss";

export interface PanelProps {
    data: MetroStop | null;
}


const Panel: React.FC<PanelProps> = ({ data }) => {
    return (
        <section className="panel">
            <div className="panel__header">
                <h3>{data?.stop_name}</h3>
            </div>

            <div className="panel__body">
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>

            <div className="panel__footer">
                <h3>{'Footer'}</h3>
            </div>

        </section>
    )
}

export default Panel