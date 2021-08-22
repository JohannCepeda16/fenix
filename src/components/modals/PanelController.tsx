import { Grid } from "@material-ui/core";
import StartProcess from "./StartProcess";
import { IPanelContainer } from "./types/Controller";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import "./ModalView.scss";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import IntervenningPanel from "./IntervenningPanel";
import Button from "@material-ui/core/Button";
import AttorneyPanel from "./AttorneyPanel";
import { Star } from "@material-ui/icons";
import EndProcess from "./EndProcess";

export default function ModalContainer(props: IPanelContainer) {
  const infringement = props.infringement;
  const setModalVisible = props.setModalVisible;
  const [step, setStep] = useState(0);

  const continueAction = () => {
    console.log(infringement.type);
    if (step >= 0 && step < 2) {
      setStep(step + 1);
    } else if (step == 2) {
      startProcess();
    }
  };

  const cancelAction = () => {
    props.setModalVisible(false);
  };

  const startProcess = () => {
    setStep(0);
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
            style={{marginBottom:"20px"}}
          >
            {step == 1 ? (
              <div style={{}}>
                <IconButton
                  style={{
                    position: "absolute",
                    padding: 0,
                    marginLeft: "-30px",
                  }}
                  onClick={() => setStep(step - 1)}
                >
                  <KeyboardBackspace />
                </IconButton>

                <label style={{ marginLeft: "2px", fontSize: "1.1rem" }}>
                  <strong>Iniciar proceso</strong>
                </label>
              </div>
            ) : (
              <label style={{ fontSize: "1.1rem" }}>
                <strong>Iniciar proceso</strong>
              </label>
            )}
            <div>
              <label style={{ display: "block" }}>No. de comparendo</label>
              <label className="Modal-infringement-id">{infringement.id}</label>
            </div>
          </Grid>
          {/**Primer popUp al ejecutar la accion */}
          {step == 0 && (
            <StartProcess
              infringement={infringement}
              setInfringement={props.setInfringement}
              setStep={setStep}
              setModalVisible={setModalVisible}
            />
          )}
          {/** Segundo popUp al continuar con el proceso && NO APODERADO */}
          {step == 1 && infringement.type == "intervenning" && (
            <IntervenningPanel />
          )}
          {/** Segundo popUp al continuar con el proceso && APODERADO */}
          {step == 1 && infringement.type == "attorney" && (
            <AttorneyPanel
              setInfringement={props.setInfringement}
              infringement={infringement}
            />
          )}
          {/** Tercer popUp al terminar el proceso */}
          {step == 2 && (
            <EndProcess
              infringement={infringement}
              setInfringement={props.setInfringement}
            />
          )}

          <div style={{ float: "right", marginTop: "20px" }}>
            {step != 2 && (
              <Button
                variant="outlined"
                style={{
                  color: "#a9ba18",
                  borderColor: "#a9ba18",
                  margin: "10px",
                  paddingLeft:'40px',
                  paddingRight:"40px"
                }}
                onClick={() => cancelAction()}
              >
                Cancelar
              </Button>
            )}
            <Button
              variant="contained"
              style={{
                color: "black",
                backgroundColor: "#a9ba18",
                margin: "10px",
                paddingLeft:'40px',
                paddingRight:"40px",
              }}
              onClick={() => continueAction()}
            >
              {step == 0 ? "Continuar" : step == 1 ? "Iniciar" : "Aceptar"}
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
