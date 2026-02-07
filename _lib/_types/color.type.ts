const colors = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ACCENT: "accent",
  BACKGROUND: "background",
  FOREGROUND: "foreground",
} as const;

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

type Colors = (typeof colors)[keyof typeof colors];
type ColorLevel = (typeof levels)[number];

export { colors, levels };
export type { ColorLevel, Colors };
