"use client";
import React from "react";
import Table from "@/components/ui/Table";
import IconLayout from "@/components/ui/icons/IconLayout";
import EllipsisVertical from "@/components/ui/icons/EllipsisVertical";
import ButtonIcon from "@/components/ui/ButtonIcon";
import Tooltip from "@/components/ui/Tooltip";

interface RoomProps {
  room: {
    id: string | number;
    name: string;
    price: number;
    discount: number;
    status: string;
  };
}

const RoomList = React.memo(function RoomList({ room }: RoomProps) {
  const { id, name, price, discount, status } = room;

  return (
    <Table.Tr>
      <Table.Td>{id}</Table.Td>
      <Table.Td>{name}</Table.Td>
      <Table.Td>{price}</Table.Td>
      <Table.Td>{discount}</Table.Td>
      <Table.Td>{status}</Table.Td>
      <Table.Td className="w-[50px] text-center">
        <Tooltip title="Menu">
          <ButtonIcon onClick={() => {}}>
            <IconLayout className="h-6 w-8 hover:text-secondary">
              <EllipsisVertical />
            </IconLayout>
          </ButtonIcon>
        </Tooltip>
      </Table.Td>
    </Table.Tr>
  );
});

export default RoomList;
