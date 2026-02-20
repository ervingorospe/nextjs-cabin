import { extendTheme } from "@mui/material/styles";
import { colorSchemes } from "./colorSchemes";
import type { Theme } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";

const theme = extendTheme({
  colorSchemes,
  colorSchemeSelector: "data-mui-color-scheme",
  typography: {
    h1: { color: "text.heading", fontWeight: 700 },
    h2: { color: "text.heading", fontWeight: 700 },
    h3: { color: "text.heading", fontWeight: 600 },
    h4: { color: "text.heading", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
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
