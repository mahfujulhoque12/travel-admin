"use client";
import { useState } from "react";
import FlightBookingData from "@/components/organisms/Booking/FlightBookingData";
import HotelBookingData from "@/components/organisms/Booking/HotelBookingData";
import PackageBookingData from "@/components/organisms/Booking/PackageBookingData";
import CarBookingData from "@/components/organisms/Booking/CarBookingData";
import TabNavigation from "@/components/molecules/global/TabNavigation";
import Loader from "@/components/molecules/global/Loader";
import { usePaginatedFetchData } from "@/hooks/useFetchData";
import { LuPlaneTakeoff } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoPrintOutline } from "react-icons/io5";
import { RiFilter2Line } from "react-icons/ri";
import HajjUmrahData from "./HajjUmrahData";
import { LuHotel } from "react-icons/lu";
import { GiPalmTree } from "react-icons/gi";
import { TiWorldOutline } from "react-icons/ti";
import VisaData from "./VisaData";
import { FaCar } from "react-icons/fa";
import { PiMosqueThin } from "react-icons/pi";

const tabs = [
  { label: "Flight", icon: <LuPlaneTakeoff size={20}/> },
  { label: "Hotel", icon: <LuHotel size={20} /> },
  { label: "Package", icon: <GiPalmTree size={20} /> },
  { label: "Visa", icon: <TiWorldOutline size={20} /> },
  { label: "Car", icon: <FaCar  size={20} /> },
  { label: "Hajj & Umrah", icon: <PiMosqueThin size={20} /> },

];

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

const apiUrls = [
  `${process.env.NEXT_PUBLIC_API_URL}/api/flight-booking`,
  `${process.env.NEXT_PUBLIC_API_URL}/api/hotel-booking`,
  `${process.env.NEXT_PUBLIC_API_URL}/api/package-booking`,
  `${process.env.NEXT_PUBLIC_API_URL}/api/visa`,
  `${process.env.NEXT_PUBLIC_API_URL}/api/car-booking`,
  `${process.env.NEXT_PUBLIC_API_URL}/api/hajj-umrah`,
];

const BookingTableWrapper = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPages, setCurrentPages] = useState<number[]>(
    Array(tabs.length).fill(1)
  );
  const limit = 12;

  const { data, isLoading, error, totalPages } = usePaginatedFetchData(
    apiUrls,
    activeTab,
    currentPages[activeTab],
    limit
  );

  const handlePageChange = (tabIndex: number, page: number) => {
    setCurrentPages((prev) => {
      const updatedPages = [...prev];
      updatedPages[tabIndex] = page;
      return updatedPages;
    });
  };

  const renderTabContent = () => {
    if (isLoading) return <Loader />;
    if (error) return <div className="text-red-500">{error}</div>;

    switch (activeTab) {
      case 0:
        return (
          <FlightBookingData
            data={data[apiUrls[0]] || []}
            currentPage={currentPages[0]}
            totalPages={totalPages}
            onPageChange={(page) => handlePageChange(0, page)}
            actionButton={buttons}
          />
        );
      case 1:
        return (
          <HotelBookingData
            data={data[apiUrls[1]] || []}
            currentPage={currentPages[1]}
            totalPages={totalPages}
            onPageChange={(page) => handlePageChange(1, page)}
            actionButton={buttons}
          />
        );
      case 2:
        return (
          <PackageBookingData
            data={data[apiUrls[2]] || []}
            currentPage={currentPages[2]}
            totalPages={totalPages}
            onPageChange={(page) => handlePageChange(2, page)}
            actionButton={buttons}
          />
        );
        case 3:
          return (
            <VisaData
              data={data[apiUrls[3]] || []}
              currentPage={currentPages[3]}
              totalPages={totalPages}
              onPageChange={(page) => handlePageChange(3, page)}
              actionButton={buttons}
            />
          );
      case 4:
        return (
          <CarBookingData
            data={data[apiUrls[4]] || []}
            currentPage={currentPages[4]}
            totalPages={totalPages}
            onPageChange={(page) => handlePageChange(4, page)}
            actionButton={buttons}
          />
        );
        case 5:
          return (
            <HajjUmrahData
              data={data[apiUrls[5]] || []}
              currentPage={currentPages[5]}
              totalPages={totalPages}
              onPageChange={(page) => handlePageChange(5, page)}
              actionButton={buttons}
            />
          );
         
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-5 rounded-md m-5 space-y-5">
      <TabNavigation tabs={tabs} onTabChange={setActiveTab} />
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default BookingTableWrapper;
