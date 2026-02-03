import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ColorLevel, Colors } from "@/app/_lib/_types/color.type";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

type colorType = {
  colorType: Colors;
  level: ColorLevel | null;
};

const getColors = ({ colorType, level }: colorType) => {
  const color: string = colorType ? colorType : "primary";
  const colorLevel: string = level ? `-${level}` : "";

  return `${color}${colorLevel}`;
};

const getBgColor = ({ colorType, level }: colorType) => {
  const bgColor: string = getColors({ colorType, level });

  return `bg-${bgColor}`;
};

const getBorderColor = ({ colorType, level }: colorType) => {
  const borderColor: string = getColors({ colorType, level });

  return `border-${borderColor}`;
};

const getTextColor = ({ colorType, level }: colorType) => {
  const textColor: string = getColors({ colorType, level });

  return `text-${textColor}`;
};

export { cn, getBgColor, getBorderColor, getTextColor };
