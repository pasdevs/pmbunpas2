import React, { useMemo, useState, useEffect } from "react";

const DATA_PRODI = [
  {
    id: 1,
    nama: "Ilmu Hukum",
    fakultas: "FH",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/74201",
  },
  {
    id: 2,
    nama: "Administrasi Publik",
    fakultas: "FISIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/63201",
  },
  {
    id: 3,
    nama: "Ilmu Kesejahteraan Sosial",
    fakultas: "FISIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/72201",
  },
  {
    id: 4,
    nama: "Ilmu Hubungan Internasional",
    fakultas: "FISIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/64201",
  },
  {
    id: 5,
    nama: "Ilmu Administrasi Bisnis",
    fakultas: "FISIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/63211",
  },
  {
    id: 6,
    nama: "Ilmu Komunikasi",
    fakultas: "FISIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/70201",
  },
  {
    id: 7,
    nama: "Teknik Industri",
    fakultas: "FT",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/26201",
  },
  {
    id: 8,
    nama: "Teknologi Pangan",
    fakultas: "FT",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/41221",
  },
  {
    id: 9,
    nama: "Teknik Mesin",
    fakultas: "FT",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/21201",
  },
  {
    id: 10,
    nama: "Teknik Informatika",
    fakultas: "FT",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/55201",
  },
  {
    id: 11,
    nama: "Teknik Lingkungan",
    fakultas: "FT",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/25201",
  },
  {
    id: 12,
    nama: "Perencanaan Wilayah dan Kota",
    fakultas: "FT",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/35201",
  },
  {
    id: 13,
    nama: "Manajemen",
    fakultas: "FEB",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/61201",
  },
  {
    id: 14,
    nama: "Akuntansi",
    fakultas: "FEB",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/62201",
  },
  {
    id: 15,
    nama: "Ekonomi Pembangunan",
    fakultas: "FEB",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/60201",
  },
  {
    id: 16,
    nama: "Bisnis Digital",
    fakultas: "FEB",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/61209",
  },
  {
    id: 17,
    nama: "Pendidikan Pancasila dan Kewarganegaraan",
    fakultas: "FKIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/87205",
  },
  {
    id: 18,
    nama: "Pendidikan Ekonomi",
    fakultas: "FKIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/87203",
  },
  {
    id: 19,
    nama: "Pendidikan Bahasa dan Sastra Indonesia",
    fakultas: "FKIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/88201",
  },
  {
    id: 20,
    nama: "Pendidikan Biologi",
    fakultas: "FKIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/84205",
  },
  {
    id: 21,
    nama: "Pendidikan Matematika",
    fakultas: "FKIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/84202",
  },
  {
    id: 22,
    nama: "Pendidikan Guru Sekolah Dasar",
    fakultas: "FKIP",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/86206",
  },
  {
    id: 23,
    nama: "Desain Komunikasi Visual",
    fakultas: "FISS",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/90241",
  },
  {
    id: 24,
    nama: "Fotografi",
    fakultas: "FISS",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/91271",
  },
  {
    id: 25,
    nama: "Seni Musik",
    fakultas: "FISS",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/91221",
  },
  {
    id: 26,
    nama: "Sastra Inggris",
    fakultas: "FISS",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/79202",
  },
  {
    id: 27,
    nama: "Kedokteran",
    fakultas: "FK",
    jenjang: "S1",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/11201",
  },
  {
    id: 28,
    nama: "Magister Administrasi dan Kebijakan Publik",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/63101",
  },
  {
    id: 29,
    nama: "Magister Manajemen",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/61101",
  },
  {
    id: 30,
    nama: "Magister Teknik Industri",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/26101",
  },
  {
    id: 31,
    nama: "Magister Ilmu Hukum",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/74101",
  },
  {
    id: 32,
    nama: "Magister Teknologi Pangan",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/41121",
  },
  {
    id: 33,
    nama: "Magister Pendidikan Matematika",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/84102",
  },
  {
    id: 34,
    nama: "Magister Teknik Mesin",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/21101",
  },
  {
    id: 35,
    nama: "Magister Ilmu Komunikasi",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/70101",
  },
  {
    id: 36,
    nama: "Magister Pendidikan Bahasa dan Sastra Indonesia",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/88101",
  },
  {
    id: 37,
    nama: "Magister Kenotariatan",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/74102",
  },
  {
    id: 38,
    nama: "Magister Akuntansi",
    fakultas: "Pascasarjana",
    jenjang: "S2",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/62101",
  },
  {
    id: 39,
    nama: "Doktor Ilmu Manajemen",
    fakultas: "Pascasarjana",
    jenjang: "S3",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/61001",
  },
  {
    id: 40,
    nama: "Doktor Ilmu Sosial",
    fakultas: "Pascasarjana",
    jenjang: "S3",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/68001",
  },
  {
    id: 41,
    nama: "Doktor Ilmu Hukum",
    fakultas: "Pascasarjana",
    jenjang: "S3",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/74001",
  },
  {
    id: 42,
    nama: "Pendidikan Profesi Guru",
    fakultas: "FKIP",
    jenjang: "Profesi",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/86904",
  },
  {
    id: 43,
    nama: "Pendidikan Profesi Dokter",
    fakultas: "FK",
    jenjang: "Profesi",
    url: "https://situ2.unpas.ac.id/spmbfront/program-studi-detail/detail/11901",
  },
];

const FAKULTAS = ["SEMUA", "FH", "FISIP", "FT", "FEB", "FKIP", "FISS", "FK", "Pascasarjana"];

const JENJANG_LABEL = {
  S1: "Program Sarjana (S1)",
  S2: "Program Magister (S2)",
  S3: "Program Doktor (S3)",
  Profesi: "Program Profesi",
};

const FAKULTAS_META = {
  SEMUA: {
    pill: "bg-emerald-600 text-white",
  },
  FH: {
    color: "#D32F2F",
    badge: "bg-[#D32F2F]/10 text-[#D32F2F]",
    pill: "bg-[#D32F2F] text-white",
    outline: "border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F]/10",
  },
  FISIP: {
    color: "#003366",
    badge: "bg-[#003366]/10 text-[#003366]",
    pill: "bg-[#003366] text-white",
    outline: "border-[#003366] text-[#003366] hover:bg-[#003366]/10",
  },
  FT: {
    color: "#FF652F",
    badge: "bg-[#FF652F]/10 text-[#FF652F]",
    pill: "bg-[#FF652F] text-white",
    outline: "border-[#FF652F] text-[#FF652F] hover:bg-[#FF652F]/10",
  },
  FEB: {
    color: "#FFEB3B",
    badge: "bg-[#FFEB3B]/30 text-black",
    pill: "bg-[#FFEB3B] text-black",
    outline: "border-[#FFEB3B] text-black hover:bg-[#FFEB3B]/30",
  },
  FKIP: {
    color: "#028A0F",
    badge: "bg-[#028A0F]/10 text-[#028A0F]",
    pill: "bg-[#028A0F] text-white",
    outline: "border-[#028A0F] text-[#028A0F] hover:bg-[#028A0F]/10",
  },
  FISS: {
    color: "#43296C",
    badge: "bg-[#43296C]/10 text-[#43296C]",
    pill: "bg-[#43296C] text-white",
    outline: "border-[#43296C] text-[#43296C] hover:bg-[#43296C]/10",
  },
  FK: {
    color: "#005005",
    badge: "bg-[#005005]/10 text-[#005005]",
    pill: "bg-[#005005] text-white",
    outline: "border-[#005005] text-[#005005] hover:bg-[#005005]/10",
  },
  Pascasarjana: {
    color: "#4197CB",
    badge: "bg-[#4197CB]/30 text-black",
    pill: "bg-[#4197CB] text-black",
    outline: "border-[#4197CB] text-black hover:bg-[#4197CB]/30",
  },
  Profesi: {
    color: "#FF652F",
    badge: "bg-[#FF652F]/10 text-[#FF652F]",
    pill: "bg-[#FF652F] text-white",
    outline: "border-[#FF652F] text-[#FF652F] hover:bg-[#FF652F]/10",
  },
};

function shuffleArray(arr) {
  return [...arr]
    .map((v) => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(({ v }) => v);
}

function ProdiCard({ prodi }) {
  const meta = FAKULTAS_META[prodi.fakultas];
  const labelJenjang = JENJANG_LABEL[prodi.jenjang] || prodi.jenjang;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
      {/* Badge Fakultas */}
      <div className="mb-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
        >
          {prodi.fakultas}
        </span>
      </div>

      {/* Judul */}
      <h3 className="text-base font-bold text-slate-800 leading-snug">
        {prodi.jenjang} - {prodi.nama}
      </h3>

      {/* Jenjang */}
      <p className="mt-1 text-sm text-slate-500">{labelJenjang}</p>

      <div className="flex-1" />

      {/* Button */}
      <a
        href={prodi.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 w-full rounded-xl border px-4 py-2 text-sm font-semibold transition flex items-center justify-center gap-2 ${meta.outline}`}
      >
        Lihat Detail
        <span className="text-lg">→</span>
      </a>
    </div>
  );
}

export default function ProdiExplorer() {
  const [searchProdi, setSearchProdi] = useState("");
  const [activeFakultas, setActiveFakultas] = useState("SEMUA");
  const [shuffledProdi] = useState(() => shuffleArray(DATA_PRODI));

  const filteredProdi = useMemo(() => {
    const sourceData =
      activeFakultas === "SEMUA" ? shuffledProdi : DATA_PRODI;

    return sourceData.filter((p) => {
      const matchSearch = `${p.nama} ${p.jenjang}`
        .toLowerCase()
        .includes(searchProdi.toLowerCase());

      const matchFakultas =
        activeFakultas === "SEMUA" || p.fakultas === activeFakultas;

      return matchSearch && matchFakultas;
    });
  }, [searchProdi, activeFakultas, shuffledProdi]);

  const displayedProdi = useMemo(() => {
    if (activeFakultas === "SEMUA" && searchProdi.trim() === "") {
      return filteredProdi.slice(0, 8);
    }
    return filteredProdi;
  }, [filteredProdi, activeFakultas, searchProdi]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-3 text-center">
        <h2 className="text-xl sm:text-2xl font-bold">
          Program Studi
        </h2>
        {/* <p className="text-sm text-slate-600">
          Temukan program studi sesuai minat dan rencana kariermu.
        </p> */}
      </div>

      {/* Search */}
      <div className="mt-8">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchProdi}
            onChange={(e) => setSearchProdi(e.target.value)}
            placeholder="Cari program studi impianmu di UNPAS..."
            className="w-full rounded-full border border-slate-300 bg-white py-4 pl-12 pr-5 text-sm shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {FAKULTAS.map((f) => {
          const meta = FAKULTAS_META[f];
          const isActive = activeFakultas === f;

          return (
            <button
              key={f}
              onClick={() => setActiveFakultas(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${isActive
                  ? `${meta.pill} shadow-md scale-105`
                  : "bg-white border border-slate-300 text-slate-600 hover:border-slate-400"
                }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedProdi.length === 0 && (
          <div className="col-span-full text-center text-slate-500">
            Tidak ada program studi yang cocok
          </div>
        )}

        {displayedProdi.map((prodi) => (
          <ProdiCard key={prodi.id} prodi={prodi} />
        ))}
      </div>
    </div>
  );
}
