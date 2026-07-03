import { useState } from "react";

const Alat = () => {
  const [activeKategori, setActiveKategori] = useState("Semua Kategori");
  const [searchQuery, setSearchQuery] = useState("");

  const dummyAlat = [
    { nama: "Tenda Dome 4P", harga: "45.000", stok: 6, rating: "4.8", kondisi: "Excellent", img: "⛺" },
    { nama: "Carrier 60L", harga: "25.000", stok: 4, rating: "4.9", kondisi: "Excellent", img: "🎒" },
    { nama: "Sleeping Bag", harga: "20.000", stok: 10, rating: "4.7", kondisi: "Good", img: "🛌" },
    { nama: "Kompor Portable", harga: "15.000", stok: 8, rating: "4.5", kondisi: "Good", img: "🍳" },
    { nama: "Matras", harga: "10.000", stok: 12, rating: "4.6", kondisi: "Good", img: "🛏️" },
    { nama: "Lantern", harga: "8.000", stok: 3, rating: "4.4", kondisi: "Maintenance", img: "🏮" },
  ];

  return (
    <div className="flex gap-8 pb-12">
      {/* Sidebar Filter */}
      <aside className="w-64 shrink-0">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sticky top-28">
          <h3 className="mb-4 font-bold text-[#133E2B]">Kategori</h3>
          <ul className="space-y-1 text-sm">
            {["Semua Kategori", "Tenda", "Carrier", "Sleeping System", "Alat Masak", "Penerangan", "Aksesoris"].map((kat) => (
              <li 
                key={kat}
                onClick={() => setActiveKategori(kat)}
                className={`cursor-pointer rounded-lg px-3 py-2.5 font-medium transition ${activeKategori === kat ? "bg-[#133E2B]/10 text-[#133E2B] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#133E2B]"}`}
              >
                {kat}
              </li>
            ))}
          </ul>

          <hr className="my-6 border-gray-100" />
          
          <h3 className="mb-4 font-bold text-[#133E2B]">Kondisi</h3>
          <div className="space-y-3 text-sm font-medium text-gray-600">
            <label className="flex cursor-pointer items-center gap-3"><input type="checkbox" defaultChecked className="accent-[#133E2B] w-4 h-4" /> Semua Kondisi</label>
            <label className="flex cursor-pointer items-center gap-3"><input type="checkbox" className="accent-[#133E2B] w-4 h-4" /> Excellent</label>
            <label className="flex cursor-pointer items-center gap-3"><input type="checkbox" className="accent-[#133E2B] w-4 h-4" /> Good</label>
            <label className="flex cursor-pointer items-center gap-3"><input type="checkbox" className="accent-[#133E2B] w-4 h-4" /> Maintenance</label>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div className="mb-6 flex items-center justify-between rounded-2xl bg-[#133E2B] p-6 text-white shadow-md">
          <div>
            <h1 className="text-2xl font-bold">Alat</h1>
            <p className="text-sm text-gray-300 mt-1">Beranda &gt; Alat</p>
          </div>
          <div className="flex items-center gap-4 bg-white/10 px-4 py-3 rounded-xl border border-white/20">
            <span className="text-2xl">🎒</span>
            <div>
              <h4 className="font-bold text-sm">Gear berkualitas untuk petualanganmu</h4>
              <p className="text-xs text-gray-300">Sewa mudah, aman, dan nyaman bersama GoldVent.</p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-500">Menampilkan {dummyAlat.length} alat</p>
          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="Cari alat hiking..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm outline-none focus:border-[#133E2B] focus:ring-1 focus:ring-[#133E2B]" 
            />
            <select className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm outline-none font-medium text-gray-700">
              <option>Urutkan: Terbaru</option>
              <option>Harga: Termurah</option>
              <option>Harga: Termahal</option>
            </select>
          </div>
        </div>

        {/* Grid Item */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {dummyAlat.map((item, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition">
              <span className={`w-fit rounded px-2.5 py-1 text-[10px] font-bold mb-3 ${
                item.kondisi === 'Excellent' ? 'bg-green-100 text-green-700' :
                item.kondisi === 'Good' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {item.kondisi}
              </span>
              <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-gray-50 text-6xl">
                {item.img}
              </div>
              <h4 className="mb-1 text-sm font-bold text-[#133E2B]">{item.nama}</h4>
              <p className="mb-4 text-sm font-bold text-gray-700">Rp {item.harga} <span className="text-xs font-normal text-gray-500">/ hari</span></p>
              
              <div className="mt-auto flex items-center justify-between mb-4 text-xs font-semibold text-gray-500">
                <span>Stok: {item.stok}</span>
                <span className="flex items-center gap-1 text-amber-500">⭐ {item.rating}</span>
              </div>
              <button className="w-full rounded-xl bg-[#133E2B] py-2.5 text-sm font-bold text-white transition hover:bg-[#0c2a1c]">
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Alat;