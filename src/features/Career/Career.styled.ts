import styled from "styled-components";

export const CareerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.min.tablet}) {
    gap: ${({ theme }) => theme.spacing["2xl"]};
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title title" "education experience";

    h2 {
      grid-area: title;
    }
  }
`;

export const CareerCard = styled.div`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.palette.border.primaryInverse};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  color: ${({ theme }) => theme.palette.text.primaryInverse};
`;
