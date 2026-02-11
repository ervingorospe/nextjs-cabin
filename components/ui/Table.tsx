"use client";

import { TableHeader, TableHeaderProps } from "@/types/table.type";
import { cn } from "@/utils/styles";

function Table({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="room-table"
      className="border border-header rounded-md p-2 min-w-[100%] overflow-x-auto"
    >
      <table className="w-full">{children}</table>
    </div>
  );
}

export function THead({ theaders }: TableHeaderProps) {
  return (
    <thead>
      <tr className="border-b border-header text-foreground text-lg font-bold tracking-wide">
        {theaders?.map((thead: TableHeader) => (
          <th
            className={cn(
              "px-2 border-r border-header last:border-none",
              thead.className,
            )}
            key={thead.label}
          >
            {thead.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function TBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TR({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tr className={cn("border-b border-header last:border-none", className)}>
      {children}
    </tr>
  );
}

export function TD({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td
      className={cn(
        "px-2 py-2 border-r last:border-none border-header",
        className,
      )}
    >
      {children}
    </td>
  );
}

Table.Head = THead;
Table.Body = TBody;
Table.Tr = TR;
Table.Td = TD;

export default Table;
