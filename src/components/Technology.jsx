import React from "react";
import { Container, Icon, Label } from "../styles/Technology.style";


function Technology({icon, label}) {
  return (
    <Container>
      <Icon>
        {icon}
      </Icon>
      <Label>{label}</Label>
    </Container>
  );
}

export default Technology;
