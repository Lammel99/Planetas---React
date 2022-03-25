import React from "react";
import BgLoginAndHome from "../../components/BgLoginAndHome";
import LogoLogin from "../../Assets/LogoLogin.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate} from "react-router-dom";
import { ContainerLogin, LoginCenterContainer, LoginBanner} from './Style'
import {loginData} from '../../data/data'
import ModalSucess from "../../components/ModalSucessFailure";


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
  const [sucess, setSucess] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    loginValidation: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {


      if(loginData.some(log => log.email == values.email && log.password == values.password)){
        setSucess(true);
        setModalDisplay(true);     
      
        setTimeout(() => {
          navigate('/planetas');}, 1500);

      } else {
       
        setModalDisplay(true);
        setTimeout(() => {
          setModalDisplay(false);}, 1500);
      }
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
      <ModalSucess display={modalDisplay} Sucess={sucess} messageError={'Dados de login incorretos'} messageSucess={'Login efetuado com sucesso!'}/>
    </BgLoginAndHome>
  );
};

export default Login;
