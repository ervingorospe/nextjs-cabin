"use client";

import { Avatar as MuiAvatar } from "@mui/material";
import { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import { stringToColor, getInitials } from "@/utils/formatter.utils";
import { sizes, Sizes } from "@/types/size.type";

interface AvatarProps extends MuiAvatarProps {
  image?: string;
  name: string;
  size?: Sizes;
}

export default function Avatar({ image, name, size, ...rest }: AvatarProps) {
  let sxSize = {
    height: 45,
    width: 45,
  };

  switch (size) {
    case sizes.SMALL:
      sxSize = {
        height: 30,
        width: 30,
      };
      break;
    case sizes.LARGE:
      sxSize = {
        height: 56,
        width: 56,
      };
      break;
    default:
      sxSize = {
        height: 40,
        width: 40,
      };
  }

  if (image) {
    return (
      <MuiAvatar
        sx={{ bgColor: stringToColor(name), ...sxSize }}
        {...rest}
        src={image}
      />
    );
  }

  return (
    <MuiAvatar sx={{ bgColor: stringToColor(name), ...sxSize }}>
      {getInitials(name)}
    </MuiAvatar>
  );
}
