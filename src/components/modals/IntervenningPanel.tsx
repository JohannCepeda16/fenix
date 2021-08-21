import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import "./ModalView.scss";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createTheme";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from '@material-ui/icons/Person';
import Grid from "@material-ui/core/Grid/Grid";

export default function IntervenningPanel() {
  const [selected, setSelected] = useState("Selecciona el tipo de interviniente");
  const classes = useStyles();

  const handleSelect = (data: any) => {
    setSelected(data.target.value);
  };

  return (
    <div>
      <label style={{ marginTop: "20px", display: "block" }}>
        Intervinientes
      </label>
      <FormControl
        variant="filled"
        style={{ display: "block", marginTop: "20px" }}
      >
        <Select
          placeholder="Selecciona el tipo de interviniente"
          value={selected}
          displayEmpty
          onChange={(value) => handleSelect(value)}
          style={{ display: "block" }}
          renderValue={(value) => (
            <div style={{ display: "flex" }}>
              <PersonIcon />
              <span style={{ marginLeft:"10px", alignSelf: "center" }}> {value}</span>
            </div>
          )}
        >
          <MenuItem value="Veedor">Veedor</MenuItem>
          <MenuItem value="Ministerio Público">Ministerio Público</MenuItem>
        </Select>
      </FormControl>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          variant="filled"
          style={{
            alignSelf: "center",
            width: "48%",
            marginTop: "15px",
            marginRight: "auto",
          }}
          size="small"
          id="input-with-icon-textfield"
          placeholder="Nombre"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="filled"
          style={{
            alignSelf: "center",
            width: "48%",
            marginTop: "15px",
            marginLeft: "auto",
          }}
          size="small"
          id="input-with-icon-textfield"
          placeholder="Apellido"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          variant="filled"
          style={{
            alignSelf: "center",
            width: "48%",
            marginTop: "15px",
            marginRight: "auto",
          }}
          size="small"
          id="input-with-icon-textfield"
          placeholder="No de cédula"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RecentActorsIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="filled"
          style={{
            alignSelf: "center",
            width: "48%",
            marginTop: "15px",
            marginLeft: "auto",
          }}
          size="small"
          id="input-with-icon-textfield"
          placeholder="No de carnet"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RecentActorsIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
