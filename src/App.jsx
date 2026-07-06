import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";

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

// Komponen Keranjang & Toast
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";

function App() {
  const [user, setUser] = useState(null);

  // ==========================================
  // STATE & LOGIKA KERANJANG
  // ==========================================
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [bump, setBump] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const addToCart = useCallback((cat) => {
    setCartItems((prev) => {
      const existing = prev.find((it) => it.id === cat.id);
      if (existing) {
        return prev.map((it) => (it.id === cat.id ? { ...it, qty: it.qty + 1 } : it));
      }
      return [...prev, { ...cat, qty: 1 }];
    });

    // Animasi bump di icon keranjang
    setBump(true);
    setTimeout(() => setBump(false), 450);

    // Notifikasi toast
    clearTimeout(toastTimer.current);
    setToast({ key: Date.now(), name: cat.name });
    toastTimer.current = setTimeout(() => setToast(null), 2700);
  }, []);

  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      qty <= 0 ? prev.filter((it) => it.id !== id) : prev.map((it) => (it.id === id ? { ...it, qty } : it))
    );
  };

  const removeItem = (id) => setCartItems((prev) => prev.filter((it) => it.id !== id));

  // Hitung total item di keranjang
  const cartCount = cartItems.reduce((n, it) => n + it.qty, 0);

  // Bersihkan timer toast saat unmount
  useEffect(() => () => clearTimeout(toastTimer.current), []);

  // ==========================================
  // LOGIN
  // ==========================================
  useEffect(() => {
    const saved = localStorage.getItem("goldventure_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <Router>
      <Routes>
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
        <Route
          element={
            <MainLayout
              user={user}
              setUser={setUser}
              cartCount={cartCount}
              onCartClick={() => setCartOpen(true)}
              bump={bump}
            />
          }
        >
          <Route path="/beranda" element={<Beranda addToCart={addToCart} />} />
          <Route path="/alat" element={<Alat addToCart={addToCart} />} />
          <Route path="/paket" element={<Paket addToCart={addToCart} />} />
          <Route path="/cara-sewa" element={<CaraSewa />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/kondisi-alat" element={<KondisiAlat />} />
        </Route>

        <Route path="*" element={<Navigate to={user ? "/beranda" : "/"} replace />} />
      </Routes>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        updateQty={updateQty}
        removeItem={removeItem}
      />
      <Toast toast={toast} />
    </Router>
  );
}

export default App;