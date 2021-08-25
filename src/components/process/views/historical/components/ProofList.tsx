import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { IconButton } from "@material-ui/core";
import "../../../styles/Forms.scss";
import { colors } from "../../../../../constants";
import { useEffect, useState } from "react";

export default function ProofList(props: any) {
  const data = props.proofList;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let localRows: any = [];
    data.map((item: any, i: number) => {
      localRows.push(
        createData(i + 1, item.name, item.date, item.description, item.type)
      );
    });
    setRows(localRows);
  }, [props.proofList]);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: colors.primary,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: colors.secondary,
      },
    },
  }))(TableRow);

  function createData(
    id: number,
    name: string,
    date: string,
    description: string,
    type: string
  ) {
    return { id, name, date, description, type };
  }

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <h4>Decretar y practicar pruebas</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Número</StyledTableCell>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Fecha</StyledTableCell>
              <StyledTableCell align="center">Descripción</StyledTableCell>
              <StyledTableCell align="center">Tipo</StyledTableCell>
              <StyledTableCell align="center">
                Practicar pruebas
              </StyledTableCell>
              <StyledTableCell align="center">Decretar</StyledTableCell>
              <StyledTableCell align="center">Negar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, j: number) => (
              <StyledTableRow key={j}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="center">{row.type}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton className="Table-icon">
                    <InsertDriveFileIcon
                      style={{
                        color: colors.primary,
                        alignSelf: "center",
                        display: "block",
                      }}
                    />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton className="Table-icon">
                    <ThumbUpIcon
                      style={{
                        color: colors.primary,
                        alignSelf: "center",
                        display: "block",
                      }}
                    />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton className="Table-icon">
                    <ThumbDownIcon
                      style={{
                        color: colors.primary,
                        alignSelf: "center",
                        display: "block",
                      }}
                    />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
