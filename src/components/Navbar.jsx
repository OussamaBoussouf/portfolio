import React from "react";
import { Logo, StyledNavbar } from "../styles/Navbar.style";
import { Wrapper} from "../styles/GlobalStyle.style";
import LinkContainer from "./LinkContainer";

function Navbar() {
  return (
    <Wrapper>
      <StyledNavbar>
        <Logo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            version="1.1"
            width={40}
            height={40}
          >
            <rect width="40" height="40" rx="5" ry="5" fill="white" />
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="black"
              fontSize="29"
              fontWeight="bold"
            >
              O
            </text>
          </svg>
        </Logo>
        <LinkContainer/>
      </StyledNavbar>
    </Wrapper>
  );
}

export default Navbar;
