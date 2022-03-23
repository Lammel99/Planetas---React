import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Backhome from "../../components/Backhome";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Minimize,
} from "@mui/icons-material";
import Bg from "../../components/Bg";
import { planets } from "../../Data/Data";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SectionPlanet = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 80px;
`;

const PhotoAndDescription = styled.div`
  width: 95%;
  display: flex;
  flex-flow: row wrap;
  gap: 100px;
`;

const PhotoDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 35px;
  width: 40%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cdcdcd;
    font-size: 2rem;
    gap: 15px;
  }

  img {
    width: 420px;
    height: 420px;
  }
  svg {
    font-size: 3rem;
    color: white;
    cursor: pointer;
  }

  #Arrow {
    font-size: 2rem;
  }
`;

const InformationsDiv = styled.div`
  color: #cdcdcd;
  justify-content: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 50%;

  svg {
    color: #ffffff;
    font-size: 2rem;
    padding-bottom: 0%.8;

    opacity: 1;
  }

  #descrip {
    margin: 0;
    opacity: 0.7;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const Name = styled.h3`
  font-size: 3.2rem;
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
    padding: 20px 30px;
    color: #cdcdcd;
    border-radius: 5px;
    background-color: #2a2a2a4d;
  }

  h2 {
    opacity: 0.8;
    font-size: 1.2rem;
  }

  p {
    opacity: 0.8;
    font-size: 1.6rem;
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

const PlanetPage = () => {
  const navigate = useNavigate();
  const index = localStorage.getItem("planet");
  const [indexPlanet, setIndexPlanet] = React.useState(index);

  const [editedPlanet, setEditedPlanet] = React.useState({
    name: planets[indexPlanet].name,
    image: "Marte.png",
    area: planets[indexPlanet].area,
    sunDistance: planets[indexPlanet].sunDistance,
    durationDay: planets[indexPlanet].durationDay,
    gravity: "",
    description: "",
  });

  console.log(planets);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: planets[indexPlanet].name,
      area: planets[indexPlanet].area,
      sunDistance: planets[indexPlanet].sunDistance,
      durationDay: planets[indexPlanet].durationDay,
      gravity: planets[indexPlanet].gravity,
      description: planets[indexPlanet].description,
      
    },
    onSubmit: (values) => {
      console.log("fui chamado");

      planets[indexPlanet] = {
        name: values.name,
        image: planets[indexPlanet].image,
        area: values.area,
        durationDay: values.durationDay,
        sunDistance: values.sunDistance,
        gravity: values.gravity,
        description: values.description,
      };

      navigate("/planetas");
    },
  });

  return (
    <Bg>
      <Header />
      <Backhome where="Explorar Planeta" />
      <SectionPlanet>
        <PhotoAndDescription>
          <PhotoDiv>
            <ArrowBackIosNew id="Arrow" />

            <img src={require(`../Assets/${planets[indexPlanet].image}`)} />

            <ArrowForwardIos
              id="Arrow"
              onClick={(event) => {
                indexPlanet < planets.length - 1
                  ? setIndexPlanet(Number(indexPlanet) + 1)
                  : setIndexPlanet(0);
              }}
            />
          </PhotoDiv>
          <InformationsDiv>
            <p>PLANETA</p>
            <Name>{planets[indexPlanet].name}</Name>
            <Minimize />
            <p>{planets[indexPlanet].description}</p>
          </InformationsDiv>
        </PhotoAndDescription>

        <PlanetDataCards>
          <div>
            <h2>Área de superfície</h2>
            <p>{planets[indexPlanet].area} km</p>
          </div>
          <div>
            <h2>Distância do sol</h2>
            <p>{planets[indexPlanet].sunDistance} km</p>
          </div>
          <div>
            <h2>Duração do dia</h2>
            <p>{planets[indexPlanet].durationDay} </p>
          </div>
          <div>
            <h2>Gravidade</h2>
            <p>{planets[indexPlanet].gravity}</p>
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
              name="sunDistance"
              label="Distância do sol"
              variant="outlined"
              value={formik.values.sunDistance}
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
              name="durationDay"
              label="Duração do dia"
              variant="outlined"
              value={formik.values.durationDay}
              onChange={formik.handleChange}
            />
            <Button
              style={{ gridArea: "buttonBack" }}
              id="BtnBack"
              value="CANCELAR"
              type="reset"
              onClick={(e) => navigate('/planetas')}
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
      </SectionPlanet>
    </Bg>
  );
};

export default PlanetPage;
