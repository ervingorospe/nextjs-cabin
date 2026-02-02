"use client";
import React, { useRef } from "react";
import Button from "@/components/ui/Button";
import { variants as btnVariants } from "@/app/_lib/_types/button.type";

import Modal from "@/components/ui/Modal";
import { ModalHandle } from "@/app/_lib/_types/modal.type";

interface PageHeaderProps {
  children?: React.ReactNode;
  title: string;
}

function PageHeader({ children, title }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
      {children}
    </div>
  );
}

function ModalHeader({
  buttonRender,
  ModalRender,
  ModalTitle,
}: {
  buttonRender: React.ReactNode;
  ModalRender: React.ReactNode;
  ModalTitle: string;
}) {
  const modalRef = useRef<ModalHandle | null>(null);

  return (
    <>
      <Button
        onClick={() => modalRef.current?.setOpen()}
        variant={btnVariants.SOLID}
        className="flex items-center gap-1"
      >
        {buttonRender}
      </Button>

      <Modal ref={modalRef}>
        <Modal.Header
          title={ModalTitle}
          onClose={() => modalRef.current?.setOpen()}
        />
        <Modal.Body>{ModalRender}</Modal.Body>
      </Modal>
    </>
  );
}

PageHeader.Modal = ModalHeader;

export default PageHeader;
