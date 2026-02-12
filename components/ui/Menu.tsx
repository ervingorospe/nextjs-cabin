"use client";

import React from "react";
import IconLayout from "@/components/ui/icons/IconLayout";
import ChevronRight from "@/components/ui/icons/ChevronRight";
import { MenuProps, ULProps } from "@/types/menu.type";
import useClickOutside from "@/hooks/useClickOutside";

function Menu({
  children,
  setOpen,
}: {
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { ref } = useClickOutside(() => setOpen(false));

  return (
    <div ref={ref} className="relative">
      {children}
    </div>
  );
}

function UL({ lists, render, open }: ULProps) {
  if (!open) return null;

  return (
    <>
      <ul className="absolute text-left w-auto top-0 right-8 rounded-md text-sm text-foreground bg-header">
        {lists.map((item) => (
          <React.Fragment key={item.label}>{render(item)}</React.Fragment>
        ))}
      </ul>
      <IconLayout className="h-8 w-8 text-header absolute top-0 right-4 z-0">
        <ChevronRight />
      </IconLayout>
    </>
  );
}

const MenuList = React.memo(function List({ menu }: MenuProps) {
  return (
    <li
      onClick={menu.action}
      className="px-4 py-2 min-w-[150px] border-b border-background-400 last:border-none hover:bg-background cursor-pointer"
    >
      {menu.label}
    </li>
  );
});

Menu.UL = UL;
Menu.LI = MenuList;

export default Menu;
