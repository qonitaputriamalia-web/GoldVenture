const TentangKami = () => (
  <div className="pb-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
      <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-lg h-[400px] object-cover w-full" alt="About Us" />
      <div>
        <h4 className="text-sm font-bold text-amber-500 mb-2 uppercase tracking-wider">Siapa Kami</h4>
        <h1 className="text-4xl font-black text-[#133E2B] mb-6 leading-tight">Teman Terbaik untuk Setiap Petualangan</h1>
        <p className="text-gray-500 font-medium leading-relaxed mb-6">GoldVent adalah penyedia layanan rental perlengkapan hiking & camping yang berdedikasi untuk memberikan pengalaman outdoor yang lebih mudah, aman, dan menyenangkan.</p>
        <div className="grid grid-cols-2 gap-6">
          <div><h5 className="font-bold text-[#133E2B] flex items-center gap-2">🛡️ Berkualitas</h5><p className="text-xs text-gray-500 mt-1">Alat dirawat & dicek berkala.</p></div>
          <div><h5 className="font-bold text-[#133E2B] flex items-center gap-2">💰 Terjangkau</h5><p className="text-xs text-gray-500 mt-1">Harga kompetitif.</p></div>
        </div>
      </div>
    </div>
    
    {/* Stats Bar */}
    <div className="bg-[#133E2B] rounded-3xl p-10 flex flex-wrap justify-around text-white text-center shadow-xl">
      <div><p className="text-4xl font-black">2.500+</p><p className="text-sm text-gray-300 mt-1">Pelanggan Terdaftar</p></div>
      <div><p className="text-4xl font-black">1.200+</p><p className="text-sm text-gray-300 mt-1">Perlengkapan Tersedia</p></div>
      <div><p className="text-4xl font-black">4.8/5</p><p className="text-sm text-gray-300 mt-1">Rating Pelanggan</p></div>
    </div>
  </div>
);
export default TentangKami;