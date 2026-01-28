import { ImageProps, SizeProps } from "@/types/generic-type";
import Image from "next/image";

interface AvatarProps extends SizeProps, ImageProps {}

export default function Avatar({ ...rest }: AvatarProps) {
  const { alt = "Image", image, size = "md" } = rest;

  return <Image src={image} {...rest} alt={alt} />;
}
