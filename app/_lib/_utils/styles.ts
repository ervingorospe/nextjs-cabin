import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ColorLevel, Colors } from "@/types/color-types";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

type colorType = {
  color: Colors;
  level: ColorLevel | null;
};

const getColors = ({ color, level }: colorType) => {
  const colorType = color ? color : "primary";
  const colorLevel = level ? `-${level}` : "";

  return `${colorType}${colorLevel}`;
};

const getBgColor = ({ color, level }: colorType) => {
  const bgColor = getColors({ color, level });

  return `bg-${bgColor}`;
};

const getBorderColor = ({ color, level }: colorType) => {
  const borderColor = getColors({ color, level });

  return `border-${borderColor}`;
};

const getTextColor = ({ color, level }: colorType) => {
  const textColor = getColors({ color, level });

  return `text-${textColor}`;
};

export { cn, getBgColor, getBorderColor, getTextColor };
