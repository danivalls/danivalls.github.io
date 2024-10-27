import styled from "styled-components";

export const SectionContent = styled.div`
  z-index: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing["5xl"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.min.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing["8xl"]};
  }
`;
