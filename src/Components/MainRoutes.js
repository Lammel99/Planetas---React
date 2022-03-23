import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import GlobalStyle from "./GlobalStyle";
import MasterPage from "./MasterPage";
import ContextEmail from './ContextEmail'
import Planets from '../Planets/Planets'
import PlanetPage from "../PlanetPage/PlanetPage";
import AddPlanet from "../AddPlanet/AddPlanet"
const MainRoutes = () => {


  const [userEmail, setEmail] = React.useState('eqwe');

  return (
    <BrowserRouter>
    <ContextEmail value={userEmail} >
      <GlobalStyle />
      <MasterPage>
        <Routes>
          <Route path="/" element={<Login />} />
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
