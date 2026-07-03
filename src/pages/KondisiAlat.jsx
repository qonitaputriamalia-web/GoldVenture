const dummyAlat = [
    { nama: "Tenda Dome 4P", harga: "45.000", stok: 6, rating: "4.8", kondisi: "Excellent", img: "⛺" },
    { nama: "Carrier 60L", harga: "25.000", stok: 4, rating: "4.9", kondisi: "Excellent", img: "🎒" },
    { nama: "Sleeping Bag", harga: "20.000", stok: 10, rating: "4.7", kondisi: "Good", img: "🛌" },
    { nama: "Kompor Portable", harga: "15.000", stok: 8, rating: "4.5", kondisi: "Good", img: "🍳" },
    { nama: "Matras", harga: "10.000", stok: 12, rating: "4.6", kondisi: "Good", img: "🛏️" },
    { nama: "Lantern", harga: "8.000", stok: 3, rating: "4.4", kondisi: "Maintenance", img: "🏮" },
];
const KondisiAlat = () => (
    <div className="pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900 text-white p-10 rounded-3xl mb-8 shadow-lg">
            <div className="mb-6 md:mb-0">
                <h1 className="text-3xl font-black mb-2">Kondisi Alat</h1>
                <p className="text-gray-400 font-medium max-w-md">Lihat kondisi dan status setiap alat secara transparan sebelum kamu menyewa.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm w-full md:w-auto">
                <h4 className="font-bold mb-3 text-sm">Panduan Kondisi</h4>
                <ul className="space-y-2 text-xs font-medium text-gray-300">
                    <li className="flex items-center gap-3"><span className="bg-green-500 text-white px-2 py-0.5 rounded font-bold">Excellent</span> Seperti baru (90% - 100%)</li>
                    <li className="flex items-center gap-3"><span className="bg-blue-500 text-white px-2 py-0.5 rounded font-bold">Good</span> Wajar digunakan (70% - 89%)</li>
                    <li className="flex items-center gap-3"><span className="bg-orange-500 text-white px-2 py-0.5 rounded font-bold">Maintenance</span> Sedang diperbaiki</li>
                </ul>
            </div>
        </div>
        {/* Grid Item */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {dummyAlat.map((item, i) => (
                <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition">
                    <span className={`w-fit rounded px-2.5 py-1 text-[10px] font-bold mb-3 ${item.kondisi === 'Excellent' ? 'bg-green-100 text-green-700' :
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
);
export default KondisiAlat;