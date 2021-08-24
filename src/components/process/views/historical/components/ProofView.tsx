import ProcessHeader from "../../../commons/ProcessHeader";
import { IPanelContainer } from "../../../types/Controller";
import "../../../styles/ProcessHeader.scss";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ListProofs from "./ListProofs";

export default function ProofView(props: IPanelContainer) {
  const [modalVisible, setModalVisible] = useState(false);

  const addNewProof = () => {
    setModalVisible(true);
  };

  return (
    <div className="">
      <h4 className="Process-tittle">Decretar y practicar pruebas</h4>
      <label>Por ahora no has decretado ningún dato</label>
      <Button
        variant="contained"
        style={{
          color: "black",
          backgroundColor: "#bed000",
          marginTop: "30px",
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "block",
        }}
        onClick={() => addNewProof()}
      >
        Listar Pruebas
      </Button>
      {modalVisible && <ListProofs setModalVisible={setModalVisible} />}
    </div>
  );
}
