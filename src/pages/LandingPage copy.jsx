import React, { useEffect, useState } from "react";
import {
  Scale,
  Users,
  Cog,
  BarChart3,
  BookOpen,
  Palette,
  Stethoscope,
  GraduationCap,
  Info,
  Laptop,
  Award,
  FileText,
  Repeat,
  UserPlus,
  Shuffle,
  UploadCloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ScrollToTop from "react-scroll-to-top";
import { DATA } from "../data/PMBData";

const EarlyBirdLanding = () => {
  const d = DATA;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(null);

  const fakultasList = [
    {
      id: 1,
      title: "FAKULTAS HUKUM",
      color: "#D32F2F",
      textColor: "white",
      icon: <Scale className="mx-auto w-12 h-12" />,
      link: "https://hukum.unpas.ac.id/",
      text: "Menjadi pusat kajian hukum dengan lulusan profesional dan berintegritas di bidang hukum publik maupun privat."
    },
    {
      id: 2,
      title: "FAKULTAS ILMU SOSIAL & POLITIK",
      color: "#003366",
      textColor: "white",
      icon: <Users className="mx-auto w-12 h-12" />,
      link: "https://fisip.unpas.ac.id/",
      text: "Mempelajari dinamika sosial, kebijakan publik, komunikasi, dan isu kesejahteraan masyarakat."
    },
    {
      id: 3,
      title: "FAKULTAS TEKNIK",
      color: "#FF652F",
      textColor: "white",
      icon: <Cog className="mx-auto w-12 h-12" />,
      link: "https://teknik.unpas.ac.id/",
      text: "Fokus pada inovasi dan rekayasa teknologi untuk berbagai kebutuhan industri modern."
    },
    {
      id: 4,
      title: "FAKULTAS EKONOMI & BISNIS",
      color: "#FFEB3B",
      textColor: "black",
      icon: <BarChart3 className="mx-auto w-12 h-12" />,
      link: "https://feb.unpas.ac.id/main/",
      text: "Mempelajari manajemen, akuntansi, bisnis, dan ekonomi untuk membentuk calon profesional kompetitif."
    },
    {
      id: 5,
      title: "FAKULTAS KEGURUAN & ILMU PENDIDIKAN",
      color: "#028A0F",
      textColor: "white",
      icon: <BookOpen className="mx-auto w-12 h-12" />,
      link: "https://fkip.unpas.ac.id/",
      text: "Mengembangkan kompetensi calon pendidik yang kreatif, komunikatif, dan siap memajukan pendidikan."
    },
    {
      id: 6,
      title: "FAKULTAS ILMU SENI & SASTRA",
      color: "#43296C",
      textColor: "white",
      icon: <Palette className="mx-auto w-12 h-12" />,
      link: "https://fiss.unpas.ac.id/",
      text: "Berfokus pada seni, desain, musik, fotografi, dan sastra untuk mengasah kreativitas serta estetika."
    },
    {
      id: 7,
      title: "FAKULTAS KEDOKTERAN",
      color: "#005005",
      textColor: "white",
      icon: <Stethoscope className="mx-auto w-12 h-12" />,
      link: "https://kedokteran.unpas.ac.id/",
      text: "Program pendidikan kedokteran berorientasi pada kompetensi klinis, empati, dan profesionalisme."
    },
    {
      id: 8,
      title: "PASCASARJANA",
      color: "#4197CB",
      textColor: "black",
      icon: <GraduationCap className="mx-auto w-12 h-12" />,
      link: "https://pasca.unpas.ac.id/",
      text: "Program magister & doktoral untuk meningkatkan kompetensi profesional dan kemampuan riset."
    },
  ];

  const calculateTimeLeft = () => {
    const target = new Date("2025-12-20T23:59:59+07:00").getTime();
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Hitung tinggi header (top bar + navbar)
    const headerHeight = document.getElementById("sticky-header")?.offsetHeight || 0;

    const topPosition = element.offsetTop - headerHeight - 12; // extra padding

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* WRAPPER */}
      <div className="mx-auto max-w-6xl px-4 pb-16">

        {/* HEADER WRAPPER — sticky */}
        <div id="sticky-header" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
          {/* TOP INFO BAR */}
          <div className="bg-emerald-600 text-white text-xs sm:text-sm py-2 px-4 rounded-b-xl shadow">
            <div className="flex flex-col gap-1 items-start justify-between sm:flex-row sm:items-center">
              {/* <span>
                🎉 Program Prioritas (Early Bird) PMB UNPAS – Pendaftaran 3–20 Desember | Daftar ulang 6–30 Desember
              </span> */}
              <span>
                🎉 Gelombang 1 Resmi Dibuka • Amankan benefit pendaftaran lebih awal
              </span>
              <div className="flex items-center gap-3 text-[11px] sm:text-xs">
                <a
                  href="tel:0222021440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline cursor-pointer">📞 Call Center PMB</a>
                <a
                  href="https://wa.me/62811960193?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20PMB%20UNPAS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline cursor-pointer">
                  💬 Chat WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* NAVBAR */}
          <header className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-300" >
                  <img src="/logo_unpas.png" alt="Logo Unpas" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-wide">Universitas Pasundan</span>
                  <span className="text-xs text-slate-500">Penerimaan Mahasiswa Baru</span>
                </div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <button className="text-slate-600 hover:text-emerald-700 cursor-pointer" onClick={() => scrollToSection("jalur-pendaftaran")}>Jalur Pendaftaran</button>
              <button className="text-slate-600 hover:text-emerald-700 cursor-pointer" onClick={() => scrollToSection("timeline-alur")}>Timeline &amp; Alur</button>
              <button className="text-slate-600 hover:text-emerald-700 cursor-pointer" onClick={() => scrollToSection("kenapa-early-bird")}>Kenapa Early Bird</button>
              <button className="text-slate-600 hover:text-emerald-700 cursor-pointer" onClick={() => scrollToSection("fakultas")}>Fakultas</button>
              <button className="text-slate-600 hover:text-emerald-700 cursor-pointer" onClick={() => scrollToSection("biaya-promo")}>Biaya &amp; Cicilan</button>
              <button className="text-slate-600 hover:text-emerald-700 cursor-pointer" onClick={() => scrollToSection("faq")}>FAQ</button>
            </div>

            {/* HAMBURGER MENU (Mobile Only) */}
            <button
              className="md:hidden text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <a
              href="https://situ2.unpas.ac.id/spmbfront/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block rounded-full bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow hover:bg-emerald-700 cursor-pointer"
            >
              Daftar Sekarang
            </a>

          </header>

          {/* MOBILE MENU DROPDOWN */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg py-3 px-4 flex flex-col gap-3 text-sm">
              <button onClick={() => { scrollToSection("jalur-pendaftaran"); setIsMenuOpen(false); }}>Jalur Pendaftaran</button>
              <button onClick={() => { scrollToSection("kenapa-early-bird"); setIsMenuOpen(false); }}>Kenapa Early Bird</button>
              <button onClick={() => { scrollToSection("timeline-alur"); setIsMenuOpen(false); }}>Timeline &amp; Alur</button>
              <button onClick={() => { scrollToSection("fakultas"); setIsMenuOpen(false); }}>Fakultas</button>
              <button onClick={() => { scrollToSection("biaya-promo"); setIsMenuOpen(false); }}>Biaya &amp; Cicilan</button>
              <button onClick={() => { scrollToSection("faq"); setIsMenuOpen(false); }}>FAQ</button>

              <a
                href="https://situ2.unpas.ac.id/spmbfront/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-emerald-600 px-4 py-2 text-sm text-center font-semibold text-white shadow hover:bg-emerald-700"
              >
                Daftar Sekarang
              </a>
            </div>
          )}
        </div>

        {/* HERO SECTION — GELombang 1 */}
        <section className="mt-4 grid gap-10 md:grid-cols-2 md:items-center">
          {/* HERO LEFT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span>📅</span>
              Penerimaan Mahasiswa Baru UNPAS 2026
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                Daftar Kuliah di UNPAS
                <span className="block text-emerald-700">
                  Gelombang 1 Sudah Dibuka
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600">
                Daftar lebih awal untuk{" "}
                <b className="text-slate-800">amankan kursi</b>, proses lebih cepat,
                dan dapat <b className="text-slate-800">pendampingan sampai registrasi</b>.
              </p>
            </div>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span>✅</span>
                <span>Bisa pilih jalur masuk yang paling sesuai</span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>Proses pendaftaran lebih santai & terarah</span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>Dapat pendampingan sampai jadi mahasiswa</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* KIRI: Tombol */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://situ2.unpas.ac.id/spmbfront/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700 text-center"
                >
                  Daftar Sekarang
                </a>
              </div>

              {/* KANAN: Link */}
              <a
                href="https://pmb.unpas.ac.id/biaya/rincian-lengkap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-emerald-700 underline-offset-2 hover:underline cursor-pointer sm:ml-2"
              >
                Lihat skema biaya &amp; promo →
              </a>
            </div>

            <p className="text-[11px] text-slate-500">
              *Detail skema biaya dan potensi potongan mengikuti ketentuan resmi Universitas Pasundan.
            </p>
          </div>

          {/* HERO RIGHT */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-emerald-700 via-emerald-500 to-emerald-300 p-6 text-white shadow-lg">
              <div className="rounded-xl overflow-hidden">
                <div className="aspect-[16/9] w-full">
                  <img
                    src="/mahasiswa.jpg"
                    alt="Mahasiswa UNPAS"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* BOX INFO RINGKAS */}
            <div className="rounded-2xl bg-white p-4 shadow-sm space-y-3">
              <div className="text-sm font-semibold text-slate-700">
                Kenapa daftar sekarang?
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex gap-2">
                  <span>⚡</span>
                  <span>Lebih cepat dapat kepastian kursi</span>
                </div>
                <div className="flex gap-2">
                  <span>🧭</span>
                  <span>Bisa tentukan jalur terbaik dari awal</span>
                </div>
                <div className="flex gap-2">
                  <span>🎓</span>
                  <span>Lebih siap sebelum tahun ajaran baru</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: KEUNGGULAN UNPAS */}
        {/* <section className="mt-16" id="keunggulan-unpas">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Keunggulan UNPAS</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Kampus swasta ternama di Bandung yang telah berdiri sejak 1960 di bawah Paguyuban Pasundan, dengan jaringan alumni yang
              luas, rekam jejak panjang sebagai PTS unggulan di Jawa Barat, suasana akademik yang religius, dan ekosistem pembelajaran
              yang adaptif terhadap dunia kerja modern.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
              <h3 className="text-sm font-semibold text-slate-900">Jaringan Alumni Luas</h3>
              <p className="mt-2 text-sm text-slate-600">
                Alumni tersebar di berbagai sektor industri, pemerintahan, dan wirausaha, menjadi jaringan kuat bagi kariermu.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
              <h3 className="text-sm font-semibold text-slate-900">Banyak Pilihan Beasiswa</h3>
              <p className="mt-2 text-sm text-slate-600">
                Tersedia beragam skema beasiswa dan jalur prestasi yang dapat membantu meringankan biaya studi.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
              <h3 className="text-sm font-semibold text-slate-900">Lingkungan Religius</h3>
              <p className="mt-2 text-sm text-slate-600">
                Nilai keislaman dan kesundaan menjadi fondasi pembentukan karakter mahasiswa UNPAS.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
              <h3 className="text-sm font-semibold text-slate-900">Adaptif Dunia Kerja</h3>
              <p className="mt-2 text-sm text-slate-600">
                Kurikulum dan kegiatan kampus dirancang selaras dengan kebutuhan industri dan perkembangan teknologi.
              </p>
            </div>
          </div>
        </section> */}

        {/* SECTION: JALUR PENDAFTARAN */}
        <section className="mt-16" id="jalur-pendaftaran">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Jalur Pendaftaran</h2>
            {/* <p className="mx-auto max-w-5xl text-sm sm:text-base text-slate-600">
              Pilih jalur pendaftaran yang sesuai dengan kebutuhan dan latar belakang pendidikanmu di Universitas Pasundan.
            </p> */}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                title: "USM Sarjana",
                date: "5 Jan 2026 - 10 Apr 2026",
                icon: Laptop,
                color: "bg-blue-100 text-blue-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/283",
              },
              {
                title: "PMDK",
                date: "5 Jan 2026 - 4 Jun 2026",
                icon: Award,
                color: "bg-yellow-100 text-yellow-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/286",
              },
              {
                title: "Kedokteran",
                date: "5 Jan 2026 - 24 Mar 2026",
                icon: Stethoscope,
                color: "bg-red-100 text-red-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/285",
              },
              {
                title: "PMDK Kedokteran",
                date: "5 Jan 2026 - 24 Mar 2026",
                icon: FileText,
                color: "bg-purple-100 text-purple-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/294",
              },
              {
                title: "RPL Perolehan 2025 Genap",
                date: "8 Des 2025 - 20 Jan 2026",
                icon: GraduationCap,
                color: "bg-emerald-100 text-emerald-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/209",
              },
              {
                title: "RPL Transfer 2025 Genap",
                date: "8 Des 2025 - 20 Jan 2026",
                icon: Repeat,
                color: "bg-cyan-100 text-cyan-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/210#",
              },
              {
                title: "RPL Perolehan 2026 Ganjil",
                date: "5 Jan 2026 - 30 Sep 2026",
                icon: GraduationCap,
                color: "bg-orange-100 text-orange-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/287",
              },
              {
                title: "RPL Transfer 2026 Ganjil",
                date: "5 Jan 2026 - 30 Sep 2026",
                icon: Repeat,
                color: "bg-pink-100 text-pink-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/211",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl bg-white p-5 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]"
                >
                  <div className="flex flex-col items-center">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-xs text-slate-600">{item.date}</p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
                  >
                    Lihat Detail
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: TIMELINE & ALUR */}
        <section className="mt-16" id="timeline-alur">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Timeline Program Prioritas &amp; Gelombang Lanjutan</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Ikuti alur berikut untuk memastikan kursimu aman di UNPAS dan memahami transisi ke Gelombang 1 reguler.
            </p>
          </div>

          <div className="mt-8">
            {/* DESKTOP TIMELINE */}
            <div className="hidden md:flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-emerald-700">3–20 Desember</div>
                    <h3 className="text-sm font-semibold text-slate-900">Pendaftaran Online Early Bird</h3>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Isi form pendaftaran, pilih fakultas &amp; prodi, upload dokumen dasar, dan ikuti instruksi pembayaran jika ada biaya lain
                  yang ditentukan.
                </p>
              </div>

              <div className="mt-4 h-px flex-1 bg-slate-200" />

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-amber-600">6–30 Desember</div>
                    <h3 className="text-sm font-semibold text-slate-900">Daftar Ulang &amp; Konfirmasi</h3>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Verifikasi kelulusan (jika ada), lakukan daftar ulang, pembayaran sesuai ketentuan, dan konfirmasi pilihan fakultas &amp;
                  prodi.
                </p>
              </div>

              <div className="mt-4 h-px flex-1 bg-slate-200" />

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-600">Januari 2026</div>
                    <h3 className="text-sm font-semibold text-slate-900">Pembukaan Gelombang 1 (Reguler)</h3>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Gelombang 1 resmi dibuka untuk pendaftaran reguler dengan skema biaya normal sesuai panduan resmi.
                </p>
              </div>
            </div>

            {/* MOBILE TIMELINE */}
            <div className="md:hidden mt-6 space-y-6">
              {[
                {
                  step: 1,
                  label: "3–20 Desember",
                  title: "Pendaftaran Online Early Bird",
                  desc: "Isi form, pilih fakultas & prodi, upload dokumen dasar.",
                },
                {
                  step: 2,
                  label: "6–30 Desember",
                  title: "Daftar Ulang & Konfirmasi",
                  desc: "Verifikasi kelulusan (jika ada), daftar ulang, dan konfirmasi pilihan.",
                },
                {
                  step: 3,
                  label: "Januari 2026",
                  title: "Pembukaan Gelombang 1 (Reguler)",
                  desc: "Gelombang 1 resmi dibuka untuk pendaftaran reguler.",
                },
              ].map((item, idx) => (
                <div key={item.step} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                      {item.step}
                    </div>
                    {idx < 2 && <div className="mt-1 h-full w-px flex-1 bg-slate-200" />}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-emerald-700">{item.label}</div>
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Alur Pendaftaran Early Bird</h3>
            <ol className="mt-3 grid gap-3 text-xs sm:text-sm md:grid-cols-3">
              <li className="rounded-xl bg-slate-50 p-3">
                <span className="font-semibold text-slate-800">1. Isi Form Online</span>
                <p className="mt-1 text-slate-600">
                  Klik &quot;Daftar Sekarang&quot;, lengkapi data diri, pilih fakultas, dan simpan akun pendaftaranmu.
                </p>
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                <span className="font-semibold text-slate-800">2. Upload Dokumen &amp; Proses Pembayaran</span>
                <p className="mt-1 text-slate-600">
                  Unggah dokumen yang diminta dan ikuti instruksi pembayaran sesuai ketentuan Early Bird.
                </p>
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                <span className="font-semibold text-slate-800">3. Verifikasi &amp; Daftar Ulang</span>
                <p className="mt-1 text-slate-600">
                  Cek pengumuman, lalu lakukan daftar ulang pada 6–30 Desember untuk mengunci kursi.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION: ALUR PENDAFTARAN */}
        <section className="mt-16" id="alur-pendaftaran">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Alur Pendaftaran PMB UNPAS
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Ikuti langkah-langkah berikut untuk menyelesaikan proses pendaftaran.
            </p>
          </div>

          {/* List Alur */}
          <div className="relative space-y-4">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-0 h-full w-px bg-slate-200" />

            {[
              {
                title: "Buat akun PMB",
                desc: "Mulai dari pembuatan akun.",
                icon: UserPlus,
                color: "bg-indigo-500",
                step: 1,
              },
              {
                title: "Pilih jalur masuk",
                desc: "PMDK / USM sesuai kebutuhan.",
                icon: Shuffle,
                color: "bg-emerald-500",
                step: 2,
              },
              {
                title: "Lengkapi data & upload berkas",
                desc: "Dokumen sesuai ketentuan jalur.",
                icon: UploadCloud,
                color: "bg-sky-500",
                step: 3,
              },
              {
                title: "Seleksi / validasi",
                desc: "Tahapan sesuai jalur yang dipilih.",
                icon: CheckCircle2,
                color: "bg-amber-500",
                step: 4,
              },
              {
                title: "Pengumuman & registrasi",
                desc: "Finalisasi setelah dinyatakan lolos.",
                icon: GraduationCap,
                color: "bg-pink-500",
                step: 5,
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="relative flex gap-4 rounded-2xl bg-white p-4 pl-16 shadow-sm ring-1 ring-slate-200"
              >
                {/* Icon */}
                <div
                  className={`absolute left-3 top-4 flex h-10 w-10 items-center justify-center rounded-xl ${item.color} text-white`}
                >
                  <item.icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm font-extrabold text-slate-900">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {item.desc}
                  </div>
                </div>

                {/* Step number */}
                <div className="text-2xl font-black text-slate-200">
                  {item.step}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl border border-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-amber-500 p-[1px]">
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-5 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm text-slate-600">Siap memulai?</div>
                <div className="text-base font-extrabold text-slate-900">
                  Mulai pendaftaran sekarang
                </div>
              </div>
              <button
                href="https://situ2.unpas.ac.id/spmbfront/"
                variant="primary"
              >
                Mulai dari Buat Akun
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: KENAPA EARLY BIRD */}
        <section className="mt-16" id="kenapa-early-bird">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Kenapa Harus Ambil Program Prioritas (Early Bird)?</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Bukan sekadar daftar lebih awal, tapi strategi supaya kamu lebih siap, lebih tenang, dan berpotensi lebih hemat sesuai
              kebijakan Program Prioritas PMB UNPAS 2026.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                🎯
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Amankan Kursi di Fakultas Favorit</h3>
              <p className="mt-2 text-sm text-slate-600">
                Beberapa fakultas dan prodi memiliki persaingan yang ketat dan minat yang tinggi. Daftar di periode Early Bird meningkatkan peluangmu masuk ke bidang studi yang
                kamu inginkan.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                💸
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Benefit Biaya Lebih Menguntungkan</h3>
              <p className="mt-2 text-sm text-slate-600">
                Potongan uang bangunan (DP) Rp 2.500.000, potongan uang kuliah (DPP) Rp 1.500.000, gratis biaya pendaftaran, dan
                potongan Rp 1.000.000 untuk pelunasan di awal.*
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                🧠
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Fokus ke Persiapan Akademik</h3>
              <p className="mt-2 text-sm text-slate-600">
                Setelah urusan pendaftaran dan daftar ulang beres, kamu bisa fokus ke UN/UTBK dan persiapan masuk kuliah tanpa beban
                administrasi.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                🧠
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Fokus ke Persiapan Akademik</h3>
              <p className="mt-2 text-sm text-slate-600">
                Setelah urusan pendaftaran dan daftar ulang beres, kamu bisa fokus ke UN/UTBK dan persiapan masuk kuliah tanpa beban
                administrasi.
              </p>
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] text-slate-500">
            *Syarat dan ketentuan berlaku sesuai kebijakan resmi UNPAS dan tertuang dalam SOP &amp; SK Program Prioritas PMB 2026.
          </p>
        </section>

        {/* SECTION: FAKULTAS */}
        {/* <section className="mt-16" id="fakultas">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Pilih Fakultas &amp; Bidang Studi</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              UNPAS memiliki berbagai fakultas dengan program studi unggulan. Mulailah dari memilih fakultas yang paling sesuai dengan
              minat dan rencana kariermu.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Fakultas Hukum</h3>
              <p className="mt-2 text-sm text-slate-600">
                Menjadi pusat kajian hukum yang melahirkan sarjana hukum profesional, kritis, dan berintegritas di bidang hukum publik
                maupun privat.
              </p>
              <button className="mt-3 text-xs font-semibold text-emerald-700 underline-offset-2 hover:underline cursor-pointer">
                Lihat daftar prodi →
              </button>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Fakultas Ilmu Sosial &amp; Ilmu Politik</h3>
              <p className="mt-2 text-sm text-slate-600">
                Mempelajari dinamika sosial, kebijakan publik, komunikasi, hubungan antarnegara, dan isu kesejahteraan masyarakat.
              </p>
              <button className="mt-3 text-xs font-semibold text-emerald-700 underline-offset-2 hover:underline cursor-pointer">
                Lihat daftar prodi →
              </button>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Fakultas Teknik</h3>
              <p className="mt-2 text-sm text-slate-600">
                Fokus pada pengembangan teknologi, rekayasa, dan inovasi di berbagai bidang teknik seperti teknik industri, informatika,
                mesin, lingkungan, dan perencanaan wilayah kota.
              </p>
              <button className="mt-3 text-xs font-semibold text-emerald-700 underline-offset-2 hover:underline cursor-pointer">
                Lihat daftar prodi →
              </button>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Fakultas Ekonomi &amp; Bisnis</h3>
              <p className="mt-2 text-sm text-slate-600">
                Mempelajari manajemen, akuntansi, dan ilmu ekonomi untuk menyiapkan lulusan yang siap berkarier di dunia bisnis,
                kewirausahaan, dan keuangan.
              </p>
              <button className="mt-3 text-xs font-semibold text-emerald-700 underline-offset-2 hover:underline cursor-pointer">
                Lihat daftar prodi →
              </button>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Fakultas Keguruan &amp; Ilmu Pendidikan</h3>
              <p className="mt-2 text-sm text-slate-600">
                Mengembangkan kompetensi calon pendidik profesional di berbagai bidang ilmu. FKIP UNPAS menyiapkan guru yang berkarakter, kreatif, dan siap meningkatkan kualitas pendidikan.
              </p>
              <button className="mt-3 text-xs font-semibold text-emerald-700 underline-offset-2 hover:underline cursor-pointer">
                Lihat daftar prodi →
              </button>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Fakultas Ilmu Seni &amp; Sastra</h3>
              <p className="mt-2 text-sm text-slate-600">
                Berfokus pada seni, desain, musik, fotografi, dan kajian sastra. FISS UNPAS menjadi ruang bagi mahasiswa untuk mengasah kreativitas dan kepekaan estetika.
              </p>
              <button className="mt-3 text-xs font-semibold text-emerald-700 underline-offset-2 hover:underline cursor-pointer">
                Lihat daftar prodi →
              </button>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Fakultas Kedokteran</h3>
              <p className="mt-2 text-sm text-slate-600">
                Menyelenggarakan pendidikan sarjana kedokteran yang menekankan kompetensi klinis, empati, dan pemahaman ilmiah. FK UNPAS menghasilkan calon dokter yang profesional dan berintegritas.
              </p>
              <button className="mt-3 text-xs font-semibold text-emerald-700 underline-offset-2 hover:underline cursor-pointer">
                Lihat daftar prodi →
              </button>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Program Pascasarjana</h3>
              <p className="mt-2 text-sm text-slate-600">
                Menawarkan program magister dan doktoral yang dirancang untuk meningkatkan keahlian profesional, kemampuan riset, dan
                kompetensi akademik lintas bidang.
              </p>
              <button className="mt-3 text-xs font-semibold text-emerald-700 underline-offset-2 hover:underline cursor-pointer">
                Lihat daftar prodi →
              </button>
            </div>

          </div>
        </section> */}

        {/* ========== */}
        {/* SECTION: FAKULTAS ICONS */}
        <section className="mt-16" id="fakultas">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Pilih Fakultas & Bidang Studi</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              UNPAS memiliki berbagai fakultas dengan program studi unggulan. Pilih fakultas yang paling sesuai dengan minatmu.
            </p>
          </div>

          <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {fakultasList.map((fak) => (
              <div key={fak.id}>
                {/* CARD */}
                <div
                  className="relative rounded-2xl p-5 shadow-sm text-center transition-all duration-300 hover:shadow-lg flex flex-col justify-between min-h-[180px]"
                  style={{ backgroundColor: fak.color, color: fak.textColor }}
                  onMouseEnter={() => setOpenInfo(fak.id)}
                  onMouseLeave={() => setOpenInfo(null)}
                >
                  {/* INFO ICON */}
                  <button
                    className="absolute top-2 right-2 bg-white/20 p-1.5 rounded-full hover:bg-white/30 cursor-pointer"
                    onClick={() => setOpenInfo(openInfo === fak.id ? null : fak.id)}
                  >
                    <Info className="w-4 h-4 text-white" style={{ color: fak.textColor }} />
                  </button>

                  <div className="flex flex-col items-center">
                    {fak.icon}
                    <h3 className="mt-3 text-sm font-bold tracking-wide leading-snug">
                      {fak.title}
                    </h3>
                    <a
                      href={fak.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-xs text-white/90 hover:underline"
                      style={{ color: fak.textColor }}
                    >
                      Lihat daftar prodi →
                    </a>
                  </div>

                  {/* INFO PANEL */}
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-white/20 rounded-xl mt-3 ${openInfo === fak.id ? "max-h-40 p-3" : "max-h-0 p-0"
                      }`} style={{ color: fak.textColor }}
                  >
                    <p className="text-xs leading-relaxed">{fak.text}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>


        {/* SECTION: BIAYA & SKEMA PROGRAM PRIORITAS */}
        <section className="mt-16" id="biaya-promo">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Biaya &amp; Skema Program Prioritas (Early Bird)</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Khusus pendaftar Program Prioritas, kamu mendapatkan paket benefit biaya yang lebih menguntungkan dibanding gelombang
              reguler.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Ringkasan Benefit Biaya Program Prioritas</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  • Potongan uang bangunan (DP): <span className="font-semibold">Rp 2.500.000</span>
                </li>
                <li>
                  • Potongan uang kuliah (DPP): <span className="font-semibold">Rp 1.500.000</span>
                </li>
                <li>
                  • <span className="font-semibold">Gratis biaya pendaftaran</span> (formulir Rp 300.000)
                </li>
                <li>
                  • Potongan tambahan <span className="font-semibold">Rp 1.000.000</span> bagi yang melakukan pelunasan di awal
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Catatan Penting</h3>
              <p className="mt-2 text-sm text-slate-600">
                Besaran potongan di atas berlaku khusus untuk periode Program Prioritas 3–20 Desember. Skema ini dapat dikombinasikan
                dengan jalur prestasi atau beasiswa tertentu sesuai kebijakan resmi UNPAS.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Detail final akan tercantum dalam panduan resmi biaya pendidikan dan keputusan Rektor/Yayasan.
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                <thead className="bg-emerald-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Jalur / Gelombang</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Periode</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Biaya Pendaftaran</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Skema Potongan</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Catatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Program Prioritas (Early Bird)</td>
                    <td className="px-4 py-3 text-slate-700">3–20 Desember</td>
                    <td className="px-4 py-3 text-slate-700">Gratis (dari Rp 300.000)</td>
                    <td className="px-4 py-3 text-slate-700">
                      Potongan DP Rp 2.500.000 + potongan DPP Rp 1.500.000 + potongan Rp 1.000.000 untuk pelunasan awal
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Hanya berlaku untuk pendaftar dan daftar ulang sesuai periode Program Prioritas.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Gelombang 1</td>
                    <td className="px-4 py-3 text-slate-700">(Estimasi) Jan–Mar</td>
                    <td className="px-4 py-3 text-slate-700">Rp 300.000</td>
                    <td className="px-4 py-3 text-slate-700">Tanpa potongan Program Prioritas (skema reguler)</td>
                    <td className="px-4 py-3 text-slate-600">
                      Detail mengikuti panduan resmi biaya pendidikan UNPAS.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Gelombang 2 &amp; 3</td>
                    <td className="px-4 py-3 text-slate-700">(Estimasi) Apr–Agt</td>
                    <td className="px-4 py-3 text-slate-700">Rp 300.000</td>
                    <td className="px-4 py-3 text-slate-700">Tanpa potongan Program Prioritas (skema reguler)</td>
                    <td className="px-4 py-3 text-slate-600">
                      Potensi kuota lebih terbatas di beberapa prodi favorit.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BANNER: KETENTUAN REFUND */}
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">

            {/* Text Section */}
            <div className="w-full">
              <p className="mt-1 text-lg text-black-800/80 font-bold">
                Jangan khawatir! UNPAS memberi perlindungan pengembalian biaya untuk situasi tertentu.
                Baca dokumen ketentuan resminya agar kamu mendaftar tanpa ragu.
              </p>
            </div>

            {/* CTA Button – Full Width */}
            <div className="w-full mt-4">
              <a
                href="https://s.id/unpas_pmb_refund"
                target="_blank"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
              >
                📄 Unduh Dokumen Persetujuan Ketentuan Pengembalian Biaya Registrasi Camaba Universitas Pasundan 2026-2027
              </a>
            </div>

          </div>

        </section>

        {/* SECTION: TESTIMONI */}
        <section className="mt-16" id="testimoni">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Cerita dari Mahasiswa &amp; Orang Tua</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Pengalaman mereka yang memilih daftar di gelombang awal dan kini resmi menjadi bagian dari keluarga besar UNPAS.
            </p>
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

        {/* SECTION: FAQ */}
        {/* <section className="mt-16" id="faq">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">FAQ – Pertanyaan Seputar Program Prioritas (Early Bird)</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Ringkasan beberapa kebijakan penting Program Prioritas sesuai SOP &amp; SK PMB UNPAS 2026. Untuk informasi lengkap,
              tetap mengacu pada dokumen resmi yang diterbitkan oleh UNPAS.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Apa bedanya Program Prioritas dengan gelombang reguler?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Program Prioritas dibuka lebih awal dengan kuota terbatas per fakultas serta paket benefit biaya yang lebih
                menguntungkan (potongan DP, potongan DPP, gratis formulir, dan bonus pelunasan awal). Gelombang reguler menggunakan skema
                biaya normal sesuai panduan resmi biaya pendidikan.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Kalau saya diterima di PTN, apakah bisa refund?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Peserta Program Prioritas yang diterima di perguruan tinggi negeri dapat mengajukan refund sesuai SOP Program Prioritas.
                Besaran dan mekanisme refund mengacu pada SK Rektor tentang Program Prioritas PMB 2026. Silakan hubungi Call Center PMB di
                <span className="font-semibold"> 0811960193</span> untuk panduan teknis pengajuan.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Bagaimana kalau saya tidak daftar ulang sampai 30 Desember?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Jika tidak melakukan daftar ulang sampai 30 Desember, hak benefit Program Prioritas (potongan biaya dan prioritas kursi)
                dapat dinyatakan batal sesuai ketentuan. Kamu tetap bisa melanjutkan proses pada gelombang reguler jika masih dibuka dan
                kuota masih tersedia, mengikuti aturan yang berlaku.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm md:col-span-2">
              <h3 className="text-sm font-semibold text-slate-900">Apakah saya bisa mengubah pilihan fakultas atau program studi?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Perubahan pilihan fakultas atau program studi dimungkinkan sepanjang mengikuti ketentuan yang berlaku, ketersediaan kuota,
                dan jadwal yang ditetapkan dalam SOP PMB. Silakan koordinasi dengan Tim PMB melalui WhatsApp atau Call Center
                <span className="font-semibold"> 0811960193</span> untuk informasi terbaru dan prosedur resminya.
              </p>
            </div>
          </div>
        </section> */}


        {/* SECTION: FAQ */}
        <section className="mt-16" id="faq">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">FAQ – Pertanyaan Seputar PMB</h2>
            {/* <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Ringkasan beberapa kebijakan penting Program Prioritas sesuai SOP &amp; SK PMB UNPAS 2026.
              Untuk informasi lengkap, tetap mengacu pada dokumen resmi yang diterbitkan oleh UNPAS.
            </p> */}
          </div>

          <div className="mt-8 space-y-4">
            {/* FAQ 1 */}
            <details className="group rounded-2xl bg-white p-4 shadow-sm" open>
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex justify-between items-center">
                Apa bedanya Program Prioritas dengan gelombang reguler?
                <span className="transition-transform group-open:rotate-180 text-slate-500">⌄</span>
              </summary>

              <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
                <p className="mt-2 text-sm text-slate-600">
                  Program Prioritas dibuka lebih awal dengan kuota terbatas per fakultas serta paket benefit biaya
                  yang lebih menguntungkan (potongan DP, potongan DPP, gratis formulir, dan bonus pelunasan awal).
                  Gelombang reguler menggunakan skema biaya normal sesuai panduan resmi biaya pendidikan.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group rounded-2xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex justify-between items-center">
                Kalau saya diterima di PTN, apakah bisa refund?
                <span className="transition-transform group-open:rotate-180 text-slate-500">⌄</span>
              </summary>

              <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
                <p className="mt-2 text-sm text-slate-600">
                  Peserta Program Prioritas yang diterima di perguruan tinggi negeri dapat mengajukan refund sesuai SOP Program Prioritas.
                  Besaran dan mekanisme refund mengacu pada SK Rektor tentang Program Prioritas PMB 2026.
                  Silakan hubungi Call Center PMB di <span className="font-semibold">0811960193</span> untuk panduan teknis pengajuan.
                  <br />
                  <br />
                  <a href="https://s.id/unpas_pmb_refund" target="_blank" className="text-emerald-500 font-semibold underline mt-8">Dokumen Persetujuan Ketentuan Refund</a>
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group rounded-2xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex justify-between items-center">
                Bagaimana kalau saya tidak daftar ulang sampai 30 Desember?
                <span className="transition-transform group-open:rotate-180 text-slate-500">⌄</span>
              </summary>

              <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
                <p className="mt-2 text-sm text-slate-600">
                  Jika tidak melakukan daftar ulang sampai 30 Desember, hak benefit Program Prioritas (potongan biaya dan prioritas kursi)
                  dapat dinyatakan batal sesuai ketentuan. Kamu tetap bisa melanjutkan proses pada gelombang reguler jika masih dibuka
                  dan kuota masih tersedia, mengikuti aturan yang berlaku.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group rounded-2xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex justify-between items-center">
                Apakah saya bisa mengubah pilihan fakultas atau program studi?
                <span className="transition-transform group-open:rotate-180 text-slate-500">⌄</span>
              </summary>

              <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
                <p className="mt-2 text-sm text-slate-600">
                  Perubahan pilihan fakultas atau program studi dimungkinkan sepanjang mengikuti ketentuan yang berlaku,
                  ketersediaan kuota, dan jadwal yang ditetapkan dalam SOP PMB. Silakan koordinasi dengan Tim PMB melalui WhatsApp
                  atau Call Center <span className="font-semibold">0811960193</span> untuk informasi terbaru dan prosedur resminya.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* SECTION: KONTAK */}
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
                className="mt-3 inline-flex justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 cursor-pointer"
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
                className="mt-3 inline-flex justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 cursor-pointer"
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
              {/* <button className="mt-3 inline-flex justify-center rounded-full border border-emerald-600 px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 cursor-pointer">
                Lihat Lokasi di Maps
              </button> */}

              <a
                href="https://www.google.com/maps/place/Universitas+Pasundan/@-6.905366,107.6032335,17z/data=!4m14!1m7!3m6!1s0x2e68e865b85ee0d7:0x5fa28af82d475f8a!2sUniversitas+Pasundan!8m2!3d-6.905366!4d107.6081044!16s%2Fg%2F1218dxl7!3m5!1s0x2e68e865b85ee0d7:0x5fa28af82d475f8a!8m2!3d-6.905366!4d107.6081044!16s%2Fg%2F1218dxl7?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 cursor-pointer"
              >
                Lihat Lokasi di Maps
              </a>
            </div>
          </div>

          {/* <p className="mt-4 text-center text-[11px] text-slate-500">
            Tertarik kunjungan sekolah atau rombongan? Hubungi kami untuk jadwal school visit dan campus tour di Kampus UNPAS Tamansari.
          </p> */}
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="font-semibold text-slate-700">
              Penerimaan Mahasiswa Baru 2026 – Universitas Pasundan
            </div>
            <div>© 2026 Universitas Pasundan. All rights reserved.</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="hover:text-slate-700 cursor-pointer">Tentang UNPAS</button>
            <button className="hover:text-slate-700 cursor-pointer">Fakultas &amp; Prodi</button>
            <button className="hover:text-slate-700 cursor-pointer">Beasiswa</button>
            <button className="hover:text-slate-700 cursor-pointer">Kebijakan Privasi</button>
          </div>
        </div>
      </footer>

      <ScrollToTop smooth style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
    </div>
  );
}

export default EarlyBirdLanding;