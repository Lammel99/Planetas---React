import styled from "styled-components";
import Email from "../../Assets/Email.svg";
import Password from "../../Assets/Password.svg";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 50px;
`;
export const LoginCenterContainer = styled.div`
  width: 25%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  box-sizing: border-box;
  background-color: #202024;
  border: solid thin #70707040;
  border-radius: 5px;

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 70%;
    width: 80%;
  }

  input {
    height: 35px;

    color: #cdcdcd;
    padding-left: 35px;
    border: 0;
    border-radius: 5px;
    ::placeholder {
      color: #cdcdcd;
    }
  }

  input:nth-child(1) {
    background: url(${Email}) 11px 11px no-repeat #121214;
  }

  input:nth-child(2) {
    background: url(${Password}) 12px 9px no-repeat #121214;
  }

  button {
    height: 35px;
    background-color: #6bcecc;
    color: white;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  a {
    color: #6bcecc;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
export const LoginBanner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30%;
  height: 40vh;

  justify-content: center;

  h1 {
    font-size: 3rem;
    color: white;
    line-height: 1.5em;
    height: 35%;
  }

  img {
    width: 200px;
  }
`;
