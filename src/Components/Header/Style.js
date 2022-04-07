import styled from 'styled-components';


export const HeaderContainer = styled.div`

  height: 120px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid thin grey;
  box-sizing: border-box;
  padding: 0 5%;
  color: white;
 
`;

export const UserInfo = styled.div` 
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
`

 export const HamburguerMenu = styled.div`

position: absolute;
z-index: 1;
left: 85%;
top: 90px;
width: 182px;
height: 100px;
background-color: white;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
border-radius: 5px;
box-sizing: border-box;
padding: 20px 15px;


a{
  color: black;
  text-decoration: none;
  margin: 0px;
 
}
`