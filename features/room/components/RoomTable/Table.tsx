"use client";

import List from "./List";
import EmptyList from "@/components/ui/EmptyList";
import { useTableFilter } from "@/features/room/hooks";

//to be removed
import { sampleData } from "@/features/room/fields";

export default function RoomTable() {
  const { page, search, status, order } = useTableFilter();
  console.log(page, search, status, order);

  if (sampleData?.length <= 0) {
    return (
      <EmptyList message="No Room Added, Click Add Room to Get Started." />
    );
  }

  return <List rooms={sampleData} />;
}
