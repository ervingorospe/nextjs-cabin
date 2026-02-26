import { extendTheme } from "@mui/material/styles";
import { colorSchemes } from "./colorSchemes";
import type { Theme } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";

const theme = extendTheme({
  colorSchemes,
  colorSchemeSelector: "data-mui-color-scheme",
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: {
      color: "var(--mui-palette-text-heading)",
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
    h2: {
      color: "var(--mui-palette-text-heading)",
      fontSize: "1.7rem",
      fontWeight: 670,
      letterSpacing: "0.02em",
    },
    h3: {
      color: "var(--mui-palette-text-heading)",
      fontSize: "1.4rem",
      fontWeight: 640,
      letterSpacing: "0.02em",
    },
    h4: {
      color: "var(--mui-palette-text-heading)",
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    subtitle1: {
      fontSize: "0.9rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
      fontWeight: 300,
    },
    body2: {
      fontSize: 12,
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: "7px",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars?.palette.background.paper,
          backgroundImage: "none",

          ...theme.applyStyles("light", {
            boxShadow: "3px 3px 7px -3px #c7c8c8",
          }),
          ...theme.applyStyles("dark", {
            boxShadow: "3px 3px 7px -3px #101625",
          }),
        }),
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": { borderBottom: 0 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `1px solid ${theme.vars.palette.text.primary}`,
          fontSize: 14,
        }),
        head: ({ theme }) => ({
          borderBottom: `1px solid ${theme.vars.palette.text.secondary}`,
          fontSize: 16, // 14px
          fontWeight: 600,
          color: theme.vars?.palette.text.secondary, // or any color
          textTransform: "uppercase", // optional for dashboard style
        }),
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 1,
        alignItems: "right",
        alignContent: "center",
      },
    },
    MuiGrid: {
      defaultProps: {
        spacing: 1,
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
          boxShadow: "none",
          minWidth: "8rem",
        },
        contained: ({
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
            border: `1px solid ${paletteColor.main}`,
            "&:hover": {
              backgroundColor: "transparent !important",
              color: paletteColor.main,
              boxShadow: "none",
              border: `1px solid ${paletteColor.main}`,
            },
          };
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
            border: `1px solid ${paletteColor.main}`,
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
