import React from "react";
import BgLoginAndHome from "../../components/Bgs/BgLoginAndHome";
import LogoLogin from "../../Assets/LogoLogin.svg";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ContainerLogin, LoginCenterContainer, LoginBanner } from "./Style";
import { authenticateUser } from "../../services/UserServices/authenticateUser";
import { useUser } from "../../context/ContextEmail";
import { useMessage } from "../../context/ContextMessage";

const Login = () => {
  const navigate = useNavigate();
  const validationSchema = object({
    email: string().email("Email inválido").required("Obrigatório"),
    password: string().min(8, "No minímo 8 caracteres").required("Obrigatório"),
  });
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
        .then(
          (response) => (
            setUser({ email: values.email, authToken: response.data.token }),
            (setMessage({
              content: "Login efetuado com sucesso!",
              display: true,
            }),
            setTimeout(() => {
              navigate("/home");
            }, 2000))
          )
        )
        .catch((error) =>
          setMessage({
            content:
              "Houve um erro ao tentar o login, tente novamente mais tarde",
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
