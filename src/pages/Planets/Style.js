import styled from "styled-components";
import BgContainer from "../../Assets/Starts.png";





export const ContainerFilter = styled.div`
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

export const ContainerPlanets = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px;
  gap: 100px;
  width: 85%;
  margin: auto;
  
`;

export const AddCard = styled.div`
  width: 100%;
  height: 300px;
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

export const PlanetCard = styled.div`
  width: 100%;
  height: 300px;
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

export const CardFooter = styled.div`
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

export const Modal = styled.div`
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

export const ModalContainer = styled.div`
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

export const BgStars = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 25px;
  height: 40%;
  background-color: #121214;
  border-radius: 10px;
  background-image: url(${BgContainer});
  margin-bottom: 60px;
`;
export const TableSec = styled.section`
  box-sizing: border-box;
  padding: 25px 100px;
  border: solid thin #cdcdcd;
  color: #cdcdcd;
  width: 85%;
  margin: auto;
  border-radius: 5px;
  background-color: rgba(56, 56, 56, 0.3);
  font-size: 1.2rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;

  table,
  th {
    color: #cdcdcd;
    font-size: 1.2rem;
  }

  th {
    height: 40px;
  }

  #tablehead {
    background: #cdcdcd;
  }

  #tablehead th {
    color: #334b48;
    font-weight: bold;
  }
`;
