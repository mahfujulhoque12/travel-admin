import React from 'react';
import TableData from '@/components/molecules/table/TableData';
import TableHead from '@/components/molecules/table/TableHead';
import { sampleData } from '@/data/tableData';
import TableWrapper from '@/components/molecules/tableTwo/TableWrapper';

const Table = () => {
  return (
    <div className="bg-white p-5 rounded-md m-5">
      <TableHead />
      {/* <TableData rows={sampleData} /> */}
      <TableWrapper/>
    </div>
  );
};

export default Table;
