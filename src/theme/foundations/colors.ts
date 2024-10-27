export const primitives = {
  dark: {
    100: "#000000",
    300: "#333333",
    500: "#666666",
    700: "#999999",
    900: "#CCCCCC",
  },
  light: {
    100: "#FFFFFF",
    300: "#E6E6E6",
    500: "#CCCCCC",
    700: "#B3B3B3",
    900: "#999999",
  },
  highlight: {
    100: "#beedb0",
    500: "#66CC66",
    900: "#459f48",
  },
} as const;

export const palette = {
  background: {
    primary: primitives.light[100],
    secondary: primitives.light[300],
    tertiary: primitives.light[500],
    primaryInverse: primitives.dark[300],
    secondaryInverse: primitives.dark[500],
    tertiaryInverse: primitives.dark[700],
  },

  text: {
    primary: primitives.dark[100],
    secondary: primitives.dark[300],
    tertiary: primitives.dark[500],
    primaryInverse: primitives.light[100],
    secondaryInverse: primitives.light[300],
    tertiaryInverse: primitives.light[500],
    accent: primitives.highlight[500],
    accentSubtle: primitives.highlight[100],
    accentBold: primitives.highlight[900],
  },

  border: {
    primary: primitives.dark[500],
    secondary: primitives.dark[700],
    tertiary: primitives.dark[900],
    primaryInverse: primitives.light[500],
    secondaryInverse: primitives.light[700],
    tertiaryInverse: primitives.light[900],
  },
} as const;
