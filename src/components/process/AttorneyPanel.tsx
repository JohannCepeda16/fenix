import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import PersonIcon from '@material-ui/icons/Person';
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PublishIcon from "@material-ui/icons/Publish";
import { IPanelContainer } from "../types/Controller";
import "./ModalView.scss";
import React, { useState } from "react";
import { useEffect } from "react";

export interface IAttorney{
  name: string,
  lastName: string,
  professionalRegistration:string,
  file: any
}

export default function AttorneyPanel(props: IPanelContainer) {

  const initialStateAttorney = {name:"", lastName:"", professionalRegistration:"", file: null};
  const [attorney, setAttorney] = useState<IAttorney>(initialStateAttorney);
  const [selectedFile, setSelectedFile] = useState({name: ""});
  const setInfringement = props.setInfringement;
  const infringement = props.infringement;

  const handleData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setAttorney({...attorney, [e.target.name]: e.target.value});
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files?.length){
      setSelectedFile(e.target.files[0]);
      setAttorney({...attorney, file: e.target.files[0]})
    }
  }

  useEffect(() => {
    setInfringement({...infringement, attorney: attorney})
  }, [attorney])

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
          name="name"
          value={attorney.name || ""}
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
          value={attorney.lastName || ""}
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
      <TextField
        variant="filled"
        name="professionalRegistration"
        value={attorney.professionalRegistration || ""}
        onChange={(e) => handleData(e)}
        style={{
          alignSelf: "center",
          width: "100%",
          marginTop: "15px",
          marginRight: "auto",
        }}
        size="small"
        id="professionalRegistrationField"
        placeholder="Matrícula profesional"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RecentActorsIcon />
            </InputAdornment>
          ),
        }}
      />

      {
        selectedFile.name === "" ?
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
            <input onChange={(e) => handleFileInput(e)} type="file" hidden />
          </div>
        </Button> :
        <label>{selectedFile.name}</label>
      }
    </div>
  );
}
