import ProcessHeader from "../../commons/ProcessHeader";
import { IPanelContainer } from "../../types/Controller";
import "../../styles/HistoricalController.scss";
import { useState } from "react";
import FreeVersionForm from "./components/FreeVersionForm";
import ProofView from "./components/ProofView";
import ProofList from "./components/ProofList";
import AddProof from "./components/AddProof";
import { useEffect } from "react";

export default function HistoricalController(props: IPanelContainer) {
  const [currentPanel, setCurrentPanel] = useState("proofs");
  const [proofList, setProofList] = useState([]);

  const addNewProof = (proof: never) => {
    console.log("adding...");
    console.log(proof);
    let currentProofs = proofList;
    currentProofs.push(proof);
    setProofList(currentProofs);
    setCurrentPanel("proofList");
  };

  useEffect(() => {
    console.log(proofList);
  }, [proofList]);

  return (
    <div className="Historical">
      {currentPanel !== "addProof" && (
        <ProcessHeader
          infringement={props.infringement}
          setInfringement={props.setInfringement}
        />
      )}

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
            setCurrentPanel={setCurrentPanel}
          />
        </div>
      )}
      {currentPanel === "addProof" && (
        <div className="Historical-panel">
          <AddProof addNewProof={addNewProof} />
        </div>
      )}

      {currentPanel === "proofList" && (
        <div className="Historical-panel">
          <ProofList proofList={proofList} />
        </div>
      )}
    </div>
  );
}
