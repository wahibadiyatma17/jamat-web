import Image from 'next/image';
import React, { FC } from 'react';
import FooterMenu from './footer-menu-section';
import FooterDownloadAppSection from './footer-download-app-section';

const Footer: FC = () => {
  return (
    <div className=" bg-[#406EDD] flex flex-col items-center justify-center gap-[80px] p-10">
      <FooterDownloadAppSection />
      <FooterMenu />
    </div>
  );
};

export default Footer;
