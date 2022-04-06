
import styled from 'styled-components';


export const MainContainer = styled.div`
padding-top: 50px;
display: flex;
flex-flow: column nowrap;
align-items: center;
color: white;
text-align: center;
justify-content: space-around;
gap: 25px;
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

export const ContainerIcons = styled.div`
display: flex;
width: 75%;
margin: auto;
flex-flow: row wrap;
justify-content: space-between;
padding: 50px 0;

div {
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  align-items: center;
}

img {
  padding: 10px;
  border-radius: 50%;
  background-color: white;
  width: 30px;
}

a {
  color: white;
  text-decoration: none;
}
`;