import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { MenuItem, TextField, Button } from "@mui/material";
import { object, string } from "yup";
import { planets } from "../../data/data";
import { useFormik } from "formik";
import Backhome from "../../components/Backhome";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Bg from "../../components/Bg";
import TablePlanets from "./TablePlanets";
import ModalDelete from "./ModalDelete";
import { AddCircleOutline } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const ContainerFilter = styled.div`
  border: solid thin grey;
  width: 85%;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 10px;

  h2 {
    color: #cdcdcd;
  }
  div {
    width: 280px;
    color: #cdcdcd;
    background-color: #2a2a2a;
    border-radius: 5px;
  }

  form {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  input {
    width: 280px;
    background-color: #2a2a2a;
    color: #cdcdcd;
    border: none;
    border-radius: 5px;
  }
  label {
    color: #cdcdcd;
  }
  button {
    height: 35px;
    width: 150px;
  }

  button {
    background-color: #63bcbc;
    height: 50px;
    color: white;
  }
`;

const ContainerPlanets = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px;
  gap: 50px;
  width: 85%;
  margin: auto;
`;

const AddCard = styled.div`
  width: 250px;
  height: 280px;
  background-color: #2a2a2a;
  border-radius: 5px;
  display: flex;
  border: solid thin #cdcdcd;
  justify-content: center;
  align-items: center;
  color: #cdcdcd;
  gap: 7px;
  font-size: 1.1rem;

  a {
    cursor: pointer;
    color: #cdcdcd;
    text-decoration: none;
  }
`;

const PlanetCard = styled.div`
  width: 250px;
  height: 280px;
  background-color: #2a2a2a;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow: hidden;

  img {
    width: 200px;
    height: 75%;
  }
  #Vênus {
    background-color: #ffa1a1;
  }
  #Terra {
    background-color: #72b7f4;
  }
  #Urano {
    background-color: #32b9d9;
  }
  #Marte {
    background-color: #fe7000;
  }
  #Jupiter {
    background-color: #9d588e;
  }
  #Saturno {
    background-color: #cf6f0b;
  }
  #Mercurio {
    background-color: #6f83eb;
  }
`;

const CardFooter = styled.div`
  background-color: darkgreen;
  height: 20%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0 20px;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

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
      planet.name.includes(values.name)
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
