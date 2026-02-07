"use client";

import { cn } from "@/utils/styles";
import { SizeProps } from "@/_lib/_types/generic.type";
import { ImageProps } from "@/_lib/_types/image.type";
import Image from "next/image";
import { getInitials } from "@/_lib/_utils/formatter.utils";
import { sizes } from "@/_lib/_types/size.type";

interface AvatarProps extends SizeProps, ImageProps {
  name: string;
}

export default function Avatar({ ...rest }: AvatarProps) {
  const { name, image, size = "md", className } = rest;
  const sizeClass =
    size === sizes.LARGE
      ? "size-14 text-lg"
      : size === sizes.SMALL
        ? "size-8 text-sm"
        : "size-12 text-md";
  const hoverClass =
    "hover:opacity-80 transition-opacity duration-300 ease-in-out";

  if (image) {
    return (
      <Image
        {...rest}
        src={image}
        className={cn(
          "rounded-full ring-2 ring-background outline -outline-offset-1 outline-white/10",
          sizeClass,
          hoverClass,
          className,
        )}
        alt={name}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full",
        "bg-muted text-muted-foreground bg-primary text-white font-medium",
        "outline outline-offset-1 outline-background-300  ",
        sizeClass,
        hoverClass,
        className,
      )}
    >
      {getInitials(name)}
    </div>
  );
}
