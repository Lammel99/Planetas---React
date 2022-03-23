import React, { useContext } from "react";
import styled from "styled-components";
import BgLoginAndHome from "../../components/BgLoginAndHome";
import Header from "../../components/Header";
import Vector from "../Assets/Vector.svg";
import Vector2 from "../Assets/Vector-1.svg";
import Vector3 from "../Assets/Vector-2.svg";
import Vector4 from "../Assets/Vector-3.svg";
import {Link} from 'react-router-dom'

const Home = () => {
  const MainContainer = styled.div`
    padding: 30px 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: white;
    text-align: center;
    h1 {
      font-size: 3rem;
      width: 50%;
    }

    p:nth-child(2) {
      font-size: 1.4rem;
      width: 50%;
      font-weight: lighter;
    }
    p:nth-child(3) {
      font-size: 1.2rem;
      border: solid thin white;
      padding: 15px 30px;
      border-radius: 5px;
    }
  `;

  const ContainerIcons = styled.div`
    padding-top: 50px;
    display: flex;
    width: 75%;
    margin: auto;
    flex-flow: row wrap;
    justify-content: space-between;

    div {
      display: flex;
      flex-flow: column nowrap;
      gap: 10px;
      align-items: center;
      gap: 10px;
    }

    img {
      padding: 10px;
      border-radius: 50%;
      background-color: white;
      width: 30px;
    }

    a{
      color: white;
      text-decoration: none;
    }
  `;

  return (
    <section>
      <BgLoginAndHome>
        <Header />

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
      </BgLoginAndHome>
    </section>
  );
};

export default Home;
