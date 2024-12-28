import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Search } from "lucide-react";
import { Input } from "@/components/atoms/Input";
import { useDebounce } from "@/hooks/useDebounce";

const TableSearch = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const debouncedQuery = useDebounce(localQuery, 200);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <div className="bg-[#FFFFFF] shadow-light-shadow rounded-md overflow-hidden">
      <div
        className={`transition-all duration-150 ease-in-out space-y-2 overflow-hidden`}
      >
        <div className="px-4 py-1.5 space-y-3">
          <div className="space-y-2">
            <div className="relative w-full max-w-sm">
              <Input
                id="searchBox"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Search here"
                className="w-full pl-10 border rounded-md p-5 outline-none bg-white shadow-none focus-visible:ring-0 focus:ring-0 focus:outline-none"
              />
              {localQuery && (
                <Button
                  className="hover:bg-[#F5F7FA] px-1 py-1 absolute right-14 top-1/2 rounded-full transform -translate-y-1/2 "
                  aria-label="Clear selection"
                  onClick={() => {
                    setLocalQuery("");
                    setSearchQuery("");
                    document.getElementById("searchBox")?.focus();
                  }}
                >
                  <X className="w-5 h-5 text-gray-500" />
                </Button>
              )}
              <Button className="absolute px-2.5 py-2 bg-[#F5F7FA] right-3 top-1/2 rounded-sm transform -translate-y-1/2 ">
                <Search className=" text-[#8391A1] w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSearch;
