"use client";
import { convertSvgToURL } from "@/_lib/_utils/converter.utils";
import "@/styles/toggle.style.scss";
import { StypeProps } from "@/_lib/_types/generic.type";
import { cn } from "@/utils/styles";
import { sizes } from "@/_lib/_types/size.type";

interface Props extends StypeProps {
  trackOffColor?: string;
  trackOnColor?: string;
  icon1?: string | null;
  icon2?: string | null;
  onClick: () => void;
  isOn: boolean;
}

function Toggle({
  trackOffColor = "var(--background-300)",
  trackOnColor = "var(--background-400)",
  icon1 = null,
  icon2 = null,
  onClick,
  isOn = false,
  ...rest
}: Props) {
  let icon1Url = null;
  let icon2Url = null;
  const { size = "md" } = rest;

  if (icon1) {
    icon1Url = convertSvgToURL(icon1);
  }

  if (icon2) {
    icon2Url = convertSvgToURL(icon2);
  }

  return (
    <label
      style={{
        ["--track-off" as string]: trackOffColor,
        ["--track-on" as string]: trackOnColor,
        ["--toggle-icon" as string]: isOn ? icon2Url : icon1Url,
      }}
      className="inline-flex item-center cursor-pointer"
    >
      <input
        type="checkbox"
        checked={isOn}
        className="sr-only peer"
        onChange={onClick}
      ></input>

      <span
        className={cn(
          "toggle-icon-track h-[1rem]",
          size === sizes.SMALL
            ? "w-[3.5rem] before:w-[1.5rem] before:h-[1.5rem]"
            : size === "lg"
              ? "w-[4.1rem] before:w-[3rem] before:h-[3rem]"
              : "w-[3.9rem] before:w-[2rem] before:h-[2rem]",
        )}
      ></span>
    </label>
  );
}

export default Toggle;
