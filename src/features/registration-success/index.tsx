import AppLayout from '@/components/layout';
import { useUserStore } from '@/stores/user.store';
import { FC } from 'react';

const RegistrationSuccess: FC = () => {
  const user = useUserStore();
  return (
    <AppLayout>
      <div className="flex flex-col gap-[40px] pt-10">
        <div className="w-full h-full px-4 md:px-10 ">
          <div className="bg-[#406EDD] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#EBEBEB] justify-start">
            <h4 className="font-[900] text-3xl">Hi {user?.user?.name}</h4>
            <p className="text-2xl">
              Terima kasih telah mendaftar! Silakan periksa email Anda untuk mengkonfirmasi alamat
              email keberlanjutan pangan.
            </p>
            <p className="text-2xl">
              Mohon kesabaran Anda. Sambil menunggu, Anda sudah bisa mulai menggunakan aplikasi
              kami! Yuk, download sekarang untuk mulai menata toko, berjualan dan menikmati
              fitur-fitur menarik yang kami tawarkan.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default RegistrationSuccess;
