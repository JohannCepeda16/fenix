import AccountCircleSharp from "@material-ui/icons/AccountCircleSharp";
import DateRange from "@material-ui/icons/DateRange";
import ConfirmationNumberOutlined from "@material-ui/icons/ConfirmationNumberOutlined";
import EventSeat from "@material-ui/icons/EventSeat";
import Button from "@material-ui/core/Button";
import { IPanelContainer } from "./types/Controller";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./ModalView.scss";

export default function StartPanel(props: IPanelContainer & any) {
  const infringement = props.infringement;
  const setInfringement = props.setInfringement;
  const handleCheckBox = (id: string) => {
    console.log(id);
    setInfringement({ ...infringement, type: id });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <AccountCircleSharp style={{ alignSelf: "center", padding: "2px" }} />
        <label
          style={{
            fontSize: "1rem",
            marginLeft: "5px",
            alignSelf: "center",
          }}
        >
          <strong>{infringement.name}</strong>
        </label>
      </div>
      <div>
        <div className="Modal-item">
          <DateRange className="Modal-item-icon" fontSize="small" />
          <label className="Modal-item-label">
            <strong>Fecha de agendamiento:</strong>
            {infringement.schedulingDate}
          </label>
        </div>
        <div className="Modal-item">
          <DateRange className="Modal-item-icon" fontSize="small" />
          <label className="Modal-item-label">
            <strong>Hora:</strong> {infringement.time}
          </label>
        </div>
        <div className="Modal-item">
          <EventSeat className="Modal-item-icon" fontSize="small" />
          <label className="Modal-item-label">
            <strong>No. cubículo:</strong> {infringement.cubicleNumber}
          </label>
        </div>
        <div className="Modal-item">
          <ConfirmationNumberOutlined
            className="Modal-item-icon"
            fontSize="small"
          />
          <label className="Modal-item-label">
            <strong>No. de turno:</strong> {infringement.shiftNumber}
          </label>
        </div>
      </div>
      <div>
        <FormControlLabel
          checked={infringement.type == "attorney" ? true : false}
          control={<GreenCheckbox size="small" name="attorney" />}
          label="Tiene apoderado?*"
          color="#6b6b6b"
          onChange={() => handleCheckBox("attorney")}
        />
        <FormControlLabel
          checked={infringement.type == "intervenning" ? true : false}
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
