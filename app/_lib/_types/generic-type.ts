import React from "react";
import { ColorLevel, Colors } from "./color-types";
import { Sizes } from "./size-types";

interface SizeProps {
  size?: Sizes;
}

interface MethodProps {
  onClick?: () => void;
}

interface GenericProps<TRef = unknown> {
  className?: string;
  color?: Colors;
  level?: ColorLevel;
  children?: React.ReactNode;
  ref?: React.Ref<TRef>;
}

export type { SizeProps, MethodProps, GenericProps };
