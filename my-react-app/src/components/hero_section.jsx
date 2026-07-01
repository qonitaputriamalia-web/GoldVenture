import "react";
const slideData = [
    {
        id: 1,
        title: "Rinjani 3D2N",
        badge: "Planner",
        subtitle: "Rekomendasi paket",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=92",
        weather: "18°C",
        price: "Rp449k",
        gear: "12 item",
    },
    {
        id: 2,
        title: "Prau Sunrise 2D1N",
        badge: "Pemula",
        subtitle: "Weekend ringan",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=92",
        weather: "15°C",
        price: "Rp189k",
        gear: "8 item",
    },
    {
        id: 3,
        title: "Merbabu Camp",
        badge: "Keluarga",
        subtitle: "Grup nyaman",
        image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1400&q=92",
        weather: "20°C",
        price: "Rp699k",
        gear: "16 item",
    },
    {
        id: 4,
        title: "Bromo Jeep",
        badge: "Eksklusif",
        subtitle: "Sunrise epic",
        image: "https://images.unsplash.com/photo-1521092593988-d2188e25a77d?auto=format&fit=crop&w=1400&q=92",
        weather: "10°C",
        price: "Rp550k",
        gear: "10 item",
    },
    {
        id: 5,
        title: "Semeru Summit",
        badge: "Pro",
        subtitle: "Tantangan sejati",
        image: "https://images.unsplash.com/photo-1529989400578-857960dd64f4?auto=format&fit=crop&w=1400&q=92",
        weather: "12°C",
        price: "Rp899k",
        gear: "18 item",
    },
    {
        id: 6,
        title: "Pangrango Forest",
        badge: "Santai",
        subtitle: "Hutan tropis",
        image: "https://images.unsplash.com/photo-1735607439709-ee36d29a3f14?auto=format&fit=crop&w=1400&q=92",
        weather: "16°C",
        price: "Rp350k",
        gear: "14 item",
    }
];
const infiniteSlides = [...slideData, ...slideData, ...slideData];

const Hero = () => {
    return (
        <section data-reveal id="beranda" className="hero-bg relative min-h-screen overflow-hidden pt-10 text-white">

            <style>{`
                @keyframes scroll-marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: scroll-marquee 45s linear infinite;
                }
            `}</style>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(215,164,65,0.22),transparent_60%)]"></div>
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#fbfaf6] via-[#fbfaf6]/45 to-transparent"></div>

            {/* TEXT */}
            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-30 pb-12">
                <div className="text-center flex flex-col items-center">
                    <h1 className="font-poppins max-w-4xl font-black leading-[0.94] tracking-[-0.05em] text-white md:text-7xl lg:text-[6.4rem]">
                        Sewa Alat Hiking <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-gold via-[#ffe3a0] to-white bg-clip-text text-transparent"> Tanpa Ribet</span>
                    </h1>
                    <p className="font-poppins font-medium italic mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                        Booking online, ambil hari ini, langsung berangkat
                    </p>

                </div>
            </div>

            {/* CAROUSEL */}
            <div className="relative w-full overflow-hidden pb-20">
                <div className="flex w-max animate-marquee">
                    {infiniteSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 w-[75vw] sm:w-[20rem] md:w-[20rem] px-2 md:px-3">
                            <article className="relative h-[16rem] md:h-[18rem] w-full overflow-hidden rounded-[1.5rem] shadow-lg">

                                <img className="absolute inset-0 h-full w-full object-cover pointer-events-none" src={slide.image} alt={slide.title} />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent"></div>

                                <div className="absolute top-4 left-4 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] md:text-xs font-bold text-white border border-white/20">
                                    {slide.badge}
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                                    <p className="text-[10px] md:text-xs font-semibold text-white/80">{slide.subtitle}</p>
                                    <h3 className="mt-0.5 text-2xl md:text-xl font-black tracking-tight text-white">{slide.title}</h3>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <div className="flex-1 min-w-[50px] rounded-lg bg-[#454955]/70 backdrop-blur-md px-2 py-1.5 border border-white/5">
                                            <p className="text-[9px] md:text-[10px] font-medium text-white/70">Cuaca</p>
                                            <p className="mt-0.5 text-sm md:text-base font-bold">{slide.weather}</p>
                                        </div>
                                        <div className="flex-1 min-w-[50px] rounded-lg bg-[#454955]/70 backdrop-blur-md px-2 py-1.5 border border-white/5">
                                            <p className="text-[9px] md:text-[10px] font-medium text-white/70">Estimasi</p>
                                            <p className="mt-0.5 text-sm md:text-base font-bold">{slide.price}</p>
                                        </div>
                                        <div className="flex-1 min-w-[50px] rounded-lg bg-[#454955]/70 backdrop-blur-md px-2 py-1.5 border border-white/5">
                                            <p className="text-[9px] md:text-[10px] font-medium text-white/70">Gear</p>
                                            <p className="mt-0.5 text-sm md:text-base font-bold">{slide.gear}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Hero;