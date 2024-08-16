import { Button, ButtonGroup } from "../styles/Button.style";
import {
  Image,
  ProjectContainer,
  ProjectDescription,
  ProjectHeading,
  ProjectText,
  Stack,
  StackList,
} from "../styles/Project.style";

function Project(props) {
  const { delay, title, description, preview, code, image, stacks } = props;

  return (
    <ProjectContainer $delay={delay}>
      <Image src={image} />

      <ProjectDescription>
        <ProjectHeading $mb=".7rem">{title}</ProjectHeading>
        <ProjectText $mb="1rem">{description}</ProjectText>
        <StackList>
          {stacks.map((stack) => (
            <Stack>{stack}</Stack>
          ))}
        </StackList>
        <ButtonGroup $gap=".8rem">
          <Button as="a" href={preview} target="_blank" $size=".7rem">PREVIEW</Button>
          <Button as="a" href={code} target="_blank" $size=".7rem">CODE</Button>
        </ButtonGroup>
      </ProjectDescription>
    </ProjectContainer>
  );
}

export default Project;
