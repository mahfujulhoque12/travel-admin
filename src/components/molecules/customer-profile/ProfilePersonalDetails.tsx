import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import React from 'react'

const ProfilePersonalDetails = () => {
  return (
    <>
     <CardTitle className='text-[#243045] font-semibold font-lg'>Personal Details</CardTitle>   
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
    {/* first name */}
    <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      <Label
        htmlFor="booking-date"
        className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
      >
        First Name
      </Label>
      <Input
        type="text"
        id="first-name"
        placeholder="Md Mahfujul"
        className="font-normal lg:text-base text-gray-900 placeholder:text-black"
      />
    </div>

        {/* last name */}
        <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      <Label
        htmlFor="booking-date"
        className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
      >
        Last Name
      </Label>
      <Input
        type="text"
        id="last-name"
        placeholder="Hoque"
        className="font-normal lg:text-base text-gray-900 placeholder:text-black"
      />
    </div>

        {/* first name */}
        <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      <Label
        htmlFor="booking-date"
        className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
      >
     Date Of Birth
      </Label>
      <Input
        type="text"
        id="date-of-birth"
        placeholder="13.12.2002"
        className="font-normal lg:text-base text-gray-900 placeholder:text-black"
      />
    </div>

    {/* gender */}
    <div className="relative w-full border shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
<Label
  htmlFor="last name"
  className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
>
Gander
</Label>
<select
  id="gender"
  defaultValue="Male"
  className="w-full h-full border-none focus:ring-0 focus:outline-none font-normal lg:text-base text-gray-900 bg-white rounded-lg  focus:bg-blue-50"
>
  <option value="" disabled className="text-gray-400">
    Male
  </option>
  <option value="option1" className="hover:bg-blue-100">
    Female
  </option>
  <option value="option2" className="hover:bg-blue-100">
    Others
  </option>
</select>
    </div>


    {/* passport  */}

    <div className="mt-5 relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      <Label
        htmlFor="booking-date"
        className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
      >
      Passport No 
      </Label>
      <Input
        type="text"
        id="booking-date"
        placeholder="1202584525"
        className="font-normal lg:text-base text-gray-900 placeholder:text-black"
      />
    </div>


    </div>
    </>
  )
}

export default ProfilePersonalDetails