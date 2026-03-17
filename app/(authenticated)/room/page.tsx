import { Suspense } from "react";
import Header from "@/features/room//components/Header";
import RoomTable from "@/features/room/components/RoomTable";
import EmptyList from "@/components/ui/EmptyList";
import type { Room } from "@/features/room/types";

//to be removed
import { sampleData } from "@/features/room/fields";

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    status?: string;
    order?: string;
  }>;
};

export default async function Room({ searchParams }: Props) {
  const params = await searchParams;

  const page = Number(params.page ?? 1);
  const search = params.search ?? "";
  const status = params.status ?? "";

  console.log("page", page, search, status);

  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        {sampleData?.length > 0 ? (
          <RoomTable rooms={sampleData} total={30} />
        ) : (
          <EmptyList message="No Room Added, Click Add Room to Get Started." />
        )}
      </Suspense>
    </div>
  );
}
