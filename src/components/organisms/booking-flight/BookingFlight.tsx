"use client";
import React, { useState } from "react";

import BookingFlightWraper from "@/components/molecules/booking-flight/BookingFlightWraper";
import TableHeadWraper from "@/components/molecules/booking-flight/TableHeadWraper";
import BookingButton from "@/components/molecules/booking-flight/BookingButton";

const BookingFlight = () => {
  const [statusFilter, setStatusFilter] = React.useState<string>("all"); // Default is "all"
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="bg-white p-5 rounded-md m-5">
      <BookingButton />
      <TableHeadWraper onFilterChange={setStatusFilter}  onSearchChange={setSearchQuery} />
      <BookingFlightWraper statusFilter={statusFilter} searchQuery={searchQuery} />
    </div>
  );
};

export default BookingFlight;
