import AppLayout from '@/components/layout';
import { FC } from 'react';

type PrivacyPolicyType = {
  title: string;
  content: string;
};

const PRIVACY_POLICY: PrivacyPolicyType[] = [
  {
    title: 'Pengumpulan Informasi',
    content:
      'Kami mengumpulkan informasi pribadi dari pengguna ketika mereka mendaftar di platform kami, melakukan transaksi, berlangganan newsletter, atau mengisi formulir lainnya. Informasi yang kami kumpulkan dapat mencakup nama, alamat email, alamat pengiriman, nomor telepon, dan informasi pembayaran.',
  },
  {
    title: 'Penggunaan Informasi',
    content:
      'Informasi yang kami kumpulkan dari pengguna dapat digunakan untuk: memproses transaksi; mengirim email terkait pesanan; memberikan pelayanan pelanggan; mengirim informasi promosi, survei, atau konten lainnya; dan menyelidiki pelanggaran atau penyalahgunaan situs.',
  },
  {
    title: 'Perlindungan Informasi',
    content:
      'Kami menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi pengguna. Kami menggunakan enkripsi untuk melindungi informasi sensitif yang dikirim secara online dan melindungi informasi offline. Hanya karyawan yang membutuhkan informasi tersebut untuk melakukan tugas tertentu (misalnya, penagihan atau layanan pelanggan) yang diberi akses ke informasi pribadi.',
  },
  {
    title: 'Pembagian Informasi kepada Pihak Ketiga',
    content:
      'Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi pengguna kepada pihak ketiga. Hal ini tidak termasuk pihak ketiga yang membantu kami dalam mengoperasikan website kami, melakukan bisnis kami, atau melayani pengguna, asalkan pihak tersebut menyetujui untuk menjaga kerahasiaan informasi tersebut.',
  },
  {
    title: 'Persetujuan Pengguna',
    content:
      'Dengan menggunakan platform kami, pengguna menyetujui kebijakan privasi ini. Jika pengguna tidak menyetujui kebijakan privasi ini, pengguna tidak diperbolehkan menggunakan platform kami.',
  },
  {
    title: 'Perubahan Kebijakan',
    content:
      'Kebijakan privasi ini dapat diubah dari waktu ke waktu. Perubahan akan diumumkan secara jelas di halaman kebijakan privasi kami. Pengguna diharapkan untuk memeriksa halaman ini secara berkala untuk mendapatkan pembaruan tentang bagaimana kami melindungi informasi yang dikumpulkan.',
  },
];

const PrivacyPolicy: FC = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[40px] pt-10">
        <div className="w-full h-full px-4 md:px-10 ">
          <div className="bg-[#B8BA3F] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#FEFFD2] justify-start">
            <h4 className="font-[900] text-3xl">Kebijakan Privasi</h4>
            <ol start={1} className="list-decimal gap-5 flex flex-col">
              {PRIVACY_POLICY.map((privacy) => (
                <div key={privacy.title}>
                  <li className="ml-5 text-lg mb-2 font-semibold">{privacy.title}</li>
                  <span className="text-base">{privacy.content}</span>
                </div>
              ))}
            </ol>
            <span className="text-base">
              Dengan menggunakan platform kami, pengguna menyetujui kebijakan privasi ini. Jika
              pengguna tidak menyetujui kebijakan privasi ini, pengguna tidak diperbolehkan
              menggunakan platform kami. Kebijakan privasi ini dapat diubah dari waktu ke waktu.
              Perubahan akan diumumkan secara jelas di halaman kebijakan privasi kami. Pengguna
              diharapkan untuk memeriksa halaman ini secara berkala untuk mendapatkan pembaruan
              tentang bagaimana kami melindungi informasi yang dikumpulkan.
            </span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;
