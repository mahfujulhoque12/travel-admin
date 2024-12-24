import React, { useState, useEffect } from "react";

interface SelectFilterProps {
  apiUrl: string;
  valueKey: string;
  labelKey: string;
  onSelectChange: (value: string) => void;
}

interface Option {
  value: string;
  label: string;
}

const SelectFilter: React.FC<SelectFilterProps> = ({
  apiUrl,
  valueKey,
  labelKey,
  onSelectChange,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data: any[] = await response.json();
  
        // Preprocess the data to remove non-numeric characters for numeric fields
        const processedData = data.map((item) => ({
          ...item,
          totalPrice: item.totalPrice.replace(/[^0-9.]/g, ""), // Remove `$` for numeric filtering
        }));
  
        // Deduplicate options by `valueKey`
        const uniqueOptions: Option[] = Array.from(
          new Map(
            processedData.map((item) => [
              item[valueKey],
              { value: item[valueKey], label: item[labelKey] } as Option,
            ])
          ).values()
        );
  
        // Add "All" option
        setOptions([{ value: "all", label: "All" }, ...uniqueOptions]);
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    };
  
    fetchOptions();
  }, [apiUrl, valueKey, labelKey]);
  

  return (
    <select
      className="text-sm border-none shadow-none py-2.5 px-3 bg-white"
      onChange={(e) => onSelectChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
