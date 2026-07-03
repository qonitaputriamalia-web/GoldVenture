import { useState } from "react";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validate = () => {
    if (mode === "register" && form.name.trim().length < 3) {
      return "Nama minimal 3 karakter.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Format email tidak valid.";
    }
    if (form.password.length < 6) {
      return "Password minimal 6 karakter.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const user = {
        name: mode === "register" ? form.name : form.email.split("@")[0],
        email: form.email,
      };

      localStorage.setItem("goldventure_user", JSON.stringify(user));

      onLoginSuccess?.(user);
      onClose();
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError("Gagal masuk. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1410] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
        >
          <X size={18} />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Left */}
          <div className="relative hidden lg:flex flex-col justify-center bg-gradient-to-br from-forest to-[#0b1410] p-12">
            <h2 className="mt-6 font-poppins text-5xl font-extrabold">
              Mau Hiking?
              <span className="block bg-gradient-to-r from-gold via-[#ffe3a0] to-white bg-clip-text text-transparent">
                Sewa Aja
              </span>
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              Hemat biaya, tanpa ribet, siap ambil kapan saja.
            </p>
          </div>

          {/* Right */}
          <div className="p-10">
            {/* Tab Switch */}
            <div className="flex gap-2 rounded-full bg-white/5 p-1">
              <button
                type="button"
                onClick={() => { setMode("login"); setError(""); }}
                className={`flex-1 rounded-full py-2 text-sm font-bold transition ${
                  mode === "login"
                    ? "bg-gold text-forest"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Masuk
              </button>
              <button
                type="button"
                onClick={() => { setMode("register"); setError(""); }}
                className={`flex-1 rounded-full py-2 text-sm font-bold transition ${
                  mode === "register"
                    ? "bg-gold text-forest"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Daftar
              </button>
            </div>

            <h3 className="mt-6 font-poppins text-3xl font-bold">
              {mode === "login" ? "Selamat Datang" : "Buat Akun Baru"}
            </h3>
            <p className="mt-2 text-white/60">
              {mode === "login"
                ? "Masuk untuk melanjutkan penyewaan."
                : "Gabung dan mulai petualanganmu."}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-slate-900 transition hover:bg-white/90"
              >
                Masuk dengan Google
              </button>

              <div className="relative py-2">
                <div className="border-t border-white/10" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 bg-[#0b1410] px-4 text-sm text-white/40">
                  atau
                </span>
              </div>

              {mode === "register" && (
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-gold"
                />
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-gold"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 pr-12 outline-none transition focus:border-gold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {error && (
                <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-4 font-bold text-forest transition hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Memproses...
                  </>
                ) : mode === "login" ? (
                  "Masuk"
                ) : (
                  "Daftar"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;