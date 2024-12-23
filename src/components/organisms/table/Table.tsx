import React from 'react';
import TableHead from '@/components/molecules/table/TableHead';
import TableWrapper from '@/components/molecules/tableTwo/TableWrapper';

const Table = () => {
  return (
    <div className="bg-white p-5 rounded-md m-5">
      <TableHead />
  
      <TableWrapper/>
    </div>
  );
};

export default Table;
