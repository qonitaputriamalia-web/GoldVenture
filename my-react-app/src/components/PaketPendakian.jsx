import { useState, useEffect, useMemo } from 'react'
import { PAKET_LIST } from '../data/paketData'
import FilterSidebar from '../components/FilterSidebar'
import PaketCard from '../components/PaketCard'

const DEFAULT_FILTERS = { kategori: 'semua', durasi: 'semua', maxOrang: 10 }

export default function PaketPendakian() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [sortBy, setSortBy] = useState('terbaru')
  const [loading, setLoading] = useState(true)
  const [paketList, setPaketList] = useState([])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    const timer = setTimeout(() => {
      setPaketList(PAKET_LIST)
      setLoading(false)
    }, 250)
    return () => clearTimeout(timer)
  }, [])

  const filteredPaket = useMemo(() => {
    let hasil = paketList.filter((p) => {
      const cocokKategori = filters.kategori === 'semua' || p.kategori === filters.kategori
      const cocokDurasi = filters.durasi === 'semua' || p.durasiId === filters.durasi
      const cocokOrang = p.minOrang <= filters.maxOrang
      return cocokKategori && cocokDurasi && cocokOrang
    })

    if (sortBy === 'termurah') hasil = [...hasil].sort((a, b) => a.harga - b.harga)
    if (sortBy === 'termahal') hasil = [...hasil].sort((a, b) => b.harga - a.harga)
    if (sortBy === 'diskon') hasil = [...hasil].sort((a, b) => b.diskon - a.diskon)

    return hasil
  }, [paketList, filters, sortBy])

  const handleReset = () => setFilters(DEFAULT_FILTERS)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-transparent z-10" />
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-30 flex flex-col lg:flex-row gap-8">
        <FilterSidebar filters={filters} setFilters={setFilters} onReset={handleReset} />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-gray-600">
              {loading ? 'Memuat paket...' : `Menampilkan ${filteredPaket.length} paket`}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-3 py-2 bg-white"
            >
              <option value="terbaru">Urutkan: Terbaru</option>
              <option value="termurah">Harga Termurah</option>
              <option value="termahal">Harga Termahal</option>
              <option value="diskon">Diskon Terbesar</option>
            </select>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-72 rounded-xl bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : filteredPaket.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg font-medium mb-1">Belum ada paket yang cocok</p>
              <p className="text-sm">Coba longgarkan filter kategori, durasi, atau jumlah orangnya.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredPaket.map((paket) => (
                <PaketCard key={paket.id} paket={paket} />
              ))}
            </div>
          )}
        </div>
      </section>


    </div>
  )
}
