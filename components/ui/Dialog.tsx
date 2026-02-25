"use client";
import Modal from "@/components/ui/Modal";
import { Button, Stack } from "@mui/material";
import { variants } from "@/types/button.type";
import { colors } from "@/types/color.type";
import React from "react";

export default function Dialog({
  title,
  renderDialog,
  onClose,
  renderButton,
}: {
  title: string;
  renderDialog: React.ReactNode;
  renderButton: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      <Modal.Header title={title} onClose={onClose} />
      <Modal.Body>{renderDialog}</Modal.Body>
      <Modal.Footer>
        <Stack direction="row" justifyContent="flex-end">
          <Button
            onClick={onClose}
            variant={variants.OUTLINED}
            color={colors.SECONDARY}
          >
            Cancel
          </Button>
          {renderButton}
        </Stack>
      </Modal.Footer>
    </>
  );
}
