"use client";

import React from "react";
import { Stack } from "@mui/material";

const Row = React.memo(function Row({
  children,
  width,
}: {
  children: React.ReactNode;
  width: "Half" | "Full";
}) {
  const sxWidth = {
    width: width === "Half" ? { xs: "100%", md: "calc(50% - 0.5rem)" } : "100%",
  };
  return (
    <Stack direction="column" sx={sxWidth}>
      {children}
    </Stack>
  );
});

export default Row;
