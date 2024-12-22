"use client";

import React, { useEffect, useState } from 'react';
import ReusableTable from './ReusableTable';

const TableWrapper: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/table-data`);
  //       if (!response.ok) {
  //         if (response.status === 404) {
  //           throw new Error('API endpoint not found. Verify the API path.');
  //         }
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const json = await response.json();
  //       setData(json);
  //     } catch (err) {
  //       setError(err.message);
  //       console.error('Fetch error:', err);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  const columns = [
    { key: 'name', type: 'text', label: 'Name' },
    { key: 'isChecked', type: 'checkbox', label: 'Active' },
    { key: 'image', type: 'image', label: 'Profile Picture' },
    {
      key: 'actionPrimary',
      type: 'button',
      label: 'Primary Action',
      buttonProps: {
        labelKey: 'actionPrimaryLabel',
        onClick: (row) => alert(`Primary Action clicked for ${row.name}`),
        className: 'bg-blue-500 text-white',
      },
    },
    {
      key: 'actionSecondary',
      type: 'button',
      label: 'Secondary Action',
      buttonProps: {
        labelKey: 'actionSecondaryLabel',
        onClick: (row) => alert(`Secondary Action clicked for ${row.name}`),
        className: 'bg-green-500 text-white',
      },
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Dynamic Table with Styled Buttons</h1>
      <ReusableTable data={data} columns={columns} />
    </div>
  );
};

export default TableWrapper;
