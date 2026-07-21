import { Award, Stethoscope, FileBadge, Laptop, IdCard, GraduationCap, Repeat } from "lucide-react";
import { GELOMBANG_PMDK, GELOMBANG_FK, GELOMBANG_USM } from "./gelombang";
import { getSmartActive, getActiveMomentum, getStatusInfo, wibDate } from "../utils/dateUtils";
import { formatRupiah } from "../utils/formatUtils";

const MONTHS_ID = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const getTodayLabel = () => {
  const today = new Date();
  return `Hari ini — ${today.getDate()} ${MONTHS_ID[today.getMonth()]} ${today.getFullYear()}`;
};

const getActivePMDK = () => getSmartActive(GELOMBANG_PMDK);
const getActiveUSM = () => getSmartActive(GELOMBANG_USM);
const getActiveGelombang = () => getSmartActive(GELOMBANG_FK);

// GENERATE DATA SESUAI FORMAT PMDK
const createPMDKActive = (todayLabel) => {
  const g = getActivePMDK();
  const m = getActiveMomentum(g.momentums);

  const { status, text } = getStatusInfo(g.start, g.end);

  const total = m ? (m.dp || 0) + (m.dpp || 0) : 0;

  return {
    id: "pmdk",
    group: "maba",
    subgroup: "utama",

    icon: Award,
    iconBg: "bg-yellow-100 text-yellow-700",

    badge: "PMDK",
    badgeColor: "bg-green-50 text-green-700",

    name: "Penelusuran Minat & Kemampuan",
    nameButton: "PMDK",

    popular: true,

    value: "Tanpa ujian — seleksi berbasis nilai rapor semester 1–5. Cocok jika nilai akademik bagus.",

    tags: ["📋 Nilai Rapor", "✅ Tanpa Tes"],

    status,
    statusText: text,

    gel: `Gelombang ${g.gel}`,

    period: g.period,
    startDate: g.start,
    deadline: g.end,

    link: g.link,

    momentumLabel: m?.label || null,

    elig: [
      "Lulusan SMA / SMK / MA / sederajat (atau akan lulus tahun ini)",
      "Memiliki rapor semester 1 sampai 5 yang lengkap",
      "Tidak sedang terdaftar aktif di perguruan tinggi lain",
      "Bersedia mengikuti ketentuan akademik UNPAS",
    ],

    steps: [
      { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
      { ic: "📊", lb: "Input Nilai Rapor Sem 1–5" },
      { ic: "📤", lb: "Upload Berkas & Verifikasi" },
      { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
    ],

    costForm: "Rp 300.000",
    costFormNote: "Satu kali bayar, berlaku semua prodi",

    costSave: m && total ? `s.d. Rp ${total.toLocaleString("id-ID")}` : "—",
    costSaveNote: m ? `${m.label} • ${m.kuota}` : "Tidak ada momentum aktif saat ini",

    benefits: m ? [
      { label: "⚡ Potongan DP Momentum", val: formatRupiah(m.dp) },
      { label: "💎 Insentif Pelunasan DPP", val: formatRupiah(m.dpp) },
    ] : [],

    benefitTotal: m && total ? `Rp ${total.toLocaleString("id-ID")}` : "—",
    benefitNote: "",

    timeline: [
      {
        date: "5 Januari 2026",
        label: "Pendaftaran dibuka",
        state: "done",
      },
      ...(m ? [
        {
          date: todayLabel,
          label: `Momentum ${m.label} sedang berlangsung`,
          state: "active",
          now: true,
        },
        {
          date: m.end,
          label: `Deadline Momentum ${m.label}`,
          state: "upcoming",
        },
      ] : []),
      {
        date: g.end,
        label: "Batas akhir pendaftaran jalur PMDK",
        state: "upcoming",
      },
    ],
  };
};

// GENERATE DATA SESUAI FORMAT KEDOKTERAN
const createFKUSMActive = (todayLabel) => {
  const g = getActiveGelombang();
  const { status, text } = getStatusInfo(g.start, g.end);

  return {
    id: "fk_usm",
    group: "maba",
    subgroup: "kedokteran",

    icon: Stethoscope,
    iconBg: "bg-red-100 text-red-700",

    badge: "Kedokteran",
    badgeColor: "bg-red-50 text-red-600",

    name: "USM Kedokteran",
    nameButton: "USM FK",

    popular: false,

    value: "Seleksi masuk Fakultas Kedokteran via ujian. 4 gelombang penerimaan, kuota terbatas per gelombang.",

    tags: [],

    status,
    statusText: text,

    gel: `Gelombang ${g.gel}`,

    period: g.period,
    startDate: g.start,
    deadline: g.end,

    link: g.link,

    elig: [
      "Lulusan SMA / MA jurusan IPA (atau akan lulus tahun ini)",
      "Pendaftar maksimal 3 tahun setelah lulus SMA (2024-2026)",
      "Siap mengikuti ujian tertulis dan tes kesehatan",
      "Tidak sedang terdaftar aktif di fakultas kedokteran lain",
      "Bersedia membayar biaya sesuai gelombang yang dipilih",
    ],

    steps: [
      { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
      { ic: "🩺", lb: "USM Kedokteran" },
      { ic: "❤️‍🩹", lb: "Kesehatan dan MMPI" },
      { ic: "🏫", lb: "Open House" },
      { ic: "🧩", lb: "Psikometri" },
      { ic: "🗣️", lb: "Wawancara" },
    ],

    costForm: "Rp 300.000",
    costFormNote: "Formulir pendaftaran",

    costSave: "—",
    costSaveNote: "Tidak ada potongan untuk Kedokteran",

    benefits: [],
    benefitTotal: "—",

    benefitNote: `Prodi Kedokteran tidak mendapatkan potongan DP maupun insentif. Biaya Gel.${g.gel} mulai ${g.biaya}.`,

    timeline: [
      {
        date: g.period.split(" – ")[0],
        label: `Pendaftaran Gel.${g.gel} dibuka`,
        state: status === "soon" ? "upcoming" : "done",
      },
      ...(status === "open" || status === "closing" ? [{
        date: todayLabel,
        label: `Gelombang ${g.gel} sedang berlangsung`,
        state: "active",
        now: true,
      }] : []),
      {
        date: g.period.split(" – ")[1],
        label: `Deadline Gel.${g.gel} Kedokteran USM`,
        state: status === "closed" ? "done" : "upcoming",
      },
      ...(g.gel < GELOMBANG_FK[GELOMBANG_FK.length - 1].gel ? [{
        date: "Gel. berikutnya",
        label: "Biaya naik di gelombang selanjutnya",
        state: "upcoming",
      }] : []),
    ],
  };
};

// GENERATE DATA USM KEDOKTERAN VIA NILAI UTBK — GELOMBANG 1 (16 Jul – 8 Agu 2026)
const createFKUTBK = (todayLabel) => {
  const { status, text } = getStatusInfo("2026-07-16", "2026-08-08");
  const tls = (d) => new Date() >= wibDate(d, true) ? "done" : "upcoming";

  return {
    id: "fk_utbk",
    group: "maba",
    subgroup: "kedokteran",

    icon: FileBadge,
    iconBg: "bg-blue-100 text-blue-700",

    badge: "Kedokteran · Nilai UTBK",
    badgeColor: "bg-blue-50 text-blue-700",

    name: "USM Kedokteran via Nilai UTBK",
    nameButton: "USM FK Nilai UTBK",

    popular: false,

    value: "Punya skor UTBK 2026 minimal 500? Langsung dinyatakan lulus Tahap I (Seleksi Akademik).",

    tags: [],

    status,
    statusText: text,

    gel: "Gelombang 1",

    period: "16 Jul 2026 – 8 Agu 2026",
    startDate: "2026-07-16",
    deadline: "2026-08-08",

    link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/315",

    elig: [
      "Calon peserta telah mengikuti UTBK Tahun 2026",
      "Memiliki skor UTBK minimal 500",
      "Lulusan SMA / MA jurusan IPA (atau akan lulus tahun ini)",
      "Bersedia melanjutkan ke tahapan seleksi berikutnya setelah dinyatakan lulus Tahap I (Seleksi Akademik)",
    ],

    steps: [
      { ic: "📝", lb: "Isi Formulir & Bayar Rp 400rb" },
      { ic: "📊", lb: "Verifikasi Skor UTBK ≥ 500" },
      { ic: "🩺", lb: "USM Kedokteran" },
      { ic: "❤️‍🩹", lb: "Kesehatan dan MMPI" },
      { ic: "🏫", lb: "Open House" },
      { ic: "🧩", lb: "Psikometri" },
      { ic: "🗣️", lb: "Wawancara" },
    ],

    costForm: "Rp 400.000",
    costFormNote: "Formulir pendaftaran Gelombang 1",

    costSave: "—",
    costSaveNote: "Tidak ada potongan untuk Kedokteran",

    benefits: [],
    benefitTotal: "—",

    benefitNote: "Prodi Kedokteran tidak mendapatkan potongan DP maupun insentif. Skor UTBK minimal 500 dinyatakan lulus Tahap I (seleksi akademik) dan berhak melanjutkan ke tahapan seleksi berikutnya.",

    timeline: [
      { date: "16 Juli 2026", label: "Pendaftaran Gel.1 dibuka", state: tls("2026-07-16") },
      ...(status === "open" || status === "closing" ? [{
        date: todayLabel,
        label: "Gelombang 1 sedang berlangsung",
        state: "active",
        now: true,
      }] : []),
      { date: "8 Agustus 2026", label: "Batas akhir pendaftaran Gel.1 Kedokteran via Nilai UTBK", state: status === "closed" ? "done" : "upcoming" },
    ],
  };
};

// GENERATE DATA USM NILAI UTBK — SESI 1 (Upload 2–14 Juni 2026)
const createUSMUTBKSesi1 = (todayLabel) => {
  const { status, text } = getStatusInfo("2026-05-25", "2026-06-14");
  const gelUsm2 = GELOMBANG_USM[1];
  const m = getActiveMomentum(gelUsm2.momentums);
  const total = m ? (m.dp || 0) + (m.dpp || 0) : 0;
  const tls = (d) => new Date() >= wibDate(d, true) ? "done" : "upcoming";

  return {
    id: "usm_utbk_s1",
    group: "maba",
    subgroup: "utbk",

    // visibleUntil: kartu ini disembunyikan mulai tanggal ini (digantikan Sesi 2)
    visibleUntil: "2026-06-15",

    icon: FileBadge,
    iconBg: "bg-teal-100 text-teal-700",

    badge: "Upload Sertifikat UTBK",
    badgeColor: "bg-teal-50 text-teal-700",

    name: "USM via Nilai UTBK – Sesi 1",
    nameButton: "USM Nilai UTBK Sesi 1",

    popular: false,

    value: "Punya sertifikat UTBK? Upload dan seleksi selesai dalam 1 hari kerja — tanpa tes tulis.",

    tags: ["📤 Upload Sertifikat UTBK", "⚡ Hasil 1 Hari Kerja"],

    status,
    statusText: text,

    gel: "USM Gel. 2 · Sesi 1",

    period: "25 Mei 2026 – 14 Juni 2026",
    startDate: "2026-05-25",
    deadline: "2026-06-14",

    link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/305",

    momentumLabel: m?.label || null,

    elig: [
      "Lulusan SMA / SMK / MA / sederajat (atau akan lulus tahun ini)",
      "Memiliki sertifikat UTBK tahun 2024, 2025, atau 2026 (sertifikat 2026 dapat diunduh mulai 2 Juni)",
      "Skor minimum: F. Teknik ≥ 400 · FISIP/FEB/Hukum ≥ 375 · FKIP/FISS ≥ 350",
      "Tidak sedang terdaftar aktif di perguruan tinggi lain",
      "Program Studi Kedokteran tidak tersedia di jalur ini",
    ],

    steps: [
      { ic: "📝", lb: "Isi Formulir & Bayar Rp 350rb" },
      { ic: "📤", lb: "Upload Sertifikat UTBK (2–14 Juni)" },
      { ic: "⏳", lb: "Verifikasi Skor Panitia (1 hari kerja)" },
      { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
    ],

    costForm: "Rp 350.000",
    costFormNote: "Satu kali bayar, berlaku semua prodi",

    costSave: m && total ? `s.d. Rp ${total.toLocaleString("id-ID")}` : "—",
    costSaveNote: m ? `${m.label} • ${m.kuota}` : "Tidak ada momentum aktif saat ini",

    benefits: m ? [
      { label: "⚡ Potongan DP Momentum", val: formatRupiah(m.dp) },
      { label: "💎 Insentif Pelunasan DPP", val: formatRupiah(m.dpp) },
    ] : [],

    benefitTotal: m && total ? `Rp ${total.toLocaleString("id-ID")}` : "—",
    benefitNote: "⚠️ Prodi dengan uji keterampilan (DKV, Fotografi & Film, Seni Musik) tetap wajib mengikuti audisi/portofolio meski skor UTBK memenuhi minimum. Hubungi admisi untuk jadwal uji keterampilan.",

    timeline: [
      { date: "25 Mei 2026", label: "Pendaftaran dibuka", state: tls("2026-05-25") },
      { date: "2 Juni 2026", label: "Sertifikat UTBK dapat diunduh — mulai upload", state: tls("2026-06-02") },
      ...(m ? [
        {
          date: todayLabel,
          label: `Momentum ${m.label} sedang berlangsung`,
          state: "active",
          now: true,
        },
        {
          date: m.end,
          label: `Deadline Momentum ${m.label}`,
          state: "upcoming",
        },
      ] : []),
      { date: "14 Juni 2026", label: "Batas akhir pendaftaran jalur USM via Nilai UTBK Sesi 1", state: "upcoming" },
    ],
  };
};

// GENERATE DATA USM NILAI UTBK — LAST CALL (Sesi 2 diperpanjang s.d 14 Juli + Sesi 3 Tes Tulis 5 Juli)
const createUSMUTBKSesi2 = (todayLabel) => {
  const { status, text } = getStatusInfo("2026-06-15", "2026-07-14");
  const gelUsm2 = GELOMBANG_USM[1];
  const m = getActiveMomentum(gelUsm2.momentums);
  const total = m ? (m.dp || 0) + (m.dpp || 0) : 0;
  const tls = (d) => new Date() >= wibDate(d, true) ? "done" : "upcoming";

  return {
    id: "usm_utbk_s2",
    group: "maba",
    subgroup: "utbk",

    visibleFrom: "2026-06-15",
    visibleUntil: "2026-07-15",

    icon: FileBadge,
    iconBg: "bg-red-100 text-red-700",

    badge: "🔴 LAST CALL",
    badgeColor: "bg-red-50 text-red-700",

    name: "USM via Nilai UTBK – Last Call",
    nameButton: "USM Nilai UTBK",

    popular: false,

    value: "Periode diperpanjang s.d 14 Juli 2026, khusus bagi pemilik sertifikat UTBK 2024, 2025, atau 2026.",

    tags: ["📤 Upload Sertifikat UTBK", "⏰ Last Call – 14 Juli"],

    status,
    statusText: text,

    gel: "USM Gel. 2 · Last Call",

    period: "Diperpanjang s.d 14 Juli 2026",
    startDate: "2026-06-15",
    deadline: "2026-07-14",

    link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/306",

    momentumLabel: m?.label || null,

    elig: [
      "Lulusan SMA / SMK / MA / sederajat (atau akan lulus tahun ini)",
      "Memiliki sertifikat UTBK tahun 2024, 2025, atau 2026 — upload hingga 14 Juli 2026",
      "Skor minimum: F. Teknik ≥ 400 · FISIP/FEB/Hukum ≥ 375 · FKIP/FISS ≥ 350",
      "Tidak sedang terdaftar aktif di perguruan tinggi lain",
      "Tidak punya sertifikat UTBK? Daftar via jalur PMDK atau USM Reguler (Tes Tulis) yang masih dibuka",
    ],

    steps: [
      { ic: "📝", lb: "Isi Formulir & Bayar Rp 400rb" },
      { ic: "📤", lb: "Upload Sertifikat UTBK" },
      { ic: "⏳", lb: "Verifikasi Skor (1 hari kerja)" },
      { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
    ],

    costForm: "Rp 400.000",
    costFormNote: "Satu kali bayar, berlaku semua prodi",

    costSave: m && total ? `s.d. Rp ${total.toLocaleString("id-ID")}` : "—",
    costSaveNote: m ? `${m.label} • ${m.kuota}` : "Tidak ada momentum aktif saat ini",

    benefits: m ? [
      { label: "⚡ Potongan DP Momentum", val: formatRupiah(m.dp) },
      { label: "💎 Insentif Pelunasan DPP", val: formatRupiah(m.dpp) },
    ] : [],

    benefitTotal: m && total ? `Rp ${total.toLocaleString("id-ID")}` : "—",
    benefitNote: "⚠️ Prodi dengan uji keterampilan (DKV, Fotografi & Film, Seni Musik) tetap wajib mengikuti audisi/portofolio. Hubungi admisi untuk jadwal.",

    timeline: [
      { date: "2 – 14 Juni 2026", label: "Sesi 1 — Upload Sertifikat UTBK (Selesai)", state: "done" },
      { date: todayLabel, label: "Sesi 2 — Upload Sertifikat UTBK · Diperpanjang s.d 14 Juli", state: "active", now: true },
      { date: "5 Juli 2026", label: "Sesi 3 — Tes Tulis Konvensional (sudah ditutup)", state: tls("2026-07-05") },
      { date: "14 Juli 2026", label: "Batas akhir pendaftaran — Last Call ditutup", state: "upcoming" },
    ],
  };
};

//GENERATE DATA SESUAI FORMAT USM
const createUSMActive = (todayLabel) => {
  const g = getActiveUSM();
  const m = getActiveMomentum(g.momentums);

  const { status, text } = getStatusInfo(g.start, g.end);

  const total = m ? (m.dp || 0) + (m.dpp || 0) : 0;

  return {
    id: "usm",
    group: "maba",
    subgroup: "utama",

    icon: Laptop,
    iconBg: "bg-blue-100 text-blue-700",

    badge: "USM Sarjana",
    badgeColor: "bg-blue-50 text-blue-700",

    name: "Ujian Saringan Masuk",
    nameButton: "USM",

    popular: true,

    value: "Ujian seleksi — terbuka untuk semua lulusan SMA/SMK/MA sederajat. Cocok jika ingin ikut tes masuk.",

    tags: ["📝 Tes Tertulis", "📋 Seleksi Berkas"],

    status,
    statusText: text,

    gel: `Gelombang ${g.gel}`,

    period: g.period,
    startDate: g.start,
    deadline: g.end,

    link: g.link,

    elig: [
      "Lulusan SMA / SMK / MA / sederajat (atau akan lulus tahun ini)",
      "Siap mengikuti ujian tertulis seleksi masuk",
      "Tidak sedang terdaftar aktif di perguruan tinggi lain",
      "Bersedia mengikuti ketentuan akademik UNPAS",
    ],

    steps: [
      { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
      { ic: "✏️", lb: "Ikut Ujian Tertulis" },
      { ic: "📤", lb: "Upload Berkas & Verifikasi" },
      { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
    ],

    costForm: "Rp 300.000",
    costFormNote: "Satu kali bayar, termasuk biaya tes",

    costSave: m && total ? `s.d. Rp ${total.toLocaleString("id-ID")}` : "—",
    costSaveNote: m ? `${m.label} • ${m.kuota}` : "Tidak ada momentum aktif saat ini",

    momentumLabel: m?.label || null,

    benefits: m ? [
      { label: "⚡ Potongan DP Momentum", val: formatRupiah(m.dp) },
      { label: "💎 Insentif Pelunasan DPP", val: formatRupiah(m.dpp) },
    ] : [],

    benefitTotal: m && total ? `Rp ${total.toLocaleString("id-ID")}` : "—",
    benefitNote: "",

    timeline: [
      {
        date: "5 Januari 2026",
        label: "Pendaftaran dibuka",
        state: "done",
      },
      ...(m ? [
        {
          date: todayLabel,
          label: `Momentum ${m.label} sedang berlangsung`,
          state: "active",
          now: true,
        },
        {
          date: m.end,
          label: `Deadline Momentum ${m.label}`,
          state: "upcoming",
        },
      ] : []),
      {
        date: g.end,
        label: `Batas akhir pendaftaran jalur USM Gel. ${g.gel}`,
        state: "upcoming",
      },
    ],
  };
};

// GENERATE DATA SESUAI FORMAT KIP-KULIAH
const createKIPKuliahActive = (todayLabel) => {
  const start = "2026-07-07";
  const end = "2026-07-31";
  const { status, text } = getStatusInfo(start, end);
  const tls = (d) => new Date() >= wibDate(d, true) ? "done" : "upcoming";

  return {
    id: "kip",
    group: "maba",
    subgroup: "kip",

    icon: IdCard,
    iconBg: "bg-amber-100 text-amber-700",

    badge: "KIP-Kuliah",
    badgeColor: "bg-amber-50 text-amber-700",

    name: "KIP-Kuliah Gelombang 1",
    nameButton: "KIP-Kuliah",

    popular: false,

    value: "Melalui tes tulis peserta didik baru dari SMA/SMK khusus program BIDIKMISI / KIP.",

    tags: ["🆔 Khusus Pemilik KIP", "🆓 Gratis Pendaftaran"],

    status,
    statusText: text,

    gel: "Gelombang 1",

    period: "7 Jul 2026 – 31 Jul 2026",
    startDate: start,
    deadline: end,

    link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/307",

    elig: [
      "Peserta didik baru SMA/SMK/MA khusus program BIDIKMISI / KIP",
    ],

    steps: [
      { ic: "🌐", lb: "Pendaftaran Web Kemendiktisaintek" },
      { ic: "📝", lb: "Pendaftaran KIP-K UNPAS" },
      { ic: "✏️", lb: "Pelaksanaan Tes Tertulis" },
      { ic: "📢", lb: "Pengumuman Tes Tertulis" },
      { ic: "📮", lb: "Pengumpulan Berkas Fisik" },
      { ic: "🗣️", lb: "Seleksi Wawancara" },
    ],

    costForm: "Gratis",
    costFormNote: "Tidak dipungut biaya pendaftaran",

    costSave: "—",
    costSaveNote: "Skema potongan momentum tidak berlaku untuk jalur KIP-Kuliah",

    benefits: [],
    benefitTotal: "—",

    benefitNote: "Tanya jawab intensif mengenai jalur KIP-Kuliah — PIC KIP-K UNPAS: 0811-960-193",

    timeline: (() => {
      const milestones = [
        { start: "2026-02-03", date: "3 Feb – 31 Okt 2026", label: "Portal Kemendiktisaintek dibuka" },
        { start: "2026-07-07", date: "7–31 Jul 2026", label: "Pendaftaran KIP-K UNPAS dibuka" },
        { start: "2026-08-09", date: "9 Agu 2026", label: "Pelaksanaan Tes Tertulis" },
        { start: "2026-08-11", date: "11 Agu 2026", label: "Pengumuman Tes Tertulis" },
        { start: "2026-08-12", date: "12–21 Agu 2026", label: "Pengumpulan Berkas Fisik" },
        { start: "2026-08-27", date: "27 Agu 2026", label: "Seleksi Wawancara" },
      ];

      const entries = [];
      let todayInserted = false;
      milestones.forEach((ms) => {
        const state = tls(ms.start);
        if (!todayInserted && state === "upcoming") {
          entries.push({ date: todayLabel, label: "Menunggu tahap berikutnya", state: "active", now: true });
          todayInserted = true;
        }
        entries.push({ date: ms.date, label: ms.label, state });
      });
      if (!todayInserted) {
        entries.push({ date: todayLabel, label: "Proses seleksi KIP-Kuliah sedang berlangsung", state: "active", now: true });
      }
      return entries;
    })(),
  };
};

export const buildJalurData = () => {
  const todayLabel = getTodayLabel();

  return [
    createPMDKActive(todayLabel),
    createUSMActive(todayLabel),
    createUSMUTBKSesi1(todayLabel),
    createUSMUTBKSesi2(todayLabel),
    createFKUSMActive(todayLabel),
    createFKUTBK(todayLabel),
    createKIPKuliahActive(todayLabel),


    {
      id: "rpl_p", group: "transfer", subgroup: "rpl",
      icon: GraduationCap, iconBg: "bg-orange-100 text-orange-700",
      badge: "RPL", badgeColor: "bg-teal-50 text-teal-700",
      name: "RPL Perolehan 2026 Ganjil",
      nameButton: "RPL Perolehan",
      popular: false,
      value: "Konversi pengalaman kerja menjadi SKS. Untuk profesional yang ingin gelar S1 tanpa mulai dari nol.",
      tags: ["💼 Portofolio Kerja", "🤝 Asesmen Kompetensi"],
      status: "open", statusText: "Sedang Dibuka", gel: "Gelombang 1",
      period: "5 Jan – 30 Sep 2026", deadline: "2026-09-30",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/287",
      elig: [
        "Memiliki pengalaman kerja minimal 2–3 tahun di bidang relevan",
        "Memiliki ijazah SMA/SMK/D3 atau sederajat",
        "Dapat menunjukkan portofolio dan bukti kompetensi kerja",
        "Bersedia mengikuti asesmen kompetensi",
      ],
      steps: [
        { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
        { ic: "💼", lb: "Submit Portofolio Kerja" },
        { ic: "👤", lb: "Asesmen Kompetensi" },
        { ic: "🎉", lb: "Konversi SKS & Daftar Ulang" },
      ],
      costForm: "Rp 300.000", costFormNote: "Formulir pendaftaran",
      costSave: "—", costSaveNote: "Benefit momentum tidak berlaku untuk RPL",
      benefits: [],
      benefitTotal: "—",
      benefitNote: "Skema potongan momentum hanya berlaku untuk jalur PMDK/USM reguler. Konfirmasi ke bagian Registrasi untuk RPL.",
      timeline: [
        { date: "5 Januari 2026", label: "Pendaftaran dibuka", state: "done" },
        { date: todayLabel, label: "Pendaftaran masih dibuka", state: "active", now: true },
        { date: "30 September 2026", label: "Batas akhir pendaftaran jalur RPL Perolehan", state: "upcoming" },
      ],
    },
    {
      id: "rpl_t", group: "transfer", subgroup: "rpl",
      icon: Repeat, iconBg: "bg-pink-100 text-pink-700",
      badge: "Transfer", badgeColor: "bg-teal-50 text-teal-700",
      name: "RPL Transfer 2026 Ganjil",
      nameButton: "RPL Transfer",
      popular: false,
      value: "Calon mahasiswa lulusan dari Diploma (D1, D2 dan D3).",
      tags: ["📄 Transkrip Asal", "✅ Konversi SKS"],
      status: "open", statusText: "Sedang Dibuka", gel: "Gelombang 1",
      period: "5 Jan – 30 Sep 2026", deadline: "2026-09-30",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/211",
      elig: [
        "Mahasiswa aktif atau cuti dari perguruan tinggi terakreditasi",
        "Memiliki transkrip nilai dari kampus asal",
        "Prodi tujuan di UNPAS relevan dengan prodi asal",
        "Bersedia mengikuti proses konversi SKS",
      ],
      steps: [
        { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
        { ic: "📄", lb: "Submit Transkrip & Berkas Asal" },
        { ic: "🔍", lb: "Penilaian Konversi SKS" },
        { ic: "🎉", lb: "Penetapan SKS & Daftar Ulang" },
      ],
      costForm: "Rp 300.000", costFormNote: "Formulir pendaftaran",
      costSave: "—", costSaveNote: "Benefit momentum tidak berlaku untuk Transfer",
      benefits: [],
      benefitTotal: "—",
      benefitNote: "Skema potongan momentum hanya berlaku untuk jalur PMDK/USM reguler. Konfirmasi ke bagian Registrasi untuk RPL.",
      timeline: [
        { date: "5 Januari 2026", label: "Pendaftaran dibuka", state: "done" },
        { date: todayLabel, label: "Pendaftaran masih dibuka", state: "active", now: true },
        { date: "30 September 2026", label: "Batas akhir pendaftaran jalur RPL Transfer", state: "upcoming" },
      ],
    },
  ];
};
