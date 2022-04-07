import React from "react";

import { ModalContainer, BgStars, Modal } from "./Style";

const ModalDelete = (props) => {
  return (
    <Modal style={props.display ? { display: "flex" } : { display: "none" }}>
      <ModalContainer>
        <BgStars>
          <img
            style={{ width: "200px", height: "200px" }}
            src={props.image}
          ></img>
        </BgStars>

        <h1>Tem certeza?</h1>
        <p>
          Ao pressionar em <strong>deletar </strong>todos os dados desse planeta
          serão apagados dos sistema <strong> permanentemente!</strong> Deseja
          apagar todos os dados?
        </p>

        <div>
          <button id="btnBack" onClick={props.setarDisplay}>
            VOLTAR
          </button>
          <div onClick={props.setarDisplay}>
            <button onClick={props.deletePlanet} id="btnDelete">
              DELETAR
            </button>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default ModalDelete;
