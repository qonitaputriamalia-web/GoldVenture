import { useState } from "react";

const CaraSewa = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "Berapa lama maksimal penyewaan alat?", a: "Maksimal penyewaan adalah 14 hari." },
    { q: "Bagaimana jika alat terlambat dikembalikan?", a: "Akan dikenakan denda sesuai tarif harian alat." },
    { q: "Apakah bisa sewa mendadak (hari ini)?", a: "Bisa, selama stok di sistem masih tersedia." },
    { q: "Bagaimana kondisi alat yang disewakan?", a: "Semua alat dicuci dan dicek fungsinya sebelum diserahkan." }
  ];

  return (
    <div className="mx-auto max-w-5xl py-12 text-center pb-20">
      <h1 className="mb-3 text-4xl font-black text-[#133E2B]">Cara Sewa di GoldVent</h1>
      <p className="mb-12 text-gray-500">Ikuti langkah mudah berikut untuk menyewa perlengkapan favoritmu.</p>

      {/* Grid 6 Langkah */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
        {[
          { title: "Pilih Alat/Paket", desc: "Cari alat yang sesuai dengan kebutuhan pendakianmu.", icon: "🔍" },
          { title: "Pilih Tanggal Sewa", desc: "Tentukan tanggal mulai sewa dan pengembalian.", icon: "📅" },
          { title: "Masukkan ke Keranjang", desc: "Periksa kembali detail pesanan lalu masukkan keranjang.", icon: "🛒" },
          { title: "Isi Data & Pengiriman", desc: "Lengkapi data diri & pilih metode pengiriman/ambil di tempat.", icon: "📋" },
          { title: "Lakukan Pembayaran", desc: "Selesaikan pembayaran sesuai metode yang dipilih.", icon: "💳" },
          { title: "Terima & Gunakan", desc: "Peralatan dikirim, siap digunakan untuk petualanganmu!", icon: "🏕️" }
        ].map((step, i) => (
          <div key={i} className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="absolute -left-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#133E2B] text-lg font-bold text-white shadow-md">
              {i + 1}
            </div>
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-50 text-4xl">
              {step.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#133E2B]">{step.title}</h3>
            <p className="text-sm font-medium text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="text-left">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#133E2B]">Pertanyaan yang Sering Diajukan</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left font-bold text-[#133E2B] hover:bg-gray-50"
              >
                {faq.q}
                <span className="text-xl">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm font-medium text-gray-600 bg-gray-50/50 pt-2 border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CaraSewa;