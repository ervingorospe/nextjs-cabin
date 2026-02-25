"use client";

import { Button } from "@mui/material";
import { variants } from "@/types/button.type";
import { colors } from "@/types/color.type";
import { sizes } from "@/types/size.type";
import type { UploadFileProps } from "@/types/form.type";

export default function UploadFile({
  children,
  buttonText,
  ...rest
}: UploadFileProps) {
  return (
    <div className="relative flex items-center gap-2">
      <input type="file" id="fileUpload" hidden {...rest} />
      <Button
        component="label"
        variant={variants.CONTAINED}
        color={colors.SECONDARY}
        htmlFor="fileUpload"
        size={sizes.SMALL}
      >
        {buttonText}
      </Button>
      {children}
    </div>
  );
}
