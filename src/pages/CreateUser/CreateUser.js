import { useFormik } from "formik";
import React from "react";
import Bg from "../../components/Bgs/Bg";
import { postUser } from "../../services/postUser";
import { ContainerForm, Form, Title } from "./Styles";

const CreateUser = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    loginValidation: false,
    onSubmit: (values) => {
      postUser( values.username, values.email, values.password).then(response => console.log(response))
    },
  });

  return (
    <Bg>
      <ContainerForm>
        <Form onSubmit={formik.handleSubmit}>
          <Title>Cadastrar novo usuário</Title>
          <div>
            <input
              placeholder="Nome de usuário"
              required
              id="username"
              name="username"
              type="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            ></input>
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
          </div>
          <button type="submit">CADASTRAR</button>
        </Form>
      </ContainerForm>
    </Bg>
  );
};

export default CreateUser;
