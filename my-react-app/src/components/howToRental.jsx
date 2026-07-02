function HowToRental() {
  const steps = [
    {
      number: "01",
      title: "Pilih Alat",
      desc: "Cari perlengkapan yang sesuai kebutuhan perjalananmu.",
      image: "https://images.unsplash.com/photo-1493244040629-496f6d136cc4?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      number: "02",
      title: "Pilih Tanggal",
      desc: "Tentukan tanggal sewa dan pengembalian alat.",
      image: "https://images.unsplash.com/photo-1642359085898-d9fde39507c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683288706157-9913483dffc8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      number: "03",
      title: "Keranjang",
      desc: "Periksa kembali detail pesanan sebelum lanjut.",
      image: "https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      number: "04",
      title: "Isi Data",
      desc: "Lengkapi identitas dan informasi penyewaan.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "05",
      title: "Pembayaran",
      desc: "Lakukan pembayaran dengan metode yang tersedia.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "06",
      title: "Ambil Alat",
      desc: "Peralatan siap digunakan untuk petualanganmu.",
      image: "https://images.unsplash.com/photo-1485809052957-5113b0ff51af?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              className="group overflow-hidden flex flex-col rounded-[1.8rem] bg-white shadow-sm ring-1 ring-slate-200/70 border-b-4 border-r-4 border-slate-900 transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Container Gambar */}
              <div className="relative h-48 w-full border-b-2 border-slate-900 overflow-hidden bg-slate-100">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badge Nomor */}
                <div className="absolute top-4 left-4 rounded-2xl bg-forest px-4 py-2 text-lg font-black text-white shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Teks Deskripsi */}
              <div className="p-6">
                <h3 className="mt-2 text-xl font-black text-forest">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.desc}
                </p>
              </div>
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