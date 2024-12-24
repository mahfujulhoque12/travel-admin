import React from "react";
import { LuDownload } from "react-icons/lu";
import { IoPrintOutline } from "react-icons/io5";
import { RiFilter2Line } from "react-icons/ri";
import TopHeaderTwo from "./TopHeaderTwo";

interface TableHeadWrapperProps {
  onFilterChange: (status: string) => void;
  onSearchChange: (query: string) => void; // Add search change handler
}

const TableHeadWrapper: React.FC<TableHeadWrapperProps> = ({
  onFilterChange,
  onSearchChange,
}) => {
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
      searchPlaceholder="Type Search..."
      datePlaceholder="Pick a date"
      onSelectChange={onFilterChange}
      onSearchChange={onSearchChange} // Pass search change handler
      buttons={buttons}
    />
  );
};

export default TableHeadWrapper;
