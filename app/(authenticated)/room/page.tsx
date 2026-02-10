import Header from "@/features/room//components/Header";
import Pagination from "@/components/ui/Pagination";

//to be removed
import { sampleData } from "@/features/room/fields";

export default function Room() {
  return (
    <div>
      <Header />
      <div className="grid gap-2">
        <Pagination count={211} />

        <div
          id="room-table"
          className="border border-header rounded-md p-2 min-w-[100%] overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-header text-foreground text-lg font-bold tracking-wide">
                <th className="px-2 min-w-[100px] border-r border-header last:border-r-none">
                  ID
                </th>
                <th className="px-2 min-w-[300px] border-r border-header  last:border-r-none">
                  Room Name
                </th>
                <th className="px-2 min-w-[100px] border-r border-header  last:border-r-none">
                  Price
                </th>
                <th className="px-2 min-w-[100px] border-r border-header last:border-r-none">
                  Discount
                </th>
                <th className="px-2 border-r border-header last:border-r-none">
                  Status
                </th>
                <th className="px-2 min-w-[50px]">A</th>
              </tr>
            </thead>
            <tbody>
              {sampleData?.map((data) => (
                <tr
                  className="border-b border-header last:border-none"
                  key={data.id}
                >
                  <td className="px-2 py-2 border-r border-header">
                    {data.id}
                  </td>
                  <td className="px-2 border-r border-header">{data.name}</td>
                  <td className="px-2 border-r border-header">{data.price}</td>
                  <td className="px-2 border-r border-header">
                    {data.discount}
                  </td>
                  <td className="px-2 border-r border-header">{data.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
