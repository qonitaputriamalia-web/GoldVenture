import "react";
const Hero = () => (
    <section data-reveal id="beranda" class="hero-bg relative min-h-screen overflow-hidden pt-10 text-white">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(215,164,65,0.22),transparent_34%)]">
        </div>
        <div class="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#fbfaf6] via-[#fbfaf6]/45 to-transparent">
        </div>
        <div
            class="absolute inset-x-0 bottom-24 h-40 bg-gradient-to-t from-transparent via-forest/18 to-transparent blur-2xl">
        </div>
        <div
            class="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-28 pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pt-28">
            <div>
                <h1
                    class="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-white md:text-7xl lg:text-[6.4rem]">
                    Sewa alat hiking <span
                        class="bg-gradient-to-r from-gold via-[#ffe3a0] to-white bg-clip-text text-transparent">tanpa
                        ribet</span>, siap ambil hari ini.
                </h1>
                <p class="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                    Cari gear, pilih tanggal, ambil di basecamp/store terdekat. Semua alat dicek, dibersihkan, dan siap
                    dipakai
                    sebelum trip.
                </p>

                <div class="mt-9 flex flex-col gap-4 sm:flex-row">
                    <a href="#search"
                        class="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-black text-forest shadow-2xl shadow-gold/25 transition hover:-translate-y-1 hover:bg-[#e7b858]">
                        Cek gear tersedia <svg
                            class="size-5 inline-flex items-center justify-center leading-none icon-shadcn"
                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#planner"
                        class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white hover:text-forest">
                        Lihat paket hemat <svg
                            class="size-5 inline-flex items-center justify-center leading-none icon-shadcn"
                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="hidden lg:block lg:justify-self-end lg:self-center">
                <div class="absolute -left-20 top-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl"></div>
                <div
                    class="relative rounded-[2.5rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
                    <div id="heroCarousel"
                        class="relative overflow-hidden rounded-[2rem] bg-white text-slate-950 shadow-premium"
                        aria-label="Carousel rekomendasi paket hiking">
                        <div id="heroCarouselTrack" class="hero-carousel-track">
                            <article class="hero-slide is-active" data-title="Rinjani 3D2N">
                                <div class="relative h-[30rem] overflow-hidden">
                                    <img class="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=92"
                                        alt="Pegunungan Rinjani cinematic" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-forest via-forest/25 to-transparent">
                                    </div>
                                    <div
                                        class="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-forest backdrop-blur-xl">
                                        Trip Planner</div>
                                    <div class="absolute bottom-6 left-6 right-6 text-white">
                                        <p class="text-sm font-bold text-white/70">Rekomendasi paket</p>
                                        <h3 class="mt-1 text-4xl font-black tracking-tight">Rinjani 3D2N</h3>
                                        <div class="mt-5 grid grid-cols-3 gap-3">
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Cuaca</p>
                                                <p class="mt-1 text-xl font-black">18°C</p>
                                            </div>
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Estimasi</p>
                                                <p class="mt-1 text-xl font-black">Rp449k</p>
                                            </div>
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Gear</p>
                                                <p class="mt-1 text-xl font-black">12 item</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-3 gap-3 p-5">
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m3 20 9-16 9 16Z" />
                                            <path d="m12 4 4 16" />
                                            <path d="m12 4-4 16" />
                                            <path d="M8 20h8" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Tenda</p>
                                    </div>
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M8 7V6a4 4 0 0 1 8 0v1" />
                                            <path d="M6 7h12a2 2 0 0 1 2 2v13H4V9a2 2 0 0 1 2-2Z" />
                                            <path d="M8 13h8" />
                                            <path d="M9 17h6" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Carrier</p>
                                    </div>
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path
                                                d="M15 14c.2-1 .7-1.7 1.4-2.5A5 5 0 1 0 7.6 11.5c.7.8 1.2 1.5 1.4 2.5" />
                                            <path d="M9 18h6" />
                                            <path d="M10 22h4" />
                                            <path d="M10 14h4" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Headlamp</p>
                                    </div>
                                </div>
                            </article>

                            <article class="hero-slide" data-title="Prau Sunrise 2D1N">
                                <div class="relative h-[30rem] overflow-hidden">
                                    <img class="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=92"
                                        alt="Sunrise camping di gunung" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent">
                                    </div>
                                    <div
                                        class="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-forest backdrop-blur-xl">
                                        Paket Pemula</div>
                                    <div class="absolute bottom-6 left-6 right-6 text-white">
                                        <p class="text-sm font-bold text-white/70">Weekend ringan</p>
                                        <h3 class="mt-1 text-4xl font-black tracking-tight">Prau Sunrise 2D1N</h3>
                                        <div class="mt-5 grid grid-cols-3 gap-3">
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Cuaca</p>
                                                <p class="mt-1 text-xl font-black">15°C</p>
                                            </div>
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Estimasi</p>
                                                <p class="mt-1 text-xl font-black">Rp189k</p>
                                            </div>
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Gear</p>
                                                <p class="mt-1 text-xl font-black">8 item</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-3 gap-3 p-5">
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m3 20 9-16 9 16Z" />
                                            <path d="m12 4 4 16" />
                                            <path d="m12 4-4 16" />
                                            <path d="M8 20h8" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Tenda 2P</p>
                                    </div>
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="4" />
                                            <path d="M12 2v2" />
                                            <path d="M12 20v2" />
                                            <path d="m4.93 4.93 1.41 1.41" />
                                            <path d="m17.66 17.66 1.41 1.41" />
                                            <path d="M2 12h2" />
                                            <path d="M20 12h2" />
                                            <path d="m6.34 17.66-1.41 1.41" />
                                            <path d="m19.07 4.93-1.41 1.41" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Sleeping</p>
                                    </div>
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M10 2v2" />
                                            <path d="M14 2v2" />
                                            <path d="M16 8H4v5a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4Z" />
                                            <path d="M16 9h2a3 3 0 0 1 0 6h-2" />
                                            <path d="M4 22h14" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Cooking</p>
                                    </div>
                                </div>
                            </article>

                            <article class="hero-slide" data-title="Merbabu Family Camp">
                                <div class="relative h-[30rem] overflow-hidden">
                                    <img class="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1400&q=92"
                                        alt="Camping keluarga outdoor" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-forest via-forest/28 to-transparent">
                                    </div>
                                    <div
                                        class="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-forest backdrop-blur-xl">
                                        Family Camp</div>
                                    <div class="absolute bottom-6 left-6 right-6 text-white">
                                        <p class="text-sm font-bold text-white/70">Grup nyaman</p>
                                        <h3 class="mt-1 text-4xl font-black tracking-tight">Merbabu Family Camp</h3>
                                        <div class="mt-5 grid grid-cols-3 gap-3">
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Cuaca</p>
                                                <p class="mt-1 text-xl font-black">20°C</p>
                                            </div>
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Estimasi</p>
                                                <p class="mt-1 text-xl font-black">Rp699k</p>
                                            </div>
                                            <div class="rounded-2xl bg-white/16 p-3 backdrop-blur-xl">
                                                <p class="text-xs font-bold text-white/65">Gear</p>
                                                <p class="mt-1 text-xl font-black">16 item</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-3 gap-3 p-5">
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="4" y="4" width="16" height="16" rx="2" />
                                            <path d="M8 8h8" />
                                            <path d="M8 12h8" />
                                            <path d="M8 16h5" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Tenda Grup</p>
                                    </div>
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M12 3l1.9 5.7L20 12l-6.1 3.3L12 21l-1.9-5.7L4 12l6.1-3.3L12 3z" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Lantern</p>
                                    </div>
                                    <div class="rounded-2xl bg-cream p-4"><svg
                                            class="size-5 text-gold inline-flex items-center justify-center leading-none icon-shadcn"
                                            aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="5" y="8" width="14" height="9" rx="2" />
                                            <path d="M7 17v3" />
                                            <path d="M17 17v3" />
                                            <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                                        </svg>
                                        <p class="mt-3 text-sm font-black text-forest">Camp Set</p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <button type="button" id="carouselPrev"
                            class="absolute right-20 top-6 grid size-10 place-items-center rounded-full bg-white/88 text-forest shadow-xl backdrop-blur transition hover:scale-105 hover:bg-gold"
                            aria-label="Slide sebelumnya"><span
                                class="size-5 inline-flex items-center justify-center leading-none"
                                aria-hidden="true">•</span></button>
                        <button type="button" id="carouselNext"
                            class="absolute right-6 top-6 grid size-10 place-items-center rounded-full bg-white/88 text-forest shadow-xl backdrop-blur transition hover:scale-105 hover:bg-gold"
                            aria-label="Slide berikutnya"><span
                                class="size-5 inline-flex items-center justify-center leading-none"
                                aria-hidden="true">•</span></button>
                        <div id="carouselDots"
                            class="absolute bottom-[7.35rem] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-forest/30 px-3 py-2 backdrop-blur"
                            aria-label="Navigasi slide">
                            <button type="button"
                                class="carousel-dot is-active h-2 w-2 rounded-full bg-white/75 ring-1 ring-white/30 transition-all"
                                aria-label="Buka slide 1"></button>
                            <button type="button"
                                class="carousel-dot h-2 w-2 rounded-full bg-white/75 ring-1 ring-white/30 transition-all"
                                aria-label="Buka slide 2"></button>
                            <button type="button"
                                class="carousel-dot h-2 w-2 rounded-full bg-white/75 ring-1 ring-white/30 transition-all"
                                aria-label="Buka slide 3"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero;
