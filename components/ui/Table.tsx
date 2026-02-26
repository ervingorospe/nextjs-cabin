"use client";

import { TableHeader, TableHeaderProps } from "@/types/table.type";
import {
  styled,
  TableContainer as MuiTableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainerProps,
} from "@mui/material";

const TableContainer = styled(MuiTableContainer)<TableContainerProps>(
  ({ theme }) => ({
    padding: theme.spacing(2),
    minWidth: "100%",
    overflowX: "auto",

    [theme.breakpoints.up("md")]: {
      overflowY: "visible",
    },
  }),
);

function Table({ children }: { children: React.ReactNode }) {
  return (
    <TableContainer component={Paper}>
      <MuiTable size="small">{children}</MuiTable>
    </TableContainer>
  );
}

export function THead({ theaders }: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {theaders?.map((thead: TableHeader) => (
          <TableCell key={thead.label}>{thead.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export function TBody({ children }: { children: React.ReactNode }) {
  return <TableBody>{children}</TableBody>;
}

export function TR({ children }: { children: React.ReactNode }) {
  return <TableRow>{children}</TableRow>;
}

export function TD({ children }: { children: React.ReactNode }) {
  return <TableCell>{children}</TableCell>;
}

Table.Head = THead;
Table.Body = TBody;
Table.Tr = TR;
Table.Td = TD;

export default Table;
