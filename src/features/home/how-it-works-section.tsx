import React, { FC } from 'react';
import Image from 'next/image';

const HowItWorksSection: FC = () => {
  return (
    <div className="w-full h-full px-4 md:px-10 ">
      <div className="bg-[#FFD43B] rounded-3xl w-full px-5 md:px-10 py-10 md:py-[80px] flex flex-row gap-6 text-[#616A7D] justify-between">
        <div className="relative w-[252px] h-[542px] border-[5px] border-white rounded-[32px]">
          <Image
            src={'/placeholder-phone.png'}
            alt="placeholder phone"
            fill
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div className="relative w-[252px] h-[542px] border-[5px] border-white rounded-[32px]">
          <Image
            src={'/placeholder-phone.png'}
            alt="placeholder phone"
            fill
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 items-center justify-center">
          <h4 className="font-[900] text-3xl">
            Cukup pilih lokasi temukan berbagai pilihan toko terbaik di sekitar Anda!
          </h4>
          <p className="text-xl">
            Kami bekerja sama dengan berbagai toko dan UMKM terpercaya untuk memastikan Anda
            mendapatkan produk terbaik dengan harga terjangkau
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
