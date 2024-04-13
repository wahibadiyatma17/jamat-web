import AppLayout from '@/components/layout';
import { FC } from 'react';

const FAQ: FC = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[40px] pt-10">
        <div className="w-full h-full px-4 md:px-10 ">
          <div className="bg-[#FFD43B] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#616A7D] justify-start">
            <h4 className="font-[900] text-3xl">Frequently Asked Questions (FAQ)</h4>
            <ol start={1} className="list-decimal gap-5 flex flex-col">
              <div>
                <li className="ml-5 text-lg mb-2 font-semibold">
                  Apa yang membedakan Jamat dari toko makanan lainnya?
                </li>
                <span className="text-base">
                  Jamat berbeda karena kami fokus pada pengelolaan limbah makanan dengan menjual
                  makanan sisa dari toko dengan harga yang sangat terjangkau. Kami memberikan
                  peluang bagi toko untuk mengurangi limbah makanan mereka sambil memberikan akses
                  terhadap pangan yang terjangkau bagi masyarakat.
                </span>
              </div>
              <div>
                <li className="ml-5 text-lg mb-2 font-semibold">
                  Bagaimana Jamat memastikan bahwa makanan yang dijual masih aman untuk dikonsumsi?
                </li>
                <span className="text-base">
                  Kami memiliki standar ketat dalam pemilihan makanan yang dijual di platform kami.
                  Kami memastikan bahwa makanan yang kami tawarkan masih dalam kondisi yang layak
                  konsumsi dan memperhatikan tanggal kedaluwarsa serta kualitasnya.
                </span>
              </div>

              <div>
                <li className="ml-5 text-lg mb-2 font-semibold">
                  Apakah Jamat hanya bekerja dengan toko makanan besar?
                </li>
                <span className="text-base">
                  Tidak. Kami bekerja dengan berbagai jenis toko makanan, baik itu restoran, kafe,
                  supermarket, atau pedagang kecil. Kami memahami bahwa setiap bisnis memiliki
                  limbah makanan, dan kami ingin membantu mereka mengelola limbah tersebut dengan
                  cara yang bertanggung jawab.
                </span>
              </div>

              <div>
                <li className="ml-5 text-lg mb-2 font-semibold">
                  Bagaimana cara bergabung dengan Jamat sebagai pengguna atau toko?
                </li>
                <span className="text-base">
                  Untuk pengguna, Anda dapat mengunduh aplikasi Jamat di ponsel Anda dan mendaftar
                  sebagai anggota. Untuk toko, Anda dapat menghubungi tim kami melalui email atau
                  telepon untuk mendiskusikan kemungkinan kerja sama dalam menjual makanan sisa Anda
                  di platform kami.
                </span>
              </div>
            </ol>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FAQ;
