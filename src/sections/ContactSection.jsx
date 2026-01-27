import React from "react";

export default function ContactSection() {
  return (
    <section className="mt-16" id="kontak">
      <div className="space-y-3 text-center">
        <h2 className="text-xl sm:text-2xl font-bold">Butuh Bantuan? Hubungi Tim PMB UNPAS</h2>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
          Tim kami siap membantu menjawab pertanyaanmu seputar pendaftaran, biaya, jalur masuk, serta informasi fakultas dan program
          studi.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
          <div className="mb-2 text-2xl">💬</div>
          <h3 className="text-sm font-semibold text-slate-900">Chat WhatsApp</h3>
          <p className="mt-2 text-sm text-slate-600">
            Konsultasi cepat seputar jalur masuk, fakultas, dan biaya kuliah.
          </p>
          <a
            href="https://wa.me/62811960193?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20PMB%20UNPAS"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex justify-center rounded-full bg-[#6B5B51] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5a4c43] cursor-pointer"
          >
            Buka WhatsApp PMB
          </a>
        </div>

        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
          <div className="mb-2 text-2xl">📞</div>
          <h3 className="text-sm font-semibold text-slate-900">Call Center PMB</h3>
          <p className="mt-2 text-sm text-slate-600">
            Telp: <span className="font-semibold text-slate-800">(022) 2021440</span>
            <br />
            Senin–Jumat, 08.00–16.00 WIB
          </p>
          <a
            href="tel:0222021440"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex justify-center rounded-full bg-[#6B5B51] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5a4c43] cursor-pointer"
          >
            Hubungi Sekarang
          </a>
        </div>

        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
          <div className="mb-2 text-2xl">📍</div>
          <h3 className="text-sm font-semibold text-slate-900">Kunjungan Langsung</h3>
          <p className="mt-2 text-sm text-slate-600">
            Kampus UNPAS Tamansari
            <br />
            Jl. Tamansari No. 6–8, Bandung
          </p>
          <a
            href="https://www.google.com/maps/place/Universitas+Pasundan/@-6.905366,107.6032335,17z/data=!4m14!1m7!3m6!1s0x2e68e865b85ee0d7:0x5fa28af82d475f8a!2sUniversitas+Pasundan!8m2!3d-6.905366!4d107.6081044!16s%2Fg%2F1218dxl7!3m5!1s0x2e68e865b85ee0d7:0x5fa28af82d475f8a!8m2!3d-6.905366!4d107.6081044!16s%2Fg%2F1218dxl7?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex justify-center rounded-full bg-[#6B5B51] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5a4c43] cursor-pointer"
          >
            Lihat Lokasi di Maps
          </a>
        </div>
      </div>
    </section>
  )
}