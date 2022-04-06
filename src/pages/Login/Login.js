import React from "react";
import BgLoginAndHome from "../../components/Bgs/BgLoginAndHome";
import LogoLogin from "../../Assets/LogoLogin.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {
  ContainerLogin,
  LoginCenterContainer,
  LoginBanner,
  HamburguerMenu,
} from "./Style";
import ModalSucess from "../../helpers/ModalSucessFailure";
import { authenticateUser } from "../../services/authenticateUser";

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

  const [modalDisplay, setModalDisplay] = React.useState(false);
  const [sucess, setSucess] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    loginValidation: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      authenticateUser(values.email, values.password)
        .then(() => {
          setSucess(true);
          setModalDisplay(true);
          setTimeout(() => {
            navigate("/home");
          }, 1500);
          props.sendData(values.email);
        })
        .catch((error) => alert(error.response.data.message));
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
            <Link to="/cadastro">Cadastro de novo usuário</Link>
          </form>
        </LoginCenterContainer>
        <LoginBanner>
          <img src={LogoLogin} />
          <h1>Faça seu Login na plataforma</h1>
        </LoginBanner>
      </ContainerLogin>
      <ModalSucess
        display={modalDisplay}
        Sucess={sucess}
        messageError={"Dados de login incorretos"}
        messageSucess={"Login efetuado com sucesso!"}
      />
    </BgLoginAndHome>
  );
};

export default Login;
