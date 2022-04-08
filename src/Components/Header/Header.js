import React, { useContext } from "react";

import logo from "../../Assets/LogoLogin.svg";
import arrow from "../../Assets/Arrow.svg";
import person from "../../Assets/person.svg";
import { useUser } from "../../context/ContextEmail";
import { Link } from "react-router-dom";
import { HeaderContainer, UserInfo, HamburguerMenu } from "./Style";
import { BackGroundImg } from "../Bgs/Style";

const Header = (props) => {
  const { setUser, user } = useUser();

  const [displayModal, setDisplayModal] = React.useState(false);

  return (
    <BackGroundImg>
      <HeaderContainer>
        <img src={logo}></img>

        <UserInfo>
          <img src={person} />
          {user && <p>{user.email}</p>}
          <img
            src={arrow}
            style={{ cursor: "pointer" }}
            onClick={(event) => setDisplayModal(!displayModal)}
          />
        </UserInfo>

        <HamburguerMenu style={{ display: displayModal ? "flex" : "none" }}>
          <a
            style={{ paddingBottom: "11px", borderBottom: "solid thin black" }}
          >
            Minha conta
          </a>

          <Link to="/" onClick={() => setUser({ authToken: "" })}>
            Sair
          </Link>
        </HamburguerMenu>
      </HeaderContainer>
      {props.children}
    </BackGroundImg>
  );
};

export default Header;
