const radius = {
  NONE: "none",
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

type Radius = (typeof radius)[keyof typeof radius];

export { radius };
export type { Radius };
