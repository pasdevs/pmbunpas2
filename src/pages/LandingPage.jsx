import React, { useEffect, useState, useRef } from "react";
import {
  ShieldCheck, Users, Stethoscope, GraduationCap, Laptop, Award, FileText, Repeat, UserPlus, Shuffle, UploadCloud, CheckCircle2, Rocket, IdCard, SquarePen, LaptopMinimalCheck
} from "lucide-react";
import ScrollToTop from "react-scroll-to-top";
import { motion, AnimatePresence } from "framer-motion";
import ProdiExplorer from "../components/ProdiExplorer";
import INFORMASI_LIST from "../data/InformasiList";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'

//import section
import TestimoniSection from "../sections/TestimoniSection";
import FaqSection from "../sections/FaqSection";
import ContactSection from "../sections/ContactSection";


const PMBLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("id");
  const langRef = useRef(null);

  const [showWA, setShowWA] = useState(false);

  const handleClickWhatsApp = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "click_whatsapp",
        source: "floating_whatsapp",
        page: "pmb.unpas.ac.id",
      });
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setShowWA(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Pilih Jalur Pendaftaran",
      desc: "Tentukan jalur masuk sesuai pilihan dan ketentuan kampus Universitas Pasundan.",
    },
    {
      id: 2,
      title: "Isi Formulir Pendaftaran",
      desc: "Lengkapi data diri secara lengkap dan benar pada formulir pendaftaran online.",
    },
    {
      id: 3,
      title: "Bayar Biaya Pendaftaran",
      desc: "Lakukan pembayaran biaya pendaftaran sesuai instruksi yang tersedia.",
    },
    {
      id: 4,
      title: "Unggah Berkas & Ikuti Seleksi",
      desc: "Unggah dokumen persyaratan dan ikuti tahapan seleksi sesuai jadwal.",
    },
    {
      id: 5,
      title: "Hasil Seleksi",
      desc: "Login ke akun PMB untuk melihat hasil seleksi, serta informasi lanjutan registrasi mahasiswa baru.",
      cta: true,
      ctaLabel: "Login PMB & Lihat Hasil Seleksi",
      ctaLink: "https://situ2.unpas.ac.id/spmbfront/login",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  const badges = [
    {
      icon: ShieldCheck,
      text: "Di bawah naungan YPT Pasundan",
    },
    {
      icon: Users,
      text: "Paguyuban Pasundan (est. 1913)",
    },
    {
      icon: GraduationCap,
      text: "UNPAS berdiri 1960",
    },
  ];

  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % badges.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const LANGUAGES = [
    { code: "id", short: "ID", label: "Indonesian", icon: "/img/id.png" },
    { code: "ar", short: "AR", label: "Arabic", icon: "/img/ar.png" },
    { code: "su", short: "SU", label: "Sundanese", icon: "/img/su.png" },
    { code: "en", short: "EN", label: "English", icon: "/img/en.png" },
  ];

  function setGoogTrans(lang) {
    if (lang === "id") {
      // HAPUS COOKIE = balik ke bahasa asli
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    } else {
      const value = `/id/${lang}`;
      document.cookie = `googtrans=${value}; path=/`;
      document.cookie = `googtrans=${value}; path=/; domain=${window.location.hostname}`;
    }
  }

  function getGoogTrans() {
    const match = document.cookie.match(/googtrans=([^;]+)/);
    if (!match) return null;
    const parts = match[1].split("/");
    return parts[2] || null;
  }

  const changeLanguage = (lang) => {
    setGoogTrans(lang);

    if (lang === "id") {
      // Reload halaman untuk reset DOM Google Translate
      window.location.reload();
      return;
    }

    const tryChange = () => {
      const select = document.querySelector(".goog-te-combo");
      if (!select) return false;

      select.value = lang;
      select.dispatchEvent(new Event("change"));
      return true;
    };

    let tries = 0;
    const interval = setInterval(() => {
      if (tryChange() || tries > 20) {
        clearInterval(interval);
      }
      tries++;
    }, 300);
  };

  useEffect(() => {
    const saved = getGoogTrans();

    if (!saved || saved === "id") {
      setSelectedLang("id");
      return;
    }

    if (["en", "ar", "su"].includes(saved)) {
      setSelectedLang(saved);
      changeLanguage(saved);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const sectionContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const sectionItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
      {showWA && <FloatingWhatsApp
        phoneNumber='62811960193'
        accountName='Universitas Pasundan'
        avatar='/logo_unpas.png'
        statusMessage=''
        chatMessage='Salam 👋 Selamat datang di Universitas Pasundan.'
        darkMode={false}
        allowClickAway={true}
        allowEsc={true}
        notification={false}
        notificationSound={false}
        buttonStyle={{ bottom: "10px" }}
        onClick={handleClickWhatsApp}
      />}
      {/* GOOGLE TRANSLATE ELEMENT (HIDDEN) */}
      <div id="google_translate_element" className="hidden" />
      {/* WRAPPER */}

      {/* HEADER WRAPPER — sticky */}
      <div id="sticky-header" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        {/* NAVBAR */}
        <header className="py-4">
          <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">

            {/* LEFT: LOGO */}
            <a href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-300">
                <img
                  src="/logo_unpas.png"
                  loading="lazy"
                  decoding="async"
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
              <button onClick={() => scrollToSection("jalur-pendaftaran")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
                Jalur Pendaftaran
              </button>
              <button onClick={() => scrollToSection("program-studi")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
                Program Studi
              </button>
              <button onClick={() => scrollToSection("timeline-alur")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
                Panduan Pendaftaran
              </button>
              {/* <button onClick={() => scrollToSection("informasi-pengumuman")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
                Informasi &amp; Pengumuman
              </button> */}
              <a
                href="https://pmb.unpas.ac.id/biaya/rincian-lengkap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#5a4c43]"
              >
                Biaya
              </a>
              {/* <button onClick={() => scrollToSection("ketentuan-refund")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
                Ketentuan Refund
              </button> */}
              <button onClick={() => scrollToSection("faq")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
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

              {/* CTA BUTTONS */}
              <div className="hidden md:flex items-center gap-3">
                {/* LOGIN */}
                <a
                  href="https://situ2.unpas.ac.id/spmbfront/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#6B5B51] px-4 py-2 text-sm font-semibold text-[#6B5B51] hover:bg-[#f3efec] transition"
                >
                  Login
                </a>

                {/* DAFTAR */}
                {/* <a
                  href="https://situ2.unpas.ac.id/spmbfront/jalur-seleksi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[#6B5B51] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#5a4c43]"
                >
                  Daftar Sekarang
                </a> */}
              </div>
            </div>

          </div>
        </header>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-3 px-4 flex flex-col gap-3 text-sm">
            <button onClick={() => { scrollToSection("jalur-pendaftaran"); setIsMenuOpen(false); }}>Jalur Pendaftaran</button>
            <button onClick={() => { scrollToSection("program-studi"); setIsMenuOpen(false); }}>Program Studi</button>
            <button onClick={() => { scrollToSection("timeline-alur"); setIsMenuOpen(false); }}>Panduan Pendaftaran</button>
            {/* <button onClick={() => { scrollToSection("informasi-pengumuman"); setIsMenuOpen(false); }}>Informasi &amp; Pengumuman</button> */}
            <a
              href="https://pmb.unpas.ac.id/biaya/rincian-lengkap/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-2 rounded-lg hover:bg-[#f3efec] transition"
            >
              Biaya &amp; Cicilan
            </a>
            {/* <button onClick={() => { scrollToSection("ketentuan-refund"); setIsMenuOpen(false); }}>Ketentuan Refund</button> */}
            <button onClick={() => { scrollToSection("faq"); setIsMenuOpen(false); }}>FAQ</button>

            {/* LOGIN */}
            <a
              href="https://situ2.unpas.ac.id/spmbfront/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full border border-[#6B5B51] px-4 py-2 text-sm text-center font-semibold text-[#6B5B51] hover:bg-[#f3efec] transition"
            >
              Login
            </a>

            {/* DAFTAR */}
            {/* <a
              href="https://situ2.unpas.ac.id/spmbfront/jalur-seleksi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#6B5B51] px-4 py-2 text-sm text-center font-semibold text-white shadow hover:bg-[#5a4c43]"
            >
              Daftar Sekarang
            </a> */}
          </div>
        )}
      </div>

      {/* HERO SECTION — CENTERED + BROWN GRADIENT */}
      {/* <section className="relative w-full overflow-hidden pt-[120px] min-h-[90vh] md:min-h-screen flex items-center justify-center"> */}
      <section className="relative w-full overflow-hidden pt-[96px] md:pt-[120px] min-h-[90vh] md:min-h-screen flex items-start md:items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/mahasiswa.webp"
            alt="Mahasiswa UNPAS"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3F3631]/90 via-[#6B5B51]/75 to-[#6B5B51]/50" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          // className="relative z-10 px-6 md:px-12 text-white w-full"
          className="relative z-10 px-6 md:px-12 text-white w-full pt-6 md:pt-0"
        >
          {/* <div className="mx-auto max-w-3xl text-center space-y-6"> */}
          <div className="mx-auto max-w-3xl text-center space-y-4 md:space-y-6">
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Bikin Cerita Sukses
              <span className="block text-yellow-300">Versi Kamu</span>
              Mulai di Sini 🔥
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-white/90"
            >
              <span className="font-semibold">
                Tempat di mana generasi hebat lahir, tumbuh, dan berkarya.
              </span>
            </motion.p>

            {/* ========== BADGE DESKTOP ========== */}
            <motion.div
              variants={fadeUp}
              className="
                hidden md:flex
                flex-wrap
                justify-center
                gap-3 pt-2
              "
            >
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm hover:-translate-y-0.5 transition"
                  >
                    <Icon className="h-5 w-5 text-slate-600" />
                    <span>{b.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* ========== BADGE MOBILE ROTATE ========== */}
            <motion.div variants={fadeUp} className="md:hidden pt-2">
              <div className="flex justify-center min-h-[44px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={badgeIndex}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm"
                  >
                    {(() => {
                      const Icon = badges[badgeIndex].icon;
                      return <Icon className="h-5 w-5 text-slate-600" />;
                    })()}
                    <span>{badges[badgeIndex].text}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* <motion.div
              variants={fadeScale}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            > */}
            <motion.div
              variants={fadeScale}
              className="flex flex-col sm:flex-row justify-center gap-3 pt-3 md:pt-4"
            >
              {/* <a
                href="https://situ2.unpas.ac.id/spmbfront/jalur-seleksi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#5a4c43] shadow-lg hover:scale-[1.05] transition"
              >
                🚀 Daftar Sekarang
              </a> */}

              <a
                href="https://pmb.unpas.ac.id/biaya/rincian-lengkap/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                💸 Lihat Biaya
              </a>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* wrapper for all sections */}
      <div className="mx-auto max-w-6xl px-4 pb-16">

        {/* SECTION: JALUR PENDAFTARAN */}
        <motion.section
          id="jalur-pendaftaran"
          className="mt-16"
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={sectionItem} className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Jalur Pendaftaran PMB UNPAS</h2>
          </motion.div>

          <motion.div variants={sectionContainer} className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
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
                color: "bg-[#f3efec] text-[#5a4c43]",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/209",
                status: "closed",
                wave: "Gelombang 1"
              },
              {
                title: "RPL Transfer 2025 Genap",
                date: "8 Des 2025 - 20 Jan 2026",
                icon: Repeat,
                color: "bg-cyan-100 text-cyan-700",
                link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/210",
                status: "closed",
                wave: "Gelombang 1"
              },
              {
                title: "KIP Kuliah",
                date: "",
                icon: IdCard,
                color: "bg-[#f3efec] text-[#5a4c43]",
                link: "#",
                status: "soon",
                wave: "Gelombang 1"
              },
            ].filter(item => item.status === "open")
              .map((item, idx) => {
                const Icon = item.icon;
                const isClosed = item.status === "closed";
                const isSoon = item.status === "soon";
                const isOpen = item.status === "open";

                return (
                  <motion.div
                    variants={sectionItem}
                    key={idx}
                    className={`relative flex flex-col justify-between rounded-2xl bg-white p-5 text-center shadow-sm transition-all duration-300
            ${isOpen ? "hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]" : "opacity-70"}`}
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
                      ${isOpen
                          ? "bg-[#f3efec] text-[#5a4c43]"
                          : isClosed
                            ? "bg-red-700 text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                    >
                      {isOpen && "DIBUKA"}
                      {isClosed && "DITUTUP"}
                      {isSoon && "BELUM DIBUKA"}
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
                    {isOpen && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center justify-center rounded-full bg-[#6B5B51] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5a4c43]"
                      >
                        Lihat Detail
                      </a>
                    )}

                    {isClosed && (
                      <div
                        className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-300 px-4 py-2 text-sm font-medium text-slate-500 cursor-not-allowed"
                      >
                        Pendaftaran Ditutup
                      </div>
                    )}

                    {isSoon && (
                      <div
                        className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-600 cursor-not-allowed"
                      >
                        Belum Dibuka
                      </div>
                    )}
                  </motion.div>
                );
              })}
          </motion.div>
        </motion.section>

        {/* SECTION: Program Studi */}
        <motion.section id="program-studi" className="mt-16" variants={sectionItem} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <ProdiExplorer />
        </motion.section>

        {/* SECTION: PANDUAN PENDAFTARAN */}
        <motion.section className="mt-16" id="timeline-alur" variants={sectionItem} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          {/* Header */}
          <motion.div variants={sectionItem} className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Tata Cara Pendaftaran Mahasiswa Baru
            </h2>
          </motion.div>

          {/* List Alur */}
          {/* ===== WIZARD STEPPER ===== */}
          <div className="mt-10">

            {/* STEP INDICATOR */}
            <div className="hidden md:flex items-center justify-between relative">
              {/* LINE */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200 -z-10" />

              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`h-10 w-10 flex items-center justify-center rounded-full font-bold transition
                      ${activeStep >= step.id
                        ? "bg-[#6B5B51] text-white"
                        : "bg-white border-2 border-slate-300 text-slate-400"
                      }`}
                  >
                    {step.id}
                  </div>
                  <span
                    className={`mt-2 text-xs font-semibold text-center
                    ${activeStep === step.id ? "text-[#6B5B51]" : "text-slate-400"}
                    `}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            {/* CONTENT BOX */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                {steps[activeStep - 1].title}
              </h3>
              <p className="mt-2 text-slate-600">
                {steps[activeStep - 1].desc}
              </p>

              {/* CTA KHUSUS STEP HASIL SELEKSI */}
              {steps[activeStep - 1].cta && (
                <div className="mt-4">
                  <a
                    href={steps[activeStep - 1].ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#6B5B51] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5a4c43] transition"
                  >
                    🔐 {steps[activeStep - 1].ctaLabel}
                  </a>

                  {/* <p className="mt-2 text-xs text-slate-500">
                    *) Gunakan akun yang dibuat saat pendaftaran untuk melihat hasil seleksi.
                  </p> */}
                </div>
              )}

              {/* ACTION */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-600 disabled:opacity-40 cursor-pointer"
                >
                  Back
                </button>

                <button
                  disabled={activeStep === steps.length}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="rounded-full bg-[#6B5B51] px-6 py-2 text-sm font-semibold text-white hover:bg-[#5a4c43] disabled:opacity-40 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* ===== MOBILE WIZARD ===== */}
          <div className="mt-10 md:hidden space-y-4">

            {steps.map((step) => (
              <div
                key={step.id}
                className={`rounded-2xl border p-4 transition
                  ${activeStep === step.id
                    ? "border-[#6B5B51] bg-[#f3efec]"
                    : "border-slate-200 bg-white"
                  }`}
              >
                <button
                  onClick={() => setActiveStep(step.id)}
                  className="flex items-center gap-4 w-full text-left"
                >
                  <div
                    className={`h-9 w-9 flex items-center justify-center rounded-full font-bold
                      ${activeStep >= step.id
                        ? "bg-[#6B5B51] text-white"
                        : "bg-slate-200 text-slate-500"
                      }`}
                  >
                    {step.id}
                  </div>

                  <div>
                    <div className="font-semibold text-slate-900">
                      {step.title}
                    </div>
                  </div>
                </button>

                {activeStep === step.id && (
                  <>
                    <p className="mt-3 text-sm text-slate-600">
                      {step.desc}
                    </p>

                    {step.cta && (
                      <a
                        href={step.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#6B5B51] px-4 py-3 text-sm font-semibold text-white hover:bg-[#5a4c43] transition"
                      >
                        🔐 {step.ctaLabel}
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}

          </div>

          {/* Panduan PDF (Modern Horizontal Slider + Arrow) */}
          <div className="relative mt-16">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10" />

            <button
              className="swiper-panduan-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-xl bg-[#6B5B51]/70 backdrop-blur border border-white/20 shadow-md hover:bg-[#6B5B51]/90 transition cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="swiper-panduan-next absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-xl bg-[#6B5B51]/70 backdrop-blur border border-white/20 shadow-md hover:bg-[#6B5B51]/90 transition cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <Swiper
              modules={[FreeMode, Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.15}
              freeMode
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              grabCursor
              navigation={{
                prevEl: ".swiper-panduan-prev",
                nextEl: ".swiper-panduan-next",
              }}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              className="!px-6"
            >
              {INFORMASI_LIST.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <div className="text-xs text-slate-500">{item.date}</div>

                      <h3 className="mt-2 text-sm font-bold text-slate-900 line-clamp-2">
                        {item.title}
                      </h3>

                      <div className="flex-1" />

                      <div className="pt-8 flex justify-center">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-[#6B5B51] px-4 py-2 text-xs font-semibold text-[#6B5B51] transition hover:bg-[#6B5B51] hover:text-white"
                        >
                          Lihat Selengkapnya →
                        </a>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.section>

        {/* SECTION: Ketentuan Refund */}
        <section className="mt-16" id="ketentuan-refund">
          <div className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Ketentuan Pengembalian Biaya Registrasi Calon Mahasiswa baru UNPAS</h2>
          </div>

          {/* BANNER: KETENTUAN REFUND */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-[#F3EFEC] p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">

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
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-[#6B5B51] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#5a4c43] transition"
              >
                📄 Unduh Dokumen Persetujuan Ketentuan Refund Camaba Universitas Pasundan 2026-2027
              </a>
            </div>

            <div className="w-full mt-4">
              <a
                href="https://s.id/unpas_pmbfk_refund"
                target="_blank"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-[#6B5B51] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#5a4c43] transition"
              >
                📄 Unduh Dokumen Persetujuan Ketentuan Refund Camaba Kedokteran Universitas Pasundan 2026-2027
              </a>
            </div>

          </div>

        </section>

        {/* SECTION: TESTIMONI */}
        <TestimoniSection />

        {/* SECTION: FAQ */}
        <FaqSection />

        {/* SECTION: KONTAK */}
        {/* <ContactSection /> */}

      </div>

      {/* SECTION: KONTAK */}
      <ContactSection />


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

      {/* FLOATING LANGUAGE — KIRI BAWAH */}
      <div className="fixed bottom-[10px] left-[40px] z-[9999]" ref={langRef}>
        <div className="relative">

          {/* BUTTON */}
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex h-11 px-4 items-center gap-2 rounded-xl bg-[#6B5B51]/80 backdrop-blur border border-white/20 shadow-md hover:bg-[#6B5B51] transition text-white text-sm font-semibold cursor-pointer"
            translate="no"
          >
            <img
              src={LANGUAGES.find(l => l.code === selectedLang).icon}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-5 h-5 object-cover"
            />
            {LANGUAGES.find(l => l.code === selectedLang).short}
          </button>

          {/* DROPDOWN */}
          {langOpen && (
            <div className="absolute bottom-14 left-0">
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-lg min-w-[240px]" translate="no">

                {LANGUAGES.map((lang) => {
                  const isActive = lang.code === selectedLang;

                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        changeLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`
                        w-full text-left flex items-center gap-3 px-4 py-3 text-sm transition
                        ${isActive
                          ? "bg-[#f1f1f1] font-semibold"
                          : "hover:bg-[#f5f5f5]"
                        }
                      `}
                    >
                      {/* ICON IMAGE */}
                      <div className="w-6 h-6 flex-shrink-0">
                        <img
                          src={lang.icon}
                          alt={lang.label}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* TEXT */}
                      <span className="text-slate-800" translate="no">
                        {isActive ? lang.short : lang.label}
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>
          )}

        </div>
      </div>

      <ScrollToTop
        smooth
        component={
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6B5B51]/70 backdrop-blur border border-white/20 shadow-md hover:bg-[#6B5B51]/90 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        }
        style={{
          bottom: "90px",
          right: "45px",
          zIndex: 9999,
          background: "transparent",
          boxShadow: "none",
        }}
      />
    </div>
  );
}

export default PMBLanding;