import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
        transform: translate3d(-50%, 0, 0);
        opacity: 0;
     }
     to{
        transform: translate3d(-50%, 10%, 0);
        opacity: 1;
     }
`;

export const FormContainer = styled.div`
  max-width: 500px;
  width: 80%;
  background-color: white;
  position: absolute;
  left: 50%;
  z-index: 20;
  border-radius: 5px;
  padding: 2em;
  animation: ${fadeIn} 700ms ease-in-out forwards;
`;

export const StyledForm = styled.form`
  /* padding: 2em; */
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7em;
  border-radius: 5px;
  border: 2px solid var(--subtext-gray);

  &::placeholder {
    color: var(--subtext-gray);
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.8rem;
`;

export const Message = styled.textarea`
  width: 100%;
  padding: 0.7em;
  border-radius: 5px;
  border: 2px solid var(--subtext-gray);
  font-family: "Inter";
  resize: none;
  &::placeholder {
    color: var(--subtext-gray);
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--black);
  color: white;
  padding: 1em 2em;
  width: 100%;
  border-radius: 5px;
  font-size: ${(props) => props.$size || ".8rem"};
  cursor: pointer;
  border: none;

  &:disabled{
    background-color: var(--subtext-gray);
    cursor: default;
  }

`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
`;
