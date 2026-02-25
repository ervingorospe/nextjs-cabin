"use client";

import IconLayout from "@/components/ui/icons/IconLayout";
import Ban from "@/components/ui/icons/Ban";
import { Stack, Typography } from "@mui/material";

export default function EmptyList({ message }: { message: string }) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "500px",
        textAlign: "center",
      }}
      spacing={0}
    >
      <IconLayout className="opacity-5 h-72 w-72">
        <Ban />
      </IconLayout>
      <Typography variant="body1" fontStyle="italic" className="opacity-30">
        {message}
      </Typography>
    </Stack>
  );
}
