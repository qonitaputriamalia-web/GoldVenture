import { Link } from 'react-router-dom'

function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID')
}

export default function PaketCard({ paket }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative h-44 overflow-hidden rounded-t-xl">

        <img
          src={paket.gambar}
          alt={paket.nama}
          className="w-full h-full object-cover"
        />

        <span
          className={`absolute top-3 left-3 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md`}
        >
        </span>

      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-forest-900 leading-snug">{paket.nama}</h3>

        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>⏱ {paket.durasi}</span>
          <span>👤 {paket.orang}</span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-forest-900">{formatRupiah(paket.harga)}</span>
          <span className="text-xs text-gray-500">/ paket</span>
          <span className="bg-green-100 text-green-700 text-[11px] font-semibold px-1.5 py-0.5 rounded">
            -{paket.diskon}%
          </span>
          <span className="text-xs text-gray-400 line-through">{formatRupiah(paket.hargaAsli)}</span>
        </div>

        <Link
          to={`/paket/${paket.id}`}
          className="mt-auto bg-forest-900 text-white text-sm font-semibold text-center py-2.5 rounded-md hover:bg-forest-800 transition-colors"
        >
          Lihat Detail Paket
        </Link>
      </div>
    </div>
  )
}
