import Image from 'next/image';
import React, { FC } from 'react';

const LandingSection: FC = () => {
  return (
    <div className="w-full h-full px-4 md:px-10 flex flex-col gap-10 items-start justify-start">
      <div className="self-start max-w-[380px] ml-10">
        <span className="text-[#5E5E5E] text-3xl font-bold">
          <span className="text-[#FF940D]">Jago Hemat</span> Belanja Makanan dan Kebutuhan
          Sehari-hari!
        </span>
      </div>

      <div className="bg-[#FF8642] rounded-3xl w-full px-5 md:px-10 py-10 md:py-[120px] relative flex flex-col gap-6 text-[#FEFFD2]">
        <h2 className="font-bold text-3xl">“Dari Toko ke Meja, Tanpa Limbah”</h2>
        <p className="max-w-[384px] font-normal text-3xl ml-8">
          Temukan toko-toko terdekat yang menawarkan paket makanan dan kebutuhan harian dengan harga
          terjangkau
        </p>
        <div className="absolute right-0 bottom-0 w-[408px] h-[600px]">
          <Image src={'/landing-hero.png'} alt="landing hero" fill />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
