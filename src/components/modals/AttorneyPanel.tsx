import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PublishIcon from "@material-ui/icons/Publish";
import { IPanelContainer } from "./types/Controller";
import "./ModalView.scss";

export default function AttorneyPanel(props: IPanelContainer) {
  return (
    <div>
      <label style={{ marginTop: "20px", display: "block" }}>Apoderado</label>
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
                <AccountCircle />
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
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <TextField
        variant="filled"
        style={{
          alignSelf: "center",
          width: "100%",
          marginTop: "15px",
          marginRight: "auto",
        }}
        size="small"
        id="input-with-icon-textfield"
        placeholder="Matrícula profesional"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RecentActorsIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="text"
        component="label"
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
          marginTop:"10px"
        }}
      >
        <div className="Modal-Input-file">
          <div className="Modal-file-icon">
            <PublishIcon />
          </div>
          <p style={{ color: "#c6c6c6", textAlign: "center" }}>
            Sube el archivo
          </p>
          <input type="file" hidden />
        </div>
      </Button>
    </div>
  );
}
