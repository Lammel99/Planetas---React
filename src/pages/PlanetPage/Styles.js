
import styled from 'styled-components'



export const SectionPlanet = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 80px;
`;

export const PhotoAndDescription = styled.div`
  width: 95%;
  display: flex;
  flex-flow: row wrap;
  gap:50px;

`;

export const PhotoDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 35px;
  width: 750px;

  div{
    width: 100px;
  }


  img {
    width: 70%;
  }


  svg {
    font-size: 3rem;
    color: white;
    cursor: pointer;
  }

  #Arrow {
    font-size: 2rem;
  }
`;

export const InformationsDiv = styled.div`
  color: #cdcdcd;
  justify-content: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 500px;

  svg {
    color: #ffffff;
    font-size: 2rem;
    padding-bottom: 0.8;

    opacity: 1;
  }

  #descrip {
    margin: 0;
    opacity: 0.7;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export const Name = styled.h3`
  font-size: 3.2rem;
`;

export const PlanetDataCards = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  div {
    width: 250px;
    height: 150px;
    border: solid thin #cdcdcd;
    box-sizing: border-box;
    padding: 20px 30px;
    color: #cdcdcd;
    border-radius: 5px;
    background-color: #2a2a2a4d;
  }

  h2 {
    opacity: 0.8;
    font-size: 1.2rem;
  }

  p {
    opacity: 0.8;
    font-size: 1.6rem;
  }
`;

export const FormAddPlanet = styled.div`
  width: 85%;
  background-color: #2a2a2a4d;
  border-radius: 5px;
  border: solid thin #cdcdcd;
  box-sizing: border-box;
  padding: 50px;

  h2 {
    color: #cdcdcd;
    font-size: 1.5rem;
  }


  #BtnBack {
    background-color: transparent;
    border-radius: 5px;
    border: solid thin #cdcdcd;
    cursor: pointer;
    color: white;
    font-weight: bold;
  }

  #BtnSend {
    background-color: #63bcbc;
    color: white;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const Form = styled.div`
  display: grid;
  grid-template:
    "name name name description description description" 1fr
    "area area area description description description" 1fr
    "distance distance duration duration gravity gravity" 1fr
    ". . . . buttonBack buttonSend" 1fr
    / 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;

  
  div {
    background-color: #2a2a2a;
    border-radius: 5px;
    color: white;
  }
`;