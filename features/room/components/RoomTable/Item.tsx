"use client";
import React from "react";
import Table from "@/components/ui/Table";
import { IconButton } from "@mui/material";
import { Stack, Tooltip } from "@mui/material";
import { ListProps } from "@/types/menu.type";
import { Room } from "@/features/room/types";

interface RoomProps {
  room: Room;
  menuList: ListProps[];
}

const RoomItem = React.memo(function RoomList({ room, menuList }: RoomProps) {
  const { id, name, price, discount, status } = room;

  return (
    <Table.Tr>
      <Table.Td>{id}</Table.Td>
      <Table.Td>{name}</Table.Td>
      <Table.Td>{price}</Table.Td>
      <Table.Td>{discount}</Table.Td>
      <Table.Td>{status}</Table.Td>
      <Table.Td>
        <Stack direction="row">
          {menuList?.map((menu, idx) => (
            <Tooltip title={menu.label} key={idx}>
              <IconButton onClick={menu.action} color={menu.color}>
                {menu.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      </Table.Td>
    </Table.Tr>
  );
});

export default RoomItem;
