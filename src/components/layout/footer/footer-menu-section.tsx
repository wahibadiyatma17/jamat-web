'use client';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

type FooterMenu = {
  label: string;
  url: string;
};

const FOOTER_MENUS = [
  { label: 'Tentang Kami', url: '/about-us' },
  { label: 'Karir', url: '#' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Hubungi Kami', url: '/contact-us' },
  { label: 'Syarat & Ketentuan', url: '/terms-and-conditions' },
  { label: 'Kebijakan Privasi', url: '/privacy-policy' },
] as FooterMenu[];

const FooterMenu: FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full items-center justify-center gap-10 max-w-[1024px]">
      <div className="w-9/12 h-[2px] bg-[#E5E5E5] rounded-md" />
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center max-w-[672px]">
        {FOOTER_MENUS.map((menu) => (
          <span
            key={menu.label}
            className="text-2xl font-semibold text-[#FEFFD2] cursor-pointer mx-6 hover:scale-105 transition-all"
            onClick={() => router.push(menu.url)}
          >
            {menu.label}
          </span>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center gap-3">
        <div className="flex items-center justify-center rounded-full p-1.5 bg-[#FEFFD2] cursor-pointer hover:scale-1.05 transition-all">
          <FaInstagram style={{ width: 28, height: 28, color: '#5E5E5E' }} />
        </div>
        <div className="flex items-center justify-center rounded-full p-1.5 bg-[#FEFFD2] cursor-pointer hover:scale-1.05 transition-all">
          <FaWhatsapp style={{ width: 28, height: 28, color: '#5E5E5E' }} />
        </div>
      </div>
      <h6 className="text-xl font-semibold text-[#FEFFD2] cursor-pointer mx-6 hover:scale-105 transition-all">
        Jago Hemat © {new Date().getFullYear()}
      </h6>
    </div>
  );
};

export default FooterMenu;
