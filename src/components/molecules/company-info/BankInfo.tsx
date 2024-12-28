import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import React from 'react'

const BankInfo = () => {
  return (
    <>
    <CardTitle className='text-[#243045] font-semibold font-lg'>  Bank Details</CardTitle>   
   <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
   {/* first name */}
   <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
       Bank Name
     </Label>
     <Input
       type="text"
       id="Bank Name"
       placeholder="Bank Name"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>

       {/* website link */}
       <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
     Branch Name
     </Label>
     <Input
       type="text"
       id="Branch Name"
       placeholder="Branch Name"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>

    {/* website link */}
   <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
      Account Name
     </Label>
     <Input
       type="text"
       id="bill-number"
       placeholder=" Account Name"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>

      {/*  Account Number */}
   <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
    Account Number
     </Label>
     <Input
       type="text"
       id="account-number"
       placeholder=" Account Number"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>

{/* account holder name */}
   <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
    Account  Holder Name
     </Label>
     <Input
       type="text"
       id="tin-number"
       placeholder=" Account  Holder Name"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>

{/* Rounting Number */}
<div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
  Rounting Number
     </Label>
     <Input
       type="text"
       id="tin-number"
       placeholder="Rounting Number"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>
   </div>
   </>
  )
}

export default BankInfo