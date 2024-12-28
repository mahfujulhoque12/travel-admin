"use client";
import React, { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { FaPlaneDeparture } from "react-icons/fa";
import { PiMosque } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { GiPalmTree } from "react-icons/gi";
import { TbWorldStar } from "react-icons/tb";
import TopHeaderExample from "./TopHeaderExample";

const TableHead = () => {
  const [activeButton, setActiveButton] = useState<string>("Flight");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const buttonClass = (buttonName: string) =>
    `flex p-4 items-center text-base font-semibold transition-colors duration-150 ${
      activeButton === buttonName
        ? "text-[#257CEB] border-b-2 border-[#257CEB]"
        : "text-[#8391A1] hover:text-[#257CEB]"
    }`;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b-2 border-[#E9F2FD]">
        <Button
          className={buttonClass("Flight")}
          onClick={() => handleButtonClick("Flight")}
        >
          <FaPlaneDeparture size={24} /> Flight
        </Button>
        <Button
          className={buttonClass("Hotel")}
          onClick={() => handleButtonClick("Hotel")}
        >
          <LuHotel size={24} /> Hotel
        </Button>
        <Button
          className={buttonClass("Package")}
          onClick={() => handleButtonClick("Package")}
        >
          <GiPalmTree size={24} /> Package
        </Button>
        <Button
          className={buttonClass("Visa")}
          onClick={() => handleButtonClick("Visa")}
        >
          <TbWorldStar size={24} /> Visa
        </Button>
        <Button
          className={buttonClass("Car")}
          onClick={() => handleButtonClick("Car")}
        >
          <FaCar size={24} /> Car
        </Button>
        <Button
          className={buttonClass("Hajj Umrah")}
          onClick={() => handleButtonClick("Hajj Umrah")}
        >
          <PiMosque size={24} /> Hajj Umrah
        </Button>
      </div>

      <TopHeaderExample />
    </div>
  );
};

export default TableHead;
