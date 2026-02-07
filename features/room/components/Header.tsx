"use client";

import PageHeader from "@/components/ui/PageHeader";
import Plus from "@/components/ui/icons/Plus";
import Form from "@/features/room/Form";
import { RoomInput } from "@/schema/roomSchema";

export default function Header() {
  const roomDefaultValue: RoomInput = {
    name: "",
    price: 0,
    status: "Available",
    discount: 0,
    details: "",
    bedroom: 1,
    cr: 0,
    adult: 1,
    child: 0,
    discount_from: null,
    discount_to: null,
  };

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
          ModalRender={<Form data={roomDefaultValue} />}
          ModalTitle="New Room"
        />
      </PageHeader>
    </div>
  );
}
