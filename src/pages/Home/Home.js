import React, { useEffect } from "react";
import BgLoginAndHome from "../../components/Bgs/BgLoginAndHome";
import Header from "../../components/Header/Header";
import Vector from "../../Assets/Vector.svg";
import Vector2 from "../../Assets/Vector-1.svg";
import Vector3 from "../../Assets/Vector-2.svg";
import Vector4 from "../../Assets/Vector-3.svg";
import { Link } from "react-router-dom";
import { MainContainer, ContainerIcons } from "./Style";
import { postPlanet } from "../../services/PlanetsServices/post";
import { deletePlanet } from "../../services/PlanetsServices/delete";

const Home = () => {
  return (
    <section>
     
        <MainContainer>
          <h1>Sua jornada para desvendar o espaço começa aqui!</h1>
          <p>Planetas e galáxias inteiras aguardam para serem exploradas.</p>
          <p>O que vamos explorar hoje?</p>
          <ContainerIcons>
            <Link to="/planetas">
              <div>
                <img src={Vector} />
                Planetas
              </div>
            </Link>
            <div>
              <img src={Vector2} />
              Asteroides
            </div>
            <div>
              <img src={Vector3} />
              Estrelas
            </div>
            <div>
              <img src={Vector4} />
              Galáxias
            </div>
          </ContainerIcons>
        </MainContainer>
    
    
    </section>
  );
};

export default Home;
