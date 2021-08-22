import React from "react";
import PanelContainer from "./components/modals/PanelController";
import "./App.css";
import { useState } from "react";

function App() {
  const infringementInitialState = {
    id: 1111000003415685,
    name: "Diego Armando Valencia Gallego",
    schedulingDate: "12 Ago, 2021",
    time: "12:30 pm",
    cubicleNumber: 50,
    shiftNumber: 550,
    type: "intervenning",
    processNumber:"202108-123"
  };

  const [infringement, setInfringement] = useState(infringementInitialState);

  //Debe ser accionado cuando se inicie el proceso
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <div className="App">
      <h1>Header</h1>
      <PanelContainer
        infringement={infringement}
        setInfringement={setInfringement}
        visibile={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
}

export default App;
