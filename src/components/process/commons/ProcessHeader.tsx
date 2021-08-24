import { IPanelContainer } from "../types/Controller";
import "../styles/ProcessHeader.scss";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { colors } from "../../../constants";
import Visibility from "@material-ui/icons/Visibility";

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
          <IconButton
            style={{ margin: "0px", padding: "0px" }}
            onClick={() => alert("Previsualizar acto")}
          >
            <Visibility
              style={{ margin: "0px", padding: "0px", color: colors.primary }}
            />
          </IconButton>
        </label>
        <label className="List-item">
          <strong>Infracción: </strong>
          [C35]
        </label>
      </div>
      <hr style={{ marginTop: "30px", marginBottom: "30px" }} color="#e3e3e3" />
    </div>
  );
}
