"use client";

import React, { useEffect, useState } from "react";
import ReusableTable, { ColumnConfig } from "./ReusableTable";

interface BookingFlightWrapperProps {
  statusFilter: string;
  searchQuery: string;
}

const BookingFlightWrapper: React.FC<BookingFlightWrapperProps> = ({
  statusFilter,
  searchQuery,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/flight-booking");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setFilteredData(json); // Initialize filtered data
      } catch (err) {
        setError((err as Error).message);
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = data;

    if (statusFilter !== "all") {
      filtered = data.filter((item) => item.status === statusFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.passengerName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [statusFilter, searchQuery, data]);



  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-blue-500">Loading data...</div>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  const columns: ColumnConfig[] = [
    { key: "issueDate", type: "text", label: "Issue Date" },
    { key: "bookingDate", type: "text", label: "Booking Date" },
    { key: "bookingID", type: "text", label: "Booking ID" },
    { key: "passengerName", type: "text", label: "Passenger Name" },
    { key: "flightDate", type: "text", label: "Flight Date" },
    { key: "route", type: "text", label: "Route" },
    { key: "ticketNumber", type: "text", label: "Ticket Number" },
    {
      key: "PNR",
      type: "button",
      label: "PNR",
      buttonProps: {
        labelKey: "actionPrimaryLabel",
        onClick: (row: any) =>
          alert(`Primary Action clicked for ${row.passengerName}`),
        className: "bg-[#1768D0] p-1 text-white",
      },
    },
    { key: "totalPrice", type: "text", label: "Total Price" },
    { key: "status", type: "text", label: "Status" },
    {
      key: "action",
      type: "select",
      label: "Action",
      selectOptions: ["Confirm", "Pending", "Delete", "Draft"],
      onSelectChange: () => {},
    },
  ];

  return (
    <div>
      {filteredData.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No Data Found</div>
      ) : (
        <ReusableTable data={filteredData} columns={columns} />
      )}
    </div>
  );
};

export default BookingFlightWrapper;