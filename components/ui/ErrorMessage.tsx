"use client";

import Warning from "@/components/ui/icons/Warning";
import IconLayout from "@/components/ui/icons/IconLayout";
import { Stack, Typography } from "@mui/material";

export default function ErrorMessage({
  message,
}: {
  message: string | undefined;
}) {
  return (
    <Stack direction="row" spacing={0} color="warning.main">
      <IconLayout className="mt-[1px] h-4 w-4">
        <Warning />
      </IconLayout>

      <Typography variant="body1">{message}</Typography>
    </Stack>
  );
}
