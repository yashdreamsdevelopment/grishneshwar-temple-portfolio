import Image from "next/image";

export function HistorySection() {
  return (
    <section id="history" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rich History & Heritage
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              The Last Jyotirlinga
            </h3>
            <p className="text-gray-700 mb-4">
              Grishneshwar Temple, also known as Grushneshwar or Ghushmeshwar,
              is revered as the 12th and final Jyotirlinga of Lord Shiva
              mentioned in the Shiva Purana. Located in the village of Verul
              near Daulatabad in Aurangabad district, this ancient temple holds
              immense religious significance for devotees of Lord Shiva.
            </p>
            <p className="text-gray-700 mb-4">
              The temple was reconstructed by Ahilyabai Holkar, the queen of
              Indore, in the 18th century after it was destroyed during the
              Mughal era. The architectural style reflects the Bhoomija design,
              with intricate carvings and sculptures adorning the temple walls.
            </p>
            <p className="text-gray-700">
              According to legend, a devout woman named Kusuma, who was married
              to a merchant, installed the lingam here. The temple's name is
              derived from "Ghushma," which was another name of Kusuma, making
              it "Ghushmeshwar" or "Grishneshwar."
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/last-jyotriling.jpg"
              alt="Historical view of Grishneshwar Temple"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3">Architectural Marvel</h4>
            <p className="text-gray-700">
              The temple stands as a testament to ancient Indian architecture,
              built from red rocks with a five-tier shikhara (spire). The temple
              walls feature intricate carvings depicting various deities and
              scenes from Hindu mythology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3">
              Religious Significance
            </h4>
            <p className="text-gray-700">
              As the 12th Jyotirlinga, Grishneshwar holds special importance in
              Hindu tradition. It is believed that worshipping here brings
              prosperity and fulfills wishes. The temple is especially crowded
              during Maha Shivaratri.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3">Cultural Heritage</h4>
            <p className="text-gray-700">
              Beyond its religious significance, the temple serves as a cultural
              center where traditional rituals, music, and art forms are
              preserved and celebrated, especially during festivals dedicated to
              Lord Shiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
