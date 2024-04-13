import AppLayout from '@/components/layout';
import { FC } from 'react';

const ContactUs: FC = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[40px] pt-10">
        <div className="w-full h-full  px-4 md:px-10 ">
          <div className="bg-[#FFD43B] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#616A7D] justify-start">
            <h4 className="font-[900] text-3xl">Hubungi Kami</h4>
            <p className="text-xl">
              Kami di PT Jamat Solusi Digital selalu terbuka untuk mendengarkan kebutuhan Anda dan
              menjawab setiap pertanyaan yang mungkin Anda miliki tentang layanan kami. Berikut
              adalah beberapa cara untuk menghubungi kami:
            </p>
            <div className="flex flex-row felx-1 items-center justify-start gap-10">
              <div className="flex flex-col">
                <span className="text-xl font-bold">Whatsapp:</span>
                <span>+62 21 555 8888</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold">Email:</span>
                <span>info@jamatsolusidigital.co.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ContactUs;
