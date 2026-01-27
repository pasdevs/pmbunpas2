import React from "react";

export default function TestimoniSection() {
  return (
    <section className="mt-16" id="testimoni">
      <div className="space-y-3 text-center">
        <h2 className="text-xl sm:text-2xl font-bold">Cerita dari Mahasiswa &amp; Orang Tua</h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-700">
            "Saya daftar sejak periode Program Prioritas, jadi urusan administrasi beres lebih cepat. Setelah itu bisa fokus ke
            persiapan UTBK tanpa mikirin pendaftaran kampus."
          </p>
          <div className="mt-4 text-sm font-semibold text-slate-900">Rani</div>
          <div className="text-xs text-slate-500">Mahasiswa Teknik Informatika</div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-700">
            "Sebagai orang tua, kami terbantu karena jadwal dan biaya sudah jelas dari awal. Anak kami bisa lebih tenang
            menyelesaikan sekolahnya."
          </p>
          <div className="mt-4 text-sm font-semibold text-slate-900">Bapak Dedi</div>
          <div className="text-xs text-slate-500">Orang tua mahasiswa Manajemen</div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-700">
            "Program Prioritas membantu saya mengunci kursi di prodi favorit. Sekarang sudah aktif ikut kegiatan kampus dan
            organisasi mahasiswa."
          </p>
          <div className="mt-4 text-sm font-semibold text-slate-900">Ajeng</div>
          <div className="text-xs text-slate-500">Mahasiswa Ilmu Komunikasi</div>
        </div>
      </div>
    </section>
  );
}
