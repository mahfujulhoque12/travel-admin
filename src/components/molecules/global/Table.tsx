/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReusableButton from "@/components/molecules/global/ReusableButton";
import Image from "next/image";
type CellType = "button" | "text" | "checkbox" | "image" | "select";

export interface ColumnConfig {
  key: string;
  type: CellType;
  label: string;
  buttonProps?: {
    labelKey: string;
    onClick: (row: any) => void;
    className: string;
  };
  selectOptions?: string[]; // For dropdown options
  onSelectChange?: (row: any, value: string) => void; // Callback for when the value changes
}

interface ReusableTableProps {
  data: any[];
  columns: ColumnConfig[];
}

const Table: React.FC<ReusableTableProps> = ({ data, columns }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "booked":
        return "text-[#20B038]";
      case "hold":
        return "text-yellow-400";
      case "cancelled":
        return "text-red-700";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="overflow-x-auto shadow-sm">
      <table className="min-w-full table-auto border-collapse border">
        <thead>
          <tr className="bg-[#D8ECFD]">
            {columns.map((column) => (
              <th
                key={column.key}
                className="p-4 text-start text-sm font-semibold text-[#1768D0]"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`row-${row.id || rowIndex}`} className="">
              {columns.map((column) => (
                <td
                  key={`row-${row.id || rowIndex}-col-${column.key}`}
                  className={`border-b px-4 py-2 font-normal text-xs ${
                    column.key === "status" && row[column.key]
                      ? getStatusColor(row[column.key])
                      : "text-[#243045]"
                  }`}
                >
                  {column.type === "text" && <span>{row[column.key]}</span>}
                  {column.type === "button" && column.buttonProps && (
                    <ReusableButton
                      label={row[column.buttonProps.labelKey]}
                      onClick={() => column.buttonProps?.onClick(row)}
                      className={column.buttonProps.className}
                    />
                  )}
                  {column.type === "checkbox" && (
                    <input type="checkbox" checked={row[column.key]} readOnly />
                  )}
                  {column.type === "image" && (
                    <Image
                      src={row[column.key]}
                      alt="Image"
                      width={16}
                      height={16}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  {column.type === "select" && column.selectOptions && (
                    <select
                      className="bg-[#D8ECFD] text-[#1768D0] p-2 rounded"
                      defaultValue={row[column.key]}
                      onChange={(e) => {}}
                    >
                      {column.selectOptions.map((option, index) => (
                        <option
                          key={`${row.id || rowIndex}-opt-${index}`}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
