"use client";

import React from "react";

type TableColumn = {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
};

type TableRow = Record<string, any>;

type TableAction = {
  options: { label: string; value: string }[]; // Options for the select dropdown
  onChange: (value: string, row: TableRow) => void; // Change handler for select
};

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  actions?: TableAction;
}

const Table: React.FC<TableProps> = ({ columns, rows, actions }) => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full border-collapse border border-gray-200 text-left">
        <thead>
          <tr className="bg-[#D8ECFD]">
            {columns.map((column, index) => (
              <th
                key={index}
                className="font-semibold text-sm px-4 py-2 text-[#1768D0]"
              >
                {column.header}
              </th>
            ))}
            {actions && (
              <th className="font-semibold text-sm px-4 py-2 text-[#1768D0]">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-200">
              {columns.map((column, colIndex) => ( 
                <td
          
                key={colIndex} className="text-xs font-normal px-4 py-2">
                  {column.render
                    ? column.render(row[column.accessor], row)
                    : row[column.accessor]}
                </td>
              ))}
              {actions && (
                <td className="py-2">
                  <select
                    className="text-sm font-medium px-2 py-1 rounded-md bg-[#D8ECFD] text-[#1768D0]"
                    onChange={(e) =>
                      actions.onChange(e.target.value, row)
                    }
                  >
                    
                    {actions.options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
