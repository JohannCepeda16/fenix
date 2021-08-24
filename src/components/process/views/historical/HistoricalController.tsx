import ProcessHeader from "../../commons/ProcessHeader";
import { IPanelContainer } from "../../types/Controller";
import "../../styles/HistoricalController.scss";
import { useState } from "react";
import FreeVersionForm from "./components/FreeVersionForm";
import ProofView from "./components/ProofView";

export default function HistoricalController(props: IPanelContainer) {
  const [currentPanel, setCurrentPanel] = useState("proofs");
  return (
    <div className="Historical">
      <ProcessHeader
        infringement={props.infringement}
        setInfringement={props.setInfringement}
      />

      {currentPanel === "freeVersion" && (
        <div className="Historical-panel">
          <FreeVersionForm />
        </div>
      )}

      {currentPanel === "proofs" && (
        <div>
          <ProofView
            infringement={props.infringement}
            setInfringement={props.setInfringement}
          />
        </div>
      )}
    </div>
  );
}
