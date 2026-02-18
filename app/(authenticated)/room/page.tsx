import Header from "@/features/room//components/Header";
import RoomTable from "@/features/room/components/RoomTable";
import { Suspense } from "react";

export default function Room() {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <RoomTable />
      </Suspense>
    </div>
  );
}
