import "../styles/howToRental.css";
import {
  Backpack,
  CalendarDays,
  ShoppingCart,
  FileText,
  CreditCard,
  PackageCheck,
} from "lucide-react";

function HowToRental() {
  const steps = [
    {
      number: "01",
      title: "Pilih Alat",
      desc: "Cari perlengkapan yang sesuai kebutuhan perjalananmu.",
      icon: <Backpack size={34} />,
    },
    {
      number: "02",
      title: "Pilih Tanggal",
      desc: "Tentukan tanggal sewa dan pengembalian alat.",
      icon: <CalendarDays size={34} />,
    },
    {
      number: "03",
      title: "Keranjang",
      desc: "Periksa kembali detail pesanan sebelum lanjut.",
      icon: <ShoppingCart size={34} />,
    },
    {
      number: "04",
      title: "Isi Data",
      desc: "Lengkapi identitas dan informasi penyewaan.",
      icon: <FileText size={34} />,
    },
    {
      number: "05",
      title: "Pembayaran",
      desc: "Lakukan pembayaran dengan metode yang tersedia.",
      icon: <CreditCard size={34} />,
    },
    {
      number: "06",
      title: "Ambil Alat",
      desc: "Peralatan siap digunakan untuk petualanganmu.",
      icon: <PackageCheck size={34} />,
    },
  ];

  return (
    <section id="cara-sewa" className="howToRental">
      <div className="howToRental-container">

        <div className="section-heading">
          <span>CARA SEWA</span>

          <h2>
            Sewa Alat Dalam
            <br />
            6 Langkah Mudah
          </h2>

          <p>
            Proses penyewaan dibuat sesederhana mungkin agar kamu bisa fokus
            menikmati perjalanan tanpa ribet.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>

              <div className="step-top">

                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-icon">
                  {step.icon}
                </div>

              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

            </div>
          ))}
        </div>

        <div className="rental-cta">

          <h3>
            Siap Memulai Petualangan?
          </h3>

          <p>
            Selesaikan penyewaan hanya dalam beberapa menit dan nikmati
            pengalaman outdoor tanpa ribet.
          </p>

          <button>
            Mulai Sewa Sekarang
          </button>

        </div>

      </div>
    </section>
  );
}

export default HowToRental;