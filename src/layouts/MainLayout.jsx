import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { 
  Search, ShoppingCart, LogOut, MapPin, ChevronDown, 
  Phone, Mail, Check, Menu, X 
} from "lucide-react";
import logo from "../assets/logo-GoldVenture.png";
import AuthModal from "../components/AuthModal";

const COLORS = {
  forest: "#133E2B",
  amber: "#F5A524",
};

const MainLayout = ({ user, setUser, cartCount = 0, onCartClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // State untuk Auth Modal
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  // State untuk Dropdown Lokasi & Mobile Menu
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Bekasi, Indonesia");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State untuk efek scroll pada header
  const [isScrolled, setIsScrolled] = useState(false);

  const locations = [
    "Jakarta, Indonesia",
    "Bekasi, Indonesia",
    "Bogor, Indonesia",
    "Bandung, Indonesia",
    "Yogyakarta, Indonesia",
  ];

  // Efek pantau scroll untuk header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("goldventure_user");
    setUser(null);
    navigate("/");
  };

  const navClass = ({ isActive }) =>
    `group relative px-2 py-2 text-sm font-bold transition-all duration-300 ${
      isActive ? "text-emerald-800" : "text-slate-500 hover:text-emerald-700"
    }`;

  const activePaths = ["/beranda", "/alat", "/paket"];
  const isInteractivePage = activePaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* --- Top Bar Interaktif --- */}
      <div className="relative z-[60] border-b border-white/10 text-xs text-white/90 shadow-sm transition-colors" style={{ backgroundColor: COLORS.forest }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 lg:px-8">

          {/* Dropdown Lokasi */}
          <div className="relative">
            <div 
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className={`group flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-white/10 hover:text-white ${isLocationOpen ? "bg-white/10 text-white" : ""}`}
            >
              <MapPin size={14} className={`transition-transform duration-300 group-hover:scale-110 ${isLocationOpen ? "text-amber-400" : "text-orange-400 group-hover:-translate-y-0.5"}`} />
              <span className="tracking-wide hidden sm:block">
                Kirim ke: <strong className={`font-bold transition-colors duration-300 ${isLocationOpen ? "text-amber-400" : "text-white group-hover:text-orange-400"}`}>{selectedLocation}</strong>
              </span>
              <span className="tracking-wide sm:hidden font-bold text-orange-400">{selectedLocation.split(',')[0]}</span>
              <ChevronDown size={14} className={`text-white/60 transition-transform duration-300 group-hover:text-orange-400 ${isLocationOpen ? "rotate-180 text-amber-400" : ""}`} />
            </div>

            {isLocationOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLocationOpen(false)} />
                <div className="absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-gray-50 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400">Pilih Wilayah</div>
                  <div className="flex flex-col py-1">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => { setSelectedLocation(loc); setIsLocationOpen(false); }}
                        className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                      >
                        {loc}
                        {selectedLocation === loc && <Check size={16} className="text-orange-500" />}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Kontak Links */}
          <div className="flex items-center gap-2 md:gap-4">
            <a href="tel:+6281234567890" className="group flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-white/10 hover:text-orange-400">
              <Phone size={13} className="text-white/60 transition-transform duration-300 group-hover:scale-110 group-hover:text-orange-400" />
              <span className="font-medium tracking-wide hidden sm:block">0812-3456-7890</span>
            </a>
            <a href="mailto:support@goldvent.id" className="group hidden md:flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-white/10 hover:text-orange-400">
              <Mail size={13} className="text-white/60 transition-transform duration-300 group-hover:scale-110 group-hover:text-orange-400" />
              <span className="font-medium tracking-wide">support@goldvent.id</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- Main Header Sticky --- */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md border-transparent" : "bg-white border-b border-gray-100 shadow-none"}`}>
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
          
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 -ml-2 text-slate-600 hover:text-emerald-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="cursor-pointer transition-transform hover:scale-105 active:scale-95" onClick={() => navigate('/beranda')}>
              <img src={logo} alt="GoldVenture Logo" className="w-28 sm:w-32 object-contain" />
            </div>
          </div>

          {/* Desktop Navigasi */}
          <div className="hidden lg:flex items-center gap-8">
            {["Alat", "Paket", "Cara Sewa", "Trip Planner", "Tentang Kami"].map((item) => {
              const path = `/${item.toLowerCase().replace(" ", "-")}`;
              return (
                <NavLink key={item} to={path} className={navClass}>
                  {({ isActive }) => (
                    <>
                      {item}
                      <span className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-amber-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Search & Cart (Animasi Halus) */}
            <div className={`flex items-center gap-1 transition-all duration-500 ease-out overflow-hidden ${isInteractivePage ? "w-20 sm:w-24 opacity-100 translate-x-0" : "w-0 opacity-0 translate-x-4 pointer-events-none"}`}>
              <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-500 transition-all duration-300 hover:bg-slate-100 hover:text-emerald-800 hover:scale-110 active:scale-95">
                <Search size={18} />
              </button>
              <button
                onClick={onCartClick}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-500 transition-all duration-300 hover:bg-slate-100 hover:text-emerald-800 hover:scale-110 active:scale-95"
              >
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shadow-sm ring-2 ring-white animate-in zoom-in">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* User Area */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              {user ? (
                <>
                  <span className="text-sm font-bold text-slate-700 hidden md:block">
                    Hi, <span className="text-emerald-800">{user.name.split(' ')[0]}</span>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="group flex h-10 w-10 sm:h-auto sm:w-auto items-center justify-center rounded-full bg-red-50 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-md hover:shadow-red-500/20 active:scale-95 sm:px-4 sm:py-2 sm:rounded-xl"
                    title="Logout"
                  >
                    <LogOut size={16} className="sm:mr-2 transition-transform group-hover:-translate-x-0.5" />
                    <span className="hidden text-sm font-bold sm:block">Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => { setAuthMode("login"); setIsAuthOpen(true); }}
                    className="text-sm font-bold text-slate-500 hover:text-emerald-800 transition-colors hidden sm:block px-2"
                  >
                    Masuk
                  </button>
                  <button
                    onClick={() => { setAuthMode("register"); setIsAuthOpen(true); }}
                    className="rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95 active:translate-y-0 hover:-translate-y-0.5"
                  >
                    Daftar
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* --- Mobile Menu Dropdown --- */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {["Alat", "Paket", "Cara Sewa", "Trip Planner", "Tentang Kami"].map((item) => (
                <NavLink 
                  key={item} 
                  to={`/${item.toLowerCase().replace(" ", "-")}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `px-4 py-3 rounded-xl font-bold transition-colors ${isActive ? "bg-emerald-50 text-emerald-800" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* --- Konten Halaman --- */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* --- Auth Modal --- */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onSuccess={(loggedInUser) => {
          setUser(loggedInUser);
          setIsAuthOpen(false);
        }}
      />
    </div>
  );
};

export default MainLayout;