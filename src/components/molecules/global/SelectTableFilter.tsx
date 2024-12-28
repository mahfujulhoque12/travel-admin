import React from "react";
interface Package {
  id: number;
  issueDate: string;
  bookingDate: string;
  bookingID: string;
  passengerName: string;
  flightDate: string;
  route: string;
  ticketNumber: string;
  totalPrice: string;
  status: string;
  actionPrimaryLabel: string;
}
interface SelectFilterProps {
  searchField: keyof Package;
  getOptions: (field: keyof Package) => string[];
  setFilter: (value: string, field: keyof Package) => void;
}

const SelectTableFilter: React.FC<SelectFilterProps> = ({
  searchField,
  getOptions,
  setFilter,
}) => {
  const options = getOptions(searchField);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value, searchField);
  };
  return (
    <select
      className="text-sm border-none shadow-none py-2.5 px-3 bg-white"
      onChange={handleChange}
    >
      <option value="">All {searchField}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default SelectTableFilter;
