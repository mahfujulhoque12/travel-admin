import { Button } from '@/components/atoms/Button'
import Paragraph from '@/components/atoms/Paragraph'
import Image from 'next/image'
import React from 'react'
import { MdModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import compnay from '/public/company/companay.png'
import Span from '@/components/atoms/Span'

const CompanyHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
      <div className="flex gap-3 items-center">
        <Image
          src={compnay}
          alt="customer"
          width={300}
          height={300}
          className="w-[172px] h-[172px]"
        />
        <div>
          <Paragraph className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#243045]">
          Company Name
          </Paragraph>
            <Span className='text-[#243045] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>
            Software/innovation.com/
            </Span>
        </div>
      </div>
      <div className="flex  gap-4 justify-end items-end">
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
  )
}

export default CompanyHeader