import logo from "../assets/logo-GoldVenture.png";

// 1. Tambahkan prop isLoggedIn di sini
const Header = ({ onLoginOpen, onRegisterOpen, isLoggedIn = false }) => {
  return (
    <header className="fixed inset-x-20 top-2 z-50 rounded-full border-transparent glass-nav">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo - Tetap Selalu Muncul */}
        <a
          href="#"
          className="group flex items-center gap-3 -translate-x-10"
          aria-label="GoldVenture Home"
        >
          <div className="grid place-items-center rounded-2xl transition group-hover:scale-105 translate-x-7 -translate-y-1">
            <img
              src={logo}
              alt="GoldVenture Logo"
              className="w-32 object-contain"
            />
          </div>

          <div>
            <p className="text-xl font-black tracking-tight logo-text">
              GoldVenture
            </p>
            <p className="-mt-1 text-[11px] font-semibold uppercase tracking-[0.24em]">
              Outdoor Rental
            </p>
          </div>
        </a>

        {/* Desktop Menu - Hanya Muncul Saat isLoggedIn bernilai true */}
        {isLoggedIn && (
          <div className="hidden -translate-x-4 items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm lg:flex">
            <a
              href="#alat"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-forest"
            >
              Alat
            </a>
            <a
              href="#paket"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-forest"
            >
              Paket
            </a>
            <a
              href="#cara-sewa"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-forest"
            >
              Cara Sewa
            </a>
            <a
              href="#planner"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-forest"
            >
              Trip Planner
            </a>
            <a
              href="#tentang"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-forest"
            >
              Tentang Kami
            </a>
          </div>
        )}

        {/* Auth Button - Berubah Tergantung Status Login */}
        <div className="hidden items-center gap-3 md:flex">
          {!isLoggedIn ? (
            // Jika BELUM login: Munculkan Login & Register
            <>
              <button
                onClick={onLoginOpen}
                className="rounded-full px-4 py-2.5 text-sm font-bold text-forest transition hover:bg-white"
              >
                Login
              </button>
              <button
                onClick={onRegisterOpen}
                className="rounded-full bg-gold px-5 py-2.5 text-sm font-black text-forest shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-[#e2b454]"
              >
                Register
              </button>
            </>
          ) : (
            // Jika SUDAH login: Munculkan tombol lain (Contoh: Logout atau Profil)
            <button
              onClick={() => console.log("Fungsi logout dipanggil")}
              className="rounded-full px-4 py-2.5 text-sm font-bold text-red-500 transition hover:bg-red-50"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Button - Disembunyikan jika belum login karena tidak ada menu yang perlu dibuka */}
        {isLoggedIn && (
          <button
            className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-forest transition hover:bg-cream lg:hidden"
            aria-label="Buka Menu"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;