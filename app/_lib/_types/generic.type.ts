import React from "react";
import { ColorLevel, Colors } from "./color.type";
import { Sizes } from "./size.type";

interface SizeProps {
  size?: Sizes;
  colorType?: Colors;
  level?: ColorLevel;
}

interface GenericProps {
  className?: string;
  children?: React.ReactNode;
}

export type { SizeProps, GenericProps };
