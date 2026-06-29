import "react";

const WhyUs = () => (
  <section data-reveal class="soft-grid px-6 py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 text-center lg:items-center">
        <div>

          <h4
            class="mt-2 text-2xl font-black tracking-[-0.04em] md:text-4xl text-forest flex flex-wrap  justify-center gap-x-2">
            Lebih cepat pilih alat, <span class="text-yellow-600"> lebih kecil risiko </span> salah bawa.</h4>

          <a href="#search"
            class="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-4 font-black text-white text-sm shadow-xl shadow-forest/15 transition hover:-translate-y-1 hover:bg-green-800">
            Why Us
          </a>
        </div>

        <div class="flex gap-4 sm:grid-cols-2">
          <article
            class="rounded-[1.8rem] bg-forest p-6 shadow-sm ring-1 ring-white/20 transition border-b-5 border-r-5 border-slate-900 hover:-translate-y-1 hover:shadow-xl">
            <div class="grid size-12 place-items-center translate-x-27 rounded-2xl bg-emerald-50 text-moss"><svg class="size-6 inline-flex items-center justify-center leading-none icon-shadcn" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
            <h3 class="mt-6 text-xl font-black text-slate-100">Alat dicek dulu</h3>
            <p class="mt-2 text-sm leading-6 text-slate-100 font-medium">Kondisi, kelengkapan, dan kebersihan alat
              diverifikasi
              sebelum pickup.</p>
          </article>
          <article
            class="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/70 border-b-5 border-r-5 border-slate-900 transition hover:-translate-y-1 hover:shadow-xl">
            <div class="grid size-12 place-items-center translate-x-24 rounded-2xl bg-amber-50 text-gold"><svg class="size-6 inline-flex items-center justify-center leading-none icon-shadcn" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></div>
            <h3 class="mt-6 text-xl font-black text-forest">Ambil dekat jalur</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500 font-medium">Pilih basecamp atau store terdekat supaya
              logistik trip
              lebih ringan.</p>
          </article>
          <article
            class="rounded-[1.8rem] bg-forest p-6 shadow-sm ring-1 ring-slate-200/70 border-b-5 border-r-5 border-slate-900 transition hover:-translate-y-1 hover:shadow-xl">
            <div class="grid size-12 place-items-center translate-x-24 rounded-2xl bg-emerald-50 text-moss"><svg class="size-6 inline-flex items-center justify-center leading-none icon-shadcn" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8" /><path d="M8 12h8" /><path d="M8 16h5" /></svg></div>
            <h3 class="mt-6 text-xl font-black text-white">Paket siap jalan</h3>
            <p class="mt-2 text-sm leading-6 text-slate-100 font-medium">Bundle gear disusun berdasarkan tujuan,
              durasi, dan
              jumlah peserta.</p>
          </article>
          <article
            class="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/70   border-b-5 border-r-5 border-slate-900 transition hover:-translate-y-1 hover:shadow-xl">
            <div class="grid size-12 place-items-center translate-x-24 rounded-2xl bg-slate-100 text-forest"><svg class="size-6 inline-flex items-center justify-center leading-none icon-shadcn" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z" /><path d="M8 8h8" /><path d="M8 12h8" /><path d="M8 16h5" /></svg></div>
            <h3 class="mt-6 text-xl font-black text-forest">Harga transparan</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500 font-medium">Biaya harian, paket, dan status stok
              ditampilkan jelas
              sebelum booking.</p>
          </article>
        </div>
      </div>
    </div>
  </section>
)
export default WhyUs;
