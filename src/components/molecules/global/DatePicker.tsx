import React, { useState, useRef, useEffect } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { Button } from "@/components/atoms/Button";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DatePickerProps {
  field: string;
  setFilter: (field: string, startDate: string, endDate: string) => void;
  defaultRange?: DateRange;
}

const DatePicker: React.FC<DatePickerProps> = ({
  field,
  setFilter,
  defaultRange,
}) => {
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(
    defaultRange || null
  );
  const [tempRange, setTempRange] = useState<DateRange | null>(null); // Temporary range
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!datePickerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleApply = () => {
    if (tempRange?.from && tempRange?.to) {
      setSelectedRange(tempRange);
      const start = new Date(tempRange.from).setHours(0, 0, 0, 0);
      const end = new Date(tempRange.to).setHours(23, 59, 59, 999);
      const formattedStartDate = format(new Date(start), "yy-MM-dd");
      const formattedEndDate = format(new Date(end), "yy-MM-dd");
      setFilter(field, formattedStartDate, formattedEndDate);
      setIsOpen(false);
    } else if (tempRange?.from && tempRange?.to) {
      setFilter(field, "", "");
    } else {
      alert("please select range");
    }
  };
  const clearAppliedDate = () => {
    setSelectedRange(null);
    setTempRange(null);
    setIsOpen(false);
  };

  const deSelectDate = () => {
    setSelectedRange(null);
    setTempRange(null);
  };

  const getPlaceholderText = () => {
    if (selectedRange?.from && selectedRange?.to) {
      return `${format(selectedRange.from, "MMM dd")} - ${format(
        selectedRange.to,
        "MMM dd"
      )}`;
    }
    return "Calendar";
  };

  return (
    <div
      ref={datePickerRef}
      className="relative inline-block text-left w-[350px]"
    >
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-between w-full border border-gray-400 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>{getPlaceholderText()}</span>
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="absolute mt-2 w-full z-10 py-2 bg-white border border-gray-300 rounded-lg shadow-lg max-w-full">
            <DayPicker
              className="p-2 flex items-center justify-center"
              mode="range"
              selected={tempRange || undefined}
              onSelect={(range) => setTempRange(range ?? null)}
            />
            <div className="flex gap-2 px-2 mt-3">
              {tempRange?.from && tempRange?.to ? (
                <Button
                  className="bg-[#0d0d0e] flex-1 px-3 py-1.5 rounded-md text-white text-sm font-normal"
                  onClick={deSelectDate}
                >
                  {tempRange?.from && tempRange?.to && "Deselect"}
                </Button>
              ) : (
                <Button
                  className="bg-[#0d0d0e] flex-1 px-3 py-1.5 rounded-md text-white text-sm font-normal"
                  onClick={clearAppliedDate}
                >
                  {!(tempRange?.from && tempRange?.to) && "Cancel"}
                </Button>
              )}
              <Button
                className="bg-[#1571E7] flex-1 px-3 py-1.5 rounded-md text-white text-sm font-normal"
                onClick={handleApply}
              >
                Apply
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DatePicker;
