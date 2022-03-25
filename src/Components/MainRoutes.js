import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home'
import Login from "../pages/Login/Login";
import GlobalStyle from "./GlobalStyle";
import MasterPage from "./MasterPage";
import ContextEmail from './ContextEmail'
import Planets from '../pages/Planets/Planets'
import PlanetPage from "../pages/PlanetPage/PlanetPage";
import AddPlanet from "../pages/AddPlanet/AddPlanet"
const MainRoutes = () => {


  const [userEmail, setEmail] = React.useState('eqwe');

  return (
    <BrowserRouter>
    <ContextEmail value={userEmail} >
      <GlobalStyle />
      <MasterPage>
        <Routes>
          <Route path="/" element={<Login  />} />
          <Route path="/home" element={<Home />} />
          <Route path='/planetas' element = {<Planets/>}/>
          <Route path='/planetaExplorar' element={<PlanetPage/>}/>
          <Route path='/addPlaneta' element={<AddPlanet/>}/>
        </Routes>
      </MasterPage>
      </ContextEmail>
    </BrowserRouter>
  );
};

export default MainRoutes;
