import { extendTheme } from "@mui/material/styles";
import { colorSchemes } from "./colorSchemes";
import type { Theme } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";

const theme = extendTheme({
  colorSchemes,
  colorSchemeSelector: "data-mui-color-scheme",
  typography: {
    h1: {
      color: "var(--mui-palette-text-heading)",
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      color: "var(--mui-palette-text-heading)",
      fontSize: "1.7rem",
      fontWeight: 670,
    },
    h3: {
      color: "var(--mui-palette-text-heading)",
      fontSize: "1.4rem",
      fontWeight: 640,
    },
    h4: {
      color: "var(--mui-palette-text-heading)",
      fontSize: "1.2rem",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiStack: {
      defaultProps: {
        spacing: 2,
        alignItems: "right",
        alignContent: "center",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          transition: "all 0.5s ease-in-out !important",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "5px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: "5px",
        },
        outlined: ({
          theme,
          ownerState,
        }: {
          theme: Theme;
          ownerState: ButtonProps;
        }) => {
          const color = ownerState.color || "primary";

          if (!color || color === "inherit") return {};

          const paletteColor = theme.palette[color];

          if (!paletteColor) return {};

          return {
            "&:hover": {
              backgroundColor: paletteColor.main,
              color: paletteColor.contrastText,
              getBorderColor: paletteColor.main,
            },
          };
        },
      },
    },
  },
});

export default theme;
