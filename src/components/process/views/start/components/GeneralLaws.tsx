import { IPanelContainer } from "../../../types/Controller";
import "../../../styles/ModalView.scss";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { useFormik } from "formik";
import { paragraphs } from "../../../../../constants";
import "../../../styles/Forms.scss";

export default function GeneralLaws(props: IPanelContainer) {
  const infringement = props.infringement;
  const [data, setData] = useState({});

  const formik = useFormik({
    initialValues: {
      description: paragraphs.generalLaws,
    },
    onSubmit: (values) => {
      setData({ ...data, description: values.description });
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const continueAction = () => {
    let currentdate = new Date();
    setData({
      ...data,
      date:
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate(),
      time: currentdate.getHours() + ":" + currentdate.getMinutes(),
      offender: infringement.name,
      offenderIdCard: infringement.id,
    });
  };

  const cancelAction = () => {
    props.setModalVisible(false);
  };

  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <textarea
          className="TextArea"
          style={{ width: "600px" }}
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </form>
      {
        //
        //   {
        //     <p className="Scroll-content" style={{ textAlign: "left" }}>
        //       Acto seguido, esta AUTORIDAD DE TRANSITO procede a indagar sobre
        //       sus generalidades de ley. EDAD:
        //       <input
        //         name="age"
        //         value={formik.values.age}
        //         onChange={formik.handleChange}
        //         placeholder="28"
        //         className="input-plus"
        //         style={{ width: "25px" }}
        //         required
        //       />
        //       ESTADO CIVIL:
        //       <select
        //         name="maritalStatus"
        //         value={formik.values.maritalStatus}
        //         onChange={formik.handleChange}
        //         style={{ marginLeft: "10px" }}
        //       >
        //         <option value="CASADO">CASADO</option>
        //         <option value="SOLTERO">SOLTERO</option>
        //       </select>
        //       <br />
        //       DIRECCION DE RESIDENCIA:{" "}
        //       <input
        //         name="address"
        //         value={formik.values.address}
        //         onChange={formik.handleChange}
        //         placeholder="carrera 104 NO 15a - 72"
        //         style={{ width: "300px", textTransform: "uppercase" }}
        //         required
        //       />
        //       <br />
        //       NUMERO TELEFONO:
        //       <input
        //         name="phoneNumber"
        //         value={formik.values.phoneNumber}
        //         onChange={formik.handleChange}
        //         className="input-plus"
        //         placeholder="32150692935"
        //         style={{ width: "110px" }}
        //         required
        //       />
        //       PROFESION Y OFICIO:
        //       <input
        //         name="ocupation"
        //         value={formik.values.ocupation}
        //         onChange={formik.handleChange}
        //         className="input-plus"
        //         placeholder="Médico"
        //         style={{ width: "102px" }}
        //         required
        //       />
        //       En este estado de la diligencia, el Despacho indaga con el
        //       impugnante, si tiene un correto electrónico en caso de ser
        //       requerido por esta autoridad de Tránsuto a efecto de
        //       notificarlom quien manifiesta:
        //       <input
        //         placeholder="example@example.com"
        //         name="email"
        //         autoComplete="email"
        //         type="email"
        //         value={formik.values.email}
        //         onChange={formik.handleChange}
        //         className="input-plus"
        //         required
        //       />
        //     </p>
        //   }
        //   <label className="Formik-error">
        //     {formik.errors.age || formik.errors.email}
        //   </label>
        //   <div style={{ float: "right" }}>
        //     <Button
        //       variant="outlined"
        //       style={{
        //         color: "#a9ba18",
        //         borderColor: "#a9ba18",
        //         margin: "10px",
        //         paddingLeft: "40px",
        //         paddingRight: "40px",
        //       }}
        //       onClick={() => cancelAction()}
        //     >
        //       Cancelar
        //     </Button>
        //     <Button
        //       variant="contained"
        //       style={{
        //         color: "black",
        //         backgroundColor: "#bed000",
        //         margin: "10px",
        //         paddingLeft: "40px",
        //         paddingRight: "40px",
        //       }}
        //       type="submit"
        //       onClick={() => continueAction()}
        //     >
        //       Guardar
        //     </Button>
        //   </div>
        // </form>
      }
    </div>
  );
}
