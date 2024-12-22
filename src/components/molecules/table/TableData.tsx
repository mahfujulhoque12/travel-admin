"use client";

import React from "react";
import Table from "@/components/molecules/table/Table";

const TableData = ({ rows }: { rows: any[] }) => {
  const columns = [
    { header: "Issue Date", accessor: "issueDate" },
    { header: "Booking Date", accessor: "bookingDate" },
    { header: "Booking ID", accessor: "bookingId" },
    { header: "Passenger Name", accessor: "passengerName" },
    { header: "Flight Date", accessor: "flightDate" },
    { header: "Route", accessor: "route" },
    { header: "Ticket Number", accessor: "ticketNumber" },
    {
      header: "PNR",
      accessor: "pnr",
      render: (value: string) => <span>{value}</span>,
    },
    { header: "Total Price", accessor: "totalPrice" },
    {
      header: "Status",
      accessor: "status",
      render: (value: string) => (
        <span
          className={`text-xs font-medium ${
            value === "Confirmed" ? "text-[#20B038]" : "text-[#FCAA22]"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  const actions = {
    options: [
      { label: "View Details", value: "view" },
      { label: "Edit", value: "edit" },
      { label: "Delete", value: "delete" },
      { label: "Draft", value: "draft" },

     
    ],
    onChange: (value: string, row: any) => {
      console.log(`Action "${value}" selected for`, row);
    },
  };

  return (
    <div>
    
      <Table columns={columns} rows={rows} actions={actions} />
    </div>
  );
};

export default TableData;
