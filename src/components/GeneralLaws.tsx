import { IPanelContainer } from "./types/Controller";
import "./modals/ModalView.scss";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { useFormik } from "formik";

export default function GeneralLaws(props: IPanelContainer) {
  const infringement = props.infringement;
  const [localData, setLocalData] = useState({});
  const [attorneyInfo, setAttorneyInfo] = useState("");

  const formik = useFormik({
    initialValues: {
      age: 18,
      maritalStatus: "SOLTERO",
      address: "",
      phoneNumber: "",
      ocupation: "",
      email: "",
    },
    validate: (values) => {
      const errors = { age: "", email: "" };
      if (values.age < 0 || values.age > 99) {
        errors.age = "Edad invalida";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email invalido";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log("submiting...");
      setAttorneyInfo(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const continueAction = () => {
    let currentdate = new Date();
    setLocalData({
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
    <div className="Modal-container">
      <div className="Modal-laws-viewer">
        <div className="Scroll-container">
          <h4>Generales de ley</h4>
          <p className="Scroll-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
            bibendum elit pretium porta. In euismod, felis aliquam ornare
            ullamcorper, magna urna convallis est, vitae pretium arcu erat et
            ligula. Mauris erat mi, fermentum in felis vitae, consequat luctus
            ligula. Etiam efficitur arcu id auctor tincidunt. Morbi eget justo
            eget magna maximus molestie. Nunc ut sollicitudin arcu. Fusce
            ornare, mauris eu malesuada cursus, lectus dui pellentesque leo, sed
            ultrices nunc felis et libero. Fusce et ornare risus. Nullam sodales
            venenatis odio, nec mollis neque molestie sed. Suspendisse potenti.
            Morbi quis interdum leo. Curabitur ut lacinia quam. Etiam sed arcu
            in ligula efficitur cursus dignissim ut eros. Nam sed pretium erat,
            vitae cursus odio. Praesent et facilisis lectus. Aliquam maximus
            varius odio eu pharetra. Donec molestie, neque semper consectetur
            mollis, est sem posuere est, eget volutpat dui urna vitae libero.
            Nulla faucibus leo diam, in ornare ex tristique non. Integer
            molestie elit nec egestas convallis. Praesent sodales tortor
            lobortis orci vulputate, eu tincidunt nisl facilisis. Fusce nec
            congue libero, viverra consequat ex. Etiam neque odio, consectetur a
            lacus ut, auctor fermentum nisi. Quisque imperdiet pretium
            vulputate. Duis nulla libero, hendrerit et venenatis cursus, euismod
            eu metus. Pellentesque arcu tellus, dignissim ut nisi interdum,
            pretium condimentum mauris. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Fusce non mi
            ullamcorper, faucibus mauris at, congue nibh. Morbi sollicitudin sit
            amet justo ac condimentum. Aenean aliquet lacus convallis nunc
            commodo dapibus ac id nunc. In a est imperdiet, rhoncus ligula eget,
            porttitor urna. Donec egestas ut est vitae convallis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Duis dictum magna
            quis arcu tincidunt, vitae lacinia risus vulputate. Donec at dolor
            odio. Praesent nec egestas tortor. Quisque tincidunt, mi id
            vulputate suscipit, ligula augue rhoncus mi, eget tempor risus mi in
            lorem. Curabitur imperdiet porttitor nibh in posuere. Donec ultrices
            eget lacus a consequat. Sed in congue tellus. Praesent eu efficitur
            metus. Nulla sed lorem sem. Integer aliquet bibendum nibh. Proin
            porttitor nibh nisi, sit amet accumsan quam mollis vitae. Curabitur
            et lacus placerat, ullamcorper ante eget, molestie nisl. Duis sapien
            lacus, bibendum nec bibendum ut, maximus ut massa. Sed nec eleifend
            augue. Mauris nec orci volutpat, sodales turpis ullamcorper, rutrum
            tortor. Donec hendrerit luctus magna, non accumsan metus interdum
            non. Donec bibendum est velit, eu dignissim risus molestie at.
            Integer eleifend semper lacus, a sollicitudin sapien convallis et.
            Phasellus bibendum arcu lacus, non egestas massa fermentum at.
            Maecenas erat nibh, euismod at nunc ut, volutpat vulputate elit.
            Cras faucibus ligula ac vehicula pulvinar. Aliquam a nisi rhoncus,
            hendrerit sem a, ullamcorper velit. In et justo vel magna dignissim
            lacinia. Pellentesque commodo nibh quis erat consectetur, eget
            condimentum ex ultrices. Pellentesque vulputate, purus non gravida
            malesuada, elit nisl molestie libero, ac convallis libero nisi non
            odio. Nam ut aliquam ante. Donec feugiat, lacus ac mattis eleifend,
            eros orci consectetur orci, in bibendum libero magna feugiat nulla.
            Fusce eu ante vitae orci interdum iaculis. Duis id mauris malesuada,
            elementum mi sit amet, semper metus. Donec aliquet consectetur augue
            eu sodales. Morbi consequat, risus ac imperdiet sollicitudin, lectus
            ligula fermentum tellus, et pellentesque lectus sapien eu dolor.
            Suspendisse ut pretium magna. Sed non sem dapibus, vulputate nisl
            et, posuere ex.
          </p>
          <form onSubmit={formik.handleSubmit}>
            {
              <p className="Scroll-content" style={{ textAlign: "left" }}>
                Acto seguido, esta AUTORIDAD DE TRANSITO procede a indagar sobre
                sus generalidades de ley. EDAD:
                <input
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  placeholder="28"
                  className="input-plus"
                  style={{ width: "25px" }}
                  required
                />
                ESTADO CIVIL:
                <select
                  name="maritalStatus"
                  value={formik.values.maritalStatus}
                  onChange={formik.handleChange}
                  style={{ marginLeft: "10px" }}
                >
                  <option value="CASADO">CASADO</option>
                  <option value="SOLTERO">SOLTERO</option>
                </select>
                <br />
                DIRECCION DE RESIDENCIA:{" "}
                <input
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  placeholder="carrera 104 NO 15a - 72"
                  style={{ width: "300px", textTransform: "uppercase" }}
                  required
                />
                <br />
                NUMERO TELEFONO:
                <input
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  className="input-plus"
                  placeholder="32150692935"
                  style={{ width: "110px" }}
                  required
                />
                PROFESION Y OFICIO:
                <input
                  name="ocupation"
                  value={formik.values.ocupation}
                  onChange={formik.handleChange}
                  className="input-plus"
                  placeholder="Médico"
                  style={{ width: "102px" }}
                  required
                />
                En este estado de la diligencia, el Despacho indaga con el
                impugnante, si tiene un correto electrónico en caso de ser
                requerido por esta autoridad de Tránsuto a efecto de
                notificarlom quien manifiesta:
                <input
                  placeholder="example@example.com"
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="input-plus"
                  required
                />
              </p>
            }
            <label className="Formik-error">
              {formik.errors.age || formik.errors.email}
            </label>
            <div style={{ float: "right" }}>
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
                  backgroundColor: "#bed000",
                  margin: "10px",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
                type="submit"
                onClick={() => continueAction()}
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
