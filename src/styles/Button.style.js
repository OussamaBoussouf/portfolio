import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--black);
  color: white;
  padding: 1em 2em;
  border-radius: 5px;
  font-size: ${(props) => props.$size || ".8rem"};
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: 300ms ease-in-out;


  &:hover{
    background-color: var(--subtext-green);
    color: var(--black);
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  justify-content: ${props => props.$justify_content || ""};
  margin-block: ${(props) => props.$my};
  margin-inline: ${(props) => props.$mx};
  gap: ${(props) => props.$gap};
  margin-top: ${(props) => props.$mt || ""};
`;
