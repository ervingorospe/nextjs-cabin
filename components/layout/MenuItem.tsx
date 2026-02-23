"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { styled, Stack, StackProps } from "@mui/material";
import IconLayout from "@/components/ui/icons/IconLayout";

interface MenuItemWrapperProps extends Omit<StackProps, "theme"> {
  active?: boolean;
}

const MenuItemWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "active",
})<MenuItemWrapperProps>(({ theme, active }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: "10px",
  paddingBottom: "10px",
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  backgroundColor: active
    ? theme.vars?.palette.background.default
    : "transparent",

  "&:hover": {
    backgroundColor: theme.vars?.palette.background.default,
  },
}));

export default function MenuItem({
  menu,
}: {
  menu: { icon: React.ReactNode; text: string; link: string };
}) {
  const pathname = usePathname();
  const active = pathname === menu.link;

  return (
    <MenuItemWrapper
      alignItems="center"
      direction="row"
      spacing={1}
      active={active}
    >
      <IconLayout className="h-5 w-5">{menu.icon}</IconLayout>

      <p>{menu.text}</p>
    </MenuItemWrapper>
  );
}
