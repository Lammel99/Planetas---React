
import styled from "styled-components";


export const SectionAddPlanet = styled.section`
display: flex;
flex-flow: column nowrap;
align-items: center;
gap: 80px;
`;

export const PhotoAndDescription = styled.div`
width: 95%;
display: flex;
flex-flow: row wrap;
gap: 320px;
`;

export const AddPhotoDiv = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
gap: 35px;

div {
  width: 450px;
  height: 450px;
  background-color: #2a2a2a4d;

  border: solid medium #cdcdcd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cdcdcd;
  font-size: 2rem;
  gap: 15px;
}

svg {
  font-size: 2.5rem;
  color: #cdcdcd;
  opacity: 0.7;
  cursor: pointer;
}

#Arrow {
  font-size: 3rem;
}
`;

export const InformationsDiv = styled.div`
color: #cdcdcd;

display: flex;
flex-flow: column nowrap;
align-items: center;
font-size: 1.5rem;

svg {
  color: #ffffff;
  font-size: 2rem;
  padding-bottom: 0%.8;
  border-bottom: medium solid white;
  opacity: 1;
}

#descrip {
  opacity: 0.7;
}
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
  padding: 10px 20px;
  color: #cdcdcd;
  border-radius: 5px;
  background-color: #2a2a2a4d;
}

h2 {
  opacity: 0.8;
  font-size: 1.2rem;
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

div {
  background-color: #2a2a2a;
  border-radius: 5px;
  color: white;
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
export const Form = styled.form`
display: grid;
grid-template:
  "name name name description description description" 1fr
  "area area area description description description" 1fr
  "distance distance duration duration gravity gravity" 1fr
  ". . . . buttonBack buttonSend" 1fr
  / 1fr 1fr 1fr 1fr 1fr 1fr;
gap: 30px;
`;

export const ModalChoosePhoto = styled.div`
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
div{
  background-color: white;
position: fixed;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 25px;
padding: 50px;
border-radius: 5px;

}
img{
  width: 200px;
  height: 180px;
}`