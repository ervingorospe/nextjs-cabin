import Header from "@/features/room//components/Header";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";

export default function Room() {
  return (
    <div>
      <Header />
      <div className="grid gap-2">
        <Pagination count={212} />
        <Table />
        <Pagination count={212} />
      </div>
    </div>
  );
}
