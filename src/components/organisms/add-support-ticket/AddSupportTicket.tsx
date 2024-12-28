"use client"
import React, { useState } from 'react';
import CardTitle from '@/components/atoms/CardTitle';
import { Input } from '@/components/atoms/Input';
import Span from '@/components/atoms/Span';
import AddSupportTicketHeader from '@/components/molecules/add-support-ticket/AddSupportTicketHeader';
import Textarea from '@/components/atoms/Textaria';
import { Button } from '@/components/atoms/Button';
import { MdAllInclusive } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { InputFile } from '@/components/atoms/InputFile';

const AddSupportTicket: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectFile ,setSelectFile]=useState<string |null>(null);
  const maxLength = 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setInputValue(e.target.value);
    }
  };

  const handleFileUploadClick = () => {
    const fileInput = document.getElementById('add-support-ticket');
    fileInput?.click();
  };

  const handleFileChnage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files.length > 0) {
        setSelectFile(e.target.files[0].name)
    }
  }

  return (
    <div className="m-5 bg-white shadow-sm rounded-md p-5">
      <AddSupportTicketHeader />
      <div className="p-3 mt-5">
        {/* cart title start */}
        <CardTitle className="text-[#243045] text-base font-semibold">
          Write a descriptive title
        </CardTitle>
        <div className="flex mt-2 shadow-sm items-center border rounded-md px-3 focus-within:border-blue-300">
          <Input
            className="p-0 focus:outline-none flex-grow"
            placeholder="Write title"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Span className="text-sm text-gray-500 ml-2">
            {inputValue.length}/{maxLength}
          </Span>
        </div>
        {inputValue.length === maxLength && (
          <Span className="text-sm text-red-500 mt-1 block">
            Limit is over
          </Span>
        )}
        {/* cart title end */}

        {/* Explain the problem start */}
        <div className="mt-8">
        <CardTitle className="text-[#243045] text-base font-semibold">
        Explain the problem
        </CardTitle>
        <Textarea className='w-full mt-2 focus:border-blue-300 ' rows={10} cols={50}/>
        </div>
        {/* Explain the problem end */}

        {/* file upload start */}
        <div className="flex gap-2 items-center mt-3">
        <Button onClick={handleFileUploadClick} className="text-[#1768D0] text-xs font-semibold border shadow-sm rounded-sm px-2 py-1 flex items-center gap-1"><LuUpload /> Upload File</Button>
        <Span className='flex text-[#243045] text-xs font-semibold items-center gap-1'><MdAllInclusive size={15}/> Drop File</Span>
        <InputFile  type="file" id="add-support-ticket" onChange={handleFileChnage}/>
        </div>
        {
            selectFile && (
                <Span className="block text-sm font-bold mt-2 text-pink-400">{selectFile}</Span>
            )
        }
      
        {/* file upload end */}
           <div className="mt-5 flex justify-end">
                <div className='flex items-center gap-3'>
                <Button className="border rounded-md px-8 py-3 text-sm font-normal text-[#3D3D3D] hover:text-white hover:bg-[#257CEB] transition-all duration-300 shadow-sm">Cancle</Button>
                <Button className="bg-[#257CEB] text-sm font-normal text-white rounded-md px-8 py-3 hover:bg-blue-700 transition-all duration-300 shadow-sm">Submit</Button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default AddSupportTicket;
