import React from "react";
import { ColorLevel, Colors } from "./color.type";
import { Sizes } from "./size.type";

interface StypeProps {
  size?: Sizes;
  color?: Colors;
  level?: ColorLevel;
}

interface GenericProps {
  className?: string;
  children?: React.ReactNode;
}

export type { StypeProps, GenericProps };
