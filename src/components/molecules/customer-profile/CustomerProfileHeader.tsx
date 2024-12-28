import Image from 'next/image';
import React from 'react';
import customer from '/public/customer/customer.png';
import Paragraph from '@/components/atoms/Paragraph';
import { Button } from '@/components/atoms/Button';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const CustomerProfileHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
      <div className="flex gap-3 items-center">
        <Image
          src={customer}
          alt="customer"
          width={300}
          height={300}
          className="w-[72px] h-[72px]"
        />
        <div>
          <Paragraph className="text-xs md:text-sm lg:text-base font-normal">
            Alex Stive Jobs
          </Paragraph>
          <Button className="border px-4 py-1.5 rounded-md text-xs font-normal mt-1 shadow-sm">
            Male
          </Button>
        </div>
      </div>
      <div className="flex  gap-4 justify-end items-center">
        {/* Ensuring consistent height */}
        <Button className="bg-[#1768D0] text-white text-sm font-normal rounded-md shadow-sm px-2 py-1.5 hover:bg-[#0070FF] transition-all duration-200 flex items-center gap-1">
        <MdModeEdit />
          Edit
        </Button>
        <Button className="bg-[#D72126] text-white text-sm font-normal rounded-md shadow-sm px-2 py-1.5 hover:bg-[#FF4C51] transition-all duration-200 flex items-center gap-1">
        <RiDeleteBin6Line  />
          Delete Customer
        </Button>
     
      </div>
    </div>
  );
};

export default CustomerProfileHeader;
