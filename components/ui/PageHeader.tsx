"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { variants as btnVariants } from "@/_lib/_types/button.type";
import { ModalHandle } from "@/types/modal.type";

const Modal = dynamic(
  () => import("@/components/ui/Modal").then((m) => m.Modal),
  {
    ssr: false,
  },
);

const ModalHead = dynamic(
  () => import("@/components/ui/Modal").then((m) => m.Header),
  {
    ssr: false,
  },
);

const ModalBody = dynamic(
  () => import("@/components/ui/Modal").then((m) => m.Body),
  {
    ssr: false,
  },
);

interface PageHeaderProps {
  children?: React.ReactNode;
  title: string;
}

function PageHeader({ children, title }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full mb-8">
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
  const modalRef = useRef<ModalHandle>(null);

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
        <ModalHead
          title={ModalTitle}
          onClose={() => modalRef.current?.setOpen()}
        />
        <ModalBody>{ModalRender}</ModalBody>
      </Modal>
    </>
  );
}

PageHeader.Modal = ModalHeader;

export default PageHeader;
