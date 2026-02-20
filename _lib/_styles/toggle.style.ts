import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export interface IconToggleProps {
  icon1?: string;
  icon2?: string;
  offColor?: string;
  onColor?: string;
  trackColor?: string;
}

export const IconToggle = styled(Switch, {
  shouldForwardProp: (prop) =>
    !["icon1", "icon2", "offColor", "onColor", "trackColor"].includes(
      prop as string,
    ),
})<IconToggleProps>(
  ({ theme, icon1, icon2, offColor, onColor, trackColor }) => ({
    width: 70,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(4cpx)",
      "&.Mui-checked": {
        color: onColor,
        transform: "translateX(35px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: icon1,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: trackColor ?? onColor,
          ...theme.applyStyles("dark", {
            backgroundColor: trackColor ?? onColor,
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: offColor,
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: icon2,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: onColor,
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: trackColor ?? offColor,
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: offColor,
      }),
    },
  }),
);
