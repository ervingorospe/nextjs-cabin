import Header from "@/features/room/Header";

export default function Room() {
  return (
    <div>
      <Header />
      <div
        id="room-table"
        className="border border-foreground rounded-md p-2 min-w-[100%] overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-foreground text-foreground text-lg font-bold tracking-wide">
              <th className="p-2 min-w-[100px] border-r border-foreground last:border-r-none">
                ID
              </th>
              <th className="p-2 min-w-[300px] border-r border-foreground  last:border-r-none">
                Room Name
              </th>
              <th className="p-2 min-w-[100px] border-r border-foreground  last:border-r-none">
                Price
              </th>
              <th className="p-2 min-w-[100px] border-r border-foreground last:border-r-none">
                Discount
              </th>
              <th className="p-2 border-r border-foreground last:border-r-none">
                Status
              </th>
              <th className="p-2 min-w-[50px]">A</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-foreground">
              <td className="px-2 py-4 border-r border-foreground">0001</td>
              <td className="px-2 border-r border-foreground">
                Luxury Room Top Floor 2
              </td>
              <td className="px-2 py-4 border-r border-foreground">P3000</td>
              <td className="px-2 py-4 border-r border-foreground">0%</td>
              <td className="px-2 py-4 border-r border-foreground">
                Available
              </td>
            </tr>
            <tr className="border-b border-foreground">
              <td className="px-2 py-4 border-r border-foreground">0001</td>
              <td className="px-2 border-r border-foreground">
                Luxury Room Top Floor 2
              </td>
              <td className="px-2 py-4 border-r border-foreground">P3000</td>
              <td className="px-2 py-4 border-r border-foreground">0%</td>
              <td className="px-2 py-4 border-r border-foreground">
                Available
              </td>
            </tr>
            <tr className="border-b border-foreground">
              <td className="px-2 py-4 border-r border-foreground">0001</td>
              <td className="px-2 border-r border-foreground">
                Luxury Room Top Floor 2
              </td>
              <td className="px-2 py-4 border-r border-foreground">P3000</td>
              <td className="px-2 py-4 border-r border-foreground">0%</td>
              <td className="px-2 py-4 border-r border-foreground">
                Available
              </td>
            </tr>
            <tr className="border-b border-foreground">
              <td className="px-2 py-4 border-r border-foreground">0001</td>
              <td className="px-2 border-r border-foreground">
                Luxury Room Top Floor 2
              </td>
              <td className="px-2 py-4 border-r border-foreground">P3000</td>
              <td className="px-2 py-4 border-r border-foreground">0%</td>
              <td className="px-2 py-4 border-r border-foreground">
                Available
              </td>
            </tr>
            <tr className="border-b border-foreground">
              <td className="px-2 py-4 border-r border-foreground">0001</td>
              <td className="px-2 border-r border-foreground">
                Luxury Room Top Floor 2
              </td>
              <td className="px-2 py-4 border-r border-foreground">P3000</td>
              <td className="px-2 py-4 border-r border-foreground">0%</td>
              <td className="px-2 py-4 border-r border-foreground">
                Available
              </td>
            </tr>
            <tr className="">
              <td className="px-2 py-4 border-r border-foreground">0001</td>
              <td className="px-2 py-4 border-r border-foreground">
                Luxury Room Top Floor 2
              </td>
              <td className="px-2 py-4 border-r border-foreground">P3000</td>
              <td className="px-2 py-4 border-r border-foreground">0%</td>
              <td className="px-2 py-4 border-r border-foreground">
                Available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
