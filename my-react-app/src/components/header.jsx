import "react";


const Header = () => (
    <header class="fixed inset-x-20 top-2 z-50 rounded-full border-transparent glass-nav">
        <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
            <a href="#" class="group flex items-center gap-3 -translate-x-10" aria-label="GoldVenture Home">
                <div
                    class="grid size-35 place-items-center rounded-2xl transition group-hover:scale-105 translate-x-7 -translate-y-1">
                    <img src="src/assets/logo-GoldVenture.png" alt="" />
                </div>
                <div>
                    <p id="logoText" class="text-xl font-black tracking-tight logo-text">GoldVenture</p>
                    <p id="logoSubText" class="-mt-1 text-[11px] font-semibold uppercase tracking-[0.24em]">Outdoor
                        Rental</p>
                </div>
            </a>

            <div id="desktopMenu"
                class="hidden -translate-x-4 items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm lg:flex">
                <a href="#beranda"
                    class="nav-link rounded-full bg-forest px-4 py-2 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-forest hover:text-white">Beranda</a>
                <a href="#alat"
                    class="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Alat</a>
                <a href="#paket"
                    class="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Paket</a>
                <a href="#cara-sewa"
                    class="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Cara
                    Sewa</a>
                <a href="#planner"
                    class="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Trip
                    Planner</a>
                <a href="#tentang"
                    class="nav-link rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-600 transition hover:bg-slate-100 hover:text-forest">Tentang
                    Kami</a>
            </div>

            <div class="hidden items-center gap-3 md:flex">
                <button data-action="Login"
                    class="action-btn rounded-full px-4 py-2.5 text-sm font-bold text-forest transition hover:bg-white">Login</button>
                <button data-action="Register"
                    class="action-btn rounded-full bg-gold px-5 py-2.5 text-sm font-black text-forest shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-[#e2b454]">Register</button>
            </div>

            <button id="menuToggle"
                class="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-forest transition hover:bg-cream lg:hidden"
                aria-label="Buka menu" aria-expanded="false">
                <svg class="size-5 inline-flex items-center justify-center leading-none icon-shadcn" aria-hidden="true"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                </svg>
            </button>
        </nav>
        <div id="mobileMenu"
            class="mobile-panel border-t border-slate-200 bg-white/95 px-6 shadow-xl backdrop-blur-xl lg:hidden">
            <div class="mx-auto flex max-w-7xl flex-col gap-2 py-5">
                <a href="#beranda" class="mobile-link rounded-2xl bg-forest px-4 py-3 font-bold text-white">Beranda</a>
                <a href="#alat"
                    class="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Alat</a>
                <a href="#paket"
                    class="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Paket</a>
                <a href="#cara-sewa"
                    class="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Cara
                    Sewa</a>
                <a href="#planner"
                    class="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Trip
                    Planner</a>
                <a href="#tentang"
                    class="mobile-link rounded-2xl px-4 py-3 font-bold text-slate-600 hover:bg-cream">Tentang
                    Kami</a>
            </div>
        </div>
    </header>
)

export default Header;