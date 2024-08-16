import { StyledFooter } from "../styles/Footer.style";
import { GreenText, Text, Wrapper } from "../styles/GlobalStyle.style";

function Footer() {
  return (
    <Wrapper>
      <StyledFooter>
        <Text>2024</Text>
        <Text>
          Built with <GreenText>React</GreenText> & <GreenText> Styled components</GreenText>
        </Text>
      </StyledFooter>
    </Wrapper>
  );
}

export default Footer;
