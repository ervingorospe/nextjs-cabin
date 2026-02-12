"use client";
import { useMemo } from "react";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import RoomList from "@/features/room/components/RoomList";
import EmptyList from "@/components/ui/EmptyList";
import { TableHeader } from "@/types/table.type";

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
            <RoomList room={room} key={room.id} />
          ))}
        </Table.Body>
      </Table>
      <Pagination count={sampleData.length} />
    </div>
  );
}
