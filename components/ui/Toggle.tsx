"use client";
import { convertSvgToURL } from "@/utils/converter.utils";
import { IconToggleProps, IconToggle } from "@/styles/toggle.style";
import { SwitchProps } from "@mui/material";

interface ToggleProps extends IconToggleProps, SwitchProps {
  isChecked: boolean;
}

function Toggle({ icon1, icon2, isChecked, ...rest }: ToggleProps) {
  let icon1Url = "";
  let icon2Url = "";

  if (icon1) {
    icon1Url = convertSvgToURL(icon1);
  }

  if (icon2) {
    icon2Url = convertSvgToURL(icon2);
  }

  return (
    <IconToggle
      sx={{ m: 1 }}
      checked={isChecked}
      icon1={icon1Url}
      icon2={icon2Url}
      {...rest}
    />
  );
}

export default Toggle;
