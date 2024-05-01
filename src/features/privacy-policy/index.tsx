import AppLayout from "@/components/layout";
import { FC } from "react";

type PrivacyPolicyType = {
  title: string;
  content: string;
};

const PRIVACY_POLICY_DATA_1: PrivacyPolicyType[] = [
  {
    title: "Informasi Pribadi:",
    content:
      "Saat Anda menggunakan Aplikasi, kami mungkin mengumpulkan informasi yang dapat mengidentifikasi pribadi Anda, seperti nomor telepon dan alamat email, yang Anda berikan kepada kami secara sukarela selama proses pendaftaran. Kami juga dapat mengumpulkan informasi yang Anda berikan saat menghubungi kami untuk dukungan atau umpan balik.",
  },
  {
    title: "Informasi Non-Pribadi:",
    content:
      "Kami juga dapat mengumpulkan informasi non-pribadi secara otomatis saat Anda menggunakan Aplikasi, seperti informasi perangkat (misalnya, model perangkat, versi sistem operasi), data penggunaan, dan laporan kerusakan. Informasi ini dikumpulkan dalam bentuk yang dianonimkan dan digabungkan dan tidak mengidentifikasi Anda secara langsung.",
  },
];

const PRIVACY_POLICY_DATA_2: PrivacyPolicyType[] = [
  {
    title: "Menyediakan Layanan:",
    content:
      "Saat Anda menggunakan Aplikasi, kami mungkin mengumpulkan informasi yang dapat mengidentifikasi pribadi Anda, seperti nomor telepon dan alamat email, yang Anda berikan kepada kami secara sukarela selama proses pendaftaran. Kami juga dapat mengumpulkan informasi yang Anda berikan saat menghubungi kami untuk dukungan atau umpan balik.",
  },
  {
    title: "Dukungan Pelanggan:",
    content:
      "Kami juga dapat mengumpulkan informasi non-pribadi secara otomatis saat Anda menggunakan Aplikasi, seperti informasi perangkat (misalnya, model perangkat, versi sistem operasi), data penggunaan, dan laporan kerusakan. Informasi ini dikumpulkan dalam bentuk yang dianonimkan dan digabungkan dan tidak mengidentifikasi Anda secara langsung.",
  },
];

const PRIVACY_POLICY_DATA_3: PrivacyPolicyType[] = [
  {
    title: "Penyedia Layanan Pihak Ketiga:",
    content:
      "Kami dapat melibatkan penyedia layanan pihak ketiga untuk membantu kami dalam menyediakan analisis dan meningkatkan Aplikasi. Para penyedia layanan ini (&quot;mereka&quot;) mungkin memiliki akses ke informasi pribadi Anda tetapi hanya diizinkan untuk menggunakannya sesuai kebutuhan untuk melakukan tugas-tugas tertentu atas nama kami. Dalam penggunaan ini, data Anda akan menjadi subjek pada kebijakan privasi mereka masing-masing.",
  },
  {
    title: "Transfer Bisnis:",
    content:
      "Jika kami mengalami penggabungan, akuisisi, atau penjualan aset, informasi pribadi Anda dapat ditransfer ke entitas penerus. Kami akan memastikan bahwa pihak penerima setuju untuk melindungi informasi pribadi Anda secara konsisten dengan Kebijakan Privasi ini.",
  },
  {
    title: "Data yang Diagregasi dan Di-anonimkan:",
    content:
      "Kami dapat membagikan informasi yang telah diagregasi dan di-anonimkan dengan pihak ketiga untuk tujuan penelitian, pemasaran, dan analitik. Data ini tidak mengidentifikasi pengguna individu.",
  },
];

const PRIVACY_POLICY_DATA_4: PrivacyPolicyType[] = [
  {
    title: "Memperbarui Informasi:",
    content:
      "Anda dapat memperbarui atau memperbaiki informasi pribadi Anda melalui pengaturan Aplikasi atau dengan menghubungi kami secara langsung.",
  },
  {
    title: "Preferensi Komunikasi:",
    content:
      "Anda dapat memilih untuk tidak menerima komunikasi non-esensial seperti notifikasi push dengan mengubah pengaturan Anda di Aplikasi atau pengaturan perangkat Anda.",
  },
];

const PrivacyPolicy: FC = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[40px] pt-10">
        <div className="w-full h-full px-4 md:px-10 ">
          <div className="bg-[#B8BA3F] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#FEFFD2] justify-start">
            <h4 className="font-[900] text-3xl">Kebijakan Privasi</h4>
            <span className="text-base">
              Terima kasih telah menggunakan JAMAT (&quot;Aplikasi&quot;), yang
              dikembangkan oleh Ejago Indonesia (&quot;kami&quot;). Kebijakan
              Privasi ini dirancang untuk membantu Anda memahami bagaimana kami
              mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi
              pribadi Anda saat Anda menggunakan Aplikasi kami. Dengan
              mengunduh, mengakses, atau menggunakan Aplikasi, Anda setuju
              dengan syarat dan praktik yang dijelaskan dalam Kebijakan Privasi
              ini.
            </span>
            <div className="">
              <h4 className="font-[900] text-xl mb-3">
                1.Informasi yang Kami kumpulkan
              </h4>

              {PRIVACY_POLICY_DATA_1.map((privacy, index) => (
                <div key={privacy.title}>
                  <li className="ml-5 text-lg mb-2 font-semibold list-none">
                    1.{index + 1} {privacy.title}
                  </li>
                  <span className="text-base">{privacy.content}</span>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-[900] text-xl mb-3">
                2.Bagaimana Kami Menggunakan Informasi Anda
              </h4>
              <ol
                start={1}
                className="list-decimal gap-3 flex flex-col list-none"
              >
                {PRIVACY_POLICY_DATA_2.map((privacy, index) => (
                  <div key={privacy.title}>
                    <li className="ml-5 text-lg mb-2 font-semibold list-none">
                      2.{index + 1} {privacy.title}
                    </li>
                    <span className="text-base">{privacy.content}</span>
                  </div>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-[900] text-xl mb-3">
                3.Berbagi Informasi Anda
              </h4>
              <ol
                start={1}
                className="list-decimal gap-3 flex flex-col list-none"
              >
                {PRIVACY_POLICY_DATA_3.map((privacy, index) => (
                  <div key={privacy.title}>
                    <li className="ml-5 text-lg mb-2 font-semibold list-none">
                      3.{index + 1} {privacy.title}
                    </li>
                    <span className="text-base">{privacy.content}</span>
                  </div>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-[900] text-xl mb-3">4.Pilihan Anda</h4>
              <ol
                start={1}
                className="list-decimal gap-3 flex flex-col list-none"
              >
                {PRIVACY_POLICY_DATA_4.map((privacy, index) => (
                  <div key={privacy.title}>
                    <li className="ml-5 text-lg mb-2 font-semibold list-none">
                      4.{index + 1} {privacy.title}
                    </li>
                    <span className="text-base">{privacy.content}</span>
                  </div>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-[900] text-xl mb-3">5. Keamanan Data</h4>
              <ol
                start={1}
                className="list-decimal gap-3 flex flex-col list-none"
              >
                Kami menerapkan langkah teknis dan organisasi yang wajar untuk
                melindungi informasi pribadi Anda dari akses tidak sah,
                pengungkapan, perubahan, atau penghancuran. Namun, tidak ada
                metode transmisi melalui internet atau penyimpanan elektronik
                yang 100% aman, dan kami tidak dapat menjamin keamanan absolut.
              </ol>
            </div>
            <div>
              <h4 className="font-[900] text-xl mb-3">6. Privasi Anak</h4>
              <ol
                start={1}
                className="list-decimal gap-3 flex flex-col list-none"
              >
                Aplikasi ini tidak dimaksudkan untuk digunakan oleh individu di
                bawah usia 16 tahun, dan kami tidak sengaja mengumpulkan
                informasi pribadi dari anak-anak. Jika Anda percaya kami telah
                secara tidak sengaja mengumpulkan informasi dari seorang anak,
                silakan hubungi kami segera, dan kami akan mengambil langkah
                yang tepat untuk menghapus informasi tersebut dari catatan kami.
              </ol>
            </div>
            <div>
              <h4 className="font-[900] text-xl">
                7. Perubahan pada Kebijakan Privasi ini
              </h4>
              <ol
                start={1}
                className="list-decimal gap-3 flex flex-col list-none"
              >
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu
                untuk mencerminkan perubahan dalam praktik kami atau untuk
                alasan operasional, hukum, atau regulasi lainnya. Kami akan
                memberikan pemberitahuan tentang perubahan material melalui
                Aplikasi atau dengan cara lain sebelum perubahan tersebut
                berlaku. Kami mendorong Anda untuk secara berkala meninjau
                Kebijakan Privasi ini untuk tetap terinformasi tentang praktik
                informasi kami.
              </ol>
            </div>
            <div>
              <h4 className="font-[900] text-xl">Hubungi Kami</h4>
              <span className="text-base">
                Jika Anda memiliki pertanyaan atau masukan terkait Kebijakan
                Privasi ini atau informasi pribadi Anda, silakan hubungi kami di{" "}
                <b>
                  <a href="mailto:admin@jagohemat.com">admin@jagohemat.com</a>
                </b>
              </span>
            </div>
            <div>
              <span className="text-base">
                Dengan menggunakan Aplikasi JAMAT, Anda mengakui bahwa Anda
                telah membaca, memahami, dan menyetujui Kebijakan Privasi ini.
                Jika Anda tidak setuju dengan kebijakan ini, mohon untuk tidak
                menggunakan Aplikasi tersebut.
              </span>
            </div>
            <span className="text-base">
              Pembaharuan terakhir: 14 April 2024
            </span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;
