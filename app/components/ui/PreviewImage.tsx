"use client";
import { ImageUploadType } from "@/app/_lib/_types/image.type";
import Image from "next/image";
import React from "react";

interface PreviewImageProps {
  children?: React.ReactNode;
  image: ImageUploadType;
}

export default function PreviewImage({
  children,
  image,
  ...rest
}: PreviewImageProps) {
  return (
    <div className="relative" {...rest}>
      <Image
        src={image.url}
        width={50}
        height={50}
        alt="Room Picture"
        className="h-28 w-full"
      />
      {children}
    </div>
  );
}
