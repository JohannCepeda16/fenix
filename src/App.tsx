import PanelContainer from "./components/process/views/start/PanelController";
import "./App.css";
import { useState } from "react";
import GeneralLaws from "./components/process/views/start/components/GeneralLaws";
import FreeVersionForm from "./components/process/views/historical/components/FreeVersionForm";
import ProofView from "./components/process/views/historical/components/ProofView";
import LoadProof from "./components/process/proofs/LoadProof";
import HistoricalController from "./components/process/views/historical/HistoricalController";

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
      {true && (
        <div>
          <h2 style={{marginLeft:"20px"}}>[iconos]</h2>
            <HistoricalController
              infringement={infringement}
              setInfringement={setInfringement}
            />
        </div>
      )}
      {false && (
        <GeneralLaws
          infringement={infringement}
          setInfringement={setInfringement}
        />
      )}
      {false && <FreeVersionForm />}
      {false && (
        <ProofView
          infringement={infringement}
          setInfringement={setInfringement}
        />
      )}
      {false && <LoadProof />}
    </div>
  );
}

export default App;
