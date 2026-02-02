const variants = {
  SOLID: "solid",
  OUTLINE: "outline",
  TEXT: "text",
} as const;

type ButtonVariant = (typeof variants)[keyof typeof variants];

export { variants };
export type { ButtonVariant };
