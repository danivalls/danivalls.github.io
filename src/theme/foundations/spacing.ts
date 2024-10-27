export const spacing = {
  xxs: "2px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "20px",
  "3xl": "24px",
  "4xl": "32px",
  "5xl": "40px",
  "6xl": "48px",
  "7xl": "64px",
  "8xl": "80px",
  "9xl": "96px",
  "10xl": "128px",
} as const;

export type SpacingOption = keyof typeof spacing;
