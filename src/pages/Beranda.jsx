import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search, Calendar, Users, ChevronDown, Package, ShieldCheck,
  BadgeCheck, Truck, ArrowRight, Plus, X
} from "lucide-react";

const COLORS = {
  forest: "#133E2B",
  forestDark: "#0c2a1c",
  forestSoft: "#1b5239",
  amber: "#F5A524",
  amberDark: "#D98C0F",
  cream: "#FAF8F3",
};

// Data Kategori Alat (Ditambah jadi 10 Item + Detail Deskripsi)
const categories = [
  {
    id: "tenda",
    name: "Tenda Dome",
    price: "15.000",
    img: "https://images.unsplash.com/photo-1624923686627-514dd5e57bae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Dome 2–4 orang",
    detail: "Tenda dome kapasitas 2-4 orang dengan material double layer anti badai dan tahan air (PU 3000mm). Rangka fiber kokoh, cocok untuk pendakian gunung atau camping keluarga yang aman dan nyaman."
  },
  {
    id: "carrier",
    name: "Tas Carrier",
    price: "20.000",
    img: "https://images.unsplash.com/photo-1622260614927-208cfe3f5cfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "40L – 60L",
    detail: "Tas carrier berkapasitas 40 hingga 60 liter. Dilengkapi dengan backsystem yang nyaman, busa tebal, dan sirkulasi udara yang baik. Sudah termasuk raincover untuk melindungi barang bawaan dari hujan."
  },
  {
    id: "sleeping",
    name: "Sleeping Bag",
    price: "15.000",
    img: "https://images.unsplash.com/photo-1558477280-1bfed08ea5db?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Tahan hingga 10°C",
    detail: "Sleeping bag model polar bulu yang sangat hangat. Mampu menahan suhu dingin hingga 10°C. Ringan, mudah dipacking, dan tidak memakan banyak tempat di dalam carrier Anda."
  },
  {
    id: "headlamp",
    name: "Headlamp",
    price: "10.000",
    img: "https://images.unsplash.com/photo-1517457773273-412ec74a18cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "USB rechargeable",
    detail: "Lampu kepala LED super terang dengan 3 mode pencahayaan (Terang, Redup, SOS). Menggunakan baterai yang bisa diisi ulang via USB, tahan hingga 12 jam pemakaian normal."
  },
  {
    id: "pole",
    name: "Trekking Pole",
    price: "10.000",
    img: "https://images.unsplash.com/photo-1632411316785-33d395035a3c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Sepasang, aluminium",
    detail: "Tongkat daki berbahan paduan aluminium ultralight yang sangat kuat. Dilengkapi sistem anti-shock untuk meredam getaran dan grip gabus (cork) yang nyaman digenggam meski tangan berkeringat."
  },
  {
    id: "cookingset",
    name: "Cooking Set",
    price: "12.000",
    img: "https://images.unsplash.com/photo-1611245447093-4e9e4106bb63?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Panci & Wajan Lipat",
    detail: "Satu set alat masak portabel berbahan anodized aluminum. Terdiri dari panci, wajan, dan mangkuk kecil. Anti lengket, sangat ringan, dan mudah dibersihkan di alam bebas."
  },
  {
    id: "kompor",
    name: "Kompor Portabel",
    price: "10.000",
    img: "https://images.pexels.com/photos/6831220/pexels-photo-6831220.jpeg",
    desc: "Bahan bakar gas kaleng",
    detail: "Kompor lipat mini ultralight dengan pemantik otomatis. Apinya biru dan stabil meskipun tertiup angin. Sangat cocok disandingkan dengan gas kaleng (hi-cook)."
  },
  {
    id: "matras",
    name: "Matras Gulung",
    price: "5.000",
    img: "https://images.unsplash.com/photo-1575206656117-f146f8fac2ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Spons karet tebal",
    detail: "Matras gulung berbahan karet spons (EVA) tebal yang empuk dan ampuh menahan dingin dari tanah. Wajib dibawa agar alas tidur di dalam tenda lebih nyaman."
  },
  {
    id: "jaket",
    name: "Jaket Gunung",
    price: "25.000",
    img: "https://images.unsplash.com/photo-1637705171576-10274e51f9b8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Waterproof & Windproof",
    detail: "Jaket pendakian double layer, inner polar dan outer taslan waterproof. Ampuh menahan angin kencang (windbreaker) dan hujan ringan hingga sedang saat summit attack."
  },
  {
    id: "sepatu",
    name: "Sepatu Trekking",
    price: "35.000",
    img: "https://images.unsplash.com/photo-1698732662028-2443c4acd739?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Grip karet anti-slip",
    detail: "Sepatu khusus pendakian dengan sol karet bergerigi dalam untuk traksi maksimal di tanah licin. Bagian ankle didesain tinggi untuk mencegah keseleo saat membawa beban berat."
  }
];


const trust = [
  { title: "Stok Real-time", desc: "Cek ketersediaan alat secara langsung", icon: Package },
  { title: "Harga Terbaik", desc: "Kualitas terbaik harga bersahabat", icon: BadgeCheck },
  { title: "Aman & Terpercaya", desc: "Barang terawat dan siap pakai", icon: ShieldCheck },
  { title: "Pengiriman Cepat", desc: "Kirim ke seluruh Indonesia", icon: Truck },
];

/* ---------------- Product Modal ---------------- */
function ProductModal({ product, isOpen, onClose, onAdd }) {
  if (!isOpen || !product) return null;

  return (
    // Wrapper Flexbox Center
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

      {/* Background Overlay Hitam */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: "fadeIn 0.3s ease-out forwards" }}
      />

      {/* Kontainer Modal (Pakai animasi baru: modalZoom) */}
      <div
        className="relative z-[105] flex w-full max-w-2xl max-h-[90vh] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row"
        style={{ animation: "modalZoom 0.3s ease-out forwards" }}
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm backdrop-blur-md transition-all hover:bg-red-50 hover:text-red-500 hover:rotate-90"
        >
          <X size={18} />
        </button>

        {/* Gambar Produk */}
        <div className="relative h-56 w-full shrink-0 bg-gray-100 md:h-auto md:w-2/5">
          <img
            src={product.img}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Detail Info */}
        <div className="relative z-10 flex w-full flex-col overflow-y-auto bg-white p-6 md:p-8">
          <span className="mb-2 w-fit rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white" style={{ backgroundColor: COLORS.amber }}>
            Tersedia
          </span>
          <h2 className="mb-1 text-2xl font-black text-gray-900" style={{ color: COLORS.forest }}>{product.name}</h2>
          <p className="mb-4 text-sm font-semibold text-gray-500">{product.desc}</p>

          <div className="mb-6 h-px w-full bg-gray-100"></div>

          <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
            {product.detail}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Harga Sewa</p>
              <p className="text-xl font-black" style={{ color: COLORS.forest }}>
                Rp {product.price} <span className="text-sm font-normal text-gray-400">/ hari</span>
              </p>
            </div>
            <button
              onClick={() => {
                onAdd(product);
                onClose();
              }}
              className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{ backgroundColor: COLORS.forest }}
            >
              <Plus size={16} /> Sewa Alat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Hero Section ---------------- */
function Hero({ searchData, setSearchData, onSearch }) {
  return (
    <div className="relative h-[620px] w-full overflow-hidden bg-zinc-900">
      <img
        src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Pendaki menghadap pegunungan"
        className="absolute inset-0 h-full w-full object-cover opacity-85"
        style={{ animation: "kenBurns 24s ease-in-out infinite alternate" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(90deg, rgba(12,42,28,0.95) 0%, rgba(19,62,43,0.75) 40%, rgba(0,0,0,0.2) 100%)` }}
      />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-white lg:px-8 pb-12">
        <p
          className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] opacity-0"
          style={{ color: COLORS.amber, animation: "fadeUp 600ms ease-out 100ms forwards" }}
        >
          <span className="text-lg"></span> Rental Alat Hiking Terpercaya
        </p>
        <h1
          className="mb-5 max-w-3xl text-5xl font-black leading-[1.15] tracking-tight opacity-0 lg:text-6xl"
          style={{ animation: "fadeUp 650ms ease-out 220ms forwards" }}
        >
          Siap Mendaki,
          <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-amber-400">Tanpa Perlu Membeli</span>
        </h1>
        <p
          className="mb-12 max-w-xl text-md leading-relaxed text-gray-200/90 opacity-0"
          style={{ animation: "fadeUp 650ms ease-out 340ms forwards" }}
        >
          Sewa perlengkapan hiking &amp; camping berkualitas dengan mudah, aman, dan praktis di{" "}
          <span className="font-bold  decoration-amber-400 decoration-2" style={{ color: COLORS.amber }}>GoldVenture</span>
        </p>

        {/* Search Widget */}
        <div
          className="flex w-full max-w-4xl flex-wrap lg:flex-nowrap items-center gap-2 rounded-2xl bg-white p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] opacity-0 transform"
          style={{ animation: "fadeUp 650ms ease-out 460ms forwards" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 flex-1 gap-2 w-full">
            <label className="flex cursor-pointer items-center gap-3.5 rounded-xl px-4 py-2.5 transition hover:bg-gray-50 group border-b md:border-b-0 md:border-r border-gray-100">
              <Calendar size={20} className="text-gray-400 transition-colors group-hover:text-emerald-700" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">Tanggal Mulai</p>
                <input
                  type="date"
                  className="w-full cursor-pointer bg-transparent text-sm font-bold text-gray-800 outline-none mt-0.5"
                  value={searchData.startDate}
                  onChange={(e) => setSearchData((s) => ({ ...s, startDate: e.target.value }))}
                />
              </div>
            </label>

            <label className="flex cursor-pointer items-center gap-3.5 rounded-xl px-4 py-2.5 transition hover:bg-gray-50 group border-b md:border-b-0 md:border-r border-gray-100">
              <Calendar size={20} className="text-gray-400 transition-colors group-hover:text-emerald-700" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">Tanggal Selesai</p>
                <input
                  type="date"
                  className="w-full cursor-pointer bg-transparent text-sm font-bold text-gray-800 outline-none mt-0.5"
                  value={searchData.endDate}
                  onChange={(e) => setSearchData((s) => ({ ...s, endDate: e.target.value }))}
                />
              </div>
            </label>

            <label className="flex cursor-pointer items-center gap-3.5 rounded-xl px-4 py-2.5 transition hover:bg-gray-50 group">
              <Users size={20} className="text-gray-400 transition-colors group-hover:text-emerald-700" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">Jumlah Orang</p>
                <select
                  className="w-full cursor-pointer bg-transparent text-sm font-bold text-gray-800 outline-none mt-0.5 appearance-none"
                  value={searchData.pax}
                  onChange={(e) => setSearchData((s) => ({ ...s, pax: e.target.value }))}
                >
                  <option>1 Orang</option>
                  <option>2-4 Orang</option>
                  <option>5+ Orang</option>
                </select>
              </div>
              <ChevronDown size={14} className="text-gray-400 ml-auto" />
            </label>
          </div>

          <button
            onClick={onSearch}
            className="w-full lg:w-auto shrink-0 flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: COLORS.forest }}
          >
            <Search size={16} /> Cari Alat
          </button>
        </div>

        {/* Trust Indicators Section */}
        <div
          className="mt-12 flex max-w-4xl flex-wrap gap-x-12 gap-y-4 opacity-0"
          style={{ animation: "fadeUp 650ms ease-out 580ms forwards" }}
        >
          {trust.map((t) => (
            <div key={t.title} className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2 rounded-lg transition-transform duration-300 group-hover:scale-110">
                <t.icon size={22} style={{ color: COLORS.amber }} />
              </div>
              <div>
                <p className="text-xs font-black tracking-wide">{t.title}</p>
                <p className="text-[11px] text-gray-300/80 mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ---------------- Category Card ---------------- */
function CategoryCard({ cat, index, onAdd, onViewDetail }) {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation(); // Mencegah klik menyebar ke card (yang bakal buka modal)
    onAdd(cat);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  return (
    <div
      onClick={() => onViewDetail(cat)}
      className="group relative flex cursor-pointer flex-col rounded-2xl border border-gray-100 bg-white p-4 opacity-0 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
      style={{ animation: `fadeUp 500ms ease-out ${index * 60}ms forwards` }}
    >
      <span
        className="absolute right-3 top-3 z-10 rounded-full px-2.5 py-0.5 text-[10px] font-black text-white tracking-wider uppercase opacity-0 transition-all duration-300 group-hover:opacity-100 scale-90 group-hover:scale-100 shadow-sm"
        style={{ backgroundColor: COLORS.amber }}
      >
        Tersedia
      </span>

      <div className="mb-4 flex h-44 w-full overflow-hidden items-center justify-center rounded-xl transition-all duration-500 bg-gray-50 border border-gray-50">
        <img
          src={cat.img}
          alt={cat.name}
          className="h-full w-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
        />
      </div>

      <div className="flex-1 text-left px-1">
        <h3 className="font-extrabold text-base transition-colors group-hover:text-emerald-800" style={{ color: COLORS.forest }}>{cat.name}</h3>
        <p className="mt-0.5 text-xs text-gray-400 font-medium">{cat.desc}</p>

        <div className="mt-4 pt-3 border-t border-dashed border-gray-100 flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Mulai dari</span>
          <span className="text-sm font-black mt-0.5" style={{ color: COLORS.forest }}>Rp {cat.price} <span className="text-xs font-normal text-gray-400">/ hari</span></span>
        </div>
      </div>

      <div className="mt-4 flex w-full items-center gap-2 pt-1">
        <button
          onClick={(e) => { e.stopPropagation(); onViewDetail(cat); }}
          className="flex flex-1 items-center justify-center gap-1 text-xs font-black transition-all duration-300 rounded-xl py-2 border border-transparent hover:bg-gray-50"
          style={{ color: COLORS.forest }}
        >
          <span>Lihat Produk</span>
          <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <button
          onClick={handleAdd}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 active:scale-75 hover:brightness-110"
          style={{ backgroundColor: justAdded ? COLORS.amber : COLORS.forest }}
        >
          {justAdded ? <BadgeCheck size={16} className="animate-ping" /> : <Plus size={16} />}
        </button>
      </div>
    </div>
  );
}

/* ---------------- Main Beranda Component ---------------- */
export default function Beranda({ addToCart }) {
  const navigate = useNavigate(); // Hook buat navigasi dari react-router-dom
  const [searchData, setSearchData] = useState({ startDate: "", endDate: "", pax: "1 Orang" });

  // State untuk Modal Produk
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    // Arahkan ke halaman alat saat klik cari (bisa dikembangkan lempar query params)
    navigate("/alat");
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes kenBurns {
          from { transform: scale(1) translateX(0); }
          to { transform: scale(1.06) translateX(-0.5%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalPop {
          from { opacity: 0; transform: translate(-50%, -45%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }
      `}</style>

      {/* Konten Utama */}
      <Hero searchData={searchData} setSearchData={setSearchData} onSearch={handleSearch} />

      {/* Section Kategori Populer */}
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 lg:px-8">
        <div>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <p className="mb-1 text-xs font-black uppercase tracking-widest text-amber-500">Jelajahi Perlengkapan</p>
              <h2 className="text-3xl font-black tracking-tight" style={{ color: COLORS.forest }}>Kategori Alat Populer</h2>
            </div>
            {/* Tombol Lihat Semua Alat -> routing ke /alat */}
            <button
              onClick={() => navigate("/alat")}
              className="group flex w-fit items-center gap-2 rounded-xl border px-6 py-3 text-sm font-black transition-all duration-300 hover:bg-zinc-50 hover:shadow-md"
              style={{ borderColor: `${COLORS.forest}25`, color: COLORS.forest }}
            >
              <span>Lihat Semua Alat</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5 text-amber-500" />
            </button>
          </div>

          {/* Grid List Product yang lebih banyak */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                index={i}
                onAdd={addToCart}
                onViewDetail={openProductDetail}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Detail Produk */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addToCart}
      />
    </div>
  );
}