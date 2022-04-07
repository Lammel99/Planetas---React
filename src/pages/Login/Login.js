import React from "react";
import BgLoginAndHome from "../../components/Bgs/BgLoginAndHome";
import LogoLogin from "../../Assets/LogoLogin.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ContainerLogin, LoginCenterContainer, LoginBanner } from "./Style";
import ModalSucess from "../../components/ModalHelper/ModalHelper";
import { authenticateUser } from "../../services/UserServices/authenticateUser";
import { useUser } from "../../context/ContextEmail";
import { useMessage } from "../../context/ContextMessage";

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

  const { setUser } = useUser();
  const { setMessage } = useMessage();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    loginValidation: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      authenticateUser(values.email, values.password)
        .then((response) => {
          if (response.data.token) {
            setUser({ email: values.email, authToken: true });
            setMessage({
              content: "Login efetuado com sucesso!",
              display: true,
            });
            setTimeout(() => {
              navigate("/home");
            }, 2000);
          } else {
            setMessage({
              content: "Os dados de login estão incorretos, tente novamente",
              display: true,
            });
          }
        })
        .catch(() =>
          setMessage({
            content: "Os dados de login estão incorretos, tente novamente",
            display: true,
          })
        );
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
    </BgLoginAndHome>
  );
};

export default Login;
