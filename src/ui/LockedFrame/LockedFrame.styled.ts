import styled from "styled-components";
import type { CSSUnit } from "../../types/styling.types";
import { BackgroundColor } from "../../theme/theme.types";

export const LockedFrameContainer = styled.section<{
  $height: CSSUnit;
  $backgroundColor?: BackgroundColor;
}>`
  width: 100%;
  height: ${({ $height: height }) => height};
  overflow: hidden;
  position: relative;
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor ? theme.palette.background[$backgroundColor] : "unset"};
  clip-path: inset(0);
`;

export const LockedFrameContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const LockedFrameUnderlay = styled.div<{ $height: string }>`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -1;

  &,
  & > * {
    width: 100vw;
    height: ${({ $height }) => $height};
    object-fit: cover;
  }
`;
