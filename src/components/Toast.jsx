export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex animate-bounce items-center gap-3 rounded-xl bg-white p-4 shadow-2xl ring-1 ring-slate-100 transition-all duration-300">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-bold text-slate-700">Berhasil masuk keranjang!</p>
        <p className="text-xs font-medium text-slate-500">{toast.name}</p>
      </div>
    </div>
  );
}