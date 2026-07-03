import { useState } from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
  const [searchData, setSearchData] = useState({ date: "", pax: "1 Orang" });

  const categories = [
    { name: "Tenda", price: "15.000", img: "⛺" },
    { name: "Carrier", price: "20.000", img: "🎒" },
    { name: "Sleeping Bag", price: "15.000", img: "🛌" },
    { name: "Headlamp", price: "10.000", img: "🔦" },
    { name: "Trekking Pole", price: "10.000", img: "🦯" }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full overflow-hidden rounded-3xl bg-[#133E2B]">
        <img 
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop" 
          alt="Hiking Hero" 
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-20 text-white">
          <p className="mb-3 font-semibold text-amber-400 text-sm tracking-widest uppercase flex items-center gap-2">
            <span>⛺</span> RENTAL ALAT HIKING TERPERCAYA
          </p>
          <h1 className="mb-4 text-5xl font-black leading-tight max-w-2xl">
            Siap Mendaki,<br /> Tanpa Perlu Membeli.
          </h1>
          <p className="mb-10 max-w-xl text-lg text-gray-200">
            Sewa perlengkapan hiking & camping berkualitas dengan mudah, aman, dan praktis di GoldVent.
          </p>

          {/* Interactive Search Bar */}
          <div className="flex w-fit items-center gap-4 rounded-2xl bg-white p-3 shadow-xl">
            <div className="px-4 border-r border-gray-200">
              <label className="block text-[11px] font-bold text-gray-400 uppercase">Tanggal Mulai</label>
              <input 
                type="date" 
                className="w-full text-sm font-bold text-[#133E2B] outline-none cursor-pointer"
                value={searchData.date}
                onChange={(e) => setSearchData({...searchData, date: e.target.value})}
              />
            </div>
            <div className="px-4">
              <label className="block text-[11px] font-bold text-gray-400 uppercase">Jumlah Orang</label>
              <select 
                className="w-full text-sm font-bold text-[#133E2B] outline-none cursor-pointer bg-transparent"
                value={searchData.pax}
                onChange={(e) => setSearchData({...searchData, pax: e.target.value})}
              >
                <option>1 Orang</option>
                <option>2-4 Orang</option>
                <option>5+ Orang</option>
              </select>
            </div>
            <button className="rounded-xl bg-[#133E2B] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#0c2a1c]">
              Cari Alat
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {[
          { title: "Stok Real-time", desc: "Cek ketersediaan langsung", icon: "📦" },
          { title: "Harga Terbaik", desc: "Kualitas & harga bersahabat", icon: "🏷️" },
          { title: "Aman & Terpercaya", desc: "Barang terawat, siap pakai", icon: "🛡️" },
          { title: "Pengiriman Cepat", desc: "Kirim ke seluruh Indonesia", icon: "🚚" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <h4 className="font-bold text-[#133E2B]">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Kategori Populer */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Jelajahi Perlengkapan</p>
            <h2 className="text-2xl font-bold text-[#133E2B]">Kategori Alat Populer</h2>
          </div>
          <Link to="/alat" className="text-sm font-bold text-[#133E2B] hover:underline flex items-center gap-1">
            Lihat Semua Alat &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-[#133E2B]/20 flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-50 text-5xl mb-4 group-hover:scale-110 transition-transform">
                {cat.img}
              </div>
              <h3 className="font-bold text-[#133E2B] mb-1">{cat.name}</h3>
              <p className="text-xs font-semibold text-gray-500 mb-3">Mulai dari<br/><span className="text-[#133E2B] text-sm">Rp {cat.price} / hari</span></p>
              <span className="text-xs font-bold text-[#133E2B] mt-auto group-hover:text-amber-500 flex items-center gap-1">
                Lihat Produk &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Beranda;