import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;

z-index: 1;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
position: fixed;
background-color: rgba(56, 56, 56, 0.4);
height: 100vh;
width: 100vw;
display: flex;


div{
background-color: white;
width: 300px;
height: 100px;
border-radius: 0 0 10px 0;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
padding: 25px;
box-sizing: border-box;}

p{
  font-size: 1.2rem;
  text-align: center;
}`

const ModalSucess = (props) => {
 
  console.log(props.Sucess)
  return (
    <Modal style={{display: props.display ? 'flex' : 'none'}}>
      <div>
        {props.Sucess ? <p>{props.messageSucess} </p> :   <p>{props.messageError}</p> }
    
      </div>
    </Modal>
  );
};

export default ModalSucess;
