import React, { useContext } from "react";

import logo from "../../Assets/LogoLogin.svg";
import arrow from "../../Assets/Arrow.svg";
import person from "../../Assets/person.svg";
import { EmailUser } from "../../context/ContextEmail";
import { Link } from "react-router-dom";
import { HeaderContainer, UserInfo, HamburguerMenu } from "./Style";


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
