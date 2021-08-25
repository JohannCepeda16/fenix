import Subtitle from "../../../commons/Subtitle";
import { IPanelContainer } from "../../../types/Controller";
import CustomTable from "../../../commons/CustomTable";
import DescriptionIcon from "@material-ui/icons/Description";

export interface IHistory {
  inpugnments: any[];
}

export default function History(props: IHistory) {
  const inpugnments = props.inpugnments;

  const COLUMNS = [
    { label: "Número", name: "id" },
    { label: "Fecha inicial", name: "intialDate" },
    { label: "Fecha final", name: "endDate" },
    { label: "Estado", name: "status" },
    { label: "Responsable", name: "manager" },
    { label: "Consecutivo del acto", name: "consecutiveNumber" },
    { label: "Descargar acto", name: "downloadAction" },
  ];

  return (
    <div>
      <Subtitle label="Histórico de seguimiento" />
      <CustomTable rows={[]} columns={COLUMNS} />
    </div>
  );
}
