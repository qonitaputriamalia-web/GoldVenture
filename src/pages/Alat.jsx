import { useState, useMemo } from "react";

const Alat = () => {
  // === State Management ===
  const [activeKategori, setActiveKategori] = useState("Semua Kategori");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKondisi, setSelectedKondisi] = useState(["Excellent", "Good", "Maintenance"]);
  const [sortBy, setSortBy] = useState("Terbaru");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null); // State untuk Modal
  const itemsPerPage = 8;

  // === Dummy Data (Sesuai Gambar) ===
  const dummyAlat = useMemo(() => [
    { id: 1, nama: "Tenda Dome 4P", harga: 45000, stok: 6, rating: "4.8", ulasan: 120, kondisi: "Excellent", kategori: "Tenda", img: "https://placehold.co/400x300/4CAF50/FFF?text=Tenda" },
    { id: 2, nama: "Carrier 60L", harga: 25000, stok: 4, rating: "4.9", ulasan: 98, kondisi: "Excellent", kategori: "Carrier", img: "https://placehold.co/400x300/388E3C/FFF?text=Carrier" },
    { id: 3, nama: "Sleeping Bag", harga: 20000, stok: 10, rating: "4.7", ulasan: 76, kondisi: "Good", kategori: "Sleeping System", img: "https://placehold.co/400x300/1976D2/FFF?text=Sleeping+Bag" },
    { id: 4, nama: "Kompor Portable", harga: 15000, stok: 8, rating: "4.5", ulasan: 64, kondisi: "Good", kategori: "Alat Masak", img: "https://placehold.co/400x300/FBC02D/FFF?text=Kompor" },
    { id: 5, nama: "Matras", harga: 10000, stok: 12, rating: "4.6", ulasan: 71, kondisi: "Good", kategori: "Sleeping System", img: "https://placehold.co/400x300/424242/FFF?text=Matras" },
    { id: 6, nama: "Trekking Pole", harga: 10000, stok: 7, rating: "4.7", ulasan: 60, kondisi: "Excellent", kategori: "Aksesoris", img: "https://placehold.co/400x300/616161/FFF?text=Pole" },
    { id: 7, nama: "Nesting", harga: 10000, stok: 9, rating: "4.6", ulasan: 55, kondisi: "Good", kategori: "Alat Masak", img: "https://placehold.co/400x300/757575/FFF?text=Nesting" },
    { id: 8, nama: "Lantern", harga: 8000, stok: 3, rating: "4.4", ulasan: 38, kondisi: "Maintenance", kategori: "Penerangan", img: "https://placehold.co/400x300/F57C00/FFF?text=Lantern" },
    { id: 9, nama: "Rain Cover", harga: 5000, stok: 15, rating: "4.5", ulasan: 49, kondisi: "Good", kategori: "Aksesoris", img: "https://placehold.co/400x300/1976D2/FFF?text=Cover" },
  ], []);

  const kategoriList = ["Semua Kategori", "Tenda", "Carrier", "Sleeping System", "Alat Masak", "Penerangan", "Aksesoris"];

  // === Handlers ===
  const handleKondisiChange = (kondisi) => {
    setSelectedKondisi((prev) =>
      prev.includes(kondisi) ? prev.filter((k) => k !== kondisi) : [...prev, kondisi]
    );
  };

  const resetFilters = () => {
    setActiveKategori("Semua Kategori");
    setSearchQuery("");
    setSelectedKondisi(["Excellent", "Good", "Maintenance"]);
    setSortBy("Terbaru");
    setCurrentPage(1);
  };

  // === Filtering & Sorting Logic ===
  const filteredData = useMemo(() => {
    let result = dummyAlat;

    // 1. Search
    if (searchQuery) {
      result = result.filter(item => item.nama.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    // 2. Kategori
    if (activeKategori !== "Semua Kategori") {
      result = result.filter(item => item.kategori === activeKategori);
    }
    // 3. Kondisi
    result = result.filter(item => selectedKondisi.includes(item.kondisi));

    // 4. Sorting
    if (sortBy === "Harga: Termurah") result.sort((a, b) => a.harga - b.harga);
    if (sortBy === "Harga: Termahal") result.sort((a, b) => b.harga - a.harga);

    return result;
  }, [dummyAlat, searchQuery, activeKategori, selectedKondisi, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Helper Format Rupiah
  const formatRp = (angka) => new Intl.NumberFormat("id-ID").format(angka);

  // Helper Hitung Total per Kategori
  const getKategoriCount = (kat) => {
    if (kat === "Semua Kategori") return dummyAlat.length;
    return dummyAlat.filter(item => item.kategori === kat).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">


      {/* ================= HERO BANNER ================= */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-50 pt-10 pb-8 px-8 mb-8 flex justify-between items-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1459231978203-b7d0c47a2cb7?q=80&w=1600&auto=format&fit=crop"
          alt="Alat Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        {/* Subtle background decoration */}
        <div className="absolute opacity-10 right-0 bottom-0 pointer-events-none">
        </div>

        <div className="relative z-10 pl-8">
          <h2 className="text-4xl font-extrabold text-[#133E2B] mb-2">Alat</h2>
        </div>

        <div className="relative z-10 flex items-center gap-4 bg-[#133E2B] text-white px-6 py-4 rounded-xl shadow-lg mr-8 max-w-sm">
          <div className="border border-white/20 p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-1">Gear berkualitas untuk setiap petualanganmu</h4>
            <p className="text-xs text-gray-300">Sewa mudah, aman, dan nyaman bersama GoldVent.</p>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT & SIDEBAR ================= */}
      <div className="flex gap-8 px-16 pb-16">

        {/* === Sidebar Filter === */}
        <aside className="w-[260px] shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

            {/* Kategori */}
            <h3 className="mb-4 font-bold text-[#133E2B] text-base">Kategori</h3>
            <ul className="space-y-1 text-sm">
              {kategoriList.map((kat) => (
                <li
                  key={kat}
                  onClick={() => setActiveKategori(kat)}
                  className={`flex justify-between items-center cursor-pointer rounded-lg px-3 py-2 font-medium transition ${activeKategori === kat ? "bg-gray-100 text-[#133E2B] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#133E2B]"}`}
                >
                  <span>{kat}</span>
                  <span className={activeKategori === kat ? "text-[#133E2B]" : "text-gray-400"}>({getKategoriCount(kat)})</span>
                </li>
              ))}
            </ul>

            <hr className="my-6 border-gray-100" />

            {/* Filter Harga */}
            <h3 className="mb-4 font-bold text-[#133E2B] text-base">Filter Harga</h3>
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                <span>Rp 0</span>
                <span>Rp 250.000+</span>
              </div>
              <input type="range" min="0" max="250000" defaultValue="250000" className="w-full accent-[#133E2B]" />
            </div>

            <hr className="my-6 border-gray-100" />

            {/* Kondisi */}
            <h3 className="mb-4 font-bold text-[#133E2B] text-base">Kondisi</h3>
            <div className="space-y-3 text-sm font-medium text-gray-600">
              {["Excellent", "Good", "Maintenance"].map((kondisi) => (
                <label key={kondisi} className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedKondisi.includes(kondisi)}
                    onChange={() => handleKondisiChange(kondisi)}
                    className="accent-[#133E2B] w-4 h-4 rounded border-gray-300"
                  />
                  {kondisi}
                </label>
              ))}
            </div>

            <hr className="my-6 border-gray-100" />

            {/* Urutkan (Mobile/Sidebar fallback) */}
            <h3 className="mb-3 font-bold text-[#133E2B] text-base">Urutkan</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full mb-6 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none font-medium text-gray-700 focus:border-[#133E2B]"
            >
              <option>Terbaru</option>
              <option>Harga: Termurah</option>
              <option>Harga: Termahal</option>
            </select>

            <button
              onClick={resetFilters}
              className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Reset Filter
            </button>
          </div>
        </aside>

        {/* === Main Content === */}
        <div className="flex-1">

          {/* Top Control Bar */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-bold text-gray-600">Menampilkan {filteredData.length} alat</p>
            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari alat hiking..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[280px] rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2 text-sm outline-none focus:border-[#133E2B] focus:ring-1 focus:ring-[#133E2B]"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-lg border border-gray-200 bg-white pl-4 pr-10 py-2 text-sm outline-none font-medium text-gray-700 cursor-pointer"
                >
                  <option>Urutkan: Terbaru</option>
                  <option>Harga: Termurah</option>
                  <option>Harga: Termahal</option>
                </select>
                <svg className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          {currentData.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentData.map((item) => (
                <div key={item.id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-200 group">
                  {/* Badge */}
                  <span className={`w-fit rounded px-2.5 py-1 text-[10px] font-bold mb-4 ${item.kondisi === 'Excellent' ? 'bg-[#dcfce7] text-[#166534]' :
                    item.kondisi === 'Good' ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#ffedd5] text-[#c2410c]'
                    }`}>
                    {item.kondisi}
                  </span>

                  {/* Image */}
                  <div className="mb-4 h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 cursor-pointer" onClick={() => setSelectedProduct(item)}>
                    <img src={item.img} alt={item.nama} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Info */}
                  <h4 className="mb-1 text-[15px] font-bold text-[#133E2B] line-clamp-1">{item.nama}</h4>
                  <p className="mb-4 text-[13px] font-bold text-gray-900">Rp {formatRp(item.harga)} <span className="font-medium text-gray-500">/ hari</span></p>

                  <div className="mt-auto flex items-center justify-between mb-4 text-[11px] font-bold text-gray-500">
                    <span>Stok: <span className="text-gray-800">{item.stok}</span></span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      {item.rating} ({item.ulasan})
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="w-full rounded-lg bg-[#133E2B] py-2 text-sm font-bold text-white transition hover:bg-[#0c2a1c] active:scale-[0.98]"
                  >
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-lg font-bold">Produk tidak ditemukan</p>
              <p className="text-sm">Coba sesuaikan filter atau kata kunci pencarian Anda.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex w-9 h-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                &lt;
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`flex w-9 h-9 items-center justify-center rounded-lg text-sm font-bold transition ${currentPage === i + 1 ? 'bg-[#133E2B] text-white border-[#133E2B]' : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex w-9 h-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================= MODAL DETAIL PRODUK ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
          <div
            className="bg-white rounded-2xl max-w-2xl w-full flex flex-col md:flex-row overflow-hidden shadow-2xl animate-[fadeIn_0.2s_ease-out]"
            onClick={e => e.stopPropagation()} // Hindari tutup saat klik dalam modal
          >
            {/* Foto Produk */}
            <div className="md:w-1/2 bg-gray-100">
              <img src={selectedProduct.img} alt={selectedProduct.nama} className="w-full h-full object-cover min-h-[250px]" />
            </div>

            {/* Detail */}
            <div className="md:w-1/2 p-6 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className={`w-fit rounded px-2.5 py-1 text-[10px] font-bold ${selectedProduct.kondisi === 'Excellent' ? 'bg-[#dcfce7] text-[#166534]' :
                  selectedProduct.kondisi === 'Good' ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#ffedd5] text-[#c2410c]'
                  }`}>
                  {selectedProduct.kondisi}
                </span>
                <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <h2 className="text-2xl font-extrabold text-[#133E2B] mb-2">{selectedProduct.nama}</h2>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="flex items-center gap-1 font-bold text-gray-700">
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  {selectedProduct.rating} <span className="font-normal text-gray-500">({selectedProduct.ulasan} ulasan)</span>
                </span>
                <span className="text-gray-300">|</span>
                <span className="font-medium text-gray-600">Stok: <span className="font-bold text-[#133E2B]">{selectedProduct.stok}</span></span>
              </div>

              <p className="text-gray-500 text-sm mb-6 flex-1">
                Alat pendakian kualitas terbaik yang dirawat secara berkala. Cocok untuk menemani perjalanan outdoor Anda agar lebih aman dan nyaman.
              </p>

              <div className="mt-auto border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-500 font-medium mb-1">Harga Sewa</p>
                <div className="flex items-end justify-between mb-4">
                  <p className="text-2xl font-extrabold text-[#133E2B]">Rp {formatRp(selectedProduct.harga)}<span className="text-sm font-medium text-gray-500"> / hari</span></p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 rounded-xl bg-amber-500 py-3 text-sm font-bold text-white transition hover:bg-amber-600">Masuk Keranjang</button>
                  <button className="flex-1 rounded-xl bg-[#133E2B] py-3 text-sm font-bold text-white transition hover:bg-[#0c2a1c]">Sewa Sekarang</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Alat;