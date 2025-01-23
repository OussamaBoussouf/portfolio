import { forwardRef } from "react";
import { Button, ButtonGroup } from "../styles/Button.style";
import {
  ProjectContainer,
  ProjectDescription,
  ProjectHeading,
  ProjectImage,
  ProjectText,
  Stack,
  StackList,
} from "../styles/Project.style";

const Project = forwardRef(function Project(props, ref) {
  const { title, description, preview, code, stacks, image, aKey } = props;

  return (
    <ProjectContainer
      ref={(element) => {
        ref.current[aKey] = element;
      }}
    >
      <ProjectDescription>
        <ProjectHeading $mb=".7rem">{title}</ProjectHeading>
        <ProjectImage src={image} />
        <ProjectText $mb="1rem">{description}</ProjectText>
        <StackList>
          {stacks.map((stack, index) => (
            <Stack key={index}>{stack}</Stack>
          ))}
        </StackList>
        <ButtonGroup $mt="auto" $justify_content="flex-end" $gap=".8rem">
          <Button as="a" href={preview} target="_blank" $size=".7rem">
            PREVIEW
          </Button>
          <Button as="a" href={code} target="_blank" $size=".7rem">
            CODE
          </Button>
        </ButtonGroup>
      </ProjectDescription>
    </ProjectContainer>
  );
});

export default Project;
