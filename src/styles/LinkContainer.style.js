import styled from "styled-components";

const IconContainer = styled.div`
  position: relative;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const IconList = styled.ul`
  position: absolute;
  right: 50%;
  top: 130%;
  transform: translate(50%, ${(props) => (props.$open ? "0%" : "-30%")});
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  transition: transform 300ms ease-in, visibility 300ms ease-in,
    opacity 300ms ease-in;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: -20px;
    left: 50%;
    border-bottom: 10px solid white;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    transform: translateX(-50%);
  }
`;

const IconListItem = styled.li``;

export {IconButton, IconContainer, IconListItem, IconList};