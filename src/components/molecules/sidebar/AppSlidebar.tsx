"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarHeader from "./SidebarHeader";

import {
  BookingIcon,
  CustomerIcon,
  DashboardIcon,
  RefundsIcon,
  ReportIcon,
  SearchIcons,
  SettingIcon,
  TopupIcon,
  TransactionIcon,
  EmployeeIcon,
  CompanyIcon,
  SupportIcon,
  LogoutIcon,
} from "@/components/atoms";

type SidebarItem = {
  label: string;
  href: string;
  icon: React.ElementType<{ fill?: string }>;// Icon type now accepts a `fill` prop
};

const items: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { label: "Search", href: "/search", icon: SearchIcons },
  { label: "Booking", href: "/booking", icon: BookingIcon },
  { label: "Refund", href: "#", icon: RefundsIcon },
  { label: "Transactions", href: "#", icon: TransactionIcon },
  { label: "Topup Request", href: "#", icon: TopupIcon },
  { label: "Customer", href: "#", icon: CustomerIcon },
  { label: "Reports", href: "#", icon: ReportIcon },
  { label: "Setting", href: "#", icon: SettingIcon },
  { label: "Employees", href: "#", icon: EmployeeIcon },
  { label: "Company Profile", href: "#", icon: CompanyIcon },
  { label: "Support", href: "#", icon: SupportIcon },
];

const AppSlidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleAppSlidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={clsx(
        "flex shadow-md rounded-md flex-col bg-white text-[#243045] transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >
      {/* Header */}
      <SidebarHeader isOpen={isOpen} toggleAppSlidebar={toggleAppSlidebar} />

      {/* Navigation Items */}
     <nav className="flex-grow p-4 space-y-2">
  {items.map((item, index) => {
    const Icon = item.icon; // Access the icon component
    const isActive = pathname === item.href; // Check if the link is active
    return (
      <Link
        key={index}
        href={item.href}
        className={clsx(
          "group relative flex items-center gap-3 p-3 text-xs font-normal rounded-md transition-all duration-300 hover:text-white hover:bg-[#1768D0]",
          isActive && "bg-[#1768D0] text-white",
          !isOpen && "justify-center"
        )}
      >
        <div className="transition-colors duration-300">
          <Icon fill={isActive ? "white" : "black"} className="group-hover:fill-white" />
        </div>
        {isOpen && <>{item.label}</>}
      </Link>
    );
  })}
</nav>

      <div className="mt-12 p-4">
        <Link
          href="#"
          className={clsx(
            "group relative flex items-center gap-3 p-3 text-xs font-normal rounded-md transition-all duration-300 hover:text-white hover:bg-[#1768D0]",
            pathname === "#" && "bg-[#1768D0] text-white",
            !isOpen && "justify-center"
          )}
        >
          <LogoutIcon/> {isOpen && "Logout"}
        </Link>
      </div>
    </div>
  );
};

export default AppSlidebar;
