import styled, { css } from "styled-components";
import { AnimationEntrance } from "./AnimatedEntrance.types";

const bounce = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";

export const AnimatedSpan = styled.span<{
  $animation: AnimationEntrance;
  $delay: number;
  $duration: number;
  $triggerAnimation: boolean;
  $transition: string;
}>`
  display: inline-block;
  ${({ $triggerAnimation, $duration, $animation, $delay, $transition }) =>
    $triggerAnimation
      ? css`
          animation: ${$animation}
            ${$transition === "bounce" ? bounce : $transition};
          animation-duration: ${$duration}s;
          animation-fill-mode: forwards;
          animation-delay: ${$delay}s;
        `
      : ""}

  opacity: 0;

  @keyframes slideUp {
    0% {
      transform: translateY(1em);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-1em);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-1em);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(1em);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
