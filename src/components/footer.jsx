import 'react';
import logo from "../assets/logo-GoldVent.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function FooterSection() {
  const socialMedias = [
    { name: 'Instagram', icon: <FaInstagram />, link: '#' },
    { name: 'Twitter', icon: <FaTwitter />, link: '#' },
    { name: 'Facebook', icon: <FaFacebookF />, link: '#' },
  ];
  return (
    <footer className="bg-[#131710] text-[#f4f6f0] pt-16 pb-8 px-6 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Top Footer: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Kolom 1: Brand & About Us */}
          <div className="lg:col-span-1 flex flex-col justify-start">
            {/* Logo & Brand Name Container */}
            <div className="flex items-center gap-4 mb-4 -translate-y-9">
              <img
                src={logo}
                alt="GoldVenture Logo"
                className="h-19 w-19 object-contain shrink-0"
              />
              <div>
                <h2 className="text-xl font-serif tracking-wide text-white">GOLDVENTURE</h2>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] block mt-1">
                  Outdoor Rental
                </span>
              </div>
            </div>

            {/* About Us Singkat */}
            <p className="text-sm text-[#a3b19b] leading-relaxed font-light -translate-y-10 translate-x-5">
              Lebih dari sekadar penyewaan alat. Kami adalah mitra perjalanan Anda,
              menyediakan perlengkapan pendakian premium yang telah dikurasi untuk
              memastikan keamanan dan kenyamanan di setiap langkah petualangan alam liar Anda.
            </p>
          </div>
          {/* Kolom 2: Tautan Cepat */}

          <div className="translate-x-20">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-6">Navigasi</h3>
            <ul className="space-y-4">
              {['Beranda', 'Katalog Paket', 'Cara Sewa', 'Trip Planner', 'Tentang Kami'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#a3b19b] hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37] opacity-0 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan Pelanggan */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-6">Bantuan</h3>
            <ul className="space-y-4">
              {['Syarat & Ketentuan', 'Kebijakan Privasi', 'FAQ', 'Panduan Ukuran Sepatu'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#a3b19b] hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak & Info */}
          <div className="-translate-x-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-6 ">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-[#a3b19b]">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-light">Jl. Merbabu No. 99, Jakarta<br />Indonesia, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-light">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-light">hello@goldventure.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer: Copyright & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between ">
          <p className="text-xs text-[#a3b19b] font-light">
            &copy; {new Date().getFullYear()} Goldventure Outdoor Rental. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialMedias.map((social) => (
              <a
                key={social.name}
                href={social.link}
                aria-label={social.name}
                className="text-[#a3b19b] hover:text-[#d4af37] transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all duration-300 text-sm">
                  {/* 3. Render icon dari object di sini */}
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}