import React from "react";
import {
  StyledTechnologies,
  TechnologyHeading,
} from "../styles/Technologies.style";

function TechnologiesContainer({ title, children }) {
  return (
    <StyledTechnologies>
      <TechnologyHeading>{title}</TechnologyHeading>
      {children}
    </StyledTechnologies>
  );
}

export default TechnologiesContainer;
