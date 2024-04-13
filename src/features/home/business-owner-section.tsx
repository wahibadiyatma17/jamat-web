import React, { FC } from 'react';
import Image from 'next/image';

const BusinessOwnerSection: FC = () => {
  return (
    <div className="w-full h-full px-4 md:px-10 " id="business-owner">
      <div className="bg-[#B8BA3F] rounded-3xl w-full px-5 md:px-10 py-10 md:py-[80px] flex flex-col gap-8 text-[#FEFFD2]">
        <h4 className="text-center text-[#FEFFD2] font-[900] text-3xl">Kamu Pemilik Usaha?</h4>
        <div className="flex flex-row gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="relative w-[252px] h-[480px] border-[5px] border-white rounded-[32px]">
              <Image
                src={'/placeholder-phone.png'}
                alt="placeholder phone"
                fill
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <span className="font-bold text-2xl max-w-[252px] text-center">
              Buka menu profil, alihkan ke Toko
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative w-[252px] h-[480px] border-[5px] border-white rounded-[32px]">
              <Image
                src={'/placeholder-phone.png'}
                alt="placeholder phone"
                fill
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <span className="font-bold text-2xl max-w-[252px] text-center">
              Lengkapi detail toko, tambah paket jualan
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative w-[252px] h-[480px] border-[5px] border-white rounded-[32px]">
              <Image
                src={'/placeholder-phone.png'}
                alt="placeholder phone"
                fill
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <span className="font-bold text-2xl max-w-[252px] text-center">
              Monitor pesanan & transaksi berkala
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOwnerSection;
