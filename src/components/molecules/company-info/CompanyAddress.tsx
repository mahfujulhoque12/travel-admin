import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import React from 'react'

const CompanyAddress = () => {
  return (
    <>
    <CardTitle className="text-[#243045] font-semibold font-lg">
      Address 
    </CardTitle>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* address 1 */}
      <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="address1"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          Address Line 1
        </Label>
        <Input
          type="text"
          id="address-one"
          placeholder="Enter Address"
          className="font-normal lg:text-base text-gray-900 placeholder:text-black"
        />
      </div>

      {/* address 2 */}
      <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="address2"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          Address Line 2
        </Label>
        <Input
          type="text"
          id="address-two"
          placeholder="Enter Address"
          className="font-normal lg:text-base text-gray-900 placeholder:text-black"
        />
      </div>

      {/* State */}
      <div className="relative w-full border shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="last name"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          State
        </Label>
        <select
          id="state"
          defaultValue=""
          className="w-full  border-none focus:ring-0 focus:outline-none font-normal lg:text-base text-gray-900 bg-white rounded-lg  focus:bg-blue-50"
        >
          <option value="" disabled className="text-gray-400">
            select
          </option>
          <option value=""  className="hover:bg-blue-100">
            Dhaka
          </option>
          <option value="option1" className="hover:bg-blue-100">
            Narayangonj
          </option>
          <option value="option2" className="hover:bg-blue-100">
            Others
          </option>
        </select>
      </div>

      {/* city */}
      <div className="relative w-full border shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="last name"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          City
        </Label>
        <select
          id="city"
          defaultValue=""
          className="w-full  border-none focus:ring-0 focus:outline-none font-normal lg:text-base text-gray-900 bg-white rounded-lg  focus:bg-blue-50"
        >
          <option value="" disabled className="text-gray-400">
           select
          </option>
          <option value=""  className="text-gray-400">
           select
          </option>
          <option value="option1" className="hover:bg-blue-100">
            Comilla
          </option>
          <option value="option2" className="hover:bg-blue-100">
            Others
          </option>
        </select>
      </div>

      {/* country */}
      <div className="relative w-full border shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="last name"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          Country
        </Label>
        <select
          id="country"
          defaultValue=""
          className="w-full  border-none focus:ring-0 focus:outline-none font-normal lg:text-base text-gray-900 bg-white rounded-lg focus:bg-blue-50"
        >
          <option value="" disabled>
            Select
          </option>
          <option value="option1" className="hover:bg-blue-100">Bangladesh</option>
          <option value="option2" className="hover:bg-blue-100">India</option>
          <option value="option3" className="hover:bg-blue-100">Others</option>
        </select>
      </div>

           {/* zip */}
           <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="address2"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          Zip/Postal code
        </Label>
        <Input
          type="text"
          id="zip"
          placeholder="16258"
          className="font-normal lg:text-base text-gray-900 placeholder:text-black"
        />
      </div>

    </div>
  </>
  )
}

export default CompanyAddress