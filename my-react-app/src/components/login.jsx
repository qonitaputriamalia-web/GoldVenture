import  "react";
import { X } from "lucide-react";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md">

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1410] text-white shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 hover:bg-white/20"
        >
          <X size={18} />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* Left */}
          <div className="relative hidden lg:flex flex-col justify-center bg-gradient-to-br from-forest to-[#0b1410]  p-12">


            <h2 className="mt-6 font-poppins text-5xl font-extrabold">
              Mau Hiking ?
              <span className="block bg-gradient-to-r from-gold via-[#ffe3a0] to-white bg-clip-text text-transparent">
                Sewa Aja
              </span>
            </h2>

            <p className="mt-5 max-w-md text-white/70">
              Hemat biaya, tanpa ribet, siap ambil kapan saja
            </p>
          </div>

          {/* Right */}
          <div className="p-10">

            <h3 className="font-poppins text-3xl font-bold">
              Masuk
            </h3>

            <p className="mt-2 text-white/60">
              Selamat datang kembali.
            </p>

            <div className="mt-8 space-y-4">

              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-slate-900">
                Masuk dengan Google
              </button>

              <div className="relative py-2">
                <div className="border-t border-white/10" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 bg-[#0b1410] px-4 text-sm text-white/40">
                  atau
                </span>
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none"
              />

              <button className="w-full rounded-xl bg-gold py-4 font-bold text-forest">
                Masuk
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginModal;