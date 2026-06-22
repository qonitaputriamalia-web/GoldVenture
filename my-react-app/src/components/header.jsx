import "react";

const Header = ({ onOpenLogin, onOpenRegister }) => (
  <header className="fixed inset-x-20 top-2 z-50 rounded-full border-transparent glass-nav">
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <a href="#" className="group flex items-center gap-3 -translate-x-10" aria-label="GoldVenture Home">
        <div className="grid size-35 place-items-center rounded-2xl transition group-hover:scale-105 translate-x-7 -translate-y-1">
          <img src="src/assets/logo-GoldVenture.png" alt="Logo" />
        </div>
        <div>
          <p id="logoText" className="text-xl font-black tracking-tight logo-text">GoldVenture</p>
          <p id="logoSubText" className="-mt-1 text-[11px] font-semibold uppercase tracking-[0.24em]">Outdoor Rental</p>
        </div>
      </a>

      <div id="desktopMenu" className="hidden -translate-x-4 items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm lg:flex">
        <a href="#beranda" className="nav-link rounded-full bg-forest px-4 py-2 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-forest hover:text-white">Beranda</a>
        <a href="#alat" className="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Alat</a>
        <a href="#paket" className="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Paket</a>
        <a href="#cara-sewa" className="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Cara Sewa</a>
        <a href="#planner" className="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Trip Planner</a>
        <a href="#tentang" className="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Tentang Kami</a>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        {/* Pasang onClick untuk Login */}
        <button 
          onClick={onOpenLogin}
          className="action-btn rounded-full px-4 py-2.5 text-sm font-bold text-forest transition hover:bg-white"
        >
          Login
        </button>
        
        {/* Pasang onClick untuk Register */}
        <button 
          onClick={onOpenRegister}
          className="action-btn rounded-full bg-gold px-5 py-2.5 text-sm font-black text-forest shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-[#e2b454]"
        >
          Register
        </button>
      </div>

      <button id="menuToggle" className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-forest transition hover:bg-cream lg:hidden" aria-label="Buka menu" aria-expanded="false">
        <svg className="size-5 inline-flex items-center justify-center leading-none icon-shadcn" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>
    </nav>
    
    <div id="mobileMenu" className="mobile-panel border-t border-slate-200 bg-white/95 px-6 shadow-xl backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 py-5">
        <a href="#beranda" className="mobile-link rounded-2xl bg-forest px-4 py-3 font-bold text-white">Beranda</a>
        <a href="#alat" className="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Alat</a>
        <a href="#paket" className="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Paket</a>
        <a href="#cara-sewa" className="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Cara Sewa</a>
        <a href="#planner" className="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Trip Planner</a>
        <a href="#tentang" className="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Tentang Kami</a>
      </div>
    </div>
  </header>
);

export default Header;