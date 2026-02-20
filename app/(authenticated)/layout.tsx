import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Box } from "@mui/material";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        mx: "auto",
        maxInlineSize: "134rem",
        width: "100%",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Sidebar />
        <main className="w-full">
          <Box className="p-4 sm:p-8 md:p-12 w-full mx-auto">{children}</Box>
        </main>
      </Box>
    </Box>
  );
}
