import React from "react";
import { ColorLevel, Colors } from "./color.type";
import { Sizes } from "./size.type";

interface SizeProps {
  size?: Sizes;
}

interface MethodProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface GenericProps {
  onClick?: () => void;
  className?: string;
  color?: Colors;
  level?: ColorLevel;
  children?: React.ReactNode;
}

export type { SizeProps, MethodProps, GenericProps };
