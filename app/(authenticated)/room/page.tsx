"use client";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { variants as btnVariants } from "@/types/button-types";
import Plus from "@/components/ui/icons/Plus";
import Modal from "@/app/components/ui/Modal";
import { ModalHandle } from "@/types/modal-type";

export default function Dashboard() {
  const modalRef = useRef<ModalHandle | null>(null);
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-4xl font-bold tracking-wide">Rooms</h1>
      <Button
        onClick={() => modalRef.current?.setOpen()}
        variant={btnVariants.SOLID}
        className="flex items-center gap-1"
      >
        <Plus className="h-7 w-7" />
        <span>Add Room</span>
      </Button>

      <Modal ref={modalRef}>
        <Modal.Header
          title="New Room"
          onClose={() => modalRef.current?.setOpen()}
        />
        <Modal.Body>
          <div>this is a sample content</div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
