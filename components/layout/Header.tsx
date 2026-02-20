"use client";
import Link from "next/link";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import Avatar from "@/components/ui/Avatar";
import { Box, Stack } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: "50",
      }}
    >
      <Box component="header" sx={{ bgcolor: "background.paper" }}>
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "items-center",
          }}
        >
          <Box>logo</Box>
          <Stack
            component="ul"
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={0}
            sx={{ listStyle: "none", p: 0, m: 0 }}
          >
            <Box component="li">
              <ThemeSwitch />
            </Box>
            <Box component="li">
              <Link href="/profile">
                <Avatar
                  image="https://i.pravatar.cc/48?u=118836"
                  name="Ervin Gorospe"
                />
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
