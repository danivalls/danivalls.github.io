import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ScrollDownIconContainer = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  color: ${({ theme }) => theme.palette.text.primaryInverse};
  font-size: ${({ theme }) => theme.typography.fontSize.display4};
  animation: floatUpDown 2s infinite;

  @keyframes floatUpDown {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }

    50% {
      transform: translateX(-50%) translateY(0.5em);
    }
  }
`;
