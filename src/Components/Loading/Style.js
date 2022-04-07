import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;

  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(56, 56, 56, 0.3);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
  }

  svg {
    color: #6bcecc;
    font-size: 5rem;
  }
`;
