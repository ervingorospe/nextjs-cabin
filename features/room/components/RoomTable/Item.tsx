"use client";
import React, { useState } from "react";
import Table from "@/components/ui/Table";
import IconLayout from "@/components/ui/icons/IconLayout";
import EllipsisVertical from "@/components/ui/icons/EllipsisVertical";
import ButtonIcon from "@/components/ui/ButtonIcon";
import Tooltip from "@/components/ui/Tooltip";
import Menu from "@/components/ui/Menu";
import { ListProps } from "@/types/menu.type";
import { Room } from "@/features/room/types";

interface RoomProps {
  room: Room;
  menuList: ListProps[];
}

const RoomItem = React.memo(function RoomList({ room, menuList }: RoomProps) {
  const [open, setOpen] = useState(false);
  const { id, name, price, discount, status } = room;

  return (
    <Table.Tr>
      <Table.Td>{id}</Table.Td>
      <Table.Td>{name}</Table.Td>
      <Table.Td>{price}</Table.Td>
      <Table.Td>{discount}</Table.Td>
      <Table.Td>{status}</Table.Td>
      <Table.Td className="w-[50px] text-center">
        <Menu setOpen={setOpen}>
          <Tooltip title="Menu">
            <ButtonIcon onClick={() => setOpen((open) => !open)}>
              <IconLayout className="h-6 w-8 hover:text-secondary">
                <EllipsisVertical />
              </IconLayout>
            </ButtonIcon>
          </Tooltip>
          <Menu.UL
            open={open}
            lists={menuList}
            render={(menu: ListProps) => <Menu.LI menu={menu} />}
          />
        </Menu>
      </Table.Td>
    </Table.Tr>
  );
});

export default RoomItem;
