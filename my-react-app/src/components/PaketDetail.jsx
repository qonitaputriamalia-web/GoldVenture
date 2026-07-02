import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PAKET_LIST } from '../data/paketData'

function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID')
}

export default function PaketDetail() {
  const { id } = useParams()
  const [paket, setPaket] = useState(null)
  const [loading, setLoading] = useState(true)
  const [jumlahHari, setJumlahHari] = useState(1)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    const timer = setTimeout(() => {
      const found = PAKET_LIST.find((p) => p.id === Number(id))
      setPaket(found || null)
      setJumlahHari(1)
      setLoading(false)
    }, 250)
    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return <div className="max-w-4xl mx-auto px-6 py-80 text-center text-gray-500">Memuat detail paket...</div>
  }

  if (!paket) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-lg font-semibold text-forest-900 mb-2">Paket tidak ditemukan</p>
        <Link to="/paket" className="text-gold-600 font-medium">← Kembali ke daftar paket</Link>
      </div>
    )
  }

  const totalHarga = paket.harga * jumlahHari

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-30">
        <Link to="/paket" className="text-sm text-gray-500 hover:text-forest-900">← Kembali ke Paket</Link>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="h-72 rounded-xl overflow-hidden shadow-lg">
            <img
              src={paket.gambar}
              alt={paket.nama}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className={`${paket.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-md`}>
              {paket.badge}
            </span>
            <h1 className="text-2xl font-extrabold text-forest-900 mt-3 mb-2">{paket.nama}</h1>
            <p className="text-gray-600 text-sm mb-4">{paket.deskripsi}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>⏱ {paket.durasi}</span>
              <span>👤 {paket.orang}</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-forest-900">{formatRupiah(paket.harga)}</span>
              <span className="text-sm text-gray-500">/ paket / hari</span>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-1.5 py-0.5 rounded">
                -{paket.diskon}%
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <label className="text-sm font-medium text-gray-700">Jumlah hari sewa:</label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setJumlahHari((n) => Math.max(1, n - 1))}
                  className="px-3 py-1.5 text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-4 text-sm font-medium">{jumlahHari}</span>
                <button
                  onClick={() => setJumlahHari((n) => n + 1)}
                  className="px-3 py-1.5 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-forest-900 mb-2 text-sm">Isi Paket</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {paket.isi.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between bg-forest-900 text-white rounded-xl px-5 py-4">
              <div>
                <p className="text-xs text-gray-300">Total</p>
                <p className="font-bold text-lg">{formatRupiah(totalHarga)}</p>
              </div>
              <button className="bg-gold-500 hover:bg-gold-600 font-semibold px-5 py-2.5 rounded-md">
                Sewa Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
