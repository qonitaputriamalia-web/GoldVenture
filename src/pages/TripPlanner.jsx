import { useState } from "react";

const TripPlanner = () => {
  const [planner, setPlanner] = useState({
    tujuan: "", tglMulai: "", tglSelesai: "", durasi: "4 Hari 3 Malam", peserta: "3 Orang",
    tipe: "Pendakian Gunung", level: "Menengah", cuaca: "Dingin"
  });

  return (
    <div className="flex flex-col gap-8 lg:flex-row pb-12">
      {/* Form Kiri */}
      <div className="w-full rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:w-1/3">
        <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#133E2B]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#133E2B] text-sm text-white">1</span> 
          Rencanakan Pendakianmu
        </h2>
        
        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-gray-500">Tujuan Pendakian</label>
            <input type="text" placeholder="Misal: Gunung Rinjani" className="w-full rounded-xl border border-gray-200 p-3 text-sm font-medium outline-none focus:border-[#133E2B]" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-500">Durasi</label>
              <select className="w-full rounded-xl border border-gray-200 p-3 text-sm font-medium outline-none">
                <option>4 Hari 3 Malam</option>
                <option>2 Hari 1 Malam</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-500">Peserta</label>
              <select className="w-full rounded-xl border border-gray-200 p-3 text-sm font-medium outline-none">
                <option>3 Orang</option>
                <option>1 Orang</option>
              </select>
            </div>
          </div>

          {/* Interactive Pills */}
          <div>
            <label className="mb-2 block text-xs font-bold text-gray-500">Tipe Pendakian</label>
            <div className="flex flex-wrap gap-2">
              {["Pendakian Gunung", "Camping", "Hiking Ringan"].map(tipe => (
                <button 
                  key={tipe} 
                  onClick={() => setPlanner({...planner, tipe})}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition border ${planner.tipe === tipe ? 'bg-[#133E2B]/10 border-[#133E2B] text-[#133E2B]' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                >
                  {tipe}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-gray-500">Level Pendakian</label>
            <div className="flex flex-wrap gap-2">
              {["Pemula", "Menengah", "Lanjutan"].map(lvl => (
                <button 
                  key={lvl} 
                  onClick={() => setPlanner({...planner, level: lvl})}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition border ${planner.level === lvl ? 'bg-[#133E2B]/10 border-[#133E2B] text-[#133E2B]' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-4 w-full rounded-xl bg-[#133E2B] py-3.5 text-sm font-bold text-white transition hover:bg-[#0c2a1c] flex items-center justify-center gap-2">
            ✨ Buat Rekomendasi
          </button>
        </div>
      </div>

      {/* Hasil Kanan */}
      <div className="flex-1 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#133E2B]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#133E2B] text-sm text-white">2</span> 
          Rekomendasi Perlengkapan
        </h2>
        
        <div className="mb-8 flex flex-wrap gap-6 rounded-2xl bg-gray-50 p-5 text-sm font-bold text-gray-600 border border-gray-100">
          <div className="flex flex-col"><span className="text-[10px] text-gray-400 uppercase">Tujuan</span> ⛰️ Gunung Rinjani</div>
          <div className="flex flex-col"><span className="text-[10px] text-gray-400 uppercase">Durasi</span> ⏱️ 4 Hari 3 Malam</div>
          <div className="flex flex-col"><span className="text-[10px] text-gray-400 uppercase">Peserta</span> 👥 3 Orang</div>
          <div className="flex flex-col"><span className="text-[10px] text-gray-400 uppercase">Level</span> 🏃 Menengah</div>
        </div>

        <h3 className="mb-4 text-sm font-bold text-[#133E2B]">Daftar Alat yang Disarankan (8 Item)</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
           {[
             { name: "Tenda Dome 4P", img: "⛺", jml: 1, harga: "45.000" },
             { name: "Carrier 60L", img: "🎒", jml: 3, harga: "25.000" },
             { name: "Sleeping Bag", img: "🛌", jml: 3, harga: "20.000" },
             { name: "Matras", img: "🛏️", jml: 3, harga: "10.000" },
           ].map((item, i) => (
             <div key={i} className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm">
               <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-50 text-3xl">{item.img}</div>
               <h4 className="mb-1 text-xs font-bold text-[#133E2B] truncate">{item.name}</h4>
               <p className="text-[11px] font-semibold text-gray-500 mb-1">Jumlah: {item.jml}</p>
               <p className="text-[11px] font-bold text-amber-500">Rp {item.harga}</p>
             </div>
           ))}
        </div>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
          <div>
            <p className="text-xs font-bold text-gray-400">Estimasi Total Biaya</p>
            <p className="text-2xl font-black text-[#133E2B]">Rp 435.000 <span className="text-sm font-medium text-gray-500">/ hari</span></p>
          </div>
          <button className="rounded-xl bg-[#133E2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0c2a1c]">
            Simpan & Lanjut ke Sewa &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
export default TripPlanner;