import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/LogoLogin.svg";
import arrow from "../assets/Arrow.svg";
import person from "../assets/person.svg";
import { EmailUser } from "./ContextEmail";

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
  div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
  }
`;

const Header = () => {
  const teste = useContext(EmailUser);

  return (
    <HeaderContainer>
      <img src={logo}></img>

      <div>
        3
        <img src={person} />
        <p>{teste}</p>
        <img src={arrow} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
