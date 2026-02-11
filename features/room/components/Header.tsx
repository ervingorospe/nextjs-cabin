"use client";

import PageHeader from "@/components/ui/PageHeader";
import Plus from "@/components/ui/icons/Plus";
import IconLayout from "@/components/ui/icons/IconLayout";
import Form from "@/features/room/components/Form";
import { defaultValue } from "@/features/room/fields";

export default function Header() {
  return (
    <div>
      <PageHeader title="Room">
        <PageHeader.Modal
          buttonRender={
            <>
              <IconLayout className="h-7 w-7">
                <Plus />
              </IconLayout>

              <span>Add Room</span>
            </>
          }
          ModalRender={<Form data={defaultValue} />}
          ModalTitle="New Room"
        />
      </PageHeader>
    </div>
  );
}
