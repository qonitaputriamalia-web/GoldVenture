import { useState, useEffect } from "react";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";


const AuthModal = ({ isOpen, onClose, onSuccess, initialMode = "login" }) => {
    const [mode, setMode] = useState(initialMode);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
            setForm({ name: "", email: "", password: "" });
            setError("");
        }
    }, [isOpen, initialMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (mode === "register") {
            if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
                setError("Semua field harus diisi!");
                setIsLoading(false);
                alert("Semua field harus diisi!");
                return;
            }
            // ambil data user lama
            const users = JSON.parse(localStorage.getItem("goldventure_users")) || [];

            // cek email sudah ada atau belum
            const emailExist = users.find(
                (user) => user.email === form.email
            );

            if (emailExist) {
                setError("Email sudah terdaftar!");
                alert("Email sudah terdaftar!");
                setIsLoading(false);
                return;
            }

            // simpan user baru

            users.push({
                name: form.name,
                email: form.email,
                password: form.password,
            });

            localStorage.setItem(
                "goldventure_users",
                JSON.stringify(users)
            );

            alert("Registrasi berhasil!");

            setMode("login");
            setForm({
                name: "",
                email: "",
                password: "",
            });

            setIsLoading(false);
            return;
        } else {
            const users =
                JSON.parse(localStorage.getItem("goldventure_users")) || [];

            const user = users.find(
                (u) =>
                    u.email === form.email &&
                    u.password === form.password
            );

            if (!user) {
                setError("Email atau password salah!");
                setIsLoading(false);
                alert("Email atau password salah!");
                return;
            }

            localStorage.setItem(
                "goldventure_user",
                JSON.stringify(user)
            );

            onSuccess(user);

            setIsLoading(false);
            onClose();
        }
    };

    return (
        <div
            className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            <div
                className={`relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-[#0b1410] text-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute right-6 top-6 z-20 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                    <X size={20} />
                </button>

                <div className="grid lg:grid-cols-5 h-[500px]">
                    {/* Left Side - With Background Image */}
                    <div
                        className="hidden lg:flex col-span-2 relative p-10 flex-col justify-end overflow-hidden"
                        style={{
                            backgroundImage: `linear-gradient(to top, rgba(11,20,16,1), rgba(11,20,16,0.4)), url(${"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <h2 className="text-4xl font-extrabold leading-tight z-10">Mau Hiking?<br /><span className="text-amber-400">Sewa Aja</span></h2>
                        <p className="mt-4 text-white/70 z-10 text-sm">Kemudahan akses peralatan outdoor terbaik untuk petualangan Anda.</p>
                    </div>

                    {/* Right Side */}
                    <div className="col-span-3 p-8 lg:p-12 overflow-y-auto">
                        <div className="flex gap-2 rounded-2xl bg-white/5 p-1.5 w-fit mb-8">
                            {["login", "register"].map((m) => (
                                <button
                                    key={m}
                                    type="button"
                                    onClick={() => setMode(m)}
                                    className={`px-8 py-2 rounded-xl text-sm font-bold transition-all ${mode === m ? "bg-amber-500 text-black" : "text-white/50 hover:text-white"}`}
                                >
                                    {m === "login" ? "Masuk" : "Daftar"}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h3 className="text-2xl font-bold">{mode === "login" ? "Selamat Datang" : "Buat Akun Baru"}</h3>

                            {mode === "register" && (
                                <input
                                    type="text"
                                    placeholder="Nama Lengkap"
                                    value={form.name}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-amber-500 outline-none transition"
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            )}

                            <input
                                type="email"
                                placeholder="Email"
                                value={form.email}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-amber-500 outline-none transition"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={form.password}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pr-12 focus:border-amber-500 outline-none transition"
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-white/50">
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <button disabled={isLoading} type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-2">
                                {isLoading ? <Loader2 className="animate-spin" /> : (mode === "login" ? "Masuk" : "Daftar Sekarang")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;