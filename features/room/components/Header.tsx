"use client";

import PageHeader from "@/components/ui/PageHeader";
import Plus from "@/components/ui/icons/Plus";
import Form from "@/features/room/components/Form";
import { defaultValue } from "@/features/room/fields";

export default function Header() {
  return (
    <div>
      <PageHeader title="Room">
        <PageHeader.Modal
          buttonRender={
            <>
              <Plus className="h-7 w-7" />
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
