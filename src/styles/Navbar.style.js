import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
`;

export const Logo = styled.div`
  cursor: pointer;

  transition: scale 300ms ease-in-out, 
  rotate 300ms ease-in-out;

  &:hover {
    scale: 0.9;
    rotate: -5deg;
  }
`;
