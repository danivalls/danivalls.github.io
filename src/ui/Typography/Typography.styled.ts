import styled from "styled-components";
import {
  TypographyVariant,
  TextColor,
  FontWeight,
} from "../../theme/theme.types";

type Props = {
  $variant: TypographyVariant;
  $variantTabletUp: TypographyVariant;
  $variantDesktopUp: TypographyVariant;
  $color: TextColor;
  $weight: FontWeight;
};

export const StyledText = styled.p<Props>`
  font-family: ${({ theme }) => theme.typography.fontFamily.default};
  font-size: ${({ theme, $variant }) => theme.typography.fontSize[$variant]};
  color: ${({ theme, $color }) => theme.palette.text[$color]};
  font-weight: ${({ theme, $weight }) => theme.typography.fontWeight[$weight]};
  line-height: ${({ theme, $variant }) =>
    theme.typography.lineHeight[$variant]};
  letter-spacing: ${({ theme, $variant }) =>
    theme.typography.letterSpacing[$variant]};

  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.min.tablet}) {
    font-size: ${({ theme, $variantTabletUp }) =>
      theme.typography.fontSize[$variantTabletUp]};
    line-height: ${({ theme, $variantTabletUp }) =>
      theme.typography.lineHeight[$variantTabletUp]};
    letter-spacing: ${({ theme, $variantTabletUp }) =>
      theme.typography.letterSpacing[$variantTabletUp]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.min.desktop}) {
    font-size: ${({ theme, $variantDesktopUp }) =>
      theme.typography.fontSize[$variantDesktopUp]};
    line-height: ${({ theme, $variantDesktopUp }) =>
      theme.typography.lineHeight[$variantDesktopUp]};
    letter-spacing: ${({ theme, $variantDesktopUp }) =>
      theme.typography.letterSpacing[$variantDesktopUp]};
  }
`;
