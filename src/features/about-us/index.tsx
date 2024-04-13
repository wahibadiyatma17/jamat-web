import AppLayout from '@/components/layout';
import { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[40px] pt-10">
        <div className="w-full h-full px-4 md:px-10 ">
          <div className="bg-[#FFD43B] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#616A7D] justify-start">
            <h4 className="font-[900] text-3xl">Tentang Kami</h4>
            <p className="text-xl">
              Jamat adalah startup inovatif yang merubah persepsi mengenai limbah makanan menjadi
              peluang yang menguntungkan bagi toko-toko dan masyarakat. Kami berkomitmen untuk
              mengurangi limbah dengan menjual makanan sisa dari toko dengan harga terjangkau, serta
              mengedukasi tentang pentingnya pengelolaan limbah makanan untuk menjaga lingkungan dan
              keberlanjutan pangan.
            </p>
            <p className="text-xl">
              Kami mempercayai bahwa makanan yang masih layak konsumsi seharusnya tidak terbuang
              sia-sia. Kami menyediakan platform bagi toko-toko untuk memasarkan produk mereka yang
              tersisa, sehingga memastikan pemanfaatan penuh makanan tersebut. Dengan memberikan
              akses kepada masyarakat untuk membeli makanan dengan harga yang terjangkau, kami tidak
              hanya membantu mengurangi limbah makanan, tetapi juga memecahkan masalah
              ketidakseimbangan akses terhadap pangan yang berkualitas.
            </p>
          </div>
        </div>

        <div className="w-full h-full px-4 md:px-10 ">
          <div className="bg-[#B8BA3F] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#FEFFD2] justify-start">
            <h4 className="font-[900] text-3xl">Visi</h4>
            <p className="text-xl">
              Visi Jamat adalah menciptakan dunia di mana setiap makanan dianggap berharga dan
              dimanfaatkan sepenuhnya, mengubah limbah makanan menjadi sumber daya yang bernilai
              serta memberikan akses terhadap pangan yang terjangkau bagi semua orang, sambil
              memperjuangkan keberlanjutan lingkungan dan sosial di seluruh dunia.
            </p>
          </div>
        </div>
        <div className="w-full h-full px-4 md:px-10 ">
          <div className="bg-[#FF8642] rounded-3xl w-full px-5 md:px-10 py-10 h-full flex flex-col gap-6 text-[#FEFFD2] justify-start">
            <h4 className="font-[900] text-3xl">Misi</h4>
            <p className="text-xl">
              Misi Jamat adalah mengurangi limbah makanan dengan menyediakan platform untuk
              toko-toko menjual makanan sisa dengan harga terjangkau, mempromosikan kesadaran akan
              pentingnya pengelolaan limbah makanan, serta memberikan akses universal terhadap
              pangan yang berkualitas. Kami berkomitmen untuk menciptakan perubahan positif dalam
              industri makanan dengan memperjuangkan keberlanjutan pangan dan lingkungan, sambil
              meningkatkan kesadaran akan masalah ketidakseimbangan akses terhadap pangan di
              masyarakat.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AboutUs;
