import { Button } from '@/components/atoms/Button'
import Paragraph from '@/components/atoms/Paragraph'
import Image from 'next/image'
import React from 'react'
import { MdModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import compnay from '/public/company/companay.png'
import Span from '@/components/atoms/Span'

const WaletHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
      <div className="flex gap-3 items-center">
        <Image
          src={compnay}
          alt="customer"
          width={300}
          height={300}
          className="w-[92px] h-[92px]"
        />
        <div>
          <Paragraph className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#243045]">
          Company Name
          </Paragraph>
            <Span className='text-[#243045] text-base sm:text-base md:text-base lg:text-base font-semibold'>
            Software/innovation.com/
            </Span>
        </div>
      </div>
    
    </div>
  )
}

export default WaletHeader