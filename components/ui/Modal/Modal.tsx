"use client";

import { GenericProps } from "@/types/generic.type";
import { Sizes, sizes } from "@/_lib/_types/size.type";
import { useImperativeHandle, useState } from "react";
import "@/styles/modal.style.scss";
import { ModalHandle } from "@/types/modal.type";
import { Box, Divider, Stack, Typography } from "@mui/material";

interface ModalProps extends GenericProps {
  ref: React.Ref<ModalHandle>;
  size?: Sizes;
}

function Modal({ children, ref, size = sizes.MEDIUM }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const modalStyles = {
    [sizes.SMALL]: {
      width: { xs: "350px", md: "500px" },
      maxWidth: "500px",
      maxHeight: "700px",
    },
    [sizes.MEDIUM]: {
      width: { xs: "350px", md: "700px" },
      maxHeight: "700px",
      maxWidth: "700px",
    },
    [sizes.LARGE]: {
      width: { xs: "350px", md: "900px" },
      maxHeight: "700px",
      maxWidth: "900px",
    },
  } as const;

  const sizeClass = modalStyles[size] || modalStyles[sizes.MEDIUM];

  useImperativeHandle(ref, () => ({
    setOpen() {
      setIsOpen((val: boolean) => !val);
    },
  }));

  return (
    <Box
      onClick={() => setIsOpen((val) => !val)}
      role="dialog"
      aria-modal="true"
      sx={{
        display: isOpen ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 100,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(4px)",
        transition: "opacity 0.5s ease",
      }}
    >
      <Stack
        sx={{ height: "100%", width: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            bgcolor: "background.paper",
            overflowY: "auto",
            ...sizeClass,
          }}
        >
          {children}
        </Box>
      </Stack>
    </Box>
  );
}

export function Header({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        bgcolor: "background.paper",
        px: { xs: 2, md: 4 },
        pt: 4,
        pb: 2,
      }}
    >
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="h3">{title}</Typography>
        <Box
          component="span"
          sx={{ cursor: "pointer", fontSize: 24 }}
          onClick={onClose}
          aria-label="close"
        >
          &times;
        </Box>
      </Stack>
      <Divider sx={{ py: 1 }} flexItem />
    </Box>
  );
}

export function Body({ children }: GenericProps) {
  return <Box sx={{ px: { xs: 2, md: 4 }, pb: 6 }}>{children}</Box>;
}

export function Footer({ children }: GenericProps) {
  return <Box sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>{children}</Box>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
