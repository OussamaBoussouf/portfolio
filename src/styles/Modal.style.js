import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 5;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`;
