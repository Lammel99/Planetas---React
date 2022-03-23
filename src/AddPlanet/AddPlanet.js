import {
  AddAPhoto,
  ArrowBackIosNew,
  ArrowForwardIos,
  Minimize,
  Remove,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import styled from "styled-components";
import Backhome from "../Components/Backhome";
import Bg from "../Components/Bg";
import Header from "../Components/Header";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { planets } from "../Data/Data";

const SectionAddPlanet = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 80px;
`;

const PhotoAndDescription = styled.div`
  width: 95%;
  display: flex;
  flex-flow: row wrap;
  gap: 320px;
`;

const AddPhotoDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 35px;

  div {
    width: 450px;
    height: 450px;
    background-color: #2a2a2a4d;

    border: solid medium #cdcdcd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cdcdcd;
    font-size: 2rem;
    gap: 15px;
  }

  svg {
    font-size: 2.5rem;
    color: #cdcdcd;
    opacity: 0.7;
    cursor: pointer;
  }

  #Arrow {
    font-size: 3rem;
  }
`;

const InformationsDiv = styled.div`
  color: #cdcdcd;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 1.5rem;

  svg {
    color: #ffffff;
    font-size: 2rem;
    padding-bottom: 0%.8;
    border-bottom: medium solid white;
    opacity: 1;
  }

  #descrip {
    opacity: 0.7;
  }
`;

const PlanetDataCards = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  div {
    width: 250px;
    height: 150px;
    border: solid thin #cdcdcd;
    box-sizing: border-box;
    padding: 10px 20px;
    color: #cdcdcd;
    border-radius: 5px;
    background-color: #2a2a2a4d;
  }

  h2 {
    opacity: 0.8;
    font-size: 1.2rem;
  }
`;

const FormAddPlanet = styled.div`
  width: 85%;
  background-color: #2a2a2a4d;
  border-radius: 5px;
  border: solid thin #cdcdcd;
  box-sizing: border-box;
  padding: 50px;

  h2 {
    color: #cdcdcd;
    font-size: 1.5rem;
  }

  div {
    background-color: #2a2a2a;
    border-radius: 5px;
    color: white;
  }

  #BtnBack {
    background-color: transparent;
    border-radius: 5px;
    border: solid thin #cdcdcd;
    cursor: pointer;
    color: white;
    font-weight: bold;
  }

  #BtnSend {
    background-color: #63bcbc;
    color: white;
    cursor: pointer;
    font-weight: bold;
  }
`;
const Form = styled.form`
  display: grid;
  grid-template:
    "name name name description description description" 1fr
    "area area area description description description" 1fr
    "distance distance duration duration gravity gravity" 1fr
    ". . . . buttonBack buttonSend" 1fr
    / 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

const AddPlanet = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Obrigatório"),
    area: Yup.string("Insira a área de superfície do planeta").required(
      "Obrigatório"
    ),
    distance: Yup.string("Insira a distância do Sol do planeta").required(
      "Obrigatório"
    ),
    duration: Yup.string("Insira a duração do dia do planeta").required(
      "Obrigatório"
    ),
    gravity: Yup.string("Insira a gravidade").required("Obrigatório"),
    description: Yup.string("Insira a descrição do planeta").required(
      "Obrigatório"
    ),
  });

  



  const formik = useFormik({
    initialValues: {
      name: "",
      area: "",
      distance: "",
      duration: "",
      gravity: "",
      description: "",
      validationSchema: validationSchema,
    },
    onSubmit: (values) => {
    
    const newPlanet = {
        name: values.name,
        image: "Marte.png",
        description: values.description,
        area: values.area,
        durationDay: values.duration,
        sunDistance: values.distance,
        gravity: values.gravity,
      };

      planets.push(newPlanet) ;     

    },
  });

  return (
    <Bg>
      <Header />
      <Backhome where="Adicionar Planeta" />

      <SectionAddPlanet>
        <PhotoAndDescription>
          <AddPhotoDiv>
            <ArrowBackIosNew id="Arrow" />
            <div>
              <AddAPhoto />
              Adicionar foto
            </div>

            <ArrowForwardIos id="Arrow" />
          </AddPhotoDiv>
          <InformationsDiv>
            <p>PLANETA</p>
            {formik.values.name ? <p>{formik.values.name}</p> : <Minimize />}
            {formik.values.description ? (
              <p>{formik.values.description}</p>
            ) : (
              <p id="descrip">Informe uma descrição...</p>
            )}
          </InformationsDiv>
        </PhotoAndDescription>

        <PlanetDataCards>
          <div>
            <h2>Área de superfície</h2>
            {formik.values.area ? <p>{formik.values.area}</p> : <Minimize />}
          </div>
          <div>
            <h2>Distância do sol</h2>
            {formik.values.distance ? (
              <p>{formik.values.distance}</p>
            ) : (
              <Minimize />
            )}
          </div>
          <div>
            <h2>Duração do dia</h2>
            {formik.values.duration ? (
              <p>{formik.values.duration}</p>
            ) : (
              <Minimize />
            )}
          </div>
          <div>
            <h2>Gravidade</h2>
            {formik.values.gravity ? (
              <p>{formik.values.gravity}</p>
            ) : (
              <Minimize />
            )}
          </div>
        </PlanetDataCards>
        <FormAddPlanet>
          <h2>Informe os dados do planeta</h2>
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              required
              fullWidth
              style={{ gridArea: "name" }}
              InputLabelProps={{ style: { color: "#CDCDCD" } }}
              name="name"
              label="Nome do planeta"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              required
              fullWidth
              multiline
              minRows={4.75}
              style={{ gridArea: "description" }}
              InputLabelProps={{ style: { color: "#CDCDCD" } }}
              name="description"
              label="Descrição do planeta"
              variant="outlined"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <TextField
              required
              type="number"
              style={{ gridArea: "area" }}
              InputLabelProps={{ style: { color: "#CDCDCD" } }}
              name="area"
              label="Área de superfície"
              variant="outlined"
              value={formik.values.area}
              onChange={formik.handleChange}
            />
            <TextField
              required
              type="number"
              style={{ gridArea: "distance" }}
              InputLabelProps={{ style: { color: "#CDCDCD" } }}
              name="distance"
              label="Distância do sol"
              variant="outlined"
              value={formik.values.distance}
              onChange={formik.handleChange}
            />
            <TextField
              required
              type="number"
              style={{ gridArea: "gravity" }}
              InputLabelProps={{ style: { color: "#CDCDCD" } }}
              name="gravity"
              label="Gravidade"
              variant="outlined"
              value={formik.values.gravity}
              onChange={formik.handleChange}
            />{" "}
            <TextField
              required
              type="number"
              style={{ gridArea: "duration" }}
              InputLabelProps={{ style: { color: "#CDCDCD" } }}
              name="duration"
              label="Duração do dia"
              variant="outlined"
              value={formik.values.duration}
              onChange={formik.handleChange}
            />
            <Button
              style={{ gridArea: "buttonBack" }}
              id="BtnBack"
              value="CANCELAR"
              type="reset"
              onlick={(e) => formik.resetForm()}
            >
              CANCELAR
            </Button>
            <Button
              style={{ gridArea: "buttonSend" }}
              id="BtnSend"
              type="submit"
              value="ENVIAR"
            >
              ENVIAR
            </Button>
          </Form>
        </FormAddPlanet>
      </SectionAddPlanet>
    </Bg>
  );
};

export default AddPlanet;
