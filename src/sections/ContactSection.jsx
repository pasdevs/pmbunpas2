import React from "react";

export default function ContactSection() {
  return (
    <section
      id="kontak"
      className="relative mt-8 w-full overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/img/gedung_unpas.webp"
          alt="Kontak PMB UNPAS"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3F3631]/90 via-[#6B5B51]/85 to-[#6B5B51]/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-6xl px-4">

          {/* HEADER */}
          <div className="space-y-3 text-center text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Butuh Bantuan? Hubungi Tim PMB UNPAS
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/90">
              Tim kami siap membantu menjawab pertanyaanmu seputar pendaftaran, biaya, jalur masuk, serta informasi fakultas dan program studi.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {/* WhatsApp */}
            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="mb-2 text-3xl">💬</div>
              <h3 className="text-sm font-semibold text-slate-900">Chat WhatsApp</h3>
              <p className="mt-2 text-sm text-slate-600">
                Konsultasi cepat seputar jalur masuk, fakultas, dan biaya kuliah.
              </p>
              <a
                href="https://wa.me/62811960193?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20PMB%20UNPAS"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex justify-center rounded-full bg-[#6B5B51] px-5 py-2 text-xs font-semibold text-white hover:bg-[#5a4c43] transition"
              >
                Buka WhatsApp PMB
              </a>
            </div>

            {/* Call Center */}
            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="mb-2 text-3xl">📞</div>
              <h3 className="text-sm font-semibold text-slate-900">Call Center PMB</h3>
              <p className="mt-2 text-sm text-slate-600">
                Telp: <span className="font-semibold text-slate-800">(022) 2021440</span>
                <br />
                Senin–Jumat, 08.00–16.00 WIB
              </p>
              <a
                href="tel:0222021440"
                className="mt-4 inline-flex justify-center rounded-full bg-[#6B5B51] px-5 py-2 text-xs font-semibold text-white hover:bg-[#5a4c43] transition"
              >
                Hubungi Sekarang
              </a>
            </div>

            {/* Lokasi */}
            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="mb-2 text-3xl">📍</div>
              <h3 className="text-sm font-semibold text-slate-900">Kunjungan Langsung</h3>
              <p className="mt-2 text-sm text-slate-600">
                Kampus UNPAS Tamansari
                <br />
                Jl. Tamansari No. 6–8, Bandung
              </p>
              <a
                href="https://www.google.com/maps/place/Universitas+Pasundan/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex justify-center rounded-full bg-[#6B5B51] px-5 py-2 text-xs font-semibold text-white hover:bg-[#5a4c43] transition"
              >
                Lihat Lokasi di Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}