import React from "react";
import styled from "styled-components";
import BgContainer from "../Assets/Starts.png";
import { planets } from "../../Data/Data";

const Modal = styled.div`
  position: fixed;

  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(56, 56, 56, 0.1);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  width: 800px;
  height: 500px;
  border-radius: 10px;
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
  box-sizing: border-box;

  img {
    display: block;

    margin: auto;
    box-shadow: 7px 7px 8px 0px rgba(31, 31, 31, 0.35);
    border-radius: 50%;
  }

  h1 {
    font-size: 2.2rem;
    color: #2a2a2a;
    margin: 0;
  }
  p {
    width: 90%;
    text-align: center;
    font-size: 1.15rem;
    color: #2a2a2a;
    margin: 0;
  }

  div {
    display: flex;
    flex-wrap: nowrap;
    gap: 25px;
  }

  #btnBack {
    height: 40px;
    border: none;
    outline: none;
    background-color: #6a7eb1;
    color: white;
    font-size: 1.1rem;
    width: 120px;
    font-weight: bold;
    cursor: pointer;
  }

  #btnDelete {
    height: 40px;
    border: none;
    outline: none;
    background-color: white;
    color: #6a7eb1;
    font-size: 1.1rem;
    border: thin solid #6a7eb1;
    width: 120px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const BgStars = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 25px;
  height: 40%;
  background-color: #121214;
  border-radius: 10px;
  background-image: url(${BgContainer});
  margin-bottom: 60px;
`;

const ModalDelete = (props) => {
  return (
    <Modal style={props.display ? { display: "flex" } : { display: "none" }}>
      <ModalContainer>
        <BgStars>
          <img
            style={{ width: "200px", height: "200px" }}
            src={require(`../Assets/PlanetsFull/${props.img}`)}
          ></img>
        </BgStars>

        <h1>Tem certeza?</h1>
        <p>
          Ao pressionar em <strong>deletar </strong>todos os dados desse planeta
          serão apagados dos sistema <strong> permanentemente!</strong> Deseja
          apagar todos os dados?
        </p>

        <div>
          <button id="btnBack" onClick={props.setarDisplay}>
            VOLTAR
          </button>
          <div onClick={props.setarDisplay}>
            <button onClick={props.deletePlanet} id="btnDelete">
              DELETAR
            </button>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default ModalDelete;
