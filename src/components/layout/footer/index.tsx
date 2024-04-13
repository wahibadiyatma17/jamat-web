import Image from 'next/image';
import React, { FC } from 'react';
import FooterMenu from './footer-menu-section';

const Footer: FC = () => {
  return (
    <div className=" bg-[#406EDD] flex flex-col items-center justify-center gap-[80px] p-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <span className="text-[#FEFFD2] font-bold text-[28px]">Download Aplikasi</span>
        <div className="flex flex-row flex-wrap gap-4">
          <div className="relative h-[78px] w-[268px]">
            <Image
              src={'/google-play-badge.png'}
              fill
              objectFit={'contain'}
              alt={'google play badge'}
            />
          </div>
          <div className="relative h-[78px] w-[276px]">
            <Image
              src={'/app-store-badge.png'}
              fill
              objectFit={'contain'}
              alt={'app store badge'}
            />
          </div>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
};

export default Footer;
