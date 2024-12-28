import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import React from 'react'

const CompanyProfile = () => {
  return (
    <>
    <CardTitle className='text-[#243045] font-semibold font-lg'>Company Profile</CardTitle>   
   <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
   {/* first name */}
   <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
       Company Name
     </Label>
     <Input
       type="text"
       id="company-name"
       placeholder="Company Name"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>

       {/* website link */}
       <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
      Website Link
     </Label>
     <Input
       type="text"
       id="website-link"
       placeholder=" Website Link"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>

    {/* website link */}
   <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
      Bill Number
     </Label>
     <Input
       type="text"
       id="bill-number"
       placeholder=" Bill Number"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>

      {/* website link */}
   <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
     <Label
       htmlFor="booking-date"
       className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
     >
     Tin Number
     </Label>
     <Input
       type="text"
       id="tin-number"
       placeholder="Tin Number"
       className="font-normal lg:text-base text-gray-900 placeholder:text-black"
     />
   </div>



   </div>
   </>
  )
}

export default CompanyProfile