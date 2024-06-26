'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BusinessOwnerSection: FC = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full px-4 md:px-10 " id="business-owner">
      <div className="bg-[#B8BA3F] items-center justify-center rounded-3xl w-full px-5 md:px-10 py-10 md:py-[80px] flex flex-col gap-8 text-[#FEFFD2]">
        <h4 className="text-center text-[#FEFFD2] font-[900] text-3xl">Kamu Pemilik Usaha?</h4>
        <div className="flex flex-row gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="relative w-[280px] h-[560px] border-[4px] border-white rounded-[32px]">
              <Image
                src={'/section-3-1.png'}
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
            <div className="relative w-[280px] h-[560px] border-[4px] border-white rounded-[32px]">
              <Image
                src={'/section-3-2.png'}
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
            <div className="relative w-[280px] h-[560px] border-[4px] border-white rounded-[32px]">
              <Image
                src={'/section-3-3.png'}
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

        <div
          className="cursor-pointer  flex items-center justify-center bg-[#406EDD] rounded-[32px] min-w-[unset] md:min-w-[320px] px-10 py-4 hover:scale-105 transition-all"
          onClick={() => router.push('/account-registration')}
        >
          <span className="text-[#FEFFD2] text-xl font-bold">Daftarkan Usahamu</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessOwnerSection;
