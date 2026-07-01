import { KATEGORI, DURASI } from '../data/paketData'

export default function FilterSidebar({ filters, setFilters, onReset }) {
  const { kategori, durasi, maxOrang } = filters

  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-6">
      {/* Kategori */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <h3 className="font-semibold text-forest-900 mb-3">Kategori Paket</h3>
        <ul className="space-y-1 text-sm">
          {KATEGORI.map((k) => (
            <li key={k.id}>
              <button
                onClick={() => setFilters((f) => ({ ...f, kategori: k.id }))}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  kategori === k.id
                    ? 'bg-forest-900/10 text-forest-900 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {k.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Durasi */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <h3 className="font-semibold text-forest-900 mb-3">Filter Durasi</h3>
        <ul className="space-y-2 text-sm">
          {DURASI.map((d) => (
            <li key={d.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={d.id}
                checked={durasi === d.id}
                onChange={() => setFilters((f) => ({ ...f, durasi: d.id }))}
                className="accent-forest-900"
              />
              <label htmlFor={d.id} className="text-gray-600">{d.label}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Jumlah orang */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <h3 className="font-semibold text-forest-900 mb-3">Jumlah Orang</h3>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>1 Orang</span>
          <span>10+ Orang</span>
        </div>
        <input
          type="range"
          min={1}
          max={10}
          value={maxOrang}
          onChange={(e) => setFilters((f) => ({ ...f, maxOrang: Number(e.target.value) }))}
          className="w-full accent-forest-900"
        />
        <p className="text-xs text-gray-500 mt-1">Sampai {maxOrang} orang</p>
      </div>

      <button
        onClick={onReset}
        className="w-full border border-gray-300 rounded-md py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        🔄 Reset Filter
      </button>
    </aside>
  )
}
