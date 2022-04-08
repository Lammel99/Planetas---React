import {
  AddAPhoto,
  ArrowBackIosNew,
  ArrowForwardIos,
  Minimize,
} from "@mui/icons-material";
import React from "react";
import Backhome from "../../components/Backhome/Backhome";
import Bg from "../../components/Bgs/Bg";
import Header from "../../components/Header/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, TextField } from "@mui/material";
import {
  SectionAddPlanet,
  PhotoAndDescription,
  AddPhotoDiv,
  InformationsDiv,
  PlanetDataCards,
  FormAddPlanet,
  GridForm,
  ModalChoosePhoto,
} from "./Style";
import ModalSucess from "../../components/ModalHelper/ModalHelper";
import { Link, useNavigate } from "react-router-dom";
import { postPlanet } from "../../services/PlanetsServices/post";
import { useMessage } from "../../context/ContextMessage";

const AddPlanet = () => {
  const [sucess, setSucess] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  const [baseImage, setBaseImage] = React.useState();
  const navigate = useNavigate();
  const { setMessage } = useMessage();

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
      image: "",
      validationSchema: validationSchema,
    },
    onSubmit: (values) => {
      values.image = baseImage;

      postPlanet(
        values.name,
        values.description,
        values.area,
        values.duration,
        values.distance,
        values.gravity,
        values.image
      )
        .then(
          setMessage({
            content: "Planeta adicionado com sucesso!",
            display: true,
          }),
          setTimeout(() => {
            navigate("/planetas");
          }, 2000)
        )
        .catch((error) => {
          setMessage({
            content: "Houve algum problema ao adicionar o planeta",
            display: true,
          });
        });
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
    <SectionAddPlanet onSubmit={formik.handleSubmit}>
      <Backhome where="Adicionar Planeta" />

      <PhotoAndDescription>
        <AddPhotoDiv>
          <ArrowBackIosNew id="Arrow" />
          {baseImage ? (
            <div
              style={{
                backgroundImage: `url(${baseImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          ) : (
            <div>
              <Input
                required
                inputProps={{ accepts: "image/*" }}
                type="file"
                onChange={(e) => UploadImage(e)}
                name="image"
                id="image"
                value={formik.values.image}
              >
                {" "}
                <AddAPhoto />
              </Input>
            </div>
          )}
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
        <GridForm>
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
          <Link to="/planetas">
            <Button
              style={{ gridArea: "buttonBack" }}
              id="BtnBack"
              value="CANCELAR"
              type="reset"
            >
              CANCELAR
            </Button>
          </Link>
          <Button
            style={{ gridArea: "buttonSend" }}
            id="BtnSend"
            type="submit"
            value="ENVIAR"
          >
            ENVIAR
          </Button>
        </GridForm>
      </FormAddPlanet>
      <ModalSucess
        display={display}
        messageSucess={"Planeta adicionado com sucesso"}
        Sucess={sucess}
      />
    </SectionAddPlanet>
  );
};

export default AddPlanet;
