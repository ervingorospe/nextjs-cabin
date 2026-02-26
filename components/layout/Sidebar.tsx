"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/sidebar.style.scss";
import ChevronLeft from "@/components/ui/icons/ChevronLeft";
import ChevronRight from "@/components/ui/icons/ChevronRight";
import IconLayout from "@/components/ui/icons/IconLayout";
import MenuItem from "@/components/layout/MenuItem";
import { Box, Paper, IconButton, Stack, Typography } from "@mui/material";
import routes from "@/data/routes";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Paper sx={{ display: { sx: "absolute", md: "relative" }, zIndex: 10 }}>
      <Box
        sx={{ bgcolor: "background.paper", height: "100%", position: "fixed" }}
      >
        <IconButton
          sx={{
            bgcolor: "background.paper",
            position: "absolute",
            right: -35,
            top: 80,
            borderRadius: 1,
            zIndex: 20,
            "&:hover": {
              bgcolor: "background.paper",
            },
          }}
          onClick={() => setIsOpen((open) => !open)}
        >
          <IconLayout className="h-8 w-8">
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </IconLayout>
        </IconButton>
        <Box
          sx={{
            overflow: "hidden",
            zIndex: 10,
            overflowY: "auto",
            height: "100%",
          }}
          className={`sidebar ${isOpen ? "open" : "close"}`}
        >
          <Stack component="ul" spacing={2} sx={{ px: 2, py: 1, mt: 2 }}>
            {routes?.map((nav, i) => (
              <Box
                component="li"
                sx={{
                  p: 1,
                  borderBottom: "1px solid",
                  borderBottomColor: "background.400",
                  "&:last-child": {
                    borderBottom: 0,
                  },
                }}
                key={i}
              >
                <Typography variant="h4">{nav.label}</Typography>
                {nav.menu.length > 0 && (
                  <Stack
                    component="ul"
                    spacing="3px"
                    sx={{
                      mt: 1,
                    }}
                  >
                    {nav.menu?.map((menu, idx) => (
                      <Box component="li" key={idx}>
                        <Link href={menu.link}>
                          <MenuItem menu={menu} />
                        </Link>
                      </Box>
                    ))}
                  </Stack>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Paper
        sx={{ position: { xs: "absolute", md: "relative" } }}
        className={`sidebar ${isOpen ? "open" : "close"}`}
      ></Paper>
    </Paper>
  );
}
