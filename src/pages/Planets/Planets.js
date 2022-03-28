import React from "react";
import Header from "../../components/Header/Header";
import { MenuItem, TextField, Button } from "@mui/material";
import { object, string } from "yup";
import { planets } from "../../data/data";
import { useFormik } from "formik";
import Backhome from "../../components/Backhome/Backhome";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Bg from "../../components/Bgs/Bg";
import TablePlanets from "./TablePlanets";
import ModalDelete from "./ModalDelete";
import { AddCircleOutline } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import {
  ContainerFilter,
  ContainerPlanets,
  AddCard,
  PlanetCard,
  CardFooter,
} from "./Style";

const Planets = () => {
  console.log(planets);

  const validationSchema = object({
    name: string(),
    filterParameter: string(),
    filterHigherLower: string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      filterParameter: "",
      filterHigherLower: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      SortPlanets(values);
    },
  });

  const filterParameters = [
    {
      value: "area",
      label: "Área de superfície",
    },
    {
      value: "sunDistance",
      label: "Distância do sol",
    },
    {
      value: "durationDay",
      label: "Duração do dia",
    },
    {
      value: "gravity",
      label: "Gravidade",
    },
  ];

  const [filteredPlanets, setFilteredPlanets] = React.useState(planets);

  function SortPlanets(values) {
    const NameFilteredPlanets = planets.filter((planet) =>
      planet.name.toUpperCase().includes(values.name.toUpperCase())
    );

    console.log(NameFilteredPlanets.length);

    if (NameFilteredPlanets.length > 0 && values.filterParameter) {
      setFilteredPlanets(
        NameFilteredPlanets.sort((a, b) => {
          return values.filterHigherLower == "maior"
            ? a[values.filterParameter] - b[values.filterParameter]
            : b[values.filterParameter] - a[values.filterParameter];
        })
      );
    }
  }

  const [display, setDisplay] = React.useState(false);
  const [modalImg, setModalImg] = React.useState();
  const [indexDelete, setIndexDelete] = React.useState();
  const navigate = useNavigate();

  return (
    <Bg>
      <Header />
      <section>
        <Backhome where="Planetas" />

        <ContainerFilter>
          <h2>Filtrar planetas</h2>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              style={{ color: "white" }}
              variant="outlined"
              label="Pesquisar um planeta..."
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <TextField
              id="filterParameter"
              select
              name="filterParameter"
              label="Filtrar por"
              variant="outlined"
              value={formik.values.filterParameter}
              onChange={formik.handleChange}
            >
              {filterParameters.map((parameter) => (
                <MenuItem key={parameter.value} value={parameter.value}>
                  {parameter.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="filterHigherLower"
              select
              name="filterHigherLower"
              label="Maior ou menor"
              variant="outlined"
              value={formik.values.filterHigherLower}
              onChange={formik.handleChange}
            >
              <MenuItem key={"maior"} value={"maior"}>
                Do menor para o maior
              </MenuItem>
              <MenuItem key={"menor"} value={"menor"}>
                Do maior para o menor
              </MenuItem>
            </TextField>
            <Button type="submit">Enviar</Button>
          </form>
        </ContainerFilter>

        <ContainerPlanets>
          <AddCard>
            <AddCircleOutline />
            <Link to="/addPlaneta">
              {" "}
              <p>Adicionar</p>
            </Link>
          </AddCard>

          {filteredPlanets.map((planet, i) => {
            return (
              <PlanetCard key={planet.name} id={planet.name}>
                <img src={require(`../../Assets/${planet.image}`)} />
                <CardFooter id={planet.name}>
                  <h3>{planet.name}</h3>
                  <div>
                    <DeleteIcon
                      style={{ cursor: "pointer" }}
                      onClick={(event) => {
                        setModalImg(planet.image);
                        setDisplay(!display);
                        setIndexDelete(i);
                      }}
                    />
                    <ArrowForwardIcon
                      style={{ cursor: "pointer" }}
                      onClick={(event) => {
                        localStorage.setItem("planet", i);
                        navigate("/planetaExplorar");
                      }}
                    />
                  </div>
                </CardFooter>
                {display && (
                  <ModalDelete
                    display={display}
                    setarDisplay={(event) => setDisplay(!display)}
                    img={modalImg}
                    deletePlanet={(event) =>
                      filteredPlanets.splice(indexDelete, 1)
                    }
                  />
                )}
              </PlanetCard>
            );
          })}
        </ContainerPlanets>
      </section>
      <TablePlanets planets={filteredPlanets} />
    </Bg>
  );
};

export default Planets;
