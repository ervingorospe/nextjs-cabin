"use client";
import React, { useRef } from "react";
import Modal from "@/components/ui/Modal";
import { ModalHandle } from "@/types/modal.type";
import { Stack, Button, ButtonProps } from "@mui/material";

interface PageHeaderProps {
  children?: React.ReactNode;
  title: string;
}

function PageHeader({ children, title }: PageHeaderProps) {
  return (
    <Stack
      component="div"
      direction="row"
      justifyContent="space-between"
      className="flex items-center justify-between w-full mb-8"
    >
      <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
      {children}
    </Stack>
  );
}

interface ModalHeader extends ButtonProps {
  buttonRender: React.ReactNode;
  ModalRender: React.ReactNode;
  ModalTitle: string;
}

function ModalHeader({
  ModalRender,
  ModalTitle,
  buttonRender,
  ...rest
}: ModalHeader) {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => modalRef.current?.setOpen()}
        className="flex items-center gap-1"
        {...rest}
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
