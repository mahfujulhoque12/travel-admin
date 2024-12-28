import { Button } from '@/components/atoms/Button'
import AddressDetails from '@/components/molecules/add-customer/AddAddressDetails'
import ContactDetails from '@/components/molecules/add-customer/AddContactDetails'
import CustomerHeader from '@/components/molecules/add-customer/AddCustomerHeader'
import PersonalDetails from '@/components/molecules/add-customer/AddPersonalDetails'
import React from 'react'

const CustomerDetails = () => {
  return (
    <div className="m-5 bg-white shadow-sm rounded-md p-5">
      <CustomerHeader/>
    <div className="p-3 rounded-md shadow-md border mt-5">
        <PersonalDetails/>
    </div>
    <div className="p-3 rounded-md shadow-md border mt-5">
        <ContactDetails/>
    </div>
    <div className="p-3 rounded-md shadow-md border mt-5">
        <AddressDetails/>
    </div>

    <div className="mt-5 flex justify-end">
        <div className='flex items-center gap-3'>
        <Button className="border rounded-md px-8 py-3 text-sm font-normal text-[#3D3D3D] hover:text-white hover:bg-[#257CEB] transition-all duration-300 shadow-sm">Cancle</Button>
        <Button className="bg-[#257CEB] text-sm font-normal text-white rounded-md px-8 py-3 hover:bg-blue-700 transition-all duration-300 shadow-sm">Submit</Button>
        </div>
    </div>

</div>
  )
}

export default CustomerDetails