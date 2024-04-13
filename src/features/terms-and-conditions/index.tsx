import AppLayout from '@/components/layout';
import { FC } from 'react';

type TermsAndConditionsType = {
  title: string;
  content: string;
};

const TERMS_AND_CONDITIONS = [
  {
    title: 'Penggunaan Konten',
    content:
      'Seluruh konten yang disediakan di website ini, termasuk teks, gambar, dan video, merupakan milik Jamat atau dilisensi secara sah. Pengguna dilarang untuk mengambil, menyalin, atau menggunakan konten tanpa izin tertulis dari Jamat.',
  },
  {
    title: 'Privasi Pengguna',
    content:
      'Jamat menghormati privasi pengguna dan berkomitmen untuk melindungi data pribadi mereka. Informasi yang diberikan oleh pengguna, seperti nama, alamat email, dan informasi kontak lainnya, akan diatur sesuai dengan kebijakan privasi Jamat.',
  },
  {
    title: 'Tanggung Jawab Pengguna',
    content:
      'Pengguna diharapkan untuk menggunakan website ini secara bertanggung jawab dan sesuai dengan hukum yang berlaku. Pengguna dilarang untuk melakukan tindakan yang dapat merusak reputasi Jamat, mengganggu layanan website, atau melanggar hak kekayaan intelektual.',
  },
  {
    title: 'Penggunaan Layanan',
    content:
      'Penggunaan layanan yang disediakan oleh Jamat, termasuk pemesanan makanan dan interaksi dengan toko-toko mitra, tunduk pada syarat dan ketentuan tambahan yang mungkin berlaku. Pengguna diharapkan untuk membaca dan memahami syarat dan ketentuan tersebut sebelum menggunakan layanan kami.',
  },
  {
    title: 'Perubahan dan Pembaruan',
    content:
      'Jamat berhak untuk mengubah atau memperbarui syarat dan ketentuan ini dari waktu ke waktu tanpa pemberitahuan sebelumnya. Pengguna diharapkan untuk secara berkala memeriksa halaman syarat dan ketentuan untuk mendapatkan pembaruan terbaru.',
  },
] as TermsAndConditionsType[];

const TermsAndConditions: FC = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[40px] pt-10">
        <div className="w-full h-full px-4 md:px-10 ">
          <div className="bg-[#FF8642] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#FEFFD2] justify-start">
            <h4 className="font-[900] text-3xl">Syarat dan Ketentuan</h4>
            <ol start={1} className="list-decimal gap-5 flex flex-col">
              {TERMS_AND_CONDITIONS.map((terms) => (
                <div key={terms.title}>
                  <li className="ml-5 text-lg mb-2 font-semibold">{terms.title}</li>
                  <span className="text-base">{terms.content}</span>
                </div>
              ))}
            </ol>
            <span className="text-base">
              Dengan menggunakan website ini, pengguna dianggap telah membaca, memahami, dan
              menyetujui syarat dan ketentuan yang berlaku. Jika ada pertanyaan atau kekhawatiran
              mengenai syarat dan ketentuan ini, pengguna dapat menghubungi tim dukungan kami untuk
              bantuan lebih lanjut.
            </span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TermsAndConditions;
