import React from "react";
import styled from "styled-components";
import { useMessage } from "../../context/ContextMessage";

const Modal = styled.div`
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: white;
    width: 300px;
    height: 150px;
    box-shadow: -2px 0px 10px 0px rgba(51,51,51,1);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    box-sizing: border-box;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const ModalHelper = (props) => {
  const { message, setMessage } = useMessage();

  message.display &&
    setTimeout(() => {
      setMessage({ display: false });
    }, 2000);

  return (
    <Modal style={{ display: message.display ? "flex" : "none" }}>
      <div>
        <p>{message.content} </p>
      </div>
    </Modal>
  );
};

export default ModalHelper;
