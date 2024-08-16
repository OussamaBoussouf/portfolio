import React from "react";
import { StyledMain } from "../styles/Main.style";
import {
  GreenText,
  Grid,
  Heading,
  Text,
  Wrapper,
} from "../styles/GlobalStyle.style";
import { Section, SectionHeading } from "../styles/Section.style";
import Technology from "./Technology";
import TechnologiesContainer from "./TechnologiesContainer";
import Project from "./Project";
import { Button, ButtonGroup } from "../styles/Button.style";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import { BACKEND, FRONTEND, TOOLS, PROJECTS } from "../constant/constant.jsx";
import 'react-toastify/dist/ReactToastify.css';

function Main() {
  const onSuccess = () => toast.success("Message sent successfully");
  const onError = () => toast.error("Ops something went wrong");
  return (
    <Wrapper>
      <StyledMain>
        {/* PRESENTATION SECTION */}
        <Section $mt="3rem" $mb="3rem">
          <Heading>
            Oussama <GreenText>Boussouf</GreenText>,
            <br /> front-end developer
          </Heading>
          <Text>
            As a front-end JavaScript developer, I build modern web apps with
            tools like <GreenText>React.js</GreenText>,
            <GreenText> Tailwind CSS</GreenText> &
            <GreenText> Styled Components</GreenText>
          </Text>
          <ButtonGroup $my="1rem" $gap="1rem">
            <Button as="a" href="./pdf/OussamaBoussouf.pdf" target="_blank">
              CHECK RESUME
            </Button>
            <Modal onSuccess={onSuccess} onError={onError}/>
          </ButtonGroup>
        </Section>
        {/* ABOUT ME SECTION */}
        <Section $mb="4rem">
          <SectionHeading>ABOUT ME</SectionHeading>
          <Text>
            My journey into web development began as a curious exploration, but
            it quickly evolved into a deep passion that drives my career
            aspirations. I am not just a coder; I am a problem solver, a tech
            enthusiast, and a dedicated learner who is eager to grow in this
            ever-evolving field. My focus is on front-end development, where
            I've honed my skills through several personal projects, mastering
            technologies that bring ideas to life.
          </Text>
          <Text $mt="1rem">
            I am excited about the opportunity to contribute my creativity and
            technical expertise to a dynamic, forward-thinking team. I am eager
            to collaborate on impactful projects that push boundaries and create
            meaningful user experiences.
          </Text>
        </Section>
        {/* PROJECTS SECTION */}
        <Section $mb="4rem">
          <SectionHeading>PROJECTS</SectionHeading>
          <Grid
            $sm_cols="auto auto"
            $md_cols="auto auto"
            $gap="1rem"
            $pt="1.5rem"
          >
            {PROJECTS.map((project) => (
              <Project
                key={project.id}
                {...project}
                delay={`${project.id * 400}ms`}
              />
            ))}
          </Grid>
        </Section>
        {/* TECHNOLOGIES SECTION */}
        <Section $mb="4rem">
          <SectionHeading>TECHNOLOGIES</SectionHeading>
          <TechnologiesContainer title="Backend">
            <Grid $cols="auto auto">
              {BACKEND.map((technology, index) => (
                <Technology
                  key={index}
                  label={technology.label}
                  icon={technology.icon}
                />
              ))}
            </Grid>
          </TechnologiesContainer>
          <TechnologiesContainer title="Frontend">
            <Grid $cols="auto auto">
              {FRONTEND.map((technology, index) => (
                <Technology
                  key={index}
                  label={technology.label}
                  icon={technology.icon}
                />
              ))}
            </Grid>
          </TechnologiesContainer>
          <TechnologiesContainer title="Tools">
            <Grid $cols="auto auto">
              {TOOLS.map((technology, index) => (
                <Technology
                  key={index}
                  label={technology.label}
                  icon={technology.icon}
                />
              ))}
            </Grid>
          </TechnologiesContainer>
        </Section>
      </StyledMain>
      <ToastContainer/>
    </Wrapper>
  );
}

export default Main;
