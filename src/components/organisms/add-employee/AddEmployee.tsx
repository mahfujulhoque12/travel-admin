import { Button } from "@/components/atoms/Button";
import AddEmployeeAddress from "@/components/molecules/add-employee/AddEmployeeAddress";
import AddEmployeeContact from "@/components/molecules/add-employee/AddEmployeeContact";
import AddEmployeeEmployment from "@/components/molecules/add-employee/AddEmployeeEmployment";
import AddEmployeeHeader from "@/components/molecules/add-employee/AddEmployeeHeader";
import AddEmployeePersonal from "@/components/molecules/add-employee/AddEmployeePersonal";
import React from "react";

const AddEmployee = () => {
  return (
    <div className="m-5 bg-white shadow-sm rounded-md p-5">
           <AddEmployeeHeader/>
      <div className="p-3 rounded-md shadow-md border mt-5">
     <AddEmployeePersonal/>
      </div>

      <div className="p-3 rounded-md shadow-md border mt-5">
     <AddEmployeeContact/>
      </div>

      <div className="p-3 rounded-md shadow-md border mt-5">
     <AddEmployeeEmployment/>
      </div>
      <div className="p-3 rounded-md shadow-md border mt-5">
     <AddEmployeeAddress/>
      </div>

      <div className="mt-5 flex justify-end">
        <div className='flex items-center gap-3'>
        <Button className="border rounded-md px-8 py-3 text-sm font-normal text-[#3D3D3D] hover:text-white hover:bg-[#257CEB] transition-all duration-300 shadow-sm">Cancle</Button>
        <Button className="bg-[#257CEB] text-sm font-normal text-white rounded-md px-8 py-3 hover:bg-blue-700 transition-all duration-300 shadow-sm">Submit</Button>
        </div>
    </div>
    </div>
  );
};

export default AddEmployee;
