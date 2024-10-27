import { breakpoints } from "./foundations/breakpoints";
import { palette, primitives } from "./foundations/colors";
import { radius } from "./foundations/radius";
import { spacing } from "./foundations/spacing";
import * as typography from "./foundations/typography";

export const theme = {
  breakpoints,
  palette: {
    ...palette,
    primitiveColors: primitives,
  },
  radius,
  spacing,
  typography,
} as const;
