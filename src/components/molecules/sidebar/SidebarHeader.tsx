"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import logo from "/public/sidebar/logo.png";
import mobileLogo from "/public/sidebar/mobile-logo.png";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";

type SidebarHeaderProps = {
  isOpen: boolean;
  toggleAppSlidebar: () => void;
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isOpen, toggleAppSlidebar }) => {
  return (
    <div className="relative flex items-center justify-between p-4 border-b border-gray-200">
      <Link href="/" className="flex items-center justify-center">
        {isOpen ? (
          <Image src={logo} alt="Full Logo" width={150} height={50} className="h-[30px]" />
        ) : (
          <Image
            src={mobileLogo}
            alt="Mobile Logo"
            width={40}
            height={40}
            className="w-[30px] h-[30px]"
          />
        )}
      </Link>
      <div className="absolute bg-white right-[-16px] rounded-full border shadow-sm">
        <Button
          onClick={toggleAppSlidebar}
          className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
      </div>
    </div>
  );
};

export default SidebarHeader;
