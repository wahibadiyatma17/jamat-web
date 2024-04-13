import { FC } from 'react';
import Image from 'next/image';

const HowToOrderSection: FC = () => {
  return (
    <div className="w-full h-full px-4 md:px-10 ">
      <div className="bg-[#FFD43B] rounded-3xl w-full px-5 md:px-10 py-10 md:py-[80px] flex flex-col gap-8 text-[#616A7D]">
        <h4 className="text-center text-[#616A7D] font-[900] text-3xl">Bagaimana cara memesan?</h4>
        <div className="flex flex-row gap-6 justify-between">
          <div className="relative w-[252px] h-[380px] border-[5px] border-white rounded-[32px]">
            <Image
              src={'/placeholder-phone.png'}
              alt="placeholder phone"
              fill
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="relative w-[252px] h-[380px] border-[5px] border-white rounded-[32px]">
            <Image
              src={'/placeholder-phone.png'}
              alt="placeholder phone"
              fill
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="relative w-[252px] h-[380px] border-[5px] border-white rounded-[32px]">
            <Image
              src={'/placeholder-phone.png'}
              alt="placeholder phone"
              fill
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="relative w-[252px] h-[380px] border-[5px] border-white rounded-[32px]">
            <Image
              src={'/placeholder-phone.png'}
              alt="placeholder phone"
              fill
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrderSection;
