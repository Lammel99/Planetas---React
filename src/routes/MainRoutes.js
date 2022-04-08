import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import GlobalStyle from "../components/GlobalStyle/GlobalStyle";
import { useUser } from "../context/ContextEmail";
import Planets from "../pages/Planets/Planets";
import PlanetPage from "../pages/PlanetPage/PlanetPage";
import AddPlanet from "../pages/AddPlanet/AddPlanet";
import CreateUser from "../pages/CreateUser/CreateUser";
import Header from "../components/Header/Header";
import ModalHelper from "../components/ModalHelper/ModalHelper";

const MainRoutes = () => {
  const { user } = useUser();
  const PrivateRoute = ({ children }) => {
    return user.authToken ? (
      <Header>{children}</Header>
    ) : (
      (console.log(user.authToken + "Console de retorno"),
      (<Navigate to="/" />))
    );
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ModalHelper />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CreateUser />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/planetas"
          element={
            <PrivateRoute>
              <Planets />
            </PrivateRoute>
          }
        />
        <Route
          path="/planetaExplorar"
          element={
            <PrivateRoute>
              <PlanetPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/addPlaneta"
          element={
            <PrivateRoute>
              <AddPlanet />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
