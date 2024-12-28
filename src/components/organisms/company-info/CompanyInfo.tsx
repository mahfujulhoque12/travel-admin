"use client";
import { Button } from "@/components/atoms/Button";
import BankInfo from "@/components/molecules/company-info/BankInfo";
import Certificate from "@/components/molecules/company-info/Certificate";
import CompanyAddress from "@/components/molecules/company-info/CompanyAddress";
import CompanyHeader from "@/components/molecules/company-info/CompanyHeader";
import CompanyProfile from "@/components/molecules/company-info/CompanyProfile";
import ContactPerson from "@/components/molecules/company-info/ContactPerson";
import LogoUpload from "@/components/molecules/company-info/LogoUpload";
import OwnerInformation from "@/components/molecules/company-info/OwnerInformation";
import TradLaicence from "@/components/molecules/company-info/TradLaicence";
import React, { useState } from "react";

const CompanyInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <>
      <div className="m-5  shadow-sm rounded-md p-5">
        <div className="p-3 bg-white rounded-md shadow-md border mt-5">
          <CompanyHeader />
        </div>
        <div className="p-3 bg-white rounded-md shadow-md border mt-5">
          <div className="px-10 flex justify-between items-center">
            <Button
              className={`text-base font-semibold hover:border-b py-2 transition-all duration-200 ${
                activeTab === 1
                  ? "border-b text-[#257CEB] border-[#257CEB]"
                  : "hover:text-[#257CEB] hover:border-[#257CEB]"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Company Information
            </Button>

            <Button
              className={`text-base font-semibold hover:border-b py-2 transition-all duration-200 ${
                activeTab === 2
                  ? "border-b text-[#257CEB] border-[#257CEB]"
                  : "hover:text-[#257CEB] hover:border-[#257CEB]"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Personal Info
            </Button>

            <Button
              className={`text-base font-semibold hover:border-b py-2 transition-all duration-200 ${
                activeTab === 3
                  ? "border-b text-[#257CEB] border-[#257CEB]"
                  : "hover:text-[#257CEB] hover:border-[#257CEB]"
              }`}
              onClick={() => setActiveTab(3)}
            >
              Media
            </Button>

            <Button
              className={`text-base font-semibold hover:border-b py-2 transition-all duration-200 ${
                activeTab === 4
                  ? "border-b text-[#257CEB] border-[#257CEB]"
                  : "hover:text-[#257CEB] hover:border-[#257CEB]"
              }`}
              onClick={() => setActiveTab(4)}
            >
              Bank Information
            </Button>
          </div>
          <div className="mt-5">
            {activeTab === 1 && <CompanyProfile />}
            {activeTab === 2 && <OwnerInformation />}

            {activeTab === 3 && <LogoUpload />}
            {activeTab === 4 && <BankInfo />}
          </div>
        </div>

       {(activeTab === 1 || activeTab === 2 || activeTab === 3) && (
  <div className="mt-5 p-3 rounded-md shadow-md border bg-white">
    {activeTab === 1 && <CompanyAddress />}
    {activeTab === 2 && <ContactPerson />}
    {activeTab === 3 && <TradLaicence />}
  </div>
)}


        {activeTab === 3 && (
          <div className="mt-5 p-3 rounded-md shadow-md border bg-white">
            <Certificate />
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyInfo;
