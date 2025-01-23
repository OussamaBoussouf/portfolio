import styled from "styled-components";

export const ProjectContainer = styled.div`
  background-color: var(--primary-color);
  padding: 1em;
  gap: 1.5rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 700ms ease-in-out;
  transform: translate3d(0, 3rem, 0);
`;

export const ProjectText = styled.p`
  font-size: 0.9rem;
  line-height: 1.2rem;
  color: var(--subtext-gray);
`;

export const ProjectHeading = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: ${(props) => (props.$mb ? props.$mb : "")};
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`

export const StackList = styled.ul`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  list-style: none;
  margin-block: 1rem;
`;
export const Stack = styled.li`
  padding: 0.5em 0.5em;
  border-radius: 5px;
  font-size: 0.8rem;
  color: white;
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
