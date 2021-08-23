import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import "./ModalView.scss";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import Grid from "@material-ui/core/Grid/Grid";

export interface IInterviening {
  type: string;
  name: string;
  lastName: string;
  idCard: string;
  licenseNumber: string;
}

export default function IntervenningPanel() {
  const [selected, setSelected] = useState(
    "Selecciona el tipo de interviniente"
  );
  const initialStateInterviening = {
    type: "",
    name: "",
    lastName: "",
    idCard: "",
    licenseNumber: "",
  };
  const [interviening, setInterviening] = useState<IInterviening>(
    initialStateInterviening
  );
  const [intervienings, setIntervienings] = useState<IInterviening[]>([]);

  const handleSelect = (data: any) => {
    setSelected(data.target.value);
  };

  const handleData = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInterviening({ ...interviening, [e.target.name]: e.target.value });
  };

  const addInterviening = () => {
    if (!intervienings.includes(interviening)) {
      let currentIntervienings = intervienings;
      currentIntervienings.push(interviening);
      console.log(currentIntervienings);
      setInterviening(initialStateInterviening);
      setIntervienings(currentIntervienings);
    } else {
      console.log("Duplicated data");
    }
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
              <span style={{ marginLeft: "10px", alignSelf: "center" }}>
                {" "}
                {value}
              </span>
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
          name="name"
          value={interviening.name || ""}
          onChange={(e) => handleData(e)}
          style={{
            alignSelf: "center",
            width: "48%",
            marginTop: "15px",
            marginRight: "auto",
          }}
          size="small"
          id="nameField"
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
          name="lastName"
          value={interviening.lastName}
          onChange={(e) => handleData(e)}
          style={{
            alignSelf: "center",
            width: "48%",
            marginTop: "15px",
            marginLeft: "auto",
          }}
          size="small"
          id="lastNameField"
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
          name="idCard"
          value={interviening.idCard}
          onChange={(e) => handleData(e)}
          style={{
            alignSelf: "center",
            width: "48%",
            marginTop: "15px",
            marginRight: "auto",
          }}
          size="small"
          id="idCardField"
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
          name="licenseNumber"
          value={interviening.licenseNumber}
          onChange={(e) => handleData(e)}
          style={{
            alignSelf: "center",
            width: "48%",
            marginTop: "15px",
            marginLeft: "auto",
          }}
          size="small"
          id="licenseNumberField"
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
      <Button 
	  	onClick={() => addInterviening()}
		style={{
			position:"relative",
			marginTop:"20px"
		}}
	>
		  Guardar
		  </Button>
    </div>
  );
}
