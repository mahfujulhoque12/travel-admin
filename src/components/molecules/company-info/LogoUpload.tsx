
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '/public/company/companay.png';
import CardTitle from '@/components/atoms/CardTitle';
import { IoCloudUploadOutline } from "react-icons/io5";
import Span from '@/components/atoms/Span';
import Paragraph from '@/components/atoms/Paragraph';
import { InputFile } from '@/components/atoms/InputFile';

const LogoUpload = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleFileUploadClick = () => {
    const fileInput = document.getElementById('file-upload-input');
    fileInput?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      readFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

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
    <div>
      <CardTitle className="text-[#243045] font-semibold font-lg">Logo Upload</CardTitle>
      <div className="mt-7 flex gap-2 items-center">
        {/* Display the selected file if available, else show default logo */}
        <Image
          src={selectedFile || logo}
          alt="logo"
          width={150}
          height={150}
          className="w-[86px] h-[86px] object-cover rounded-full"
        />

        <div
          className={`border p-3 rounded-md ${
            dragging ? 'border-blue-500 bg-blue-100' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex items-center justify-center">
            <IoCloudUploadOutline
              className="text-2xl cursor-pointer hover:text-blue-500 transition-all duration-200 text-center"
              onClick={handleFileUploadClick}
            />
          </div>
          <InputFile
           type="file"
            id="file-upload-input"
            onChange={handleFileChange}
          />
          <Paragraph
            className="font-semibold cursor-pointer text-sm lg:text-base"
            onClick={handleFileUploadClick}
          >
            <Span className="text-[#257CEB]">Click to Upload</Span> or drag and drop SVG, PNG, JPG or GIF <br /> (max 800 × 400)
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default LogoUpload;
