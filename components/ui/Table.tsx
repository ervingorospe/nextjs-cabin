"use client";

import { TableHeader, TableHeaderProps } from "@/types/table.type";
import {
  styled,
  TableContainer as MuiTableContainer,
  Table as MuiTable,
} from "@mui/material";

const TableContainer = styled(MuiTableContainer)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.vars?.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  minWidth: "100%",
  overflowX: "auto",

  [theme.breakpoints.up("md")]: {
    overflowY: "visible",
  },
}));

function Table({ children }: { children: React.ReactNode }) {
  return (
    <TableContainer>
      <MuiTable>{children}</MuiTable>
    </TableContainer>
  );
}

export function THead({ theaders }: TableHeaderProps) {
  return (
    <thead>
      <tr className="border-b border-header text-foreground text-lg font-bold tracking-wide">
        {theaders?.map((thead: TableHeader) => (
          <th
            className={`px-2 border-r border-header last:border-none ${thead.className}`}
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
    <tr className={`border-b border-header last:border-none ${className}`}>
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
      className={`px-2 py-2 border-r last:border-none border-header ${className}`}
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
