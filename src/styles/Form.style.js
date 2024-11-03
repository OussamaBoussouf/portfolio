import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    transform: translate(-50%, 0%);
  } to{
    transform: translate(-50%, 10%);
  }
`;

const slideUp = keyframes`
  to{
    bottom: 0%;
  }
`;

export const FormContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  background-color: white;
  position: fixed;
  left: 50%;
  bottom: -70%;
  z-index: 20;
  transform: translateX(-50%);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 2em;
  animation: ${slideUp} 500ms ease-in-out forwards;
`;

export const StyledForm = styled.form`
  
`;

export const FormDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
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

  &:disabled {
    background-color: var(--subtext-gray);
    cursor: default;
  }
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
`;
