import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Box, Container } from "@mui/material";

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
        <Box component="main" sx={{ width: "100%" }}>
          <Container sx={{ py: 4 }}>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
}
