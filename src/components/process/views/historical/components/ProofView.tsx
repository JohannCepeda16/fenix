import ProcessHeader from "../../../commons/ProcessHeader";
import { IPanelContainer } from "../../../types/Controller";
import "../../../styles/ProcessHeader.scss";
import Button from "@material-ui/core/Button";

export default function ProofView(props: IPanelContainer | any) {
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
        onClick={() => props.setCurrentPanel("addProof")}
      >
        Listar Pruebas
      </Button>
    </div>
  );
}
