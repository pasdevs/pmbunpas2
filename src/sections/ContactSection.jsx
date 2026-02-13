import React from "react";

export default function ContactSection() {
  return (
    <section id="kontak" className="relative w-full overflow-hidden bg-[#180404]">
      {/* CONTENT */}
      <div className="relative z-10 py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* TOP SECTION - Logo & Contact Info */}
          <div className="mb-12 flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Left - Logos & Contact */}
            <div className="flex-shrink-0">
              {/* Logo UNPAS + DIKTISAINTEK (gambar sudah jadi satu) */}
              <div className="mb-6">
                <img
                  src="/icon_web_unpas_footer_berdampak_v1-scaled.webp"
                  alt="Logo UNPAS & DIKTISAINTEK BERDAMPAK"
                  className="h-20 w-auto object-contain"
                />
              </div>

              {/* Decorative Line (gradasi seperti screenshot) */}
              <div className="mb-6 h-1 w-64 bg-gradient-to-r from-[#6b5b51] via-[#8a7a6d] to-transparent rounded-full"></div>

              {/* Contact Details */}
              <div className="space-y-2 text-white text-sm">
                <p>
                  <span className="font-semibold">Email:</span> pmb@unpas.ac.id
                </p>
                <p>
                  <span className="font-semibold">Whatsapp:</span> 62811960193
                </p>
                <p>
                  <span className="font-semibold">Alamat:</span> Jl. Tamansari No.4-8 Kota Bandung
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.instagram.com/univ_pasundan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#180404] transition"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/universitaspasundan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-600 transition"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/univ_pasundan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#180404] transition"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@univ_pasundan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#180404] transition"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/c/UniversitasPasundanOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 transition"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Text Links (2 columns) */}
            <div className="w-full md:w-1/2">
              <h3 className="text-white text-2xl font-bold mb-4">
                Tautan
              </h3>
              {/* Decorative Line (gradasi) */}
              <div className="mb-6 h-1 w-full bg-gradient-to-r from-[#6b5b51] via-[#8a7a6d] to-transparent rounded-full"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-white text-sm">
                {/* KOLOM 1 (KIRI) */}
                <div className="space-y-3">
                  <a
                    href="https://unpas.ac.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Tentang Unpas
                  </a>
                  <a
                    href="https://hukum.unpas.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Fakultas Hukum
                  </a>
                  <a
                    href="https://fisip.unpas.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Fakultas Ilmu Sosial & Ilmu Politik
                  </a>
                  <a
                    href="https://teknik.unpas.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Fakultas Teknik
                  </a>
                  <a
                    href="https://feb.unpas.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Fakultas Ekonomi & Bisnis
                  </a>
                </div>

                {/* KOLOM 2 (KANAN) */}
                <div className="space-y-3">
                  <a
                    href="https://fkip.unpas.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Fakultas Keguruan & Ilmu Pendidikan
                  </a>
                  <a
                    href="https://fiss.unpas.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Fakultas Ilmu Seni & Sastra
                  </a>
                  <a
                    href="https://kedokteran.unpas.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Fakultas Kedokteran
                  </a>
                  <a
                    href="https://pasca.unpas.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#ffc042] transition"
                  >
                    Pascasarjana
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM SECTION - Campus Locations (tanpa garis horizontal merah) */}
          <div className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-white text-sm">
              {/* Kampus I */}
              <div className="bg-[#2a1a10]/50 p-4 rounded-lg border border-[#6b5b51]/30">
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h4 className="font-bold">Kampus I</h4>
                </div>
                <p className="text-xs mb-1">Telepon: 022-4262922</p>
                <p className="text-xs mb-1">Fax: 022-426222</p>
                <p className="text-xs">Alamat: Jl. Lengkong Besar No.68</p>
              </div>

              {/* Kampus II */}
              <div className="bg-[#2a1a10]/50 p-4 rounded-lg border border-[#6b5b51]/30">
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h4 className="font-bold">Kampus II</h4>
                </div>
                <p className="text-xs mb-1">Telepon: 622-2021440</p>
                <p className="text-xs mb-1">Fax: 622-2021440</p>
                <p className="text-xs">Alamat: Jl. Tamansari No.4-8</p>
              </div>

              {/* Kampus III */}
              <div className="bg-[#2a1a10]/50 p-4 rounded-lg border border-[#6b5b51]/30">
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h4 className="font-bold">Kampus III</h4>
                </div>
                <p className="text-xs mb-1">Telepon: 022-7303048</p>
                <p className="text-xs mb-1">Fax: 022-7303049</p>
                <p className="text-xs">Alamat: Jl. Wartawan IV No.22</p>
              </div>

              {/* Kampus IV */}
              <div className="bg-[#2a1a10]/50 p-4 rounded-lg border border-[#6b5b51]/30">
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h4 className="font-bold">Kampus IV</h4>
                </div>
                <p className="text-xs mb-1">Telepon: 022-2021440</p>
                <p className="text-xs mb-1">Fax: 022-2021440</p>
                <p className="text-xs">Alamat: Jl. Dr. Setiabudhi No.193</p>
              </div>

              {/* Kampus V */}
              <div className="bg-[#2a1a10]/50 p-4 rounded-lg border border-[#6b5b51]/30">
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h4 className="font-bold">Kampus V</h4>
                </div>
                <p className="text-xs mb-1">Telepon: 022-4210243</p>
                <p className="text-xs mb-1">Fax: 022-4210243</p>
                <p className="text-xs">Alamat: Jl. Sumatera No.41</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}