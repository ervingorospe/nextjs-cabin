"use client";

import PageHeader from "@/components/ui/PageHeader";
import Plus from "@/components/ui/icons/Plus";
import IconLayout from "@/components/ui/icons/IconLayout";
import Form from "@/features/room/components/Form";
import { defaultValue } from "@/features/room/fields";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <PageHeader title="Room">
        <PageHeader.Modal
          buttonRender={<span>Add Room</span>}
          startIcon={
            <IconLayout className="h-7 w-7">
              <Plus />
            </IconLayout>
          }
          ModalRender={<Form data={defaultValue} />}
          ModalTitle="New Room"
        />
      </PageHeader>
    </Box>
  );
}
