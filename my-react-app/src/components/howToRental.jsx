function HowToRental() {
  const steps = [
    {
      number: "01",
      title: "Pilih Alat atau Paket",
      desc: "Cari perlengkapan hiking dan camping sesuai kebutuhan perjalananmu."
    },
    {
      number: "02",
      title: "Tentukan Tanggal",
      desc: "Pilih tanggal mulai sewa dan tanggal pengembalian alat."
    },
    {
      number: "03",
      title: "Masukkan ke Keranjang",
      desc: "Periksa kembali detail pesanan sebelum melanjutkan."
    },
    {
      number: "04",
      title: "Isi Data Penyewa",
      desc: "Lengkapi data diri dan pilih metode pengambilan alat."
    },
    {
      number: "05",
      title: "Lakukan Pembayaran",
      desc: "Selesaikan pembayaran sesuai metode yang tersedia."
    },
    {
      number: "06",
      title: "Ambil & Gunakan",
      desc: "Peralatan siap digunakan untuk menemani petualanganmu."
    }
  ];

  return (
    <section
      id="cara-sewa"
      className="px-6 py-24 bg-[#fbfaf6]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <span className="text-gold font-bold uppercase tracking-widest">
            Cara Sewa
          </span>

          <h2 className="mt-3 text-4xl font-black text-forest">
            6 Langkah Mudah Menyewa
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Proses penyewaan dibuat sederhana agar kamu bisa fokus
            mempersiapkan perjalanan tanpa ribet.
          </p>
        </div>

        <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.8rem] bg-white p-7 border-b-4 border-r-4 border-slate-900 shadow-sm transition hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-black">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-black text-forest">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-500 leading-6">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-forest p-10 text-center text-white">
          <h3 className="text-3xl font-black">
            Siap Memulai Petualangan?
          </h3>

          <p className="mt-3 text-white/80">
            Pilih perlengkapan terbaik dan pesan hanya dalam beberapa menit.
          </p>

          <button className="mt-6 rounded-full bg-gold px-8 py-4 font-black text-forest transition hover:scale-105">
            Mulai Sewa Sekarang
          </button>
        </div>

      </div>
    </section>
  );
}

export default HowToRental;