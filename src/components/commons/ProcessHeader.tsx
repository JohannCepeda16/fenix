import { IPanelContainer } from "../types/Controller";
import "./ProcessHeader.scss";

export default function ProcessHeader(props: IPanelContainer) {
  const infringement = props.infringement;

  return (
    <div className="">
      <h4 className="Proces-tittle">Propietario: {infringement.name}</h4>
      <div className="Item-container">
        <label className="List-item">
          <strong>Tipo doc: </strong>CC
        </label>
        <label className="List-item">
          <strong>No proceso: </strong>
          {infringement.processNumber}
        </label>
      </div>
      <div className="Item-container">
        <label className="List-item">
          <strong>No doc: </strong>
          {infringement.id}
        </label>
        <label className="List-item">
          <strong>Placa: </strong>
          [ASD123]
        </label>
      </div>
      <div className="Item-container">
        <label className="List-item">
          <strong>Previsualizar acto: </strong>
          [Icon button]
        </label>
        <label className="List-item">
          <strong>Infracción: </strong>
          [C35]
        </label>
      </div>
      <hr/>
    </div>
  );
}
