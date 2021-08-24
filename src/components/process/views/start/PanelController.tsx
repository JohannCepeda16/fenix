import { Grid } from "@material-ui/core";
import StartProcess from "./components/StartProcess";
import { IPanelContainer } from "../../types/Controller";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import "../../styles/ModalView.scss";
import GeneralLaws from "./components/GeneralLaws";
import { colors } from "../../../../constants";

export default function ModalContainer(props: IPanelContainer) {
  const infringement = props.infringement;
  const setModalVisible = props.setModalVisible;
  const [step, setStep] = useState(0);

  const continueAction = () => {
    props.setInfringement({ ...infringement, status: "Iniciado" });
    if (step >= 0 && step < 1) {
      setStep(step + 1);
    } else {
      alert("Redirecciona a la vista de todo el comparendo");
    }
  };

  const cancelAction = () => {
    props.setModalVisible(false);
  };

  if (props.visibile) {
    return (
      <div className="Modal-container">
        <div className="Modal">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: "20px" }}
          >
            <label style={{ fontSize: "1.1rem" }}>
              <strong>{step === 0 ? "Iniciar proceso" : "Encabezado"}</strong>
            </label>
            <div>
              <label style={{ display: "block" }}>No. de comparendo</label>
              <label className="Modal-infringement-id">{infringement.id}</label>
            </div>
          </Grid>

          {step === 0 && (
            <StartProcess
              infringement={infringement}
              setInfringement={props.setInfringement}
            />
          )}

          {step === 1 && (
            <GeneralLaws
              infringement={infringement}
              setInfringement={props.setInfringement}
            />
          )}

          <div style={{ float: "right", marginTop: "20px" }}>
            <Button
              variant="contained"
              style={{
                color: "black",
                backgroundColor: colors.primary,
                margin: "10px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              onClick={() => continueAction()}
            >
              {step === 0 ? "Aceptar" : "Guardar"}
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
