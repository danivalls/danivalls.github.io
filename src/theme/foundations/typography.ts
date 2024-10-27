import { TypographyVariant } from "../theme.types";

export const TYPOGRAPHY_VARIANTS = [
  "display1",
  "display2",
  "display3",
  "display4",
  "display5",
  "text1",
  "text2",
  "text3",
] as const;

export const fontFamily = {
  default: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;

export const fontSize: Record<TypographyVariant, `${number}px`> = {
  display1: "128px",
  display2: "96px",
  display3: "64px",
  display4: "56px",
  display5: "48px",
  text1: "32px",
  text2: "24px",
  text3: "16px",
} as const;

export const lineHeight: Record<TypographyVariant, number> = {
  display1: 1.25,
  display2: 1.25,
  display3: 1.25,
  display4: 1.25,
  display5: 1.5,
  text1: 1.5,
  text2: 1.5,
  text3: 1.5,
} as const;

export const letterSpacing: Record<TypographyVariant, `${number}em`> = {
  display1: "-0.02em",
  display2: "-0.015em",
  display3: "-0.01em",
  display4: "-0.005em",
  display5: "0em",
  text1: "0em",
  text2: "0em",
  text3: "0em",
} as const;
