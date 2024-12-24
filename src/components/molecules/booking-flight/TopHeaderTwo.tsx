import React, { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { IoSearch } from "react-icons/io5";
import SelectFilter from "@/components/Global/SelectFilter";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface TopHeaderTwoProps {
  searchPlaceholder?: string;
  datePlaceholder?: string;
  onSearchChange?: (value: string) => void;
  onDateChange?: (range: DateRange | undefined) => void; 
  onSelectChange?: (value: string) => void; // Optional prop
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
  onSearchChange,
  onDateChange,
  onSelectChange = () => {}, // Provide a default no-op function
  buttons = [],
}) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const handleDateChange = (range: DateRange | undefined) => {
    setSelectedRange(range);
    onDateChange?.(range); // Pass the selected range to the parent
    setIsDatePickerOpen(false); // Close the date picker
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="relative">
          <div
            className="flex justify-start items-center border rounded-md px-3 text-[#8391A1] py-2.5 cursor-pointer"
            onClick={() => setIsDatePickerOpen((prev) => !prev)}
          >
            <span className="text-sm">
              {selectedRange?.from
                ? `${selectedRange.from.toLocaleDateString()} - ${selectedRange.to?.toLocaleDateString() || ""}`
                : datePlaceholder}
            </span>
          </div>

          {isDatePickerOpen && (
            <div className="absolute z-10 bg-white shadow-lg rounded-md mt-2 p-4">
              <DayPicker
                mode="range"
                selected={selectedRange}
                onSelect={handleDateChange}
              />
            </div>
          )}
        </div>


        {/* Dynamic Select */}
        <div className="flex justify-start items-center border rounded-md px-3 text-[#8391A1] border-[#257CEB]">
          <SelectFilter
            apiUrl="/api/flight-booking"
            valueKey="status"
            labelKey="status"
            onSelectChange={onSelectChange} 
          />
        </div>
      </div>

      {/* test price  */}
      <div className="flex justify-start items-center border rounded-md px-3 text-[#8391A1] border-[#257CEB]">
          <SelectFilter
            apiUrl="/api/flight-booking"
            valueKey="passengerName"
            labelKey="passengerName"
            onSelectChange={(value) => {
              console.log("Filter changed:", value);
              onSelectChange(value);
            }} 
          />
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
