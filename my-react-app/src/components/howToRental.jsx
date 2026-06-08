function HowToRental() {
  const steps = [
    {
      number: "01",
      title: "Pilih Alat",
      desc: "Cari perlengkapan yang sesuai kebutuhan perjalananmu.",
    },
    {
      number: "02",
      title: "Pilih Tanggal",
      desc: "Tentukan tanggal sewa dan pengembalian alat.",
    },
    {
      number: "03",
      title: "Keranjang",
      desc: "Periksa kembali detail pesanan sebelum lanjut.",
    },
    {
      number: "04",
      title: "Isi Data",
      desc: "Lengkapi identitas dan informasi penyewaan.",
    },
    {
      number: "05",
      title: "Pembayaran",
      desc: "Lakukan pembayaran dengan metode yang tersedia.",
    },
    {
      number: "06",
      title: "Ambil Alat",
      desc: "Peralatan siap digunakan untuk petualanganmu.",
    },
  ];

  return (
    <section id="cara-sewa" className="bg-[#fbfaf6] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <span className="font-bold uppercase tracking-[0.2em] text-gold">
            Cara Sewa
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-forest">
            Sewa Alat Dalam 6 Langkah
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Proses sederhana, cepat, dan transparan agar kamu bisa fokus
            menikmati perjalanan.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/70 border-b-4 border-r-4 border-slate-900 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-forest px-4 py-2 text-lg font-black text-white">
                  {step.number}
                </div>

                <div className="text-2xl">
                  ⛰️
                </div>
              </div>

              <h3 className="mt-5 text-xl font-black text-forest">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-forest p-8 text-center text-white">
          <h3 className="text-3xl font-black">
            Siap Memulai Petualangan?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Pilih perlengkapan terbaik dan lakukan penyewaan hanya dalam
            beberapa menit.
          </p>

          <button
            onClick={() => alert("Fitur booking akan segera tersedia")}
            className="mt-6 rounded-full bg-gold px-8 py-4 font-black text-forest transition hover:-translate-y-1 hover:bg-[#e2b454]"
          >
            Mulai Sewa Sekarang
          </button>
        </div>

      </div>
    </section>
  );
}

export default HowToRental;