"use client";
import Modal from "@/components/ui/Modal";
import Button from "./Button";
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
        <div className="flex justify-end gap-4">
          <Button
            onClick={onClose}
            variant={variants.OUTLINE}
            color={colors.SECONDARY}
          >
            Cancel
          </Button>
          {renderButton}
        </div>
      </Modal.Footer>
    </>
  );
}
