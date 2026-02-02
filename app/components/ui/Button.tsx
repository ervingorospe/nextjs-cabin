import React from "react";
import { MethodProps, SizeProps, GenericProps } from "@/types/generic-type";
import { cn } from "@/utils/styles";
import { ButtonVariant, variants as btnVariants } from "@/types/button-types";
import { Radius, radius as radiusType } from "@/types/radius-type";
import { sizes } from "@/types/size-types";
import { colors } from "@/types/color-types";
import { getBgColor, getBorderColor, getTextColor } from "@/utils/styles";

interface ButtonProps extends SizeProps, MethodProps, GenericProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  radius?: Radius;
}

export default function Button({ children, ...rest }: ButtonProps) {
  const {
    variant = btnVariants.SOLID,
    radius = radiusType.MEDIUM,
    size = sizes.MEDIUM,
    color = colors.PRIMARY,
    level = null,
    className,
  } = rest;

  let defaultClass;
  let hoverClass;
  const radiusClass = `rounded-${radius}`;
  const sizeClass = `btn-${size}`;

  if (variant === btnVariants.SOLID) {
    const textColor = "text-white";
    const borderColor = getBorderColor({ color, level });
    const textHoverColor = getTextColor({ color, level });
    const bgColor = getBgColor({ color, level });

    defaultClass = `${bgColor} ${textColor} border ${borderColor}`;
    hoverClass = `hover:${textHoverColor} hover:bg-transparent`;
  }

  if (variant === btnVariants.OUTLINE) {
    const textColor = getTextColor({ color, level });
    const borderColor = getBorderColor({ color, level });
    const textHoverColor = "text-white";
    const bgColor = getBgColor({ color, level });

    defaultClass = `${textColor} border ${borderColor}`;
    hoverClass = `hover:${textHoverColor} hover:${bgColor}`;
  }

  if (variant === btnVariants.TEXT) {
    const textColor = getTextColor({ color, level });
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
