import React from "react";
import styled from "styled-components";
import BgLoginAndHome from "../../components/BgLoginAndHome";
import LogoLogin from "../../Assets/LogoLogin.svg";
import Email from "../../Assets/Email.svg";
import Password from "../../Assets/Password.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, NavLink } from "react-router-dom";

const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 50px;
`;
const LoginCenterContainer = styled.div`
  width: 25%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-sizing: border-box;
  background-color: #202024;
  border: solid thin #70707040;
  border-radius: 5px;

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 60%;
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
const LoginBanner = styled.div`
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

const Login = (props) => {
  let navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string("Insira seu Email")
      .email("Email inválido")
      .required("Obrigatório"),
    password: Yup.string("Insira sua senha")
      .min(8, "No minímo 8 caracteres")
      .required("Obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: () => {
      navigate("/home");
    },
  });

  return (
    <BgLoginAndHome>
      <ContainerLogin>
        <LoginCenterContainer>
          <form onSubmit={formik.handleSubmit}>
            <input
              placeholder="E-mail"
              required
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            ></input>
            <input
              placeholder="Senha"
              required
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            ></input>
            <a>Esqueci minha senha</a>
            <button type="submit">ENTRAR</button>
          </form>
        </LoginCenterContainer>
        <LoginBanner>
          <img src={LogoLogin} />
          <h1>Faça seu Login na plataforma</h1>
        </LoginBanner>
      </ContainerLogin>
    </BgLoginAndHome>
  );
};

export default Login;
