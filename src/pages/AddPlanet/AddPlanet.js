import {
  AddAPhoto,
  ArrowBackIosNew,
  ArrowForwardIos,
  Minimize,
} from "@mui/icons-material";
import React from "react";
import Backhome from "../../components/Backhome";
import Bg from "../../components/Bg";
import Header from "../../components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { planets } from "../../data/data";
import {
  SectionAddPlanet,
  PhotoAndDescription,
  AddPhotoDiv,
  InformationsDiv,
  PlanetDataCards,
  FormAddPlanet,
  Form,
} from "./Style";
import ModalSucess from "../../components/ModalSucessFailure";
import { useNavigate } from "react-router-dom";

const AddPlanet = () => {

  const [sucess, setSucess] = React.useState(false);
  const [display, setDisplay] = React.useState(false)
  const navigate = useNavigate();

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

      setDisplay(true);
      setSucess(true)
      planets.push(newPlanet);
      setTimeout(() => {
        navigate('/planetas');}, 1500);
    
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
      <ModalSucess display={display} messageSucess={'Planeta adicionado com sucesso'} Sucess={sucess}/>
    </Bg>
  );
};

export default AddPlanet;
