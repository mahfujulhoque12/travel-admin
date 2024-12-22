import { SearchIcons } from '@/components/atoms'
import Paragraph from '@/components/atoms/Paragraph'
import Span from '@/components/atoms/Span'
import { FaAnglesRight } from "react-icons/fa6";


import React from 'react'
import { Button } from '@/components/atoms/Button';

const TopLeft = () => {
  return (
    <div>
        <Paragraph className='text-black text-base font-semibold'>Flight</Paragraph>

       <div className='flex items-center  mt-1.5 gap-2'>
       <Span className='flex items-center text-[#8391A1] text-sm font-normal gap-1'><SearchIcons className='w-3'/> search <FaAnglesRight />
        </Span>
        <Button className='text-sm font-semibold text-[#257CEB]'>Flight</Button>
       </div>
    </div>
  )
}

export default TopLeft