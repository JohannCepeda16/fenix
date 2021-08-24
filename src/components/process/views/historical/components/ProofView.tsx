import ProcessHeader from "../../../commons/ProcessHeader";
import { IPanelContainer } from "../../../types/Controller";
import "../../../styles/ProcessHeader.scss";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import AddProofModal from "./AddProofModal";

export default function ProofView(props: IPanelContainer) {
  const [modalVisible, setModalVisible] = useState(false);

  const addNewProof = () => {
    setModalVisible(false);
    alert("Deberia redireccionar al screen de pruebas");
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
        onClick={() => setModalVisible(true)}
      >
        Listar Pruebas
      </Button>
      {modalVisible && (
        <AddProofModal
          setModalVisible={setModalVisible}
          addNewProof={addNewProof}
        />
      )}
    </div>
  );
}
