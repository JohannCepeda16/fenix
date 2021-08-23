import PanelContainer from "./components/process/PanelController";
import "./App.css";
import { useState } from "react";
import GeneralLaws from "./components/GeneralLaws";
import FreeVersionForm from "./components/forms/FreeVersionForm";

function App() {
  const infringementInitialState = {
    id: 1111000003415685,
    name: "Diego Armando Valencia Gallego",
    schedulingDate: "12 Ago, 2021",
    time: "12:30 pm",
    cubicleNumber: 50,
    shiftNumber: 550,
    type: "intervenning",
    processNumber:"202108-123",
    status: "NO INICIADO"
  };

  const [infringement, setInfringement] = useState(infringementInitialState);

  //Debe ser accionado cuando se inicie el proceso
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <div className="App">
      <h1>Header</h1>
      {
        false &&
        <PanelContainer
          infringement={infringement}
          setInfringement={setInfringement}
          visibile={modalVisible}
          setModalVisible={setModalVisible}
        />
      }
      {
        false &&
        <GeneralLaws infringement={infringement} setInfringement={setInfringement}/>
      }
      {
        <FreeVersionForm />
      }
    </div>
  );
}

export default App;
