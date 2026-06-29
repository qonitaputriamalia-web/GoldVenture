import React from 'react';

export default function PremiumPackage() {
  const packages = [
    {
      id: 1,
      name: 'Pemula',
      tier: 'Essential Gear',
      items: '7 Alat Utama',
      image: 'https://images.unsplash.com/photo-1516467554906-8d6bd65f2425?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Keluarga',
      tier: 'Comfort Camping',
      items: '14 Alat Lengkap',
      image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Eksklusif',
      tier: 'Premium Ultralight',
      items: '9 Alat Ringan',
      image: 'https://images.unsplash.com/photo-1506905925206-3c0b11bc4cda?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Pro',
      tier: 'Alpine Expedition',
      items: '12 Alat Teknis',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600&auto=format&fit=crop',
    }
  ];

  return (
    <section className="w-full px-6 py-16 md:px-16 lg:px-24 bg-[#1e231a] text-[#f4f6f0] overflow-hidden">
      
      {/* Header Section: Judul & Subtitle Berkelas */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3">
            Curated Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Pilih Gaya <span className="font-serif italic text-[#e5c158]">Petualanganmu</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 max-w-sm text-sm text-[#a3b19b] leading-relaxed font-light">
          Dirancang khusus untuk memenuhi standar kenyamanan dan keamanan, dari langkah pertama hingga medan terekstrem.
        </p>
      </div>

      {/* Grid/Scroll Container */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">
        
        {/* Card Dekoratif Awal (Sisi Kiri Estetik) */}
        <div className="relative min-w-[180px] sm:min-w-[240px] h-[380px] rounded-3xl overflow-hidden snap-start opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 shrink-0 hidden sm:block">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop" 
            alt="Nature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e231a] via-transparent to-black/20"></div>
        </div>

        {/* Loop Kartu Paket */}
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="relative min-w-[280px] sm:min-w-[340px] h-[380px] rounded-3xl overflow-hidden snap-start group cursor-pointer shrink-0 border border-white/5 shadow-2xl"
          >
            {/* Background Image dengan efek Zoom & Perubahan Kecerahan */}
            <img 
              src={pkg.image} 
              alt={pkg.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
            />
            
            {/* Gradasi Overlay Ganda yang Halus */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#131710] via-black/20 to-black/30 group-hover:from-[#131710]/90 transition-all duration-500"></div>
            
            {/* Badge Atas (Glassmorphism Elegan) */}
            <div className="absolute top-5 left-5">
              <span className="bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full shadow-inner transition-colors duration-300 group-hover:bg-[#d4af37]/20 group-hover:border-[#d4af37]/30">
                {pkg.name}
              </span>
            </div>

            {/* Konten Bawah (Muncul detail saat di-hover) */}
            <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end transform transition-all duration-500">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-medium mb-1 block">
                {pkg.tier}
              </span>
              <h3 className="text-xl font-medium text-white mb-2 tracking-wide">
                Paket {pkg.name}
              </h3>
              
              {/* Pembatas Garis Tipis */}
              <div className="w-0 h-[1px] bg-white/30 my-2 transition-all duration-500 group-hover:w-full"></div>
              
              {/* Detail Tersembunyi (Akan bergeser halus ke atas saat hover) */}
              <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-6 group-hover:opacity-100 flex items-center justify-between text-xs text-[#a3b19b]">
                <span>Termausk: {pkg.items}</span>
                <span className="text-white font-medium group-hover:text-[#e5c158]">Lihat Detail →</span>
              </div>
            </div>
            
            {/* Bingkai Border Tipis di Dalam Card (Hover Effect) */}
            <div className="absolute inset-4 border border-white/0 rounded-2xl pointer-events-none transition-all duration-500 group-hover:border-white/10"></div>
          </div>
        ))}

      </div>
    </section>
  );
}