import { FC } from "react";
import Image from "next/image";

const HowToOrderSection: FC = () => {
  return (
    <div className="w-full h-full px-4 md:px-10 ">
      <div className="bg-[#FFD43B] items-center justify-center rounded-3xl w-full px-5 md:px-10 py-10 md:py-[80px] flex flex-col gap-8 text-[#FEFFD2]">
        <h4 className="text-center text-[#3E4554] font-[900] text-3xl">
          Bagaimana Cara Memesan?
        </h4>
        <div className="flex flex-row gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="relative w-[280px] h-[560px] border-[4px] border-white rounded-[32px]">
              <Image
                src={"/section-2-1.png"}
                alt="placeholder phone"
                fill
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <span className="font-bold text-2xl max-w-[252px] text-center text-[#5E5E5E]">
              Pilih toko dan paket yang kamu inginkan
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative w-[280px] h-[560px] border-[4px] border-white rounded-[32px]">
              <Image
                src={"/section-2-2.png"}
                alt="placeholder phone"
                fill
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <span className="font-bold text-2xl max-w-[252px] text-center text-[#5E5E5E]">
              Pastikan pesanan kamu sudah sesuai
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative w-[280px] h-[560px] border-[4px] border-white rounded-[32px]">
              <Image
                src={"/section-2-3.png"}
                alt="placeholder phone"
                fill
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <span className="font-bold text-2xl max-w-[252px] text-center text-[#5E5E5E]">
              Cek status pesanan kamu secara berkala
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrderSection;
