import  "react";
import { X } from "lucide-react";

const Register = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Memastikan z-index pakai kurung siku [999] agar tailwind membacanya dengan benar
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6">
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1410] text-white shadow-2xl flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="grid lg:grid-cols-2 flex-1 h-full overflow-hidden">
          
          {/* Left Section - Mountain Background */}
          <div 
            className="relative hidden lg:flex flex-col justify-center p-12 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop')" 
            }}
          >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1410] via-black/40 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="font-poppins text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
                Mau Hiking ?
                <span className="block bg-gradient-to-r from-[#d9b85c] via-[#ffe3a0] to-white bg-clip-text text-transparent mt-2">
                  Sewa Aja
                </span>
              </h2>

              <p className="mt-5 max-w-md text-white/90 text-base lg:text-lg drop-shadow-md">
                Hemat biaya, tanpa ribet, siap ambil kapan saja
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          {/* Menghapus pembungkus "my-auto" dan menambah padding p-10 agar luas */}
          <div className="p-8 lg:p-12 flex flex-col overflow-y-auto">
            
            <div className="pt-2">
              <h3 className="font-poppins text-3xl font-bold">
                Daftar
              </h3>
              <p className="mt-2 text-base text-white/60">
                Mulai petualanganmu bersama kami.
              </p>
            </div>

            {/* Jarak antar elemen dilonggarkan kembali menggunakan space-y-4 */}
            <div className="mt-8 flex flex-col gap-4">
              
              {/* Inputs - padding diperbesar ke py-3.5 */}
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full rounded-xl border border-white/10 bg-[#121c17] px-4 py-3.5 outline-none focus:border-white/30 transition-colors text-base"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-[#121c17] px-4 py-3.5 outline-none focus:border-white/30 transition-colors text-base"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-white/10 bg-[#121c17] px-4 py-3.5 outline-none focus:border-white/30 transition-colors text-base"
              />

              {/* Pemisah antara input dan sosial media agar ada "napas" tambahan */}
              <div className="py-1"></div>

              {/* Social Logins - padding diperbesar ke py-3.5 */}
              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 font-semibold text-slate-900 hover:bg-gray-100 transition-colors text-base">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Daftar dengan Google
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#1877F2] px-5 py-3.5 font-semibold text-white hover:bg-[#166fe5] transition-colors text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Daftar dengan Facebook
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-black px-5 py-3.5 font-semibold text-white border border-white/20 hover:bg-gray-900 transition-colors text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.126 3.805 3.065 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.62-1.516 3.603-2.96 1.153-1.682 1.623-3.313 1.644-3.398-.039-.016-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/>
                </svg>
                Daftar dengan Apple
              </button>

              {/* Main Register Button */}
              <button className="w-full rounded-xl bg-[#dfb249] py-4 font-bold text-[#0b1410] hover:bg-[#c9a03f] transition-colors mt-2">
                Buat Akun
              </button>

              {/* Switch to Login Link */}
              <p className="text-center text-sm text-white/60 pt-3 pb-2">
                Sudah punya akun?{" "}
                <button className="text-[#dfb249] font-semibold hover:underline">
                  Masuk di sini
                </button>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;