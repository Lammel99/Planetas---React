import React from "react";
import Header from "../../components/Header/Header";
import Backhome from "../../components/Backhome/Backhome";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Minimize,
} from "@mui/icons-material";
import Bg from "../../components/Bgs/Bg";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  SectionPlanet,
  FormAddPlanet,
  PhotoAndDescription,
  PhotoDiv,
  InformationsDiv,
  Name,
  PlanetDataCards,
  Form,
} from "./Styles";
import ModalSucess from "../../helpers/ModalSucessFailure";
import { useEffect } from "react";
import { getPlanets } from "../../services/get";
import { updatePlanet } from "../../services/update";

const PlanetPage = () => {
  const [editedPlanet, setEditedPlanet] = React.useState("");

  const [planets, setPlanets] = React.useState("");

  const [sucess, setSucess] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  const navigate = useNavigate();
  const index = localStorage.getItem("planet");
  const [indexPlanet, setIndexPlanet] = React.useState(index);

  useEffect(() => {
    getPlanets().then((response) => setPlanets(response.data));
    planets != "" &&
      setEditedPlanet({
        name: planets[indexPlanet].name,
        image: "Marte.png",
        area: planets[indexPlanet].area,
        sunDistance: planets[indexPlanet].sunDistance,
        durationDay: planets[indexPlanet].durationDay,
        gravity: planets[indexPlanet].gravity,
        description: planets[indexPlanet].description,
      });
  }, [index]);

  console.log(planets);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      planets == ""
        ? {
            name: "",
            area: "",
            sunDistance: "",
            durationDay: "",
            gravity: "",
            description: "",
          }
        : {
            name: planets[indexPlanet].name,
            area: planets[indexPlanet].area,
            sunDistance: planets[indexPlanet].sunDistance,
            durationDay: planets[indexPlanet].durationDay,
            gravity: planets[indexPlanet].gravity,
            description: planets[indexPlanet].description,
          },
    onSubmit: (values) => {
      updatePlanet(
        planets[indexPlanet].id,
        values.name,
        values.area,
        values.durationDay,
        values.sunDistance,
        values.gravity,
        values.description
      );
      setDisplay(true);
      setSucess(true);
      setTimeout(() => {
        navigate("/planetas");
      }, 1500);
    },
  });

  return (
    <Bg>
      <Header />
      <Backhome where="Explorar Planeta" />

      {planets != "" && (
        <SectionPlanet>
          <PhotoAndDescription>
            <PhotoDiv>
              <ArrowBackIosNew id="Arrow" />

              <img
                src={require(`../../Assets/PlanetsFull/${planets[indexPlanet].image}`)}
              />

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
                onClick={(e) => navigate("/planetas")}
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
      )}
      <ModalSucess
        Sucess={sucess}
        display={display}
        messageSucess={"Planeta modificado com sucesso"}
      />
    </Bg>
  );
};

export default PlanetPage;
