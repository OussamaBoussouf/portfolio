import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
    margin: 0;
    padding: 0;
    background-image: var(--body-bg-color);
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
}

:root{
    --body-bg-color: linear-gradient(#051914, #071814, #051914);
    --primary-color: #141e1b;
    --black: #252525;
    --subtext-gray: #aeafaf;
    --subtext-green: #41ffc9;
    --text-w-opacity: rgb(149, 158, 155);
}

#root:before {
    content: "";
    background-image: url("./images/grid.svg");
    background-repeat: repeat;
    z-index: -1;
    position: fixed;
    inset: 0;
    opacity: .2;
    width: 100%;
}

*, *::after, *::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

button{
  font-family: "Inter";
}

h1{
    line-height: 1.06rem;
    letter-spacing: 1.1px;
    color: white;
}


@font-face {
    font-family: 'Inter';
    src: url('./fonts/Inter_18pt-Bold.ttf');
    font-weight: bold;
}

@font-face {
    font-family: 'Inter';
    src: url('./fonts/Inter_18pt-Regular.ttf');
    font-weight: normal;
}

`;

export const Wrapper = styled.div`
  max-width: 1150px;
  width: 100%;
  padding-inline: 2rem;
  margin-inline: auto;
`;

export const GreenText = styled.span`
  color: var(--subtext-green);
`;

export const Text = styled.p`
  color: var(--subtext-gray);
  line-height: 1.5rem;
  margin-top: ${(props) => (props.$mt ? props.$mt : "")};
  margin-bottom: ${(props) => (props.$mb ? props.$mb : "")};
`;

export const Heading = styled.h1`
  margin-bottom: 0.5rem;
  line-height: 2.5rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: normal;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$cols || "repeat(1, 1fr)"};
  gap: ${(props) => (props.$gap ? props.$gap : ".5rem")};
  padding-top: ${(props) => (props.$pt ? props.$pt : "")};

  @media screen and (min-width: 500px) {
    grid-template-columns: ${(props) =>
      props.$sm_cols ? props.$sm_cols : "repeat( 2, 1fr)"};
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.$md_cols
        ? props.$md_cols
        : "repeat(auto-fit, minmax( 250px, 1fr))"};
  }
`;
