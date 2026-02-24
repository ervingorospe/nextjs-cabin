const variants = {
  CONTAINED: "contained",
  OUTLINED: "outlined",
} as const;

type ButtonVariant = (typeof variants)[keyof typeof variants];

export { variants };
export type { ButtonVariant };
