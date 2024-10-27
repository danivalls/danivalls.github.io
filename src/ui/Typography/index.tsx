import { StyledText } from "./Typography.styled";
import type { ReactNode } from "react";
import type {
  FontWeight,
  TextColor,
  TypographyVariant,
} from "../../theme/theme.types";

export type TypographyProps = {
  as: keyof JSX.IntrinsicElements;
  variant: TypographyVariant;
  variantTabletUp?: TypographyVariant;
  variantDesktopUp?: TypographyVariant;
  color?: TextColor;
  weight?: FontWeight;
  children: ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  as,
  children,
  variant,
  variantTabletUp,
  variantDesktopUp,
  color = "primary",
  weight = "regular",
  className,
}: TypographyProps) => {
  const variants = {
    mobile: variant,
    tablet: variantTabletUp || variant,
    desktop: variantDesktopUp || variantTabletUp || variant,
  };

  return (
    <StyledText
      as={as}
      $variant={variants.mobile}
      $variantTabletUp={variants.tablet}
      $variantDesktopUp={variants.desktop}
      $color={color}
      $weight={weight}
      className={className}
    >
      {children}
    </StyledText>
  );
};

export default Typography;
