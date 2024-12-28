import CardTitle from '@/components/atoms/CardTitle'
import Span from '@/components/atoms/Span'
import Link from 'next/link'
import React from 'react'
import { FaListUl } from 'react-icons/fa'

const TopupHeader = () => {
  return (
    <div className="flex justify-between items-center">
    <CardTitle className='text-lg font-semibold text-[#243045]'>Add Topup</CardTitle>

    <Link href="#" className="bg-[#4242FF] text-white flex gap-1 items-center p-2 text-sm font-semibold rounded-md">
    <FaListUl />
    <Span>Topup List</Span>

    </Link>
</div>
  )
}

export default TopupHeader