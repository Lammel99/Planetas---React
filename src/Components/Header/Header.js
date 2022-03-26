import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../../Assets/LogoLogin.svg";
import arrow from "../../Assets/Arrow.svg";
import person from "../../Assets/person.svg";
import { EmailUser } from "../../context/ContextEmail";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
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

const UserInfo = styled.div` 
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
`

 const HamburguerMenu = styled.div`

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

const Header = () => {
  const teste = useContext(EmailUser);
  const [displayModal, setDisplayModal] = React.useState(false);

  return (
    <HeaderContainer>
      <img src={logo}></img>

      <UserInfo>
        
        <img src={person} />
        <p>{teste}</p>
        <img src={arrow} style={{ cursor: 'pointer'}} onClick={event => setDisplayModal(!displayModal)} />
      </UserInfo>

      <HamburguerMenu style={{display: displayModal ? 'flex' : 'none' }}>
        <a style={{paddingBottom: '11px', borderBottom: 'solid thin black'}}>Minha conta</a>

        <Link to='/'>Sair</Link>

      </HamburguerMenu>
    </HeaderContainer>
  );
};

export default Header;
