import React from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { IoSearch } from "react-icons/io5";

interface TopHeaderTwoProps {
  searchPlaceholder?: string;
  datePlaceholder?: string;
  selectOptions?: { value: string; label: string }[];
  onSearchChange?: (value: string) => void;
  onDateChange?: (value: string) => void;
  onSelectChange?: (value: string) => void;
  buttons?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    className?: string;
  }[];
}

const TopHeaderTwo: React.FC<TopHeaderTwoProps> = ({
  searchPlaceholder = "Type to Search...",
  datePlaceholder = "Select Date",
  selectOptions = [
    { value: "all", label: "All" },
    { value: "booked", label: "Booked" },
    { value: "hold", label: "Hold" },
    { value: "cancelled", label: "Cancelled" },
  ],
  onSearchChange,
  onDateChange,
  onSelectChange,
  buttons = [],
}) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 ">

      {/* Left Section */}
      <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center gap-2">
  {/* Search Input */}
    <div className="flex justify-start items-center border rounded-md px-3 text-[#8391A1] border-[#257CEB]">
      <IoSearch />
      <Input
        placeholder={searchPlaceholder}
        className="text-sm border-none shadow-none"
        onChange={(e) => onSearchChange?.(e.target.value)}
      />
    </div>

  {/* Date Picker */}
  <div className="flex justify-start items-center border rounded-md px-3 text-[#8391A1]">
    <Input
      type="date"
      className="text-sm border-none shadow-none"
      placeholder={datePlaceholder}
      onChange={(e) => onDateChange?.(e.target.value)}
    />
  </div>

  {/* filter flight table data */}
  <div className="flex justify-start items-center border rounded-md px-3 text-[#8391A1] border-[#257CEB]">
  <select
    className="w-full text-sm border-none shadow-none focus:outline-none focus:ring-0 bg-transparent text-[#257CEB] font-semibold px-3 py-[8.5px]"
    onChange={(e) => onSelectChange?.(e.target.value)}
  >
    {selectOptions.map((option) => (
      <option
        key={option.value}
        value={option.value}
        className="text-[#1768D0] w-full font-medium bg-[#D8ECFD] py-2 px-3 rounded-md"
      >
        {option.label}
      </option>
    ))}
  </select>
</div>

</div>


      {/* Right Section */}
      <div className="flex items-center justify-end gap-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={`flex gap-1 px-4 py-2 rounded-md text-white text-sm font-bold transition-all duration-150 ${button.className}`}
            onClick={button.onClick}
          >
            {button.icon}
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopHeaderTwo;
