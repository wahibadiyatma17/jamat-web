'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC, useCallback } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';

const Navbar: FC = () => {
  const router = useRouter();
  const scrollToSection = useCallback((sectionId: string) => {
    document?.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full flex-1 px-4 md:px-10 py-5">
      <div className="self-end flex flex-row gap-2 items-center justify-center text-[#222222] cursor-pointer text-base md:text-xl">
        <span className="text-xl">Bahasa Indonesia</span>
        <IoChevronDownOutline style={{ width: 20, height: 20, marginTop: 4 }} />
      </div>

      <div className="flex flex-row items-center justify-between">
        <div
          className="h-[58px] md:h-[116px] w-[166px] md:w-[332px] relative cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image src={'/jamat-logo.png'} alt="logo jamat" fill objectFit="cover" />
        </div>

        <div className="flex flex-row items-center gap-4">
          <div
            className="cursor-pointer py-2.5 px-5 rounded-3xl flex items-center justify-center bg-[#FF940D] hover:bg-[#DD800C] hover:scale-105 transition-all text-[#FEFFD2]"
            onClick={() => scrollToSection('business-owner')}
          >
            <span>Kamu Pemilik Bisnis</span>
          </div>
          <div
            className="cursor-pointer py-2.5 px-5 rounded-3xl flex items-center justify-center bg-[#BBBE17] hover:bg-[#959814] hover:scale-105 transition-all text-[#FEFFD2]"
            onClick={() => scrollToSection('download-apps')}
          >
            <span>Download Aplikasi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
