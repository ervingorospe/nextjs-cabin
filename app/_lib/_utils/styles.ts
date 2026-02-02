import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ColorLevel, Colors } from "@/app/_lib/_types/color.type";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

type colorType = {
  color: Colors;
  level: ColorLevel | null;
};

const getColors = ({ color, level }: colorType) => {
  const colorType: string = color ? color : "primary";
  const colorLevel: string = level ? `-${level}` : "";

  return `${colorType}${colorLevel}`;
};

const getBgColor = ({ color, level }: colorType) => {
  const bgColor: string = getColors({ color, level });

  return `bg-${bgColor}`;
};

const getBorderColor = ({ color, level }: colorType) => {
  const borderColor: string = getColors({ color, level });

  return `border-${borderColor}`;
};

const getTextColor = ({ color, level }: colorType) => {
  const textColor: string = getColors({ color, level });

  return `text-${textColor}`;
};

export { cn, getBgColor, getBorderColor, getTextColor };
