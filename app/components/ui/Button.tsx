import React from "react";
import { SizeProps, GenericProps } from "@/app/_lib/_types/generic.type";
import { cn } from "@/utils/styles";
import {
  ButtonVariant,
  variants as btnVariants,
} from "@/app/_lib/_types/button.type";
import { Radius, radius as radiusType } from "@/app/_lib/_types/radius.type";
import { sizes } from "@/app/_lib/_types/size.type";
import { colors } from "@/app/_lib/_types/color.type";
import { getBgColor, getBorderColor, getTextColor } from "@/utils/styles";

interface ButtonProps
  extends
    SizeProps,
    GenericProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  radius?: Radius;
}

export default function Button({ children, ...rest }: ButtonProps) {
  const {
    variant = btnVariants.SOLID,
    radius = radiusType.MEDIUM,
    size = sizes.MEDIUM,
    colorType = colors.PRIMARY,
    level = null,
    className,
  } = rest;

  let defaultClass;
  let hoverClass;
  const radiusClass = `rounded-${radius}`;
  const sizeClass = `btn-${size}`;

  if (variant === btnVariants.SOLID) {
    const textColor = "text-white";
    const borderColor = getBorderColor({ colorType, level });
    const textHoverColor = getTextColor({ colorType, level });
    const bgColor = getBgColor({ colorType, level });

    defaultClass = `${bgColor} ${textColor} border ${borderColor}`;
    hoverClass = `hover:${textHoverColor} hover:bg-transparent`;
  }

  if (variant === btnVariants.OUTLINE) {
    const textColor = getTextColor({ colorType, level });
    const borderColor = getBorderColor({ colorType, level });
    const textHoverColor = "text-white";
    const bgColor = getBgColor({ colorType, level });

    defaultClass = `${textColor} border ${borderColor}`;
    hoverClass = `hover:${textHoverColor} hover:${bgColor}`;
  }

  if (variant === btnVariants.TEXT) {
    const textColor = getTextColor({ colorType, level });
    const textHoverColor = "text-foreground";

    defaultClass = `${textColor}`;
    hoverClass = `hover:${textHoverColor}`;
  }

  return (
    <button
      {...rest}
      className={cn(
        "btn",
        defaultClass,
        hoverClass,
        radiusClass,
        sizeClass,
        className,
      )}
    >
      {children}
    </button>
  );
}
