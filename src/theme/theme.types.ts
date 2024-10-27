import { theme } from ".";
import { TYPOGRAPHY_VARIANTS } from "./foundations/typography";

export type Theme = typeof theme;
export type BackgroundColor = keyof Theme["palette"]["background"];
export type TextColor = keyof Theme["palette"]["text"];
export type PrimitiveColor = keyof Theme["palette"]["primitiveColors"];
export type FontWeight = keyof Theme["typography"]["fontWeight"];
export type TypographyVariant = (typeof TYPOGRAPHY_VARIANTS)[number];
export type Radius = keyof Theme["radius"];
export type Spacing = keyof Theme["spacing"];
export type Breakpoint = keyof Theme["breakpoints"]["min"];
