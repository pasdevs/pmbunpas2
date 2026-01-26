import React, { useEffect, useState } from "react";
import {
  Scale, Users, Cog, BarChart3, BookOpen, Palette, Stethoscope, GraduationCap, Info, Laptop, Award, FileText, Repeat, UserPlus, Shuffle, UploadCloud, CheckCircle2, Rocket
} from "lucide-react";
import ScrollToTop from "react-scroll-to-top";
import { DATA } from "../data/PMBData";
import { motion } from "framer-motion";

const PMBLanding = () => {
  const d = DATA;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(null);
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (!select) return;

    select.value = lang;
    select.dispatchEvent(new Event("change"));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
      {/* GOOGLE TRANSLATE ELEMENT (HIDDEN) */}
      <div id="google_translate_element" className="hidden" />
      {/* WRAPPER */}

      {/* HEADER WRAPPER — sticky */}
      <div id="sticky-header" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        {/* TOP INFO BAR */}
        <div className="bg-emerald-600 text-white text-xs sm:text-sm py-2 px-4 shadow">
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
        <header className="py-4">
          <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">

            {/* LEFT: LOGO */}
            <a href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-300">
                <img
                  src="/logo_unpas.png"
                  alt="Logo Unpas"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide">
                  Universitas Pasundan
                </span>
                <span className="text-xs text-slate-500">
                  Penerimaan Mahasiswa Baru
                </span>
              </div>
            </a>

            {/* CENTER: MENU */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollToSection("jalur-pendaftaran")} className="text-slate-600 hover:text-emerald-700 cursor-pointer">
                Jalur Pendaftaran
              </button>
              <button onClick={() => scrollToSection("timeline-alur")} className="text-slate-600 hover:text-emerald-700 cursor-pointer">
                Timeline & Alur
              </button>
              <button onClick={() => scrollToSection("fakultas")} className="text-slate-600 hover:text-emerald-700 cursor-pointer">
                Fakultas
              </button>
              <a
                href="https://pmb.unpas.ac.id/biaya/rincian-lengkap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-emerald-700"
              >
                Biaya
              </a>
              <button onClick={() => scrollToSection("panduan-pembayaran")} className="text-slate-600 hover:text-emerald-700 cursor-pointer">
                Panduan Pembayaran
              </button>
              <button onClick={() => scrollToSection("ketentuan-refund")} className="text-slate-600 hover:text-emerald-700 cursor-pointer">
                Ketentuan Refund
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-600 hover:text-emerald-700 cursor-pointer">
                FAQ
              </button>
            </div>

            {/* RIGHT: CTA + HAMBURGER */}
            <div className="flex items-center gap-3">
              {/* Hamburger */}
              <button
                className="md:hidden text-slate-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* CTA */}
              <a
                href="https://situ2.unpas.ac.id/spmbfront/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700"
              >
                Daftar Sekarang
              </a>
            </div>

          </div>
        </header>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-3 px-4 flex flex-col gap-3 text-sm">
            <button onClick={() => { scrollToSection("jalur-pendaftaran"); setIsMenuOpen(false); }}>Jalur Pendaftaran</button>
            <button onClick={() => { scrollToSection("timeline-alur"); setIsMenuOpen(false); }}>Timeline &amp; Alur</button>
            <button onClick={() => { scrollToSection("fakultas"); setIsMenuOpen(false); }}>Fakultas</button>
            <a
              href="https://pmb.unpas.ac.id/biaya/rincian-lengkap/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-2 rounded-lg hover:bg-emerald-50 transition"
            >
              Biaya &amp; Cicilan
            </a>
            <button onClick={() => { scrollToSection("panduan-pembayaran"); setIsMenuOpen(false); }}>Panduan Pembayaran</button>
            <button onClick={() => { scrollToSection("ketentuan-refund"); setIsMenuOpen(false); }}>Ketentuan Refund</button>
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

      {/* HERO SECTION — FULL IMAGE OVERLAY (FULL BLEED) */}
      <section className="relative w-full overflow-hidden pt-[120px] min-h-[85vh] md:min-h-screen flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/mahasiswa.jpg"
            alt="Mahasiswa UNPAS"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/70 to-emerald-600/40" />
        </div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 px-6 md:px-12 text-white w-full"
        >
          <div className="max-w-2xl space-y-6">

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Bikin Cerita Sukses
              <span className="block text-yellow-300">Versi Kamu</span>
              Mulai di Sini 🔥
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-white/90"
            >
              <span className="font-semibold">
                Tempat di mana generasi hebat lahir, tumbuh, dan berkarya.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeScale}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="https://situ2.unpas.ac.id/spmbfront/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-700 shadow-lg hover:scale-[1.05] transition"
              >
                🚀 Daftar Sekarang
              </a>

              <a
                href="https://pmb.unpas.ac.id/biaya/rincian-lengkap/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                💸 Lihat Biaya & Promo
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        {/* SECTION: JALUR PENDAFTARAN */}
        <section className="mt-16" id="jalur-pendaftaran">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Jalur Pendaftaran PMB UNPAS</h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                title: "Early Bird",
                date: "3 Des 2025 - 20 Des 2025",
                icon: Rocket,
                color: "bg-red-100 text-red-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/281",
                status: "closed",
                wave: "Early Bird"
              },
              {
                title: "USM Sarjana",
                date: "5 Jan 2026 - 10 Apr 2026",
                icon: Laptop,
                color: "bg-blue-100 text-blue-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/283",
                status: "open",
                wave: "Gelombang 1"
              },
              {
                title: "PMDK",
                date: "5 Jan 2026 - 4 Jun 2026",
                icon: Award,
                color: "bg-yellow-100 text-yellow-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/286",
                status: "open",
                wave: "Gelombang 1"
              },
              {
                title: "Kedokteran",
                date: "5 Jan 2026 - 24 Mar 2026",
                icon: Stethoscope,
                color: "bg-red-100 text-red-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/285",
                status: "open",
                wave: "Gelombang 1"
              },
              {
                title: "PMDK Kedokteran",
                date: "5 Jan 2026 - 24 Mar 2026",
                icon: FileText,
                color: "bg-purple-100 text-purple-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/294",
                status: "open",
                wave: "Gelombang 1"
              },
              {
                title: "RPL Perolehan 2026 Ganjil",
                date: "5 Jan 2026 - 30 Sep 2026",
                icon: GraduationCap,
                color: "bg-orange-100 text-orange-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/287",
                status: "open",
                wave: "Gelombang 1"
              },
              {
                title: "RPL Transfer 2026 Ganjil",
                date: "5 Jan 2026 - 30 Sep 2026",
                icon: Repeat,
                color: "bg-pink-100 text-pink-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/211",
                status: "open",
                wave: "Gelombang 1"
              },
              {
                title: "RPL Perolehan 2025 Genap",
                date: "8 Des 2025 - 20 Jan 2026",
                icon: GraduationCap,
                color: "bg-emerald-100 text-emerald-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/209",
                status: "closed",
                wave: "Gelombang 1"
              },
              {
                title: "RPL Transfer 2025 Genap",
                date: "8 Des 2025 - 20 Jan 2026",
                icon: Repeat,
                color: "bg-cyan-100 text-cyan-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/210#",
                status: "closed",
                wave: "Gelombang 1"
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              const isClosed = item.status === "closed";

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col justify-between rounded-2xl bg-white p-5 text-center shadow-sm transition-all duration-300
            ${isClosed ? "opacity-70" : "hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]"}`}
                >
                  {/* BADGE GELombang */}
                  {item.wave && (
                    <div className="absolute left-3 top-3 rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-700">
                      {item.wave}
                    </div>
                  )}

                  {/* BADGE STATUS */}
                  <div
                    className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold
              ${isClosed
                        ? "bg-red-700 text-white"
                        : "bg-emerald-100 text-emerald-700"}`}
                  >
                    {isClosed ? "DITUTUP" : "DIBUKA"}
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col items-center">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600">
                      {item.date}
                    </p>
                  </div>

                  {/* BUTTON */}
                  {isClosed ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-300 px-4 py-2 text-sm font-medium text-slate-500 cursor-pointer"
                    >
                      Pendaftaran Ditutup
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
                    >
                      Lihat Detail
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: ALUR PENDAFTARAN */}
        <section className="mt-16" id="timeline-alur">
          {/* Header */}
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Alur Pendaftaran PMB UNPAS
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Ikuti langkah-langkah berikut untuk menyelesaikan proses pendaftaran.
            </p>
          </div>

          {/* List Alur */}
          <div className="relative mt-10 space-y-4">
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
                desc: "PMDK/USM sesuai kebutuhan.",
                icon: Shuffle,
                color: "bg-emerald-500",
                step: 2,
              },
              {
                title: "Lengkapi data & upload berkas",
                desc: "Upload dokumen sesuai ketentuan jalur.",
                icon: UploadCloud,
                color: "bg-sky-500",
                step: 3,
              },
              {
                title: "Seleksi/Validasi berkas",
                desc: "Ikuti tahapan seleksi sesuai jalur yang dipilih.",
                icon: CheckCircle2,
                color: "bg-amber-500",
                step: 4,
              },
              {
                title: "Pengumuman & registrasi",
                desc: "Pengumuman kelulusan dan registrasi ulang.",
                icon: GraduationCap,
                color: "bg-pink-500",
                step: 5,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative flex gap-4 rounded-2xl bg-white p-4 pl-16 shadow-sm ring-1 ring-slate-200"
              >
                {/* Icon */}
                <div
                  className={`absolute left-3 top-4 flex h-10 w-10 items-center justify-center rounded-2xl ${item.color} text-white`}
                >
                  <item.icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-900">
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
          <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm text-slate-600">Siap memulai?</div>
                <div className="text-base font-semibold text-slate-900">
                  Mulai pendaftaran sekarang
                </div>
              </div>
              <a
                href="https://situ2.unpas.ac.id/spmbfront/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
              >
                Mulai dari Buat Akun
              </a>
            </div>
          </div>
        </section>

        {/* ========== */}
        {/* SECTION: FAKULTAS ICONS */}
        <section className="mt-16" id="fakultas">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Fakultas & Program Studi</h2>
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

        {/* SECTION: PANDUAN PEMBAYARAN */}
        <section className="mt-16" id="panduan-pembayaran">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">
              Panduan Pembayaran
            </h2>
            {/* <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Panduan resmi tata cara pembayaran formulir dan daftar ulang mahasiswa baru.
            </p> */}
          </div>

          {/* PDF Viewer (Desktop) */}
          <div className="mt-8 hidden md:block rounded-2xl overflow-hidden shadow-sm border bg-white">
            <iframe
              src="/panduan_pembayaran.pdf"
              className="w-full h-[80vh]"
            />
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 md:hidden text-center">
            <a
              href="/panduan_pembayaran.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow"
            >
              📄 Buka Panduan Pembayaran (PDF)
            </a>
            <p className="mt-2 text-xs text-slate-500">
              Disarankan dibuka layar penuh di mobile
            </p>
          </div>
        </section>

        {/* SECTION: Ketentuan Refund */}
        <section className="mt-16" id="ketentuan-refund">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Ketentuan Pengembalian Biaya Registrasi Calon Mahasiswa baru UNPAS</h2>
          </div>

          {/* BANNER: KETENTUAN REFUND */}
          <div className="mt-8 rounded-2xl border border-red-200 bg-[#ffe2e273] p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">

            {/* Text Section */}
            <div className="w-full">
              <p className="mt-1 text-md text-black-800/80 font-bold">
                Jangan khawatir! UNPAS memberi perlindungan pengembalian biaya untuk situasi tertentu.
                <br />Unduh dan baca dokumen ketentuan resminya agar kamu mendaftar tanpa ragu.
              </p>
            </div>

            {/* CTA Button – Full Width */}
            <div className="w-full mt-4">
              <a
                href="https://s.id/unpas_pmb_refund"
                target="_blank"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
              >
                📄 Unduh Dokumen Persetujuan Ketentuan Refund Camaba Universitas Pasundan 2026-2027
              </a>
            </div>

            <div className="w-full mt-4">
              <a
                href="https://s.id/unpas_pmbfk_refund"
                target="_blank"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
              >
                📄 Unduh Dokumen Persetujuan Ketentuan Refund Camaba Kedokteran Universitas Pasundan 2026-2027
              </a>
            </div>

          </div>

        </section>

        {/* SECTION: TESTIMONI */}
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

        {/* SECTION: FAQ */}
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

      {/* FLOATING LANGUAGE SWITCHER */}
      <div className="fixed bottom-5 left-5 z-[9999]">
        <div className="relative">
          {/* Button */}
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-lg border text-sm font-semibold hover:bg-slate-50"
          >
            🇮🇩 ID
            <svg
              className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown */}
          {langOpen && (
            <div className="absolute bottom-14 left-0 w-44 rounded-xl bg-white shadow-xl border overflow-hidden text-sm">
              <button
                onClick={() => changeLanguage("id")}
                className="w-full px-4 py-2 text-left hover:bg-slate-100"
              >
                🇮🇩 Indonesia
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className="w-full px-4 py-2 text-left hover:bg-slate-100"
              >
                🇸🇦 Arabic
              </button>
              <button
                onClick={() => changeLanguage("su")}
                className="w-full px-4 py-2 text-left hover:bg-slate-100"
              >
                🟢 Sundanese
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="w-full px-4 py-2 text-left hover:bg-slate-100"
              >
                🇬🇧 English
              </button>
            </div>
          )}
        </div>
      </div>

      <ScrollToTop smooth style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
    </div>
  );
}

export default PMBLanding;