import { LuDownload } from "react-icons/lu";
import {IoPrintOutline } from "react-icons/io5";
import { RiFilter2Line } from "react-icons/ri";

import TopHeaderTwo from "./TopHeaderTwo";

const TopHeaderExample = () => {



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
        { value: "in-progress", label: " In Progress" },
        { value: "completed", label: "Completed" },
        { value: "pending", label: "Pending" },
      ]}
      buttons={buttons}
    />
  );
};

export default TopHeaderExample;
