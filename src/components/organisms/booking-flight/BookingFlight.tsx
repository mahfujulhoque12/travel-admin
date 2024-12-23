"use client"
import React from "react";

import BookingFlightWraper from "@/components/molecules/booking-flight/BookingFlightWraper";
import TableHeadWraper from "@/components/molecules/booking-flight/TableHeadWraper";
import TableHead from "@/components/molecules/booking-flight/TableHead";

const BookingFlight = () => {
  const [statusFilter, setStatusFilter] = React.useState<string>("all");

  return (
    <div className="bg-white p-5 rounded-md m-5">
      <TableHead onFilterChange={setStatusFilter} />
      <BookingFlightWraper statusFilter={statusFilter} />
    </div>
  );
};

export default BookingFlight;
