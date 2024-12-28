"use client";
import { useState } from "react";
import Loader from "@/components/molecules/global/Loader";
import { usePaginatedFetchData } from "@/hooks/useFetchData";
import { RiFilter2Line } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { IoPrintOutline } from "react-icons/io5";
import TransactionTableData from "./TransactionTableData";

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

const TransectionTableWraper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
     const TransectionApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/transection`;

  const { data, isLoading, error, totalPages } = usePaginatedFetchData(
    [TransectionApiUrl],
    0,
    currentPage,
    limit
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white p-5 rounded-md m-5 space-y-5">
      <TransactionTableData
        data={data[TransectionApiUrl] || []}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        actionButton={buttons}
      />
    </div>
  );
};

export default TransectionTableWraper;