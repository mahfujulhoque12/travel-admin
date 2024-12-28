import { Input } from '@/components/atoms/Input'
import CustomerProfileHeader from '@/components/molecules/customer-profile/CustomerProfileHeader'
import ProfileAddressDetails from '@/components/molecules/customer-profile/ProfileAddressDetails'
import ProfileContactDetails from '@/components/molecules/customer-profile/ProfileContactDetails'
import ProfilePersonalDetails from '@/components/molecules/customer-profile/ProfilePersonalDetails'
import React from 'react'
import { IoSearch } from 'react-icons/io5'

const CustomerProfile = () => {
  return (
    <div className="m-5 bg-white shadow-sm rounded-md p-5">
        {/* search start*/}
       <div className='flex justify-end items-end'>
       <div className="w-56 flex justify-center items-center border rounded-md px-3 text-[#8391A1]">
          <IoSearch />
          <Input
            placeholder="type search..."
            className="text-sm border-none shadow-none"
            
          />
        </div>
       </div>
          {/* search  end*/}

    <div className="p-3 rounded-md shadow-md border mt-5">
  <CustomerProfileHeader/>
    </div>

    <div className="p-3 rounded-md shadow-md border mt-5">
  <ProfilePersonalDetails/>
    </div>

    <div className="p-3 rounded-md shadow-md border mt-5">
  <ProfileContactDetails/>
    </div>

    <div className="p-3 rounded-md shadow-md border mt-5">
  <ProfileAddressDetails/>
    </div>
    </div>
  )
}

export default CustomerProfile