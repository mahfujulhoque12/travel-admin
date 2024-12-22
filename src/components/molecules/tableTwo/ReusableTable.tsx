// components/ReusableTable.tsx
import React from 'react';
import ReusableButton from './ReusableButton';

type CellType = 'button' | 'text' | 'checkbox' | 'image';

interface ColumnConfig {
  key: string;
  type: CellType;
  label: string;
  buttonProps?: {
    labelKey: string; // Key to fetch the button label from the data
    onClick: (row: any) => void; // Action for the button
    className: string; // Custom styles for the button
  };
}

interface ReusableTableProps {
  data: any[];
  columns: ColumnConfig[];
}

const ReusableTable: React.FC<ReusableTableProps> = ({ data, columns }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="border border-gray-300 px-4 py-2 text-left">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key} className="border border-gray-300 px-4 py-2">
                {column.type === 'text' && <span>{row[column.key]}</span>}
                {column.type === 'button' && column.buttonProps && (
                  <ReusableButton
                    label={row[column.buttonProps.labelKey]}
                    onClick={() => column.buttonProps?.onClick(row)}
                    className={column.buttonProps.className}
                  />
                )}
                {column.type === 'checkbox' && (
                  <input type="checkbox" checked={row[column.key]} readOnly />
                )}
                {column.type === 'image' && (
                  <img src={row[column.key]} alt="Image" className="w-16 h-16 object-cover" />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusableTable;
