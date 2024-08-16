import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`;
