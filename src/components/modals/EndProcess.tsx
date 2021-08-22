import { IPanelContainer } from "./types/Controller";

export default function EndProcess(props: IPanelContainer) {
  const infringement = props.infringement;
  return (
    <div>
      <div style={{ marginTop: "20px", display: "flex" }}>
        <label
          style={{
            fontSize: "1rem",
            alignSelf: "center",
          }}
        >
          <strong>{infringement.name}</strong>
        </label>
      </div>
      <div>
        <div style={{ marginLeft: "0px" }} className="Modal-item">
          <label className="Modal-item-label">
            <strong>Fecha de agendamiento:</strong>
            {infringement.schedulingDate}
          </label>
        </div>
      </div>
      <div style={{ marginLeft: "0px" }} className="Modal-item">
        <label className="Modal-item-label">
          <strong>Hora de inicio:</strong> {infringement.time}
        </label>
      </div>
      <div style={{ marginLeft: "0px" }} className="Modal-item">
        <label className="Modal-item-label">
          <strong>No. de proceso:</strong>
          <strong style={{ marginLeft: "2px", color: "#a9ba18" }}>
            {infringement.processNumber}
          </strong>
        </label>
      </div>
    </div>
  );
}
