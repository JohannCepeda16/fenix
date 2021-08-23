import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import "../ModalView.scss";
import PublishIcon from "@material-ui/icons/Publish";
import FormControl from "@material-ui/core/FormControl";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function LoadProof() {
  const formik = useFormik({
    initialValues: {
      type: "",
      description: "",
      file: { name: "" },
    },
    onSubmit: (values) => {},
  });

  const cancelAction = () => {};

  return (
    <div className="Modal-container">
      <div className="Modal">
        <h4>Practicar pruebas</h4>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            variant="filled"
            style={{ display: "block", marginTop: "20px" }}
          >
            <Select
              placeholder="Tipo de Prueba"
              value={formik.values.type}
              displayEmpty
              name="type"
              onChange={formik.handleChange}
              style={{ display: "block" }}
              renderValue={(value) => (
                <div style={{ display: "flex" }}>
                  <AssignmentIndIcon fontSize="small" />
                  <span style={{ marginLeft: "10px", alignSelf: "center" }}>
                    {" "}
                    {value}
                  </span>
                </div>
              )}
            >
              <MenuItem value="Documental">Documental</MenuItem>
              <MenuItem value="Testimonial "> Testimonial</MenuItem>
            </Select>
          </FormControl>
          <textarea
            required
            onChange={formik.handleChange}
            id="description"
            value={formik.values.description}
            className="TextArea"
            placeholder="Escribe una descripción"
            style={{
              height: "100px",
              marginTop: "20px",
            }}
          />

          {formik.values.type === "Documental" && (
            <Button
              variant="text"
              component="label"
              style={{
                width: "100%",
                padding: 0,
                margin: 0,
                marginTop: "10px",
              }}
            >
              <div className="Modal-Input-file">
                <div className="Modal-file-icon">
                  <PublishIcon />
                </div>
                <p style={{ color: "#c6c6c6", textAlign: "center" }}>
                  Sube el archivo
                </p>
                <input
                  name="file"
                  onChange={formik.handleChange}
                  type="file"
                  hidden
                />
              </div>
            </Button>
          )}

          <div style={{ float: "right", marginTop: "20px" }}>
            <Button
              variant="outlined"
              style={{
                color: "#a9ba18",
                borderColor: "#a9ba18",
                margin: "10px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              onClick={() => cancelAction()}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              style={{
                color: "black",
                backgroundColor: "#a9ba18",
                margin: "10px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              type="submit"
            >
              Practicar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
