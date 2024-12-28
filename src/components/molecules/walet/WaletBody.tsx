import Paragraph from '@/components/atoms/Paragraph';
import Span from '@/components/atoms/Span';
import React from 'react';
import { MdAccountBalanceWallet } from "react-icons/md";

const WaletBody = () => {
  return (
    <div>

      <div className="mt-5 px-4 grid grid-cols-1 md:grid-cols-2 ">
        {/* Background Image Div */}
        <div className="px-9 py-14 bg-[url('/walet/walet.png')] bg-cover bg-center h-[268px] max-w-[570px]">
          <Span className='text-white text-base font-semibold'>December 28, 2024</Span>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4 mt-4 text-white'>
            <MdAccountBalanceWallet size={25}/>
            <Paragraph className='text-lg md:text-xl lg:text-2xl text-white font-semibold'>Total Balance</Paragraph>
            </div>
            <div>
              <Span className="text-xl font-semibold text-white">USD</Span>
            </div>
           
          </div>
          
          <Paragraph className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-7">$170254</Paragraph>
        </div>
        {/* Normal Div */}
        <div className="px-9 py-14 bg-[url('/walet/walet1.png')] bg-cover bg-center h-[268px] max-w-[570px]">
          <Span className='text-[#7C7C7C] text-base font-semibold'>December 28, 2024</Span>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4 mt-4 text-white'>
            <MdAccountBalanceWallet size={25} className='text-[#257CEB]'/>
            <Paragraph className='text-lg md:text-xl lg:text-2xl text-[#243045] font-semibold '>Total Balance</Paragraph>
            </div>
            <div>
              <Span className="text-xl font-semibold  text-[#257CEB]">USD</Span>
            </div>
           
          </div>
          
          <Paragraph className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#243045] mt-7">$170254</Paragraph>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default WaletBody;
