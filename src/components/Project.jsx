import { Button, ButtonGroup } from "../styles/Button.style";
import {
  ProjectContainer,
  ProjectDescription,
  ProjectHeading,
  ProjectText,
  Stack,
  StackList,
} from "../styles/Project.style";

function Project(props) {
  const { delay, title, description, preview, code, stacks } = props;

  return (
    <ProjectContainer $delay={delay}>
      <ProjectDescription>
        <ProjectHeading $mb=".7rem">{title}</ProjectHeading>
        <ProjectText $mb="1rem">{description}</ProjectText>
        <StackList>
          {stacks.map((stack, index) => (
            <Stack key={index}>{stack}</Stack>
          ))}
        </StackList>
        <ButtonGroup $mt="auto" $justify_content="flex-end" $gap=".8rem">
          <Button as="a" href={preview} target="_blank" $size=".7rem">PREVIEW</Button>
          <Button as="a" href={code} target="_blank" $size=".7rem">CODE</Button>
        </ButtonGroup>
      </ProjectDescription>
    </ProjectContainer>
  );
}

export default Project;
