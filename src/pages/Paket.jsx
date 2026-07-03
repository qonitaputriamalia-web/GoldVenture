const Paket = () => {
  const dummyPaket = [
    { title: "Paket Pendakian 2 Hari 1 Malam", price: "120.000", oldPrice: "140.000", pax: "1-3 Orang", dur: "2 Hari 1 Malam", badge: "Paling Populer", img: "⛺🎒" },
    { title: "Paket Pendakian 3 Hari 2 Malam", price: "175.000", oldPrice: "215.000", pax: "1-3 Orang", dur: "3 Hari 2 Malam", badge: "Hemat", img: "⛺🎒🛌" },
    { title: "Paket Camping Keluarga", price: "250.000", oldPrice: "300.000", pax: "4-6 Orang", dur: "2 Hari 1 Malam", badge: "Keluarga", img: "⛺👨‍👩‍👧‍👦🍳" },
    { title: "Paket Ekspedisi 4 Hari", price: "290.000", oldPrice: "345.000", pax: "1-3 Orang", dur: "4 Hari 3 Malam", badge: "Ekspedisi", img: "🎒🧭🧗" },
  ];

  return (
    <div className="pb-12">
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-[#133E2B] p-12 text-white">
        <h1 className="mb-3 text-4xl font-bold">Paket Pendakian Lengkap</h1>
        <p className="max-w-xl text-gray-300">Pilih paket yang sesuai dengan kebutuhan pendakianmu. Lebih praktis, hemat, dan siap untuk setiap petualangan!</p>
      </div>

      <div className="flex gap-8">
        <aside className="w-64 shrink-0 rounded-2xl border border-gray-100 bg-white p-6 h-max shadow-sm">
           <h3 className="mb-4 font-bold text-[#133E2B]">Kategori Paket</h3>
           <ul className="space-y-2 text-sm text-gray-600 font-medium">
             <li className="text-[#133E2B] font-bold bg-gray-50 p-2 rounded-lg cursor-pointer">📦 Semua Paket</li>
             <li className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">⛰️ Pendakian Gunung</li>
             <li className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">⛺ Camping</li>
           </ul>
        </aside>

        <div className="flex-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummyPaket.map((pkt, i) => (
            <div key={i} className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg">
               <span className={`absolute top-4 left-4 z-10 rounded px-2.5 py-1 text-[10px] font-bold text-white shadow-sm ${
                 pkt.badge === 'Paling Populer' ? 'bg-orange-500' : pkt.badge === 'Hemat' ? 'bg-green-600' : 'bg-amber-500'
               }`}>
                 {pkt.badge}
               </span>
               <div className="mb-4 mt-6 flex h-40 items-center justify-center rounded-xl bg-gray-50 text-6xl">
                 {pkt.img}
               </div>
               <h4 className="mb-3 text-base font-bold text-[#133E2B] leading-snug">{pkt.title}</h4>
               
               <div className="mb-5 flex gap-4 text-xs font-semibold text-gray-500">
                 <span className="flex items-center gap-1">⏱️ {pkt.dur}</span> 
                 <span className="flex items-center gap-1">👥 {pkt.pax}</span>
               </div>
               
               <div className="mb-5 flex items-end justify-between">
                 <div>
                   <span className="block text-xs font-semibold text-gray-400 line-through">Rp {pkt.oldPrice}</span>
                   <span className="text-xl font-bold text-[#133E2B]">Rp {pkt.price} <span className="text-xs font-normal text-gray-500">/ paket</span></span>
                 </div>
               </div>
               <button className="w-full rounded-xl bg-[#133E2B] py-2.5 text-sm font-bold text-white transition hover:bg-[#0c2a1c]">Lihat Detail Paket</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Paket;