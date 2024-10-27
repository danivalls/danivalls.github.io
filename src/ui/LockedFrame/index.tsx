import {
  LockedFrameContainer,
  LockedFrameContent,
  LockedFrameUnderlay,
} from "./LockedFrame.styled";
import type { ReactNode } from "react";
import type { CSSUnit } from "../../types/styling.types";
import { BackgroundColor } from "../../theme/theme.types";

type Props = {
  height: CSSUnit;
  children: ReactNode;
  backgroundColor?: BackgroundColor;
  className?: string;
  underlay?: ReactNode;
};

const LockedFrame = ({
  height,
  children,
  className,
  underlay,
  backgroundColor,
}: Props) => {
  return (
    <LockedFrameContainer $height={height} $backgroundColor={backgroundColor}>
      <LockedFrameContent className={className}>{children}</LockedFrameContent>
      {underlay && (
        <LockedFrameUnderlay $height={height}>{underlay}</LockedFrameUnderlay>
      )}
    </LockedFrameContainer>
  );
};

export default LockedFrame;
