import styled from "styled-components";

export const ContainerForm = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #cdcdcd;
`;

export const Form = styled.form`
  width: 500px;
  height: 400px;
  background-color: #202024;
  border: solid thin #70707040;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  justify-content: space-evenly;
  padding: 0 25px;
  box-sizing: border-box;
  div {
    display: flex;
    gap: 20px;
    flex-flow: column nowrap;
  }

  input {
    background-color: #121214;
    color: #cdcdcd;
    border: 0;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 1rem;
    height: 40px;
    width: 300px;

    ::placeholder {
      color: #cdcdcd;
    }
  }

  button {
    height: 40px;
    width: 120px;
    background-color: #6bcecc;
    color: white;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;
