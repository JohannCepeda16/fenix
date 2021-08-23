import PanelContainer from "./components/process/PanelController";
import "./App.css";
import { useState } from "react";
import GeneralLaws from "./components/GeneralLaws";
import FreeVersionForm from "./components/forms/FreeVersionForm";
import ProcessHeader from "./components/commons/ProcessHeader";
import ProofView from "./components/process/proofs/ProofView";

function App() {
  const infringementInitialState = {
    id: 1111000003415685,
    name: "Diego Armando Valencia Gallego",
    schedulingDate: "12 Ago, 2021",
    time: "12:30 pm",
    cubicleNumber: 50,
    shiftNumber: 550,
    type: "intervenning",
    processNumber: "202108-123",
    status: "NO INICIADO",
  };

  const [infringement, setInfringement] = useState(infringementInitialState);

  //Debe ser accionado cuando se inicie el proceso
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <div className="App">
      {false && (
        <PanelContainer
          infringement={infringement}
          setInfringement={setInfringement}
          visibile={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      {false && (
        <GeneralLaws
          infringement={infringement}
          setInfringement={setInfringement}
        />
      )}
      {false && <FreeVersionForm />}
      {
        <ProofView
          infringement={infringement}
          setInfringement={setInfringement}
        />
      }
    </div>
  );
}

export default App;
