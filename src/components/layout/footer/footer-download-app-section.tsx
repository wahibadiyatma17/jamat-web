import React, { FC } from 'react';
import Image from 'next/image';

const FooterDownloadAppSection: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 max-w-[1024px]">
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
          <Image src={'/app-store-badge.png'} fill objectFit={'contain'} alt={'app store badge'} />
        </div>
      </div>
    </div>
  );
};

export default FooterDownloadAppSection;
