import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { MenuItem, TextField, Button } from "@mui/material";
import { object, string } from "yup";
import { useFormik } from "formik";
import Backhome from "../../components/Backhome/Backhome";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Bg from "../../components/Bgs/Bg";
import TablePlanets from "./TablePlanets";
import ModalDelete from "./ModalDelete";
import { AddCircleOutline } from "@mui/icons-material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  ContainerFilter,
  ContainerPlanets,
  AddCard,
  PlanetCard,
  CardFooter,
} from "./Style";
import { getPlanets } from "../../services/get";
import { deletePlanet } from "../../services/delete";
import Loading from "../../components/Loading/Loading";

const Planets = () => {
  const [planets, setPlanets] = React.useState("");
  const [display, setDisplay] = React.useState(false);
  const [filteredPlanets, setFilteredPlanets] = React.useState("");
  const [modalImg, setModalImg] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPlanets()
      .then((response) => {
        console.log(response.data);
        if (response.data.length == 0) {
          alert(
            "Ainda não há planetas cadastrados, por favor, cadastre um planeta"
          );
          navigate("/addPlaneta");
        } else {
          setPlanets(response.data);
          setFilteredPlanets(response.data);
          setLoading(false);
        }
      })
      .catch(setLoading(true));
  }, [display]);
  console.log(loading);
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
      value: "surfaceArea",
      label: "Área de superfície",
    },
    {
      value: "sunDistance",
      label: "Distância do sol",
    },
    {
      value: "day",
      label: "Duração do dia",
    },
    {
      value: "gravity",
      label: "Gravidade",
    },
  ];
  function SortPlanets(values) {
    const NameFilteredPlanets = planets.filter((planet) =>
      planet.name.toUpperCase().includes(values.name.toUpperCase())
    );

    if (NameFilteredPlanets.length > 0 && values.filterParameter) {
      console.log(filteredPlanets);
      setFilteredPlanets(
        NameFilteredPlanets.sort((a, b) => {
          return values.filterHigherLower == "maior"
            ? a[values.filterParameter] - b[values.filterParameter]
            : b[values.filterParameter] - a[values.filterParameter];
        })
      );
    } else {
      setFilteredPlanets(planets);
      alert("Verifique se todos os filtros estão completos ou se você digitou o nome do planeta corretamente");
    }
  }

 

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

          {loading ? (
            <Loading />
          ) : (
            filteredPlanets.map((planet, i) => {
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
                      deletePlanet={(event) => deletePlanet(planet.id)}
                    />
                  )}
                </PlanetCard>
              );
            })
          )}
        </ContainerPlanets>
      </section>

      {!loading && <TablePlanets planets={filteredPlanets} />}
    </Bg>
  );
};

export default Planets;
