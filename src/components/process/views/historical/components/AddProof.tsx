import { useFormik } from "formik";
import "../../../styles/ModalView.scss";
import "../../../styles/Forms.scss";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

export default function AddProof(props: any) {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      type: "",
    },
    onSubmit: (values) => {
      props.addNewProof(values);
    },
  });

  return (
    <div>
      <h4 style={{marginBottom:"5px"}}>Nombre de la prueba</h4>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          variant="filled"
          hiddenLabel
          required
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          style={{
            alignSelf: "center",
            width: "100%",
            marginTop: "15px",
            marginRight: "auto",
            padding: 0,
          }}
          size="small"
          id="nameField"
          placeholder="Prueba de alcoholemia"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalOfferIcon />
              </InputAdornment>
            ),
          }}
        />
        <textarea
          required
          onChange={formik.handleChange}
          id="description"
          value={formik.values.description}
          className="TextArea"
          placeholder="Escribe una descripción"
          style={{
            height: "100px",
            marginTop: "30px",
          }}
        />
        <RadioGroup
          style={{ flexDirection: "row", marginTop:"30px" }}
          aria-label="type"
          name="type"
        >
          <FormControlLabel
            value="A petición de parte"
            onChange={formik.handleChange}
            control={<RadioGreen />}
            color="#6b6b6b"
            label="A petición de parte*"
          />
          <FormControlLabel
            value="De oficio"
            onChange={formik.handleChange}
            control={<RadioGreen />}
            color="#6b6b6b"
            label="De oficio*"
          />
        </RadioGroup>
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            style={{
              color: "black",
              backgroundColor: "#a9ba18",
              marginTop: "10px",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
            type="submit"
          >
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
}

export const RadioGreen = withStyles({
  root: {
    color: "gray",
    "&$checked": {
      color: "#a9ba18",
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);
