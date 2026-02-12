"use client";
import { useMemo } from "react";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import RoomList from "@/features/room/components/RoomList";
import EmptyList from "@/components/ui/EmptyList";
import { TableHeader } from "@/types/table.type";
import { ListProps } from "@/types/menu.type";

//to be removed
import { sampleData } from "@/features/room/fields";

const theaders: TableHeader[] = [
  {
    label: "ID",
    className: "",
  },
  {
    label: "Room Name",
    className: "",
  },
  {
    label: "Price",
    className: "",
  },
  {
    label: "Discount",
    className: "",
  },
  {
    label: "Status",
    className: "",
  },
  {
    label: "",
    className: "",
  },
];

export default function RoomTable() {
  const action = (type: string) => {
    alert(type);
  };

  const menuList: ListProps[] = useMemo(
    () => [
      {
        label: "View/Edit",
        action: () => action("view"),
      },
      {
        label: "Available",
        action: () => action("status"),
      },
      {
        label: "Delete",
        action: () => action("delete"),
      },
    ],
    [],
  );

  const displayedRooms = useMemo(() => {
    return sampleData?.slice(0, 20) || [];
  }, []);

  if (sampleData?.length <= 0) {
    return (
      <EmptyList message="No Room Added, Click Add Room to Get Started." />
    );
  }

  return (
    <div className="grid gap-2">
      <Table>
        <Table.Head theaders={theaders} />
        <Table.Body>
          {displayedRooms?.map((room) => (
            <RoomList room={room} key={room.id} menuList={menuList} />
          ))}
        </Table.Body>
      </Table>
      <Pagination count={sampleData.length} />
    </div>
  );
}
