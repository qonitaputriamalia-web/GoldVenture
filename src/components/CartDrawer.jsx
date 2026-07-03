import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";

const COLORS = {
  forest: "#133E2B",
  amber: "#F5A524",
};

const parsePrice = (priceStr) => {
  if (typeof priceStr === "number") return priceStr;
  if (!priceStr) return 0;
  return parseInt(priceStr.toString().replace(/[^0-9]/g, ""), 10) || 0;
};

export default function CartDrawer({ open, onClose, items, updateQty, removeItem }) {
  // Hitung subtotal
  const subtotal = items.reduce((sum, it) => sum + parsePrice(it.price) * it.qty, 0);

  return (
    <>
      {/* Overlay Hitam Transparan */}
      <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel Laci Keranjang */}
      <div
        className={`fixed right-0 top-0 z-[95] flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} style={{ color: COLORS.forest }} />
            <h3 className="font-bold" style={{ color: COLORS.forest }}>Keranjang Sewa</h3>
            <span
              className="rounded-full px-2 py-0.5 text-xs font-bold text-white"
              style={{ backgroundColor: COLORS.amber }}
            >
              {items.reduce((n, it) => n + it.qty, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition duration-300 hover:rotate-90 hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-gray-400">
              <ShoppingCart size={48} className="mb-4 opacity-20" />
              <p className="font-semibold text-gray-500">Keranjang masih kosong nih.</p>
              <p className="text-sm">Yuk mulai siapkan alat petualanganmu!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-xl border border-gray-100 p-3 shadow-sm transition hover:shadow-md">
                  {/* Info Barang */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 line-clamp-1">{item.name}</h4>
                    <p className="text-sm font-medium text-gray-500">
                      Rp {parsePrice(item.price).toLocaleString("id-ID")} / hari
                    </p>
                    
                    {/* Action Buttons (+ / - / Hapus) */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-1">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="p-1 text-gray-500 hover:text-red-500 transition"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-4 text-center text-sm font-semibold">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="p-1 text-gray-500 hover:text-green-600 transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="rounded-full bg-red-50 p-2 text-red-400 transition hover:bg-red-100 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout  */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold text-gray-600">Subtotal</span>
              <span className="text-lg font-bold" style={{ color: COLORS.forest }}>
                Rp {subtotal.toLocaleString("id-ID")}
              </span>
            </div>
            <button
              className="w-full rounded-xl py-3 font-bold text-white shadow-lg transition hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.forest }}
            >
              Lanjut Pembayaran
            </button>
          </div>
        )}
        
      </div>
    </>
  );
}