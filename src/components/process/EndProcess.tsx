import { IPanelContainer } from "./types/Controller";
import { withStyles } from "@material-ui/core/styles";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./ModalView.scss";

export default function EndProcess(props: IPanelContainer & any) {
  const infringement = props.infringement;
  const setInfringement = props.setInfringement;
  const handleCheckBox = (id: string) => {
    setInfringement({ ...infringement, type: id });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <label
          style={{
            fontSize: "1rem",
            alignSelf: "center",
          }}
        >
          <strong>{infringement.name}</strong>
        </label>
      </div>
      <div>
        <div className="Modal-item">
          <label className="Modal-item-label">
            <strong>Fecha de agendamiento:</strong>
            {infringement.schedulingDate}
          </label>
        </div>
        <div className="Modal-item">
          <label className="Modal-item-label">
            <strong>Hora:</strong> {infringement.time}
          </label>
        </div>
        <div className="Modal-item">
          <label className="Modal-item-label">
            <strong>No. cubículo:</strong> {infringement.cubicleNumber}
          </label>
        </div>
        <div className="Modal-item">
          <label className="Modal-item-label">
            <strong>No. de turno:</strong> {infringement.shiftNumber}
          </label>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <FormControlLabel
          checked={infringement.type === "attorney" ? true : false}
          control={<GreenCheckbox size="small" name="attorney" />}
          label="Tiene apoderado?*"
          color="#6b6b6b"
          onChange={() => handleCheckBox("attorney")}
        />
        <FormControlLabel
          checked={infringement.type === "intervenning" ? true : false}
          control={<GreenCheckbox size="small" name="intervenning" />}
          label="Tiene intervinientes?*"
          color="#6b6b6b"
          onChange={() => handleCheckBox("intervenning")}
        />
      </div>
    </div>
  );
}

export const GreenCheckbox = withStyles({
  root: {
    color: "gray",
    "&$checked": {
      color: "#a9ba18",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
