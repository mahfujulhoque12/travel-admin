import React from "react";
import { LuDownload } from "react-icons/lu";
import { IoPrintOutline } from "react-icons/io5";
import { RiFilter2Line } from "react-icons/ri";

import TopHeaderTwo from "./TopHeaderTwo";

interface TableHeadWraperProps {
  onFilterChange: (status: string) => void; // Add a prop for filter change
}

const TableHeadWraper: React.FC<TableHeadWraperProps> = ({ onFilterChange }) => {
  const buttons = [
    {
      label: "Filter",
      onClick: () => console.log("Filter clicked"),
      icon: <RiFilter2Line size={20} />,
      className: "bg-[#FCAA22] hover:bg-[#ffb53d]",
    },
    {
      label: "Export",
      onClick: () => console.log("Export clicked"),
      icon: <LuDownload size={20} />,
      className: "bg-[#20B038] hover:bg-[#257a33]",
    },
    {
      label: "Print",
      onClick: () => console.log("Print clicked"),
      icon: <IoPrintOutline size={20} />,
      className: "bg-[#1768D0] hover:bg-[#2e77d7]",
    },
  ];

  return (
    <TopHeaderTwo
      searchPlaceholder="Search here..."
      datePlaceholder="Pick a date"
      selectOptions={[
        { value: "all", label: "All" },
        { value: "booked", label: "Booked" },
        { value: "hold", label: "Hold" },
        { value: "cancelled", label: "Cancelled" },
      ]}
      onSelectChange={(value) => onFilterChange(value)} // Trigger filter change
      buttons={buttons}
    />
  );
};

export default TableHeadWraper;
