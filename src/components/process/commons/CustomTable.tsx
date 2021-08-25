import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../styles/Forms.scss";
import { colors } from "../../../constants";

export interface ICustomTable {
  rows: any[];
  columns: any[];
  headerColor?: string;
  textColor?: string;
  fontSize?: number;
  label?: string;
}

export default function CustomTable(props: ICustomTable) {
  const rows = props.rows;
  const columns = props.columns;

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: props.headerColor ? props.headerColor : colors.disabled,
      color: props.textColor ? props.textColor : theme.palette.common.black,
    },
    body: {
      fontSize: props.fontSize ? props.fontSize : 14,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    style: {
      alignSelf: "center",
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: colors.light,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  const renderItem = (row: any) => {
    return (
      <StyledTableRow>
        {columns.map((column, i) => (
          <StyledTableCell key={i} align="center">
            {row[column.name]}
          </StyledTableCell>
        ))}
      </StyledTableRow>
    );
  };

  return (
    <div>
      <h4>{props.label || ""}</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <StyledTableCell key={i}>{column.label}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{rows.map((row, j) => renderItem(row))}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
