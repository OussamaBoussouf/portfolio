import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
     to{
        transform: translate3d(0, 0, 0);
        opacity: 1;
     }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  padding: 1em;
  gap: 1.5rem;
  border-radius: 5px;
  opacity: 0;
  transform: translate3d(0, 2rem, 0);
  animation: ${fadeIn} 700ms ease-in-out forwards;
  animation-delay: ${(props) => props.$delay};
  
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ProjectText = styled.p`
  font-size: .9rem;
  line-height: 1.2rem;
  color: var(--subtext-gray);
`

export const ProjectHeading = styled.h3`
  color: white;
  margin-bottom: ${props => props.$mb ? props.$mb : ""} ;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const StackList = styled.ul`
  display:flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 2rem;
`
export const Stack = styled.li`
  padding: .5em .5em;
  border-radius: 5px;
  font-size: .8rem;
  background-color: var(--subtext-green);
`

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
