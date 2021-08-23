import { useFormik } from "formik";
import "../ModalView.scss";
import "../../forms/Forms.scss";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

export default function ListProofs(props: any) {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      type: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert("Debe direccionar a la pantalla de pruebas")
    },
  });

  const cancelAction = () => {
    props.setModalVisible(false);
  };

  return (
    <div className="Modal-container">
      <div className="Modal">
        <h4>Listar pruebas</h4>
        <form onSubmit={formik.handleSubmit}>
          [preguntar que tipo de input va aqui (diapositiva 25 figma)]
          <textarea
            required
            onChange={formik.handleChange}
            id="description"
            value={formik.values.description}
            className="TextArea"
            placeholder="Escribe una descripción"
            style={{
              height: "100px",
              marginTop:"20px"
            }}
          />
          <RadioGroup
            style={{ flexDirection: "row" }}
            aria-label="gender"
            name="gender1"
          >
            <FormControlLabel
              value="A petición de parte"
              onChange={formik.handleChange}
              control={<Radio />}
              label="A petición de parte*"
            />
            <FormControlLabel
              value="De oficio"
              onChange={formik.handleChange}
              control={<Radio />}
              label="De oficio*"
            />
          </RadioGroup>
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
              Pruebas
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
