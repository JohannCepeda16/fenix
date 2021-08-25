import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { IconButton } from "@material-ui/core";
import "../../../styles/Forms.scss";
import { useEffect, useState } from "react";
import CustomTable from "../../../commons/CustomTable";
import ThumbUp from "@material-ui/icons/ThumbUp";
import { PregnantWoman } from "@material-ui/icons";

export default function ProofList(props: any) {
  const data = props.proofList;
  const [columns, setColumns] = useState<any[]>([
    { name: "id", label: "Número" },
    { name: "name", label: "Nombre" },
    { name: "date", label: "Fecha" },
    { name: "description", label: "Descripción" },
    { name: "type", label: "Tipo" },
    { name: "proof", label: "Pruebas" },
    { name: "approve", label: "Decretar" },
    { name: "denie", label: "Denegar" },
  ]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    console.log(data);
    //Se envian los nombres en ingles
    //let finalColumns = columns.concat(Object.keys(data[0]));
    let rows: any = [];
    data.map((proof: any, i: number) => {
      proof["id"] = i + 1;
      proof["proof"] = (
        <IconButton onClick={() => alert("Hola")} className="Iconbutton">
          <PregnantWoman className="Table-icon" />
        </IconButton>
      );
      proof["approve"] = (
        <IconButton className="Table-icon">
          <ThumbUp className="Table-icon" />
        </IconButton>
      );
      proof["denie"] = (
        <IconButton className="Table-icon">
          <ThumbDownIcon className="Table-icon" />
        </IconButton>
      );
      rows.push(proof);
    });
    setRows(rows);
  }, []);

  return (
    <div>
      <CustomTable
        label="Decretar y practicar pruebas"
        rows={rows}
        columns={columns}
      />
    </div>
  );
}
