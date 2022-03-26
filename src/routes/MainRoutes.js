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
  const [userLogin, setUserLogin] = React.useState(false);

  const PrivateRoute = (userLogin, children) => {
    return userLogin ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <ContextEmail value={userEmail}>
        <GlobalStyle />
        <MasterPage>
          <Routes>
            <Route path="/" element={<Login sendData={setEmail} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/planetas" element={<Planets />} />
            <Route path="/planetaExplorar" element={<PlanetPage />} />
            <Route path="/addPlaneta" element={<AddPlanet />} />
          </Routes>
        </MasterPage>
      </ContextEmail>
    </BrowserRouter>
  );
};

export default MainRoutes;
