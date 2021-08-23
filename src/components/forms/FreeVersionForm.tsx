import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import { useState } from "react";
import "./Forms.scss";

export default function FreeVersionForm() {
  const [freeVersion, setFreeVersion] = useState("");

  const formik = useFormik({
    initialValues: {
      freeVersion: "",
    },
    onSubmit: (values) => {
      setFreeVersion(JSON.stringify(values));
    },
  });

  return (
    <form className="FreeVersionForm" onSubmit={formik.handleSubmit}>
      <h4>Versión libre</h4>
      <textarea
        id="textArea"
        name="freeVersion"
        value={formik.values.freeVersion}
        onChange={formik.handleChange}
        className="TextArea"
        placeholder="Escribe una descripción"
        draggable={false}
        required
      />
      <Button
        variant="contained"
        style={{
          color: "black",
          backgroundColor: "#bed000",
          margin: "10px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
        type="submit"
      >
        Guardar
      </Button>
    </form>
  );
}
