import React from "react";
import Header from "../../components/Header/Header";
import Backhome from "../../components/Backhome/Backhome";
import {
  AddAPhoto,
  ArrowBackIosNew,
  ArrowForwardIos,
  Minimize,
} from "@mui/icons-material";
import Bg from "../../components/Bgs/Bg";
import { useFormik } from "formik";
import { Alert, Button, Input, TextField } from "@mui/material";
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
import { useEffect } from "react";
import { getPlanets } from "../../services/PlanetsServices/get";
import { updatePlanet } from "../../services/PlanetsServices/update";
import { useMessage } from "../../context/ContextMessage";

const PlanetPage = () => {
  const [planets, setPlanets] = React.useState("");

  const navigate = useNavigate();
  const index = localStorage.getItem("index");
  const [indexPlanet, setIndexPlanet] = React.useState(index);
  const { setMessage } = useMessage();
  const [baseImage, setBaseImage] = React.useState();

  useEffect(() => {
    getPlanets()
      .then((response) => {
        setPlanets(response.data.planets);
      })
      .catch((err) =>
        setMessage({
          content: "Não é possívela apresentar o planeta",
          display: true,
        })
      );
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: planets && {
      name: planets[indexPlanet].name,
      area: planets[indexPlanet].surfaceArea,
      sunDistance: planets[indexPlanet].sunDistance,
      durationDay: planets[indexPlanet].day,
      gravity: planets[indexPlanet].gravity,
      description: planets[indexPlanet].description,
      image: planets[indexPlanet].description,
    },
    onSubmit: (values) => {
      values.image = baseImage;
      updatePlanet(
        planets[indexPlanet].id,
        values.name,
        values.description,
        values.area,
        values.durationDay,
        values.sunDistance,
        values.gravity,
        values.image
      )
        .then(
          setMessage({
            content: "Planeta modificado com sucesso!",
            display: true,
          }),

          setTimeout(() => {
            navigate("/planetas");
          }, 2000)
        )
        .catch(
          (error) => (
            console.log(error.data),
            setMessage({
              content: "Ocorreu um erro, o planeta não pôde ser modificado",
              display: true,
            }),
            setTimeout(() => {
              navigate("/planetas");
            }, 2000)
          )
        );
    },
  });

  const UploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <section>
      {planets != "" && (
        <SectionPlanet onSubmit={formik.handleSubmit}>
          <Backhome where="Explorar Planeta" />
          <PhotoAndDescription>
            <PhotoDiv>
              <ArrowBackIosNew id="Arrow" />

              <img src={planets[indexPlanet].image}></img>

              <Input
                inputProps={{ accepts: "image/*" }}
                type="file"
                onChange={(e) => UploadImage(e)}
                name="image"
                id="image"
              >
                <AddAPhoto />
              </Input>

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
              <p>{planets[indexPlanet].surfaceArea} km</p>
            </div>
            <div>
              <h2>Distância do sol</h2>
              <p>{planets[indexPlanet].sunDistance} km</p>
            </div>
            <div>
              <h2>Duração do dia</h2>
              <p>{planets[indexPlanet].day} </p>
            </div>
            <div>
              <h2>Gravidade</h2>
              <p>{planets[indexPlanet].gravity}</p>
            </div>
          </PlanetDataCards>
          <FormAddPlanet>
            <h2>Informe os dados do planeta</h2>
            <Form>
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
    </section>
  );
};

export default PlanetPage;
