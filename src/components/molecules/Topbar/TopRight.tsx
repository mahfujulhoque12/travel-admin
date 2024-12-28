"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import Span from "@/components/atoms/Span";
import flag from "/public/topbar/flag.svg";
import admin from "/public/topbar/admin.png";

const TopRight: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center gap-5 justify-end border">
      <div className="flex gap-5 items-center">
        <div className="flex gap-2">
          <Button className="bg-[#F4F7FE4D] text-[#8391A1] shadow-sm p-2 rounded-full">
            <IoMdSearch size={18} />
          </Button>
          <Button className="bg-[#F4F7FE4D] relative text-[#8391A1] shadow-sm p-2 rounded-full">
            <CiMail size={18} />
            <Span className="bg-[#f23e43] text-white p-[2px] text-[6px] rounded-full absolute top-0 right-0">
              99+
            </Span>
          </Button>
          <Button className="bg-[#F4F7FE4D] relative text-[#8391A1] shadow-sm p-2 rounded-full">
            <IoMdNotificationsOutline size={18} />
            <Span className="bg-[#f23e43] text-white p-[2px] text-[6px] rounded-full absolute top-0 right-0">
              99+
            </Span>
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Image
            src={flag}
            width={50}
            height={50}
            alt="flag"
            className="w-6 h-5"
          />
          <select
            className="text-[#8391A1] bg-white focus:outline-none rounded p-1 text-sm"
            aria-label="Select Language"
          >
            <option value="en">English</option>
            <option value="bn">Bangla</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 relative">
        <Button className="bg-[#F4F7FE4D] text-[#8391A1] shadow-sm p-2 rounded-full">
          <IoMoonOutline size={18} />
        </Button>
        <div className="flex items-center gap-3">
          <Image
            src={admin}
            width={50}
            height={50}
            alt="admin"
            className="w-8 h-8"
          />
          <Button
            className="flex items-center text-sm text-[#8391A1]"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            Admin <FaAngleDown />
          </Button>
        </div>
        {isDropdownOpen && (
          <div
            className="absolute right-0 top-12 bg-white border rounded shadow-lg text-[#8391A1] w-40"
            role="menu"
          >
            <ul className="py-2">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Profile Info
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopRight;
