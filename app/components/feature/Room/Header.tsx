"use client";

import PageHeader from "@/components/ui/PageHeader";
import Plus from "@/components/ui/icons/Plus";
import Form from "@/components/feature/Room/Form";

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
          ModalRender={<Form />}
          ModalTitle="New Room"
        />
      </PageHeader>
    </div>
  );
}
