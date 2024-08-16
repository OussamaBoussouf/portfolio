import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);
  padding: 0.8em;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 5px;
`;

export const Icon = styled.div`
  background-color: #273a3e;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Label = styled.p`
  color: white;
  font-size: .9rem;
`;
