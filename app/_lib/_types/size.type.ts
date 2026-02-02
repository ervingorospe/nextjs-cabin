const sizes = {
  SMALL: "small",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

type Sizes = (typeof sizes)[keyof typeof sizes];

export { sizes };
export type { Sizes };
