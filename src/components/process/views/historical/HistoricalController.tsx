import ProcessHeader from "../../commons/ProcessHeader";
import { IPanelContainer } from "../../types/Controller";
import "../../styles/HistoricalController.scss";
import { useState } from "react";
import FreeVersionForm from "./components/FreeVersionForm";
import ProofView from "./components/ProofView";
import ProofList from "./components/ProofList";

export default function HistoricalController(props: IPanelContainer) {
  const [currentPanel, setCurrentPanel] = useState("proofList");
  const [proofList, setProofList] = useState([]);

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
        <div className="Historical-panel">
          <ProofView
            infringement={props.infringement}
            setInfringement={props.setInfringement}
          />
        </div>
      )}

      {currentPanel === "proofList" && (
        <div className="Historical-panel">
          <ProofList proofList={proofList}/>
        </div>
      )}
    </div>
  );
}
