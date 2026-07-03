import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Layouts & Pages
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import Beranda from "./pages/Beranda";
import Alat from "./pages/Alat";
import Paket from "./pages/Paket";
import CaraSewa from "./pages/CaraSewa";
import TripPlanner from "./pages/TripPlanner";
import TentangKami from "./pages/TentangKami";
import KondisiAlat from "./pages/KondisiAlat";

function App() {
  const [user, setUser] = useState(null);

  // Cek sesi login saat web di-refresh
  useEffect(() => {
    const saved = localStorage.getItem("goldventure_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Route Public / Landing Page */}
        <Route 
          path="/" 
          element={
            !user ? (
              <LandingPage setUser={setUser} />
            ) : (
              <Navigate to="/beranda" replace />
            )
          } 
        />

        {/* Route Private (Harus Login) */}
        {user ? (
          <Route element={<MainLayout user={user} setUser={setUser} />}>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/alat" element={<Alat />} />
            <Route path="/paket" element={<Paket />} />
            <Route path="/cara-sewa" element={<CaraSewa />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/kondisi-alat" element={<KondisiAlat />} />
          </Route>
        ) : (
          // Kalau maksa ngetik URL tapi belum login, tendang ke Landing
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;