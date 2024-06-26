"use client";

import {
  flexRender,
  getFilteredRowModel,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import FilterBar from "./FilterBar";
import { Filter } from "@/types/Filter";

type DataTableDefaultProps = {
  data: any,
  columns: any
  filters: Filter[]
  dialogIdentifier?: string;
  linkPath?: string;
  onRowClick: (row: any) => void;
};

const Default = ({ data, columns, filters, onRowClick, dialogIdentifier, linkPath }: DataTableDefaultProps) => {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
  
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
      sorting,
      columnFilters,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
  });

  
  return (
    <div className="flex flex-col gap-y-6">
    <FilterBar table={table} filters={filters} dialogIdentifier={dialogIdentifier} linkPath={linkPath} />
    <div className="w-full">
      <table className="min-w-full text-left text-lg font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              onClick={() => onRowClick(row)}
              key={row.id}
              className="border-b dark:border-neutral-500"
            >
              {row.getVisibleCells().map((cell) => (
                <td className="py-4" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Default;