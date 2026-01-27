import React from "react";

export default function FaqSection() {
  return (
    <section className="mt-16" id="faq">
      <div className="space-y-3 text-center">
        <h2 className="text-xl sm:text-2xl font-bold">FAQ – Pertanyaan Seputar PMB</h2>
      </div>

      <div className="mt-8 space-y-4">
        {/* FAQ 1 */}
        <details className="group rounded-2xl bg-white p-4 shadow-sm">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex justify-between items-center">
            Kapan periode pendaftaran mahasiswa baru dimulai?
            <span className="transition-transform group-open:rotate-180 text-slate-500">⌄</span>
          </summary>

          <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
            <p className="mt-2 text-sm text-slate-600">
              Pendaftaran mahasiswa baru Universitas Pasundan dibuka sepanjang tahun dengan beberapa gelombang penerimaan.
              Informasi lengkap tentang jadwal tiap gelombang dapat dilihat di website resmi PMB UNPAS.
            </p>
          </div>
        </details>

        {/* FAQ 2 */}
        <details className="group rounded-2xl bg-white p-4 shadow-sm">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex justify-between items-center">
            Apa saja berkas yang perlu disiapkan untuk pendaftaran?
            <span className="transition-transform group-open:rotate-180 text-slate-500">⌄</span>
          </summary>

          <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
            <p className="mt-2 text-sm text-slate-600">
              Dokumen yang biasanya dibutuhkan antara lain:
              fotokopi ijazah atau surat keterangan lulus, KTP, dan pas foto terbaru,
              Pastikan semua berkas discan dengan jelas.
            </p>
          </div>
        </details>

        {/* FAQ 3 */}
        <details className="group rounded-2xl bg-white p-4 shadow-sm">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex justify-between items-center">
            Apakah saya bisa mengubah pilihan fakultas atau program studi?
            <span className="transition-transform group-open:rotate-180 text-slate-500">⌄</span>
          </summary>

          <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
            <p className="mt-2 text-sm text-slate-600">
              Perubahan pilihan fakultas atau program studi dimungkinkan sepanjang mengikuti ketentuan yang berlaku,
              ketersediaan kuota, dan jadwal yang ditetapkan dalam SK PMB. Silakan menghubungi Tim PMB untuk informasi dan prosedur resminya.
            </p>
          </div>
        </details>

        {/* FAQ 4 */}
        <details className="group rounded-2xl bg-white p-4 shadow-sm">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex justify-between items-center">
            Kalau saya diterima di PTN, apakah bisa refund?
            <span className="transition-transform group-open:rotate-180 text-slate-500">⌄</span>
          </summary>

          <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
            <p className="mt-2 text-sm text-slate-600">
              Calon mahasiswa baru yang diterima di perguruan tinggi negeri dapat mengajukan refund.
              Besaran dan mekanisme refund mengacu pada SK PMB.
              <br />
              <br />
              <a href="https://s.id/unpas_pmb_refund" target="_blank" className="text-emerald-500 font-semibold underline mt-8">Dokumen Persetujuan Ketentuan Refund</a>
              <br />
              <br />
              <a href="https://s.id/unpas_pmbfk_refund" target="_blank" className="text-emerald-500 font-semibold underline mt-8">Dokumen Persetujuan Ketentuan Refund Kedokteran</a>
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
