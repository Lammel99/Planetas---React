import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import GlobalStyle from "../components/GlobalStyle/GlobalStyle";
import MasterPage from "../components/MasterPage/MasterPage";
import ContextEmail from "../context/ContextEmail";
import Planets from "../pages/Planets/Planets";
import PlanetPage from "../pages/PlanetPage/PlanetPage";
import AddPlanet from "../pages/AddPlanet/AddPlanet";
const MainRoutes = () => {
 
  const [userEmail, setEmail] = React.useState();

  const PrivateRoute = ({ children }) => {
    return userEmail ? children : <Navigate to="/" />;
  };



  return (
    <BrowserRouter>
      <ContextEmail value={userEmail}>
        <GlobalStyle />
        <MasterPage>
          <Routes>
            <Route path="/" element={<Login sendData={setEmail} />} />
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
        </MasterPage>
      </ContextEmail>
    </BrowserRouter>
  );
};

export default MainRoutes;
