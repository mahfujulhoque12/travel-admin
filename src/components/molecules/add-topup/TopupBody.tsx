import CardTitle from '@/components/atoms/CardTitle'
import { Input } from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import React from 'react'

const TopupBody = () => {
  return (
    <>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* address 1 */}
      <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="address1"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
         Account Name
        </Label>
        <Input
          type="text"
          id="account-name"
          placeholder="Account Name"
          className="font-normal lg:text-base text-gray-900 placeholder:text-black"
        />
      </div>

      {/* address 2 */}
      <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="address2"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
           Account Number
        </Label>
        <Input
          type="text"
          id="account-number"
          placeholder="Account Number"
          className="font-normal lg:text-base text-gray-900 placeholder:text-black"
        />
      </div>
      
      {/* payment date */}
      <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="address2"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
      Payemnt Date
        </Label>
        <Input
          type="date"
          id="payemnt-date"
          placeholder="Account Number"
          className="font-normal lg:text-base text-gray-900 placeholder:text-black"
        />
      </div>
      {/* State */}
      <div className="relative w-full border shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="last name"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          Payment Type
        </Label>
        <select
          id="payment-type"
          defaultValue="Payment Type"
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

  

      {/* account type */}
      <div className="relative w-full border shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="last name"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          Account Type 
        </Label>
        <select
          id="account-type "
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
          Amount
        </Label>
        <Input
          type="number"
          id="amount"
          placeholder="16258"
          className="font-normal lg:text-base text-gray-900 placeholder:text-black"
        />
      </div>

        {/* note */}
              <div className="relative w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="address2"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          Note
        </Label>
        <Input
          type="text"
          id="Note"
          placeholder="16258"
          className="font-normal lg:text-base text-gray-900 placeholder:text-black"
        />
      </div>


         {/* country */}
         <div className="relative w-full border shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border-gray-300 rounded-lg px-4 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Label
          htmlFor="last name"
          className="absolute -top-2 left-4 px-2 text-xs font-normal text-gray-500 bg-white"
        >
          Transaction Number
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

    </div>
  </>
  )
}

export default TopupBody