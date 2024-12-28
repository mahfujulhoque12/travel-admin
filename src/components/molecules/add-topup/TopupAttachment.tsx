"use client"
import { Button } from '@/components/atoms/Button';
import CardTitle from '@/components/atoms/CardTitle';
import { InputFile } from '@/components/atoms/InputFile';
import Paragraph from '@/components/atoms/Paragraph';
import Span from '@/components/atoms/Span';
import Image from 'next/image';
import React, { useState } from 'react';
import { PiImageLight } from "react-icons/pi";
import { RiCloseLine } from "react-icons/ri";

const TopupAttachment = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUploadClick = () => {
    const fileInput = document.getElementById('attachment-input');
    fileInput?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      readFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      readFile(e.dataTransfer.files[0]);
    }
  };

  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setSelectedFile(reader.result.toString());
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='mt-8 shadow-md rounded-md  p-6 w-[50%]'>
      <CardTitle className="font-semibold capitalize text-base md:text-lg lg:text-lg text-[#243045]">
      Attachment
      </CardTitle>
      <div 
        className={`flex border-dashed border-2 mt-4 rounded-md ${isDragOver ? 'border-blue-700 bg-blue-100' : 'border-blue-500'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedFile && (
          <div className="py-8 relative my-auto px-4 border rounded-md shadow-md m-5">
              <Button className="absolute  top-0 right-0 bg-red-300 py-2 text-xs px-2 text-white rounded-full hover:bg-red-500 transition-all duration-200" onClick={()=>setSelectedFile(null)}><RiCloseLine /></Button>
                   
            <Image src={selectedFile} alt="Uploaded File" width={250} height={250} />
          </div>
        )}

        <div className="flex mx-auto items-center justify-center flex-col py-12">
          <PiImageLight size={30} onClick={handleFileUploadClick} className="cursor-pointer" />
          <InputFile id="attachment-input" type="file" onChange={handleFileChange} />
          <Span className="text-[#243045] py-1 lg:text-sm font-normal">
            Drag your files to start uploading
          </Span>
          <div className="flex items-center gap-3">
            <span className="w-[160px] h-[1px] bg-[#DCDCDC] block"></span>
            <Span className="font-normal text-xs lg:text-xs text-[#7C7C7C]">OR</Span>
            <span className="w-[160px] h-[1px] bg-[#DCDCDC] block"></span>
          </div>
          <Button
            onClick={handleFileUploadClick}
            className="text-[#1768D0] border px-3 py-1.5 rounded-md mt-3 border-[#1768D0] text-sm"
          >
            Browse File
          </Button>
        </div>
      </div>
      <Paragraph className="text-[#656565] font-noaml text-base mt-1">Upload only JPG, PNG & WEBP File Here File Size Max 3 MB
      </Paragraph>
    </div>
  );
};

export default TopupAttachment;
