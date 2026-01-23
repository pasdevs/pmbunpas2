import { image } from "framer-motion/client";
import {
  Zap,
  Compass,
  Wallet,
} from "lucide-react";

export const DATA = {
  topBar: {
    show: true,
    announcement: "Gelombang 1 Resmi Dibuka • Amankan benefit pendaftaran lebih awal",
    links: [
      { label: "Cek Status", href: "#/cek-status" },
      { label: "Bantuan WA", href: "#/bantuan" },
      { label: "Login", href: "#/login" },
    ],
  },
  header: {
    brand: "PMB UNPAS",
    nav: [
      { label: "Jalur Masuk", href: "#/jalur" },
      { label: "Biaya & Cicilan", href: "#/biaya" },
      { label: "Jadwal", href: "#/jadwal" },
      { label: "Fakultas & Prodi", href: "#/prodi" },
      { label: "Beasiswa & Potongan", href: "#/beasiswa" },
      { label: "FAQ", href: "#/faq" },
      { label: "Bantuan", href: "#/bantuan" },
    ],
    ctas: {
      primary: { label: "Daftar Sekarang", href: "https://situ2.unpas.ac.id/spmbfront/" },
      secondary: { label: "Login", href: "https://situ2.unpas.ac.id/spmbfront/login" },
    },
  },
  hero: {
    kicker: "Penerimaan Mahasiswa Baru UNPAS 2026",
    headline: "Gelombang 1 Resmi Dibuka",
    subheadline:
      "Pilih jalur yang sesuai (PMDK/USM), daftar online, dan dapatkan benefit Gelombang 1. Ada pendampingan sampai registrasi. Bisa cicilan.",
    ctas: {
      primary: { label: "Daftar Sekarang", href: "https://situ2.unpas.ac.id/spmbfront/" },
      secondary: { label: "Cek Jalur yang Cocok (1 Menit)", href: "#/cek-jalur" },
    },
    badges: ["Proses Online", "Biaya Transparan", "Bisa Dicicil", "Pendampingan Admin PMB"],
  },
  quickActions: [
    {
      title: "Saya Mau Daftar Sekarang",
      desc: "Langsung buat akun PMB",
      href: "https://situ2.unpas.ac.id/spmbfront/",
      icon: Zap,
    },
    {
      title: "Saya Bingung Pilih Jalur",
      desc: "Dapat rekomendasi jalur",
      href: "#/cek-jalur",
      icon: Compass,
    },
    {
      title: "Saya Mau Cek Biaya",
      desc: "Simulasi sesuai prodi",
      href: "https://pmb.unpas.ac.id/biaya/rincian-lengkap/",
      icon: Wallet,
    },
  ],
  paths: {
    headline: "Pilih Jalur Masuk yang Paling Cocok",
    subheadline:
      "UNPAS menyediakan beberapa jalur penerimaan agar sesuai kondisi dan kebutuhan calon mahasiswa.",
    cards: [
      {
        id: "pmdk",
        title: "PMDK (Tanpa Tes)",
        subtitle: "Seleksi berbasis dokumen",
        whoFor: ["Nilai rapor baik", "Prestasi akademik/non-akademik", "Aktif organisasi/kegiatan sekolah"],
        benefits: ["Tanpa tes tulis", "Proses berbasis dokumen", "Hasil cepat setelah berkas lengkap"],
        eta: "Estimasi: cepat setelah berkas lengkap",
        cta: { label: "Lihat Detail Jalur PMDK", href: "#/jalur-pmdk" },
        highlight: true,
        image: "/pmbunpas/2.png",
        bg: "#F8F5F2", // coklat soft
      },
      {
        id: "usm",
        title: "USM (Seleksi Mandiri)",
        subtitle: "Seleksi terjadwal & terstruktur",
        whoFor: ["Ingin jalur seleksi yang umum", "Tidak menggunakan jalur prestasi", "Butuh mekanisme tes yang jelas"],
        benefits: ["Seleksi terjadwal", "Proses jelas & terstruktur", "Cocok untuk semua latar belakang sekolah"],
        eta: "Estimasi: sesuai jadwal seleksi",
        cta: { label: "Lihat Detail Jalur USM", href: "#/jalur-usm" },
        image: "/pmbunpas/3.png",
        bg: "#F3F8F7", // hijau soft
      },
      {
        id: "prioritas",
        title: "Jalur Prioritas / Layanan Cepat",
        subtitle: "Untuk kebutuhan tertentu",
        whoFor: ["Butuh proses lebih cepat", "Pekerja/transfer/kondisi khusus"],
        benefits: ["Layanan diprioritaskan", "Proses lebih singkat", "Pendampingan langsung"],
        eta: "Estimasi: tergantung layanan yang dipilih",
        cta: { label: "Lihat Detail Jalur Prioritas", href: "#/jalur-prioritas" },
        image: "/pmbunpas/1.png",
        bg: "#F4F6FA", // abu kebiruan
      },
    ],
  },
  whyNow: {
    headline: "Daftar Lebih Awal = Lebih Banyak Keuntungan",
    points: [
      {
        title: "Benefit Gelombang 1 masih tersedia",
        desc: "Daftar lebih awal untuk amankan manfaatnya.",
      },
      {
        title: "Proses lebih cepat karena antrian belum padat",
        desc: "Validasi dan pendampingan lebih leluasa.",
      },
      {
        title: "Pendampingan langkah demi langkah",
        desc: "Dari daftar sampai registrasi.",
      },
      {
        title: "Lebih tenang menentukan langkah berikutnya",
        desc: "Tidak terburu-buru saat periode ramai.",
      },
    ],
    cta: { label: "Amankan Slot Gelombang 1", href: "https://situ2.unpas.ac.id/spmbfront/" },
  },
  feeTeaser: {
    headline: "Cek Biaya Tanpa Bingung — Simulasikan Sesuai Prodi",
    subheadline: "Mulai dari biaya awal, pilihan cicilan, sampai rincian per fakultas dan program studi.",
    bullets: ["Biaya awal terjangkau", "Tersedia cicilan", "Rincian transparan"],
    primary: { label: "Simulasikan Biaya Anda", href: "https://pmb.unpas.ac.id/biaya/rincian-lengkap/" },
    secondary: { label: "Lihat Rincian Biaya per Prodi", href: "https://pmb.unpas.ac.id/biaya/rincian-lengkap/" },
  },
  programFinder: {
    headline: "Cari Fakultas & Prodi yang Kamu Incar",
    subheadline: "Temukan program studi sesuai minat dan rencana kariermu.",
    placeholder: "Cari nama prodi…",
    chips: ["FH", "FISIP", "FT", "FEB", "FKIP", "FISS", "FK", "PASCASARJANA"],
    cta: { label: "Lihat Semua Fakultas & Prodi", href: "#/prodi" },
    // demo-only list
    list: [
      { name: "Ilmu Hukum", faculty: "FH", level: "S1", slug: "ilmu-hukum" },

      { name: "Administrasi Publik", faculty: "FISIP", level: "S1", slug: "administrasi-publik" },
      { name: "Ilmu Kesejahteraan Sosial", faculty: "FISIP", level: "S1", slug: "ilmu-kesejahteraan-sosial" },
      { name: "Ilmu Hubungan Internasional", faculty: "FISIP", level: "S1", slug: "ilmu-hubungan-internasional" },
      { name: "Ilmu Administrasi Bisnis", faculty: "FISIP", level: "S1", slug: "ilmu-administrasi-bisnis" },
      { name: "Ilmu Komunikasi", faculty: "FISIP", level: "S1", slug: "ilmu-komunikasi" },

      { name: "Teknik Industri", faculty: "FT", level: "S1", slug: "teknik-industri" },
      { name: "Teknologi Pangan", faculty: "FT", level: "S1", slug: "teknologi-pangan" },
      { name: "Teknik Mesin", faculty: "FT", level: "S1", slug: "teknik-mesin" },
      { name: "Teknik Informatika", faculty: "FT", level: "S1", slug: "teknik-informatika" },
      { name: "Teknik Lingkungan", faculty: "FT", level: "S1", slug: "teknik-lingkungan" },
      { name: "Perencanaan Wilayah dan Kota", faculty: "FT", level: "S1", slug: "perencanaan-wilayah-dan-kota" },

      { name: "Manajemen", faculty: "FEB", level: "S1", slug: "manajemen" },
      { name: "Akuntansi", faculty: "FEB", level: "S1", slug: "akuntansi" },
      { name: "Ekonomi Pembangunan", faculty: "FEB", level: "S1", slug: "ekonomi-pembangunan" },
      { name: "Bisnis Digital", faculty: "FEB", level: "S1", slug: "bisnis-digital" },

      { name: "Pendidikan Pancasila dan Kewarganegaraan", faculty: "FKIP", level: "S1", slug: "pendidikan-pancasila-dan-kewarganegaraan" },
      { name: "Pendidikan Ekonomi", faculty: "FKIP", level: "S1", slug: "pendidikan-ekonomi" },
      { name: "Pendidikan Bahasa dan Sastra Indonesia", faculty: "FKIP", level: "S1", slug: "pendidikan-bahasa-dan-sastra-indonesia" },
      { name: "Pendidikan Biologi", faculty: "FKIP", level: "S1", slug: "pendidikan-biologi" },
      { name: "Pendidikan Matematika", faculty: "FKIP", level: "S1", slug: "pendidikan-matematika" },
      { name: "Pendidikan Guru Sekolah Dasar", faculty: "FKIP", level: "S1", slug: "pendidikan-guru-sekolah-dasar" },

      { name: "Desain Komunikasi Visual", faculty: "FISS", level: "S1", slug: "desain-komunikasi-visual" },
      { name: "Fotografi", faculty: "FISS", level: "S1", slug: "fotografi" },
      { name: "Seni Musik", faculty: "FISS", level: "S1", slug: "seni-musik" },
      { name: "Sastra Inggris", faculty: "FISS", level: "S1", slug: "sastra-inggris" },

      { name: "Kedokteran", faculty: "FK", level: "S1", slug: "kedokteran" },
    ],
  },
  timeline: {
    headline: "Alur Pendaftaran PMB UNPAS",
    steps: [
      { title: "Buat akun PMB", desc: "Mulai dari pembuatan akun." },
      { title: "Pilih jalur masuk", desc: "PMDK/USM sesuai kebutuhan." },
      { title: "Lengkapi data & upload berkas", desc: "Dokumen sesuai ketentuan jalur." },
      { title: "Seleksi / validasi", desc: "Tahapan sesuai jalur yang dipilih." },
      { title: "Pengumuman & registrasi", desc: "Finalisasi setelah dinyatakan lolos." },
    ],
    cta: { label: "Mulai dari Buat Akun", href: "https://situ2.unpas.ac.id/spmbfront/" },
  },
  help: {
    headline: "Butuh Bantuan? Admin PMB Siap Membantu",
    subheadline: "Kami mendampingi dari awal pendaftaran hingga registrasi.",
    guides: [
      { label: "Panduan Cara Daftar", href: "#/panduan/cara-daftar" },
      { label: "Panduan Upload Berkas", href: "#/panduan/upload-berkas" },
      { label: "Panduan Pembayaran", href: "#/panduan/pembayaran" },
      { label: "Cek Status Pendaftaran", href: "#/cek-status" },
    ],
    cs: {
      label: "Chat Admin via WhatsApp",
      href: "#/bantuan#whatsapp",
      hours: "Jam layanan: (isi sesuai operasional)",
      note: "Jika kendala akun/berkas/pembayaran, admin akan pandu langkahnya.",
    },
  },
  socialProof: {
    headline: "Dipercaya Banyak Mahasiswa dari Berbagai Daerah",
    stats: [
      { value: "—", label: "Alumni" },
      { value: "—", label: "Mitra" },
      { value: "—", label: "Kegiatan Mahasiswa" },
      { value: "—", label: "Program Studi" },
    ],
    testimonials: [
      {
        quote: "Proses pendaftarannya jelas dan dibantu admin.",
        name: "Mahasiswa UNPAS",
        meta: "Testimoni",
      },
      {
        quote: "Biaya dan alurnya transparan, jadi lebih tenang.",
        name: "Orang Tua Mahasiswa",
        meta: "Testimoni",
      },
    ],
    cta: { label: "Lihat Kehidupan Kampus", href: "#/kehidupan-kampus" },
  },
  faq: {
    headline: "Pertanyaan yang Sering Ditanyakan",
    items: [
      {
        q: "Apa bedanya PMDK dan USM?",
        a: "PMDK tanpa tes (berbasis dokumen). USM melalui seleksi sesuai jadwal.",
      },
      {
        q: "Potongan biaya itu beasiswa atau bukan?",
        a: "Potongan jalur/gelombang berbeda dengan beasiswa khusus.",
      },
      {
        q: "Kalau berkas belum lengkap bagaimana?",
        a: "Berkas dapat dilengkapi sesuai ketentuan jalur dan tenggat.",
      },
      {
        q: "Apakah tersedia cicilan?",
        a: "Tersedia skema cicilan sesuai kebijakan universitas.",
      },
      {
        q: "Setelah daftar, langkah berikutnya apa?",
        a: "Lengkapi data, upload berkas/ikuti seleksi, lalu cek status hingga registrasi.",
      },
    ],
    cta: { label: "Buka FAQ Lengkap", href: "#/faq" },
  },
  finalBanner: {
    headline: "Jangan Tunggu Ramai. Daftar Sekarang, Beresin Langkah Demi Langkah.",
    subheadline: "Mulai dari buat akun, pilih jalur, lalu lanjut sesuai panduan sampai registrasi.",
    primary: { label: "Daftar Sekarang", href: "#/daftar" },
    secondary: { label: "Cek Jalur yang Cocok", href: "#/cek-jalur" },
  },
};