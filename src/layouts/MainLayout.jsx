import { Outlet, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-GoldVenture.png";

const MainLayout = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("goldventure_user");
    setUser(null);
    navigate("/");
  };

  // Fungsi untuk styling NavLink yang aktif
  const navClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "text-forest border-b-2 border-forest" // Gaya saat halaman aktif
        : "text-slate-600 hover:bg-slate-100 hover:text-forest rounded-full"
    }`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Lengkap */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="GoldVenture Logo" className="w-32 object-contain" />
          </div>

          {/* Menu Navigasi Lengkap */}
          <div className="hidden items-center gap-2 lg:flex">
            <NavLink to="/beranda" className={navClass}>Beranda</NavLink>
            <NavLink to="/alat" className={navClass}>Alat</NavLink>
            <NavLink to="/paket" className={navClass}>Paket</NavLink>
            <NavLink to="/cara-sewa" className={navClass}>Cara Sewa</NavLink>
            <NavLink to="/trip-planner" className={navClass}>Trip Planner</NavLink>
            <NavLink to="/tentang-kami" className={navClass}>Tentang Kami</NavLink>
            <NavLink to="/kondisi-alat" className={navClass}>Kondisi Alat</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-700">Hi, {user?.name || 'Explorer'}</span>
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Konten 7 Halaman akan dirender di sini */}
      <main className="mx-auto max-w-7xl p-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;