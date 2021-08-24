import StartProcess from "./components/StartProcess";
import { IPanelContainer } from "../../types/Controller";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import "../../styles/ModalView.scss";
import GeneralLaws from "./components/GeneralLaws";
import { colors } from "../../../../constants";

export default function PanelController(props: IPanelContainer) {
  const infringement = props.infringement;
  const setModalVisible = props.setModalVisible;
  const [step, setStep] = useState(0);

  const continueAction = () => {
    props.setInfringement({ ...infringement, status: "Iniciado" });
    alert("Proceso iniciado. Debe redireccionar al historico");
  };

  const cancelAction = () => {
    props.setModalVisible(false);
  };

  if (props.visibile) {
    return (
      <div className="Modal-container">
        <StartProcess
          infringement={infringement}
          setInfringement={props.setInfringement}
        />

        <GeneralLaws
          infringement={infringement}
          setInfringement={props.setInfringement}
        />

        <div style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            style={{
              color: "black",
              backgroundColor: colors.primary,
              marginTop: "10px",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
            onClick={() => continueAction()}
          >
            Iniciar
          </Button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
