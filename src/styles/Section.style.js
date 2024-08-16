import styled from "styled-components";

export const Section = styled.section`
  margin-top: ${(props) => (props.$mt ? props.$mt : "")};
  margin-bottom: ${(props) => (props.$mb ? props.$mb : "")};
  padding-top: ${(props) => (props.$pb ? props.$pb : "")};
  padding-bottom: ${(props) => (props.$pt ? props.$pt : "")};
`;

export const SectionHeading = styled.h2`
  color: var(--text-w-opacity);
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  padding-bottom: 1em;
  border-bottom: 1px solid var(--text-w-opacity);
  font-weight: normal;
`;

