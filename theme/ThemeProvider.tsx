"use client";

import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemeProvider
      attribute="data-mui-color-scheme"
      defaultTheme="light"
      enableSystem={false}
      storageKey="app-theme"
    >
      <ThemeProvider
        theme={theme}
        defaultMode="light"
        disableTransitionOnChange
        modeStorageKey="app-theme"
      >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextThemeProvider>
  );
}
