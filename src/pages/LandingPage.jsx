import React, { useEffect, useState, useRef } from "react";
import {
  ShieldCheck, Users, Stethoscope, GraduationCap, Laptop, Award, FileText, Repeat, UserPlus, Shuffle, FileBadge, Rocket, IdCard, SquarePen, LaptopMinimalCheck
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
import { link } from "framer-motion/client";


/* ─── JalurCard ─────────────────────────────────────────────────── */
function JalurCard({ j, openId, setOpenId, getDeadlineLabel }) {
  const isOpen = openId === j.id;
  const dl = getDeadlineLabel(j.deadline);
  const Icon = j.icon;

  const toggle = () => setOpenId(isOpen ? null : j.id);

  return (
    <div className="flex flex-col">
      {/* Card */}
      <div
        className={`bg-white border-2 rounded-2xl p-5 transition-all duration-300 relative overflow-hidden
          ${isOpen ? "border-[#6B5B51] rounded-b-none border-b-0" : "border-slate-200 hover:border-[#a08c83] hover:shadow-lg hover:-translate-y-0.5"}`}
      >
        {j.popular && (
          <div className="self-start inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 text-[11px] font-extrabold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide">
            ⭐ Paling Banyak Dipilih
          </div>
        )}
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center ${j.iconBg}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1 ${j.badgeColor}`}>{j.badge}</span>
            <h3 className="text-[18px] font-extrabold text-slate-900 leading-tight">{j.name}</h3>
          </div>
        </div>
        <p className="text-sm text-slate-600 font-medium mb-3 leading-relaxed">{j.value}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {j.tags.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 px-2 py-1 border border-slate-200 rounded-md bg-white">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-2 bg-slate-50 rounded-xl px-3 py-2 mb-3">
          <div className="flex items-center gap-2">
            {j.status === 'closed' ? (
              <>
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[13px] font-semibold text-red-500">{j.statusText}</span>
              </>
            ) : j.status === 'soon' ? (
              <>
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
                <span className="text-[13px] font-semibold text-blue-600">{j.statusText}</span>
              </>
            ) : j.status === 'closing' ? (
              <>
                <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_0_3px_rgba(245,158,11,0.15)]" />
                <span className="text-[13px] font-semibold text-amber-600">{j.statusText}</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]" />
                <span className="text-[13px] font-semibold text-green-600">{j.statusText}</span>
              </>
            )}
          </div>
          <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{j.gel}</span>
        </div>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="text-[12.5px] text-slate-500 font-medium">{j.period}</span>
          {j.status === 'soon'
            ? <span className="text-[11px] font-bold px-2 py-0.5 rounded-md text-blue-600 bg-blue-50">Buka {new Date(j.startDate + 'T00:00:00+07:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            : <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${dl.cls}`}>{dl.text}</span>
          }
        </div>
        <button
          onClick={toggle}
          className="w-full py-2.5 rounded-xl text-[14px] font-bold text-center transition-all duration-200 bg-[#6B5B51] text-white hover:bg-[#5a4c43] cursor-pointer"
        >
          {isOpen ? "Tutup Detail ▲" : "Lihat Detail & Daftar →"}
        </button>
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-white border-2 border-t-0 border-[#6B5B51] rounded-b-2xl px-5 pb-5">
              <div className="h-4" />

              {/* 1. Persyaratan */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center text-[10px] font-extrabold text-white flex-shrink-0">1</div>
                  <span className="text-[14px] font-bold text-slate-900">Apakah kamu memenuhi syarat?</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {j.elig.map((e, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 rounded-lg px-3 py-2">
                      <div className="w-5 h-5 rounded-md bg-green-50 border border-green-100 flex items-center justify-center text-[11px] font-extrabold text-green-600 flex-shrink-0 mt-0.5">✓</div>
                      <span className="text-[12.5px] font-medium text-slate-700 leading-snug">{e}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Proses */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-extrabold text-white flex-shrink-0">2</div>
                  <span className="text-[14px] font-bold text-slate-900">Bagaimana prosesnya?</span>
                </div>
                <div className="grid grid-cols-4 gap-1 relative">
                  <div className="absolute top-4 left-[12%] right-[12%] h-0.5 bg-slate-200 z-0" />
                  {j.steps.map((s, i) => {
                    const stepBg = ["bg-yellow-100", "bg-blue-100", "bg-teal-100", "bg-green-100"][i] ?? "bg-slate-100";
                    return (
                      <div key={i} className="flex flex-col items-center text-center px-1 relative z-10">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mb-1.5 ${stepBg}`}>{s.ic}</div>
                        <span className="text-[11px] font-semibold text-slate-600 leading-tight">{s.lb}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Biaya */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-[10px] font-extrabold text-white flex-shrink-0">3</div>
                  <span className="text-[14px] font-bold text-slate-900">Berapa biayanya?</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-3 text-center">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500 mb-1">Formulir Pendaftaran</div>
                    <div className="text-2xl font-black text-slate-800">{j.costForm}</div>
                  </div>
                  <div className="bg-green-50 border-2 border-green-100 rounded-xl p-3 text-center">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-green-600 mb-1">Potensi Hemat</div>
                    <div className="text-2xl font-black text-green-600">{j.costSave}</div>
                    <div className="text-[10.5px] text-green-500 font-medium mt-1">{j.costSaveNote}</div>
                  </div>
                </div>
                {/* Metode Pembayaran */}
                <div className="text-[12px] font-semibold text-slate-500 mb-1.5">Metode Pembayaran:</div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["🏧 VA Mandiri", "🛒 Tokopedia", "🛍️ Shopee (+Rp 4rb)", "🏦 BJB (+Rp 3rb)"].map((p, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 px-2 py-1 border border-slate-200 rounded-md bg-white">{p}</span>
                  ))}
                </div>
                {j.benefits.length > 0 && (
                  <div className="bg-gradient-to-br from-green-800 to-teal-700 rounded-xl p-3 text-white">
                    <div className="text-[11px] font-bold uppercase tracking-wide opacity-60 mb-2">Benefit daftar di Momentum {j.momentumLabel || "Aktif"}</div>
                    {j.benefits.map((b, i) => (
                      <div key={i} className="flex items-center justify-between text-[12.5px] font-semibold py-0.5">
                        <span className="opacity-85">{b.label}</span>
                        <span className="font-extrabold">{b.val}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/15 text-xs font-extrabold">
                      <span>Total Potensi Hemat</span>
                      <span>{j.benefitTotal}</span>
                    </div>
                  </div>
                )}
                {j.benefitNote && (
                  <p className="text-[11.5px] text-slate-500 italic mt-2 leading-relaxed">{j.benefitNote}</p>
                )}
              </div>

              {/* 4. Timeline */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-[10px] font-extrabold text-white flex-shrink-0">4</div>
                  <span className="text-[14px] font-bold text-slate-900">Kapan deadline-nya?</span>
                </div>
                <div className="flex flex-col">
                  {j.timeline.map((t, i) => (
                    <div key={i} className="flex gap-3">
                      {/* Kolom kiri: dot + garis penghubung */}
                      <div className="flex flex-col items-center flex-shrink-0 w-[10px]">
                        <div className={`w-2.5 h-2.5 rounded-full border-2 flex-shrink-0 mt-[3px]
                          ${t.state === "active" ? "border-green-500 bg-green-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"
                            : t.state === "done" ? "border-slate-400 bg-slate-400" : "border-slate-300 bg-white"}`} />
                        {i < j.timeline.length - 1 && (
                          <div className="w-0.5 flex-1 bg-slate-200 mt-1 min-h-[28px]" />
                        )}
                      </div>
                      {/* Kolom kanan: teks */}
                      <div className="flex-1 pb-7 last:pb-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className={`text-[11px] font-bold ${t.state === "active" ? "text-green-500" : "text-slate-400"}`}>{t.date}</span>
                          {t.now && (
                            <span className="text-[9px] font-extrabold text-green-600 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded whitespace-nowrap leading-none">
                              KAMU DI SINI
                            </span>
                          )}
                        </div>
                        <div className={`text-[13px] font-semibold ${t.state === "active" ? "text-green-600" : "text-slate-600"}`}>{t.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. CTA */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-[#6B5B51] flex items-center justify-center text-[10px] font-extrabold text-white flex-shrink-0">5</div>
                  <span className="text-[14px] font-bold text-slate-900">
                    {j.status === 'closed' ? 'Pendaftaran sudah ditutup' : j.status === 'soon' ? 'Pendaftaran belum dibuka' : 'Siap daftar?'}
                  </span>
                </div>
                {j.status === 'closed' ? (
                  <div className="flex items-center justify-center gap-2 w-full bg-slate-200 text-slate-400 rounded-xl py-3.5 text-sm font-extrabold mb-2 cursor-not-allowed">
                    Pendaftaran Ditutup
                  </div>
                ) : j.status === 'soon' ? (
                  <div className="flex items-center justify-center gap-2 w-full bg-blue-50 border-2 border-blue-200 text-blue-500 rounded-xl py-3.5 text-sm font-extrabold mb-2">
                    Dibuka {new Date(j.startDate + 'T00:00:00+07:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                ) : (
                  <a
                    href={j.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#6B5B51] to-[#8a7060] hover:from-[#5a4c43] hover:to-[#6B5B51] text-white rounded-xl py-3.5 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 shadow-md mb-2"
                    onClick={() => {
                      const eventName = `daftar_${j.nameButton.toLowerCase().replace(/\s+/g, "_")}_web_pmb_unpas`;
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({ event: eventName, jalur: j.nameButton, page: "pmb.unpas.ac.id" });
                      if (window.fbq) window.fbq("trackCustom", eventName, { jalur: j.nameButton, page: "pmb.unpas.ac.id", currency: "IDR" });
                    }}
                  >
                    Daftar {j.nameButton} Sekarang →
                  </a>
                )}
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://wa.me/62811960193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-[12.5px] font-semibold border-2 border-slate-200 text-slate-600 hover:border-[#6B5B51] hover:text-[#6B5B51] hover:bg-[#f3efec] transition-all"
                  >
                    💬 Tanya CS via WA
                  </a>
                  <a
                    href="https://pmb.unpas.ac.id/quiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center text-center gap-1.5 py-2.5 px-3 rounded-xl text-[12.5px] font-semibold border-2 border-slate-200 text-slate-600 hover:border-[#6B5B51] hover:text-[#6B5B51] hover:bg-[#f3efec] transition-all"
                  >
                    🎯 Cek Kecocokan Prodi
                  </a>
                  {j.group !== "transfer" && (
                    <a
                      href="https://pmb.unpas.ac.id/biaya/rincian-lengkap-v2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-[12.5px] font-semibold border-2 border-slate-200 text-slate-600 hover:border-[#6B5B51] hover:text-[#6B5B51] hover:bg-[#f3efec] transition-all"
                    >
                      💰 Lihat Biaya per Prodi
                    </a>
                  )}
                </div>
              </div>

              <button
                onClick={toggle}
                className="w-full py-2 text-[12px] font-semibold text-slate-400 border border-dashed border-slate-200 rounded-lg hover:text-slate-600 hover:bg-slate-50 transition-all mt-1 cursor-pointer"
              >
                ▲ Tutup Detail
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const PMBLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("id");
  const langRef = useRef(null);

  const [showWA, setShowWA] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  // null = tidak ada sesi aktif → popup tidak muncul
  const popupVariant = (() => {
    const now = new Date();
    if (now <= new Date("2026-06-14T23:59:59+07:00")) return "sesi1";
    if (now >= new Date("2026-06-15T00:00:00+07:00") && now <= new Date("2026-06-28T23:59:59+07:00")) return "sesi2";
    return null;
  })();

  useEffect(() => {
    if (!popupVariant) return;
    const t = setTimeout(() => setShowPromoPopup(true), 2500);
    return () => clearTimeout(t);
  }, []);

  // UTM tracking — deteksi scan QR / spanduk
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("utm_source") === "spanduk") {
      fbq("trackCustom", "ScanSpanduk", {
        lokasi: urlParams.get("utm_content"),
        campaign: urlParams.get("utm_campaign"),
        currency: "IDR",
      });
    }
  }, []);

  const steps = [
    {
      id: 1,
      title: "1. Pilih Jalur Pendaftaran",
      desc: "Tentukan jalur masuk sesuai pilihan dan ketentuan kampus Universitas Pasundan.",
      image: "/img/1_jalur_pendaftraran.webp"
    },
    {
      id: 2,
      title: "2. Isi Formulir Pendaftaran",
      desc: "Lengkapi data diri secara lengkap dan benar pada formulir pendaftaran online.",
      image: "/img/2_isi_formulir_pendaftaran.webp"
    },
    {
      id: 3,
      title: "3. Pembayaran Formulir Pendaftaran",
      desc: "Lakukan pembayaran biaya pendaftaran sesuai instruksi yang tersedia.",
      image: "/img/3_pembayaran_formulir.webp"
    },
    {
      id: 4,
      title: "4. Unggah Berkas & Ikuti Seleksi",
      desc: "Unggah dokumen persyaratan dan ikuti tahapan seleksi sesuai jadwal.",
      image: "/img/4_unggah_berkas_pendaftaran.webp",
      seleksi: true
    },
    {
      id: 5,
      title: "5. Lihat Hasil Seleksi",
      desc: "Login ke akun PMB untuk melihat hasil seleksi, serta informasi lanjutan registrasi mahasiswa baru.",
      image: "/img/5_hasil_seleksi.webp",
      cta: true,
      ctaLabel: "Login PMB & Lihat Hasil Seleksi",
      ctaLink: "https://situ2.unpas.ac.id/spmbfront/login",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);
  const [jalurProfile, setJalurProfile] = useState("maba");
  const [openJalurId, setOpenJalurId] = useState(null);
  const [showPromoPopup, setShowPromoPopup] = useState(false);

  const MONTHS_ID = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const _today = new Date();
  const todayLabel = `Hari ini — ${_today.getDate()} ${MONTHS_ID[_today.getMonth()]} ${_today.getFullYear()}`;

  //CONFIG GELOMBANG PMDK
  const GELOMBANG_PMDK = [
    {
      gel: 1,
      start: "2026-01-05",
      end: "2026-06-04",
      period: "5 Jan 2026 – 4 Jun 2026",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/286",

      momentums: [
        {
          label: "Pra-SNBP",
          start: "2026-01-05",
          end: "2026-03-25",
          dp: 2000000,
          dpp: 1000000,
          kuota: "200 kuota",
        },
        {
          label: "Pasca-SNBP",
          start: "2026-03-31",
          end: "2026-04-30",
          dp: 1500000,
          dpp: 1000000,
          kuota: "100 kuota",
        },
        {
          label: "Pasca-SNBT",
          start: "2026-05-25",
          end: "2026-06-04",
          dp: 1000000,
          dpp: 1000000,
          kuota: "100 kuota",
        },
      ],
    },
    {
      gel: 2,
      start: "2026-06-07",
      end: "2026-08-14",
      period: "7 Jun 2026 – 14 Agt 2026",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/303",
      momentums: [],
    },
  ];

  //CONFIG GELOMBANG FK
  const GELOMBANG_FK = [
    {
      gel: 1,
      start: "2026-01-05",
      end: "2026-03-24",
      period: "5 Jan – 24 Mar 2026",
      biaya: "Rp 165,15 juta",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/285",
    },
    {
      gel: 2,
      start: "2026-02-25",
      end: "2026-05-19",
      period: "25 Feb – 19 Mei 2026",
      biaya: "Rp 177 juta",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/301",
    },
    {
      gel: 3,
      start: "2026-05-20",
      end: "2026-06-17",
      period: "20 Mei – 17 Jun 2026",
      biaya: "Rp 190 juta",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/302"
    },
    // {
    //   gel: 4,
    //   start: "2026-06-01",
    //   end: "2026-06-30",
    //   period: "1 Jun – 30 Jun 2026",
    //   biaya: "Rp 202 juta",
    //   link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/302"
    // },
  ];

  //CONFIG GELOMBANG USM
  const GELOMBANG_USM = [
    {
      gel: 1,
      start: "2026-01-05",
      end: "2026-04-10",
      period: "5 Jan 2026 – 10 April 2026",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/283",

      momentums: [
        {
          label: "Pra-SNBP",
          start: "2026-01-05",
          end: "2026-03-25",
          dp: 2000000,
          dpp: 1000000,
          kuota: "200 kuota",
        },
        {
          label: "Pasca-SNBP",
          start: "2026-03-31",
          end: "2026-04-30",
          dp: 1500000,
          dpp: 1000000,
          kuota: "100 kuota",
        },
        {
          label: "Pasca-SNBT",
          start: "2026-05-25",
          end: "2026-06-04",
          dp: 1000000,
          dpp: 1000000,
          kuota: "100 kuota",
        },
      ],
    },
    {
      gel: 2,
      start: "2026-04-14",
      end: "2026-07-03",
      period: "14 Apr 2026 – 3 Juli 2026",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/288",

      momentums: [
        {
          label: "Pra-SNBP",
          start: "2026-01-05",
          end: "2026-03-25",
          dp: 2000000,
          dpp: 1000000,
          kuota: "200 kuota",
        },
        {
          label: "Pasca-SNBP",
          start: "2026-03-31",
          end: "2026-04-30",
          dp: 1500000,
          dpp: 1000000,
          kuota: "100 kuota",
        },
        {
          label: "Pasca-SNBT",
          start: "2026-05-25",
          end: "2026-06-04",
          dp: 1000000,
          dpp: 1000000,
          kuota: "100 kuota",
        },
      ],
    },
    {
      gel: 3,
      start: "2026-07-07",
      end: "2026-08-07",
      period: "7 Jul 2026 – 10 Agustus 2026",
      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/289",

      momentums: [
        {
          label: "Pra-SNBP",
          start: "2026-01-05",
          end: "2026-03-25",
          dp: 2000000,
          dpp: 1000000,
          kuota: "200 kuota",
        },
        {
          label: "Pasca-SNBP",
          start: "2026-03-31",
          end: "2026-04-30",
          dp: 1500000,
          dpp: 1000000,
          kuota: "100 kuota",
        },
        {
          label: "Pasca-SNBT",
          start: "2026-05-25",
          end: "2026-06-04",
          dp: 1000000,
          dpp: 1000000,
          kuota: "100 kuota",
        },
      ],
    },
  ];

  const wibDate = (dateStr, endOfDay) => {
    const [y, m, d] = dateStr.split('-').map(Number);
    return endOfDay
      ? new Date(Date.UTC(y, m - 1, d, 16, 59, 59))    // 23:59:59 WIB = 16:59:59 UTC
      : new Date(Date.UTC(y, m - 1, d - 1, 17, 0, 0)); // 00:00:00 WIB = 17:00:00 UTC hari sebelumnya
  };

  // Ambil gelombang aktif, atau berikutnya jika di gap, atau terakhir jika semua tutup
  const getSmartActive = (list) => {
    const today = new Date();
    const active = list.find(g => today >= wibDate(g.start, false) && today <= wibDate(g.end, true));
    if (active) return active;
    const next = list.find(g => today < wibDate(g.start, false));
    return next || list[list.length - 1];
  };

  const getActivePMDK = () => getSmartActive(GELOMBANG_PMDK);
  const getActiveUSM = () => getSmartActive(GELOMBANG_USM);
  const getActiveGelombang = () => getSmartActive(GELOMBANG_FK);

  const formatRupiah = (val) => {
    if (!val) return "—";
    return `−Rp ${val.toLocaleString("id-ID")}`;
  };

  // GET MOMENTUM AKTIF
  const getActiveMomentum = (momentums) => {
    const today = new Date();
    return momentums.find(m => today >= wibDate(m.start, false) && today <= wibDate(m.end, true)) || null;
  };

  // 4 state: closed | soon | closing | open
  const getStatusInfo = (startDate, endDate) => {
    const today = new Date();
    const diffStart = (wibDate(startDate, false) - today) / (1000 * 60 * 60 * 24);
    const diffEnd   = (wibDate(endDate, true)   - today) / (1000 * 60 * 60 * 24);

    if (diffEnd < 0)   return { status: 'closed',  text: 'Sudah Ditutup' };
    if (diffStart > 0) return { status: 'soon',    text: `Dibuka ${Math.ceil(diffStart)} hari lagi` };
    if (diffEnd <= 3)  return { status: 'closing', text: 'Segera Ditutup' };
    return               { status: 'open',    text: 'Sedang Dibuka' };
  };

  // GENERATE DATA SESUAI FORMAT PMDK
  const createPMDKActive = () => {
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
  const createFKUSMActive = () => {
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

      tags: ["📝 Tes Tertulis", "🔬 Tes Kesehatan"],

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
        { ic: "✏️", lb: "Ikut Ujian Tertulis" },
        { ic: "🔬", lb: "Tes Kesehatan & Verifikasi" },
        { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
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
          state: "done",
        },
        {
          date: todayLabel,
          label: `Gelombang ${g.gel} sedang berlangsung`,
          state: "active",
          now: true,
        },
        {
          date: g.period.split(" – ")[1],
          label: `Deadline Gel.${g.gel} Kedokteran USM`,
          state: "upcoming",
        },
        {
          date: "Gel. berikutnya",
          label: "Biaya naik di gelombang selanjutnya",
          state: "upcoming",
        },
      ],
    };
  };

  // GENERATE DATA USM NILAI UTBK — SESI 1 (Upload 2–14 Juni 2026)
  const createUSMUTBKSesi1 = () => {
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

  // GENERATE DATA USM NILAI UTBK — SESI 2 (Dibuka 15 Juni, Upload 16–28 Juni 2026)
  const createUSMUTBKSesi2 = () => {
    const { status, text } = getStatusInfo("2026-06-15", "2026-06-28");
    const gelUsm2 = GELOMBANG_USM[1];
    const m = getActiveMomentum(gelUsm2.momentums);
    const total = m ? (m.dp || 0) + (m.dpp || 0) : 0;
    const tls = (d) => new Date() >= wibDate(d, true) ? "done" : "upcoming";

    return {
      id: "usm_utbk_s2",
      group: "maba",
      subgroup: "utbk",

      // visibleFrom: kartu ini hanya ditampilkan mulai tanggal ini
      visibleFrom: "2026-06-15",

      icon: FileBadge,
      iconBg: "bg-indigo-100 text-indigo-700",

      badge: "Upload Sertifikat UTBK",
      badgeColor: "bg-indigo-50 text-indigo-700",

      name: "USM via Nilai UTBK – Sesi 2",
      nameButton: "USM Nilai UTBK Sesi 2",

      popular: false,

      value: "Sesi 1 sudah ditutup? Masih ada Sesi 2. Mekanisme sama — upload sertifikat UTBK, hasil 1 hari kerja.",

      tags: ["📤 Upload Sertifikat UTBK", "📅 Upload 15–28 Juni"],

      status,
      statusText: text,

      gel: "USM Gel. 2 · Sesi 2",

      period: "15 Juni 2026 – 28 Juni 2026",
      startDate: "2026-06-15",
      deadline: "2026-06-28",

      link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/306",

      momentumLabel: m?.label || null,

      elig: [
        "Lulusan SMA / SMK / MA / sederajat (atau akan lulus tahun ini)",
        "Memiliki sertifikat UTBK tahun 2024, 2025, atau 2026 — upload dilakukan 15–28 Juni 2026",
        "Skor minimum: F. Teknik ≥ 400 · FISIP/FEB/Hukum ≥ 375 · FKIP/FISS ≥ 350",
        "Tidak sedang terdaftar aktif di perguruan tinggi lain",
        "Program Studi Kedokteran tidak tersedia di jalur ini",
      ],

      steps: [
        { ic: "📝", lb: "Isi Formulir & Bayar Rp 400rb" },
        { ic: "📤", lb: "Upload Sertifikat UTBK (15–28 Juni)" },
        { ic: "⏳", lb: "Verifikasi Skor Panitia (1 hari kerja)" },
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
      benefitNote: "⚠️ Prodi dengan uji keterampilan (DKV, Fotografi & Film, Seni Musik) tetap wajib mengikuti audisi/portofolio meski skor UTBK memenuhi minimum. Hubungi admisi untuk jadwal uji keterampilan.",

      timeline: [
        { date: "14 Juni 2026", label: "Batas akhir pendaftaran jalur USM via Nilai UTBK Sesi 1", state: tls("2026-06-14") },
        { date: "15 Juni 2026", label: "Pendaftaran dibuka", state: tls("2026-06-15") },
        {
          date: todayLabel,
          label: "Sesi 2 sedang berlangsung",
          state: "active",
          now: true,
        },
        { date: "28 Juni 2026", label: "Batas akhir pendaftaran jalur USM via Nilai UTBK Sesi 2", state: "upcoming" },
      ],
    };
  };

  //GENERATE DATA SESUAI FORMAT USM
  const createUSMActive = () => {
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


  const JALUR_DATA = [
    // {
    //   id: "pmdk", group: "maba", subgroup: "utama",
    //   icon: Award, iconBg: "bg-yellow-100 text-yellow-700",
    //   badge: "PMDK", badgeColor: "bg-green-50 text-green-700",
    //   name: "Penelusuran Minat & Kemampuan",
    //   nameButton: "PMDK",
    //   popular: true,
    //   value: "Tanpa ujian — seleksi berbasis nilai rapor semester 1–5. Cocok jika nilai akademik bagus.",
    //   tags: ["📋 Nilai Rapor", "✅ Tanpa Tes"],
    //   status: "open", statusText: "Sedang Dibuka", gel: "Gelombang 1",
    //   period: "5 Jan 2026 – 4 Jun 2026", deadline: "2026-06-04",
    //   link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/286",
    //   elig: [
    //     "Lulusan SMA / SMK / MA / sederajat (atau akan lulus tahun ini)",
    //     "Memiliki rapor semester 1 sampai 5 yang lengkap",
    //     "Tidak sedang terdaftar aktif di perguruan tinggi lain",
    //     "Bersedia mengikuti ketentuan akademik UNPAS",
    //   ],
    //   steps: [
    //     { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
    //     { ic: "📊", lb: "Input Nilai Rapor Sem 1–5" },
    //     { ic: "📤", lb: "Upload Berkas & Verifikasi" },
    //     { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
    //   ],
    //   costForm: "Rp 300.000", costFormNote: "Satu kali bayar, berlaku semua prodi",
    //   costSave: "s.d. Rp 3 jt", costSaveNote: "Daftar sekarang di Gelombang Pra-SNBP",
    //   benefits: [
    //     { label: "⚡ Potongan DP Momentum", val: "−Rp 2.000.000" },
    //     { label: "💎 Insentif Pelunasan DPP", val: "−Rp 1.000.000" },
    //   ],
    //   benefitTotal: "Rp 3.000.000",
    //   benefitNote: "",
    //   timeline: [
    //     { date: "5 Januari 2026", label: "Pendaftaran dibuka", state: "done" },
    //     { date: todayLabel, label: "Gelombang Pra-SNBP masih berlaku (kuota 200)", state: "active", now: true },
    //     { date: "25 Maret 2026", label: "Deadline Pra-SNBP – potongan turun jadi Rp 1,5jt", state: "upcoming" },
    //     { date: "4 Juni 2026", label: "Pendaftaran PMDK ditutup", state: "upcoming" },
    //   ],
    // },
    // {
    //   id: "usm", group: "maba", subgroup: "utama",
    //   icon: Laptop, iconBg: "bg-blue-100 text-blue-700",
    //   badge: "USM Sarjana", badgeColor: "bg-blue-50 text-blue-700",
    //   name: "Ujian Saringan Masuk",
    //   nameButton: "USM",
    //   popular: false,
    //   value: "Ujian seleksi — terbuka untuk semua lulusan SMA/SMK/MA sederajat. Cocok jika ingin ikut tes masuk.",
    //   tags: ["📝 Tes Tertulis", "📋 Seleksi Berkas"],
    //   status: "open", statusText: "Sedang Dibuka", gel: "Gelombang 1",
    //   period: "5 Jan 2026 – 10 Apr 2026", deadline: "2026-04-10",
    //   link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/283",
    //   elig: [
    //     "Lulusan SMA / SMK / MA / sederajat (atau akan lulus tahun ini)",
    //     "Siap mengikuti ujian tertulis seleksi masuk",
    //     "Tidak sedang terdaftar aktif di perguruan tinggi lain",
    //     "Bersedia mengikuti ketentuan akademik UNPAS",
    //   ],
    //   steps: [
    //     { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
    //     { ic: "✏️", lb: "Ikut Ujian Tertulis" },
    //     { ic: "📤", lb: "Upload Berkas & Verifikasi" },
    //     { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
    //   ],
    //   costForm: "Rp 300.000", costFormNote: "Satu kali bayar, termasuk biaya tes",
    //   costSave: "s.d. Rp 3 jt", costSaveNote: "Jika daftar di momentum aktif",
    //   benefits: [
    //     { label: "⚡ Potongan DP Momentum", val: "−Rp 2.000.000" },
    //     { label: "💎 Insentif Pelunasan DPP", val: "−Rp 1.000.000" },
    //   ],
    //   benefitTotal: "Rp 3.000.000",
    //   benefitNote: "",
    //   timeline: [
    //     { date: "5 Januari 2026", label: "Pendaftaran dibuka", state: "done" },
    //     { date: todayLabel, label: "Gelombang Pra-SNBP masih berlaku", state: "active", now: true },
    //     { date: "25 Maret 2026", label: "Deadline Pra-SNBP – potongan turun jadi Rp 1,5jt", state: "upcoming" },
    //     { date: "10 April 2026", label: "Pendaftaran USM Gelombang 1 ditutup", state: "upcoming" },
    //   ],
    // },
    // {
    //   id: "fk_usm", group: "maba", subgroup: "kedokteran",
    //   icon: Stethoscope, iconBg: "bg-red-100 text-red-700",
    //   badge: "Kedokteran", badgeColor: "bg-red-50 text-red-600",
    //   name: "USM Kedokteran",
    //   nameButton: "USM FK",
    //   popular: false,
    //   value: "Seleksi masuk Fakultas Kedokteran via ujian. 4 gelombang penerimaan, kuota terbatas per gelombang.",
    //   tags: ["📝 Tes Tertulis", "🔬 Tes Kesehatan"],
    //   status: "closing", statusText: "Segera Ditutup", gel: "Gelombang 1",
    //   period: "5 Jan – 24 Mar 2026", deadline: "2026-03-24",
    //   link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/285",
    //   elig: [
    //     "Lulusan SMA / MA jurusan IPA (atau akan lulus tahun ini)",
    //     "Siap mengikuti ujian tertulis dan tes kesehatan",
    //     "Tidak sedang terdaftar aktif di fakultas kedokteran lain",
    //     "Bersedia membayar biaya sesuai gelombang yang dipilih",
    //   ],
    //   steps: [
    //     { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
    //     { ic: "✏️", lb: "Ikut Ujian Tertulis" },
    //     { ic: "🔬", lb: "Tes Kesehatan & Verifikasi" },
    //     { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
    //   ],
    //   costForm: "Rp 300.000", costFormNote: "Formulir pendaftaran",
    //   costSave: "—", costSaveNote: "Tidak ada potongan untuk Kedokteran",
    //   benefits: [],
    //   benefitTotal: "—",
    //   benefitNote: "Prodi Kedokteran tidak mendapatkan potongan DP momentum maupun Insentif Pelunasan DPP. Biaya Gel.1 mulai Rp 165,15 juta (4 gelombang, semakin tinggi per gelombang).",
    //   timeline: [
    //     { date: "5 Januari 2026", label: "Pendaftaran Gel.1 dibuka", state: "done" },
    //     { date: todayLabel, label: "Gelombang 1 segera ditutup!", state: "active", now: true },
    //     { date: "24 Maret 2026", label: "Deadline Gel.1 Kedokteran USM", state: "upcoming" },
    //     { date: "Gel.2 – Gel.4", label: "Biaya naik per gelombang (Gel.2: 177jt, Gel.3: 190jt, Gel.4: 202jt)", state: "upcoming" },
    //   ],
    // },
    // {
    //   id: "fk_pmdk", group: "maba", subgroup: "kedokteran",
    //   icon: FileText, iconBg: "bg-purple-100 text-purple-700",
    //   badge: "Kedokteran", badgeColor: "bg-red-50 text-red-600",
    //   name: "PMDK Kedokteran",
    //   nameButton: "PMDK FK",
    //   popular: false,
    //   value: "Seleksi Fakultas Kedokteran berbasis rapor. Tanpa ujian tulis — cocok jika nilai akademik IPA kuat.",
    //   tags: ["📋 Nilai Rapor", "🔬 Tes Kesehatan"],
    //   status: "closing", statusText: "Segera Ditutup", gel: "Gelombang 1",
    //   period: "5 Jan – 24 Mar 2026", deadline: "2026-03-24",
    //   link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/294",
    //   elig: [
    //     "Lulusan SMA / MA jurusan IPA dengan nilai akademik tinggi",
    //     "Memiliki rapor semester 1–5 lengkap dengan nilai IPA unggul",
    //     "Siap mengikuti tes kesehatan",
    //     "Bersedia membayar biaya sesuai gelombang yang dipilih",
    //   ],
    //   steps: [
    //     { ic: "📝", lb: "Isi Formulir & Bayar Rp 300rb" },
    //     { ic: "📊", lb: "Verifikasi Nilai Rapor" },
    //     { ic: "🔬", lb: "Tes Kesehatan & Seleksi" },
    //     { ic: "🎉", lb: "Pengumuman & Daftar Ulang" },
    //   ],
    //   costForm: "Rp 300.000", costFormNote: "Formulir pendaftaran",
    //   costSave: "—", costSaveNote: "Tidak ada potongan untuk Kedokteran",
    //   benefits: [],
    //   benefitTotal: "—",
    //   benefitNote: "Prodi Kedokteran tidak mendapatkan potongan DP momentum maupun Insentif Pelunasan DPP.",
    //   timeline: [
    //     { date: "5 Januari 2026", label: "Pendaftaran Gel.1 dibuka", state: "done" },
    //     { date: todayLabel, label: "Gelombang 1 segera ditutup!", state: "active", now: true },
    //     { date: "24 Maret 2026", label: "Deadline Gel.1 PMDK Kedokteran", state: "upcoming" },
    //   ],
    // },

    //FK GELOMBANG 2
    createPMDKActive(),
    createUSMActive(),
    createUSMUTBKSesi1(),
    createUSMUTBKSesi2(),
    createFKUSMActive(),


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

  const getDeadlineLabel = (deadlineStr) => {
    const now = new Date();
    const wibOffset = 7 * 60;
    const localOffset = now.getTimezoneOffset();
    const wib = new Date(now.getTime() + (localOffset + wibOffset) * 60000);
    const d = new Date(deadlineStr + "T23:59:59");
    const diff = d - wib;
    const days = Math.max(0, Math.ceil(diff / 86400000));
    if (days <= 0) return { text: "Sudah Ditutup", cls: "text-red-600 bg-red-50" };
    if (days <= 7) return { text: `⚠ Tutup ${days} hari lagi!`, cls: "text-red-600 bg-red-50" };
    if (days <= 30) return { text: `Tutup ${days} hari lagi`, cls: "text-amber-600 bg-amber-50" };
    return { text: `Tutup ${days} hari lagi`, cls: "text-green-600 bg-green-50" };
  };

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

  // const calculateTimeLeft = () => {
  //   const target = new Date("2025-12-20T23:59:59+07:00").getTime();
  //   const now = Date.now();
  //   const diff = target - now;

  //   if (diff <= 0) {
  //     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  //   }

  //   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  //   const minutes = Math.floor((diff / (1000 * 60)) % 60);
  //   const seconds = Math.floor((diff / 1000) % 60);

  //   return { days, hours, minutes, seconds };
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Urgency bar countdown — Pra-SNBP deadline
  // const URGENCY_DEADLINE = "2026-03-25T23:59:59+07:00";
  // const URGENCY_KUOTA_TERISI = 196;
  // const URGENCY_KUOTA_TOTAL = 200;

  // Update manual saat momentum aktif: berapa slot yang sudah terisi
  const URGENCY_KUOTA_TERISI = 27;

  const getMomentumState = () => {
    const today = new Date();
    const momentums = GELOMBANG_PMDK[0].momentums;
    const active = momentums.find(m => {
      const s = new Date(m.start + "T00:00:00+07:00");
      const e = new Date(m.end + "T23:59:59+07:00");
      return today >= s && today <= e;
    });
    if (active) return { mode: "active", momentum: active };
    const upcoming = [...momentums]
      .filter(m => new Date(m.start + "T00:00:00+07:00") > today)
      .sort((a, b) => new Date(a.start) - new Date(b.start))[0];
    if (upcoming) return { mode: "upcoming", momentum: upcoming };
    return { mode: "ended", momentum: momentums[momentums.length - 1] };
  };

  const momentumState = getMomentumState();
  const activeMomentum = momentumState.momentum;

  const URGENCY_DEADLINE = momentumState.mode === "active"
    ? `${activeMomentum.end}T23:59:59+07:00`
    : momentumState.mode === "upcoming"
    ? `${activeMomentum.start}T00:00:00+07:00`
    : null;

  const URGENCY_KUOTA_TOTAL = activeMomentum ? parseInt(activeMomentum.kuota) || 100 : 100;

  const formatDPLabel = (dp) => {
    if (!dp) return "—";
    const juta = dp / 1000000;
    return `Rp ${juta % 1 === 0 ? juta : juta.toFixed(1).replace(".", ",")} Juta`;
  };

  const formatDPShort = (dp) => {
    if (!dp) return "—";
    const juta = dp / 1000000;
    return `−Rp ${juta % 1 === 0 ? juta : juta.toFixed(1).replace(".", ",")}jt`;
  };

  const formatDateShort = (dateStr) => {
    const months = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
    const d = new Date(dateStr + "T00:00:00+07:00");
    return `${d.getDate()} ${months[d.getMonth()]}`;
  };

  const formatDateLong = (dateStr) => {
    const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    const d = new Date(dateStr + "T00:00:00+07:00");
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  const calculateUrgencyTimeLeft = () => {
    const target = new Date(URGENCY_DEADLINE).getTime();
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [urgencyTimeLeft, setUrgencyTimeLeft] = useState(calculateUrgencyTimeLeft());

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTimeLeft(calculateUrgencyTimeLeft());
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

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
      // Delay agar DOM dan sticky-header sudah ter-render
      const t = setTimeout(() => scrollToSection(hash), 300);
      return () => clearTimeout(t);
    } else {
      window.scrollTo(0, 0);
    }
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
                  src={`${import.meta.env.BASE_URL}logo_unpas.png`}
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
              {[
                { id: "jalur-pendaftaran", label: "Jalur Pendaftaran" },
                { id: "timeline-alur", label: "Panduan Pendaftaran" },
                { id: "program-studi", label: "Program Studi" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => { scrollToSection(id); setActiveSection(id); }}
                  className={`relative cursor-pointer transition-colors duration-200
                    ${activeSection === id
                      ? "text-[#6B5B51] font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#6B5B51] after:rounded-full"
                      : "text-slate-600 hover:text-[#5a4c43]"
                    }`}
                >
                  {label}
                </button>
              ))}
              {/* <button onClick={() => scrollToSection("informasi-pengumuman")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
                Informasi &amp; Pengumuman
              </button> */}
              <a
                href="https://pmb.unpas.ac.id/biaya/rincian-lengkap-v2/"
                // target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#5a4c43]"
              >
                Biaya Pendidikan
              </a>
              {/* <button onClick={() => scrollToSection("ketentuan-refund")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
                Ketentuan Refund
              </button> */}
              {/* <button onClick={() => scrollToSection("faq")} className="text-slate-600 hover:text-[#5a4c43] cursor-pointer">
                FAQ
              </button> */}
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
                  Login PMB
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
            {[
              { id: "jalur-pendaftaran", label: "Jalur Pendaftaran" },
              { id: "timeline-alur", label: "Panduan Pendaftaran" },
              { id: "program-studi", label: "Program Studi" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { scrollToSection(id); setActiveSection(id); setIsMenuOpen(false); }}
                className={`text-center transition-colors duration-200
                  ${activeSection === id
                    ? "text-[#6B5B51] font-semibold"
                    : "text-slate-700"
                  }`}
              >
                {label}
              </button>
            ))}
            {/* <button onClick={() => { scrollToSection("informasi-pengumuman"); setIsMenuOpen(false); }}>Informasi &amp; Pengumuman</button> */}
            <a
              href="https://pmb.unpas.ac.id/biaya/rincian-lengkap-v2/"
              // target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-2 rounded-lg hover:bg-[#f3efec] transition"
            >
              Biaya Pendidikan
            </a>
            {/* <button onClick={() => { scrollToSection("ketentuan-refund"); setIsMenuOpen(false); }}>Ketentuan Refund</button> */}
            {/* <button onClick={() => { scrollToSection("faq"); setIsMenuOpen(false); }}>FAQ</button> */}

            {/* LOGIN */}
            <a
              href="https://situ2.unpas.ac.id/spmbfront/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full border border-[#6B5B51] px-4 py-2 text-sm text-center font-semibold text-[#6B5B51] hover:bg-[#f3efec] transition"
            >
              Login PMB
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

        {/* URGENCY BAR — auto-switch berdasarkan momentumState */}
        {momentumState.mode !== "ended" && (
          <div className="bg-[#3F3631] overflow-hidden">
            {momentumState.mode === "active" ? (
              /* Mode AKTIF: layout horizontal (label + countdown 1 baris, kuota bar di bawah) */
              <>
                <div className="mx-auto max-w-6xl px-4 py-1.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="relative flex-shrink-0 flex items-center justify-center w-3 h-3">
                      <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-400" />
                    </span>
                    <span className="text-[11px] font-bold text-slate-300 truncate">
                      <span className="text-yellow-300">{activeMomentum.label}</span>
                      {" — "}Potongan DP{" "}
                      <span className="text-emerald-300 font-extrabold">{formatDPLabel(activeMomentum.dp)}</span>
                      <span className="text-slate-400 hidden sm:inline"> · Berakhir dalam:</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <div className="bg-[#5a4c43] border border-yellow-400/20 rounded px-1.5 py-0.5 text-center min-w-[30px]">
                      <div className="text-yellow-300 font-extrabold text-[11px] leading-tight">{String(urgencyTimeLeft.days).padStart(2, "0")}</div>
                      <div className="text-white text-[7px] font-bold uppercase tracking-wide">Hari</div>
                    </div>
                    <span className="text-white text-xs font-bold">:</span>
                    <div className="bg-[#5a4c43] border border-yellow-400/20 rounded px-1.5 py-0.5 text-center min-w-[30px]">
                      <div className="text-yellow-300 font-extrabold text-[11px] leading-tight">{String(urgencyTimeLeft.hours).padStart(2, "0")}</div>
                      <div className="text-white text-[7px] font-bold uppercase tracking-wide">Jam</div>
                    </div>
                    <span className="text-white text-xs font-bold">:</span>
                    <div className="bg-[#5a4c43] border border-yellow-400/20 rounded px-1.5 py-0.5 text-center min-w-[30px]">
                      <div className="text-yellow-300 font-extrabold text-[11px] leading-tight">{String(urgencyTimeLeft.minutes).padStart(2, "0")}</div>
                      <div className="text-white text-[7px] font-bold uppercase tracking-wide">Min</div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-6xl px-4 pb-1.5 flex items-center gap-2">
                  <span className="text-[9.5px] text-slate-400 font-semibold whitespace-nowrap">
                    Kuota: <span className="text-yellow-400">{URGENCY_KUOTA_TERISI} / {URGENCY_KUOTA_TOTAL}</span>
                  </span>
                  <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-400 to-yellow-400 transition-all duration-700"
                      style={{ width: `${Math.round(URGENCY_KUOTA_TERISI / URGENCY_KUOTA_TOTAL * 100)}%` }}
                    />
                  </div>
                  <span className="text-[9.5px] font-extrabold text-yellow-400">
                    {Math.round(URGENCY_KUOTA_TERISI / URGENCY_KUOTA_TOTAL * 100)}%
                  </span>
                </div>
              </>
            ) : (
              /* Mode UPCOMING: layout stacked (info kiri, countdown kanan) */
              <div className="mx-auto max-w-6xl px-4 pt-1.5 pb-1.5 flex items-center justify-between gap-2">
                <div className="flex items-start gap-2 min-w-0">
                  <span className="relative flex-shrink-0 flex items-center justify-center w-3 h-3 mt-[2px]">
                    <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-400" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-yellow-300">{activeMomentum.label}</span>
                    <span className="text-[10px] text-slate-300">
                      Potongan DP <span className="text-emerald-300 font-extrabold">{formatDPLabel(activeMomentum.dp)}</span>
                    </span>
                    <span className="text-[9.5px] text-slate-400 font-semibold">
                      Kuota Tersedia: <span className="text-yellow-400">{URGENCY_KUOTA_TOTAL}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                  <span className="text-[9px] text-slate-400 font-semibold">Dibuka dalam:</span>
                  <div className="flex items-center gap-1">
                    <div className="bg-[#5a4c43] border border-yellow-400/20 rounded px-1.5 py-0.5 text-center min-w-[30px]">
                      <div className="text-yellow-300 font-extrabold text-[11px] leading-tight">{String(urgencyTimeLeft.days).padStart(2, "0")}</div>
                      <div className="text-white text-[7px] font-bold uppercase tracking-wide">Hari</div>
                    </div>
                    <span className="text-white text-xs font-bold">:</span>
                    <div className="bg-[#5a4c43] border border-yellow-400/20 rounded px-1.5 py-0.5 text-center min-w-[30px]">
                      <div className="text-yellow-300 font-extrabold text-[11px] leading-tight">{String(urgencyTimeLeft.hours).padStart(2, "0")}</div>
                      <div className="text-white text-[7px] font-bold uppercase tracking-wide">Jam</div>
                    </div>
                    <span className="text-white text-xs font-bold">:</span>
                    <div className="bg-[#5a4c43] border border-yellow-400/20 rounded px-1.5 py-0.5 text-center min-w-[30px]">
                      <div className="text-yellow-300 font-extrabold text-[11px] leading-tight">{String(urgencyTimeLeft.minutes).padStart(2, "0")}</div>
                      <div className="text-white text-[7px] font-bold uppercase tracking-wide">Min</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* HERO SECTION — CENTERED + BROWN GRADIENT */}
      {/* <section className="relative w-full overflow-hidden pt-[120px] min-h-[90vh] md:min-h-screen flex items-center justify-center"> */}
      <section className="relative w-full overflow-hidden pt-[148px] md:pt-[160px] min-h-[90vh] md:min-h-screen flex items-start md:items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={`${import.meta.env.BASE_URL}mahasiswa.webp`}
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
                href="https://pmb.unpas.ac.id/biaya/rincian-lengkap-v2/"
                // target="_blank"
                rel="noopener noreferrer"
                // className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                className="relative inline-flex items-center justify-center gap-2 bg-[#f5a623] text-black font-bold rounded-[100px] px-6 py-3 hover:brightness-95 transition"
              >
                💸 Lihat Biaya
              </a>

              {/* BUTTON RISET KAMPUS */}
              <a
                href="https://pmb.unpas.ac.id/riset-kampus"
                onClick={() => {
                  // EVENT GTM
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: "click_riset_kampus",
                    button_name: "Riset Kampus Bandung",
                    location: "hero_section"
                  });

                  // EVENT META PIXEL
                  if (window.fbq) {
                    window.fbq('trackCustom', 'ClickRisetKampus', {
                      button_name: "Riset Kampus Bandung",
                      location: "hero_section",
                      currency: "IDR",
                    });
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                // className="relative inline-flex items-center justify-center gap-2 bg-[#f5a623] text-black font-bold rounded-[100px] px-6 py-3 hover:brightness-95 transition"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                🔍 Riset Kampus Bandung

                {/* BADGE NEW */}
                {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-[2px] rounded-full">
                  NEW
                </span> */}
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
          {/* Header */}
          <motion.div variants={sectionItem} className="space-y-3 text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Jalur Pendaftaran PMB UNPAS</h2>
          </motion.div>

          {/* Self-select toggle */}
          <motion.div variants={sectionItem} className="flex flex-col sm:flex-row gap-3 mb-8">
            {[
              { key: "maba", ic: "🎓", title: "Lulusan SMA / SMK / MA", sub: "Baru lulus atau gap year — mau kuliah S1", count: "5 jalur" },
              { key: "transfer", ic: "🔄", title: "RPL (Rekognisi Pembelajaran Lampau)", sub: "Lulusan Diploma (D1–D3), SMA/SMK yang memiliki pengalaman kerja.", count: "2 jalur" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => { setJalurProfile(opt.key); setOpenJalurId(null); }}
                className={`flex-1 flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer
                  ${jalurProfile === opt.key
                    ? "border-[#6B5B51] bg-[#f3efec] shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"}`}
              >
                {/* radio dot */}
                <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all
                  ${jalurProfile === opt.key ? "border-[#6B5B51] bg-[#6B5B51]" : "border-slate-300 bg-white"}`}>
                  {jalurProfile === opt.key && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="text-xl flex-shrink-0">{opt.ic}</span>
                <div className="flex-1 min-w-0">
                  <span className="block text-sm font-700 font-bold text-slate-800">{opt.title}</span>
                  <span className="block text-[11px] text-slate-500 font-medium mt-0.5">{opt.sub}</span>
                </div>
                <span className={`text-[9px] font-bold px-2 py-1 rounded-full flex-shrink-0
                  ${jalurProfile === opt.key ? "bg-[#6B5B51] text-white" : "bg-slate-100 text-slate-500"}`}>
                  {opt.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Cards per group */}
          {jalurProfile === "maba" && (
            <div className="space-y-6">
              {/* USM via Nilai UTBK */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-slate-700">USM via Nilai UTBK</span>
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-[9px] font-bold bg-teal-50 text-teal-700 px-2 py-1 rounded-full uppercase tracking-wide">Bagian dari USM Gel. 2</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 items-start">
                  {JALUR_DATA.filter(j => {
                    if (j.group !== "maba" || j.subgroup !== "utbk") return false;
                    const today = new Date();
                    // Sembunyikan sebelum visibleFrom tiba
                    if (j.visibleFrom && today < wibDate(j.visibleFrom, false)) return false;
                    // Sembunyikan mulai visibleUntil (digantikan kartu berikutnya)
                    if (j.visibleUntil && today >= wibDate(j.visibleUntil, false)) return false;
                    return true;
                  }).map(j => (
                    <JalurCard key={j.id} j={j} openId={openJalurId} setOpenId={setOpenJalurId} getDeadlineLabel={getDeadlineLabel} />
                  ))}
                </div>
              </div>
              {/* Jalur Utama */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-slate-700">Jalur Utama</span>
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-[9px] font-bold bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full uppercase tracking-wide">Paling Banyak Dipilih</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 items-start">
                  {JALUR_DATA.filter(j => j.group === "maba" && j.subgroup === "utama").map(j => (
                    <JalurCard key={j.id} j={j} openId={openJalurId} setOpenId={setOpenJalurId} getDeadlineLabel={getDeadlineLabel} />
                  ))}
                </div>
              </div>
              {/* Jalur Kedokteran */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-slate-700">Jalur Kedokteran</span>
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-[9px] font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded-full uppercase tracking-wide">Program Khusus</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 items-start">
                  {JALUR_DATA.filter(j => j.group === "maba" && j.subgroup === "kedokteran").map(j => (
                    <JalurCard key={j.id} j={j} openId={openJalurId} setOpenId={setOpenJalurId} getDeadlineLabel={getDeadlineLabel} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {jalurProfile === "transfer" && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-slate-700">Jalur RPL (Rekognisi Pembelajaran Lampau)</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 items-start">
                {JALUR_DATA.filter(j => j.group === "transfer").map(j => (
                  <JalurCard key={j.id} j={j} openId={openJalurId} setOpenId={setOpenJalurId} getDeadlineLabel={getDeadlineLabel} />
                ))}
              </div>
            </div>
          )}

          {/* Guided CTA */}
          {/* <motion.div variants={sectionItem} className="mt-8 rounded-2xl bg-slate-900 p-5 flex flex-col sm:flex-row items-center gap-4">
            <span className="text-4xl flex-shrink-0">🎯</span>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-bold text-white mb-1">Belum tau mau pilih jurusan apa?</p>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">Hubungi tim kami via WhatsApp untuk mendapat rekomendasi prodi yang sesuai minat & kemampuanmu.</p>
            </div>
            <a
              href="https://wa.me/6282240218900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#6B5B51] hover:bg-[#5a4c43] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap"
            >
              Tanya via WA →
            </a>
          </motion.div> */}

        </motion.section>


        {/* SECTION: TIMELINE PENDAFTARAN */}
        {/* {(() => {
          const TL_START = new Date('2026-01-01').getTime();
          const TL_TOTAL = 273 * 86400000;
          const pct = (d) => Math.max(0, Math.min(100, (new Date(d).getTime() - TL_START) / TL_TOTAL * 100));
          const now = new Date();
          const todayISO = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
          const todayPct = pct(todayISO);
          const todayInRange = todayPct > 0 && todayPct < 100;

          const MONTHS = [
            { label: 'Jan', p: pct('2026-01-01') }, { label: 'Feb', p: pct('2026-02-01') },
            { label: 'Mar', p: pct('2026-03-01') }, { label: 'Apr', p: pct('2026-04-01') },
            { label: 'Mei', p: pct('2026-05-01') }, { label: 'Jun', p: pct('2026-06-01') },
            { label: 'Jul', p: pct('2026-07-01') }, { label: 'Agt', p: pct('2026-08-01') },
            { label: 'Sep', p: pct('2026-09-01') },
          ];

          const ROWS = [
            {
              id: 'pmdk', label: 'PMDK', sub: 'Nilai Rapor', dot: '#FBBF24',
              subRows: [[
                { gel: 'Gel. 1', s: '2026-01-05', e: '2026-06-04', hex: '#FBBF24', period: '5 Jan – 4 Jun' },
                { gel: 'Gel. 2', s: '2026-06-07', e: '2026-08-14', hex: '#F59E0B', period: '7 Jun – 14 Agt' },
              ]],
            },
            {
              id: 'usm', label: 'USM Sarjana', sub: 'Tes Masuk', dot: '#3B82F6',
              subRows: [[
                { gel: 'Gel. 1', s: '2026-01-05', e: '2026-04-10', hex: '#60A5FA', period: '5 Jan – 10 Apr' },
                { gel: 'Gel. 2', s: '2026-04-14', e: '2026-07-03', hex: '#3B82F6', period: '14 Apr – 3 Jul' },
                { gel: 'Gel. 3', s: '2026-07-07', e: '2026-08-07', hex: '#2563EB', period: '7 Jul – 7 Agt' },
              ]],
            },
            {
              id: 'fk', label: 'Kedokteran', sub: 'FK UNPAS', dot: '#005005',
              subRows: [
                [{ gel: 'Gel. 1', s: '2026-01-05', e: '2026-03-24', hex: '#005005', period: '5 Jan – 24 Mar' }],
                [{ gel: 'Gel. 2', s: '2026-02-25', e: '2026-05-19', hex: '#005005', period: '25 Feb – 19 Mei' }],
                [{ gel: 'Gel. 3', s: '2026-05-20', e: '2026-06-17', hex: '#005005', period: '20 Mei – 17 Jun' }],
              ],
            },
            {
              id: 'rpl', label: 'RPL', sub: 'Perolehan & Transfer', dot: '#14B8A6',
              subRows: [[
                { gel: 'Perolehan & Transfer', s: '2026-01-05', e: '2026-09-30', hex: '#14B8A6', period: '5 Jan – 30 Sep' },
              ]],
            },
          ];

          return (
            <motion.section
              className="mt-16"
              id="timeline-pendaftaran"
              variants={sectionContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div variants={sectionItem} className="space-y-2 text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-bold">Timeline Pendaftaran PMB UNPAS</h2>
              </motion.div>

              <motion.div variants={sectionItem} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <div style={{ minWidth: '600px' }}>

                    <div className="flex mb-3">
                      <div className="w-32 flex-shrink-0" />
                      <div className="flex-1 relative h-8">
                        {MONTHS.map((m) => (
                          <span
                            key={m.label}
                            className="absolute bottom-0 text-[11px] font-semibold text-slate-400 -translate-x-1/2 select-none"
                            style={{ left: m.p + '%' }}
                          >{m.label}</span>
                        ))}
                        {todayInRange && (
                          <div className="absolute top-0 -translate-x-1/2 z-10" style={{ left: todayPct + '%' }}>
                            <span className="inline-block bg-red-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                              Hari ini
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      {ROWS.map((row) => (
                        <div key={row.id} className="flex items-start">
                          <div className="w-32 flex-shrink-0 pr-3 text-right pt-1">
                            <div className="text-[12px] font-bold text-slate-800 leading-tight">{row.label}</div>
                            <div className="text-[10px] text-slate-400 leading-tight">{row.sub}</div>
                          </div>
                          <div className="flex-1 flex flex-col gap-1">
                            {row.subRows.map((bars, si) => (
                              <div key={si} className="relative h-10 rounded bg-slate-50">
                                {MONTHS.map((m) => (
                                  <div key={m.label} className="absolute top-0 bottom-0 border-l border-slate-200" style={{ left: m.p + '%' }} />
                                ))}
                                {todayInRange && (
                                  <div className="absolute top-0 bottom-0 z-10" style={{ left: todayPct + '%', borderLeft: '2px dashed #F87171' }} />
                                )}
                                {bars.map((bar, bi) => {
                                  const l = pct(bar.s);
                                  const w = pct(bar.e) - pct(bar.s);
                                  const isNarrow = w < 14;
                                  const [pStart, pEnd] = bar.period.split(' – ');
                                  return (
                                    <div
                                      key={bi}
                                      className="absolute top-0.5 bottom-0.5 rounded flex flex-col justify-center overflow-hidden z-20 px-1.5"
                                      style={{ left: l + '%', width: w + '%', backgroundColor: bar.hex }}
                                      title={bar.gel + ': ' + bar.period}
                                    >
                                      <span className="text-[9px] font-bold text-white leading-none truncate select-none whitespace-nowrap">{bar.gel}</span>
                                      <span className="hidden sm:block text-[8px] text-white/90 leading-none truncate select-none whitespace-nowrap mt-0.5">{bar.period}</span>
                                      {isNarrow ? (
                                        <>
                                          <span className="sm:hidden text-[7.5px] text-white/90 leading-none truncate select-none whitespace-nowrap mt-0.5">{pStart} {'–'}</span>
                                          <span className="sm:hidden text-[7.5px] text-white/90 leading-none truncate select-none whitespace-nowrap">{pEnd}</span>
                                        </>
                                      ) : (
                                        <span className="sm:hidden text-[8px] text-white/90 leading-none truncate select-none whitespace-nowrap mt-0.5">{bar.period}</span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 pt-4 border-t border-slate-100">
                  {ROWS.map((row) => (
                    <div key={row.id} className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: row.dot }} />
                      <span className="text-[11px] font-semibold text-slate-600">{row.label}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-0.5 flex-shrink-0 border-t-2 border-dashed border-red-400" />
                    <span className="text-[11px] font-semibold text-slate-600">Hari ini</span>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          );
        })()} */}


        {/* SECTION: PANDUAN PENDAFTARAN version 2 */}
        <motion.section
          className="mt-16"
          id="timeline-alur"
          variants={sectionItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={sectionItem} className="space-y-3 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Panduan Pendaftaran Mahasiswa Baru
            </h2>
          </motion.div>

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
            ${activeStep === step.id
                        ? "text-[#6B5B51]"
                        : "text-slate-400"
                      }`}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            {/* CONTENT BOX */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="text-md font-bold text-slate-900 mb-2">
                {steps[activeStep - 1].title}
              </h3>

              {/* <p className="mt-2 text-slate-600">
                {steps[activeStep - 1].desc}
              </p> */}

              {/* IMAGE */}
              {steps[activeStep - 1].image && (
                <div className="mb-5 flex flex-col items-center">
                  <img
                    src={steps[activeStep - 1].image}
                    alt={steps[activeStep - 1].title}
                    className="w-lg rounded-xl border border-slate-200 shadow-sm mx-auto"
                  />
                  {steps[activeStep - 1].seleksi && (
                    <div>
                      <h3 className="text-md font-bold text-slate-900 mt-4 mb-2">
                        Ikuti Proses Seleksi (Sesuai Jalur yang Dipilih)
                      </h3>
                      <img
                        src={`${import.meta.env.BASE_URL}img/4_proses_seleksi_cbt.webp`}
                        alt="proses seleksi"
                        className="w-lg rounded-xl border border-slate-200 shadow-sm mx-auto"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* CTA KHUSUS STEP HASIL SELEKSI */}
              {steps[activeStep - 1].cta && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={steps[activeStep - 1].ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#6B5B51] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5a4c43] transition"
                  >
                    🔐 {steps[activeStep - 1].ctaLabel}
                  </a>
                </div>
              )}

              <div className="mt-4 mb-4 flex justify-center">
                {/* LINK PANDUAN PDF */}
                <a
                  href="https://drive.google.com/file/d/1Z_pY63t6DE0O2Rg-5PsKSgZ9_J7JRMLu/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-md font-semibold text-red-600 hover:text-red-700 transition"
                >
                  {/* ICON PDF */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 13h2.5a2.5 2.5 0 1 0 0-5H8v5zm2.3-3a.7.7 0 1 1 0 1.4H9.4V10h.9zm3.7 3h1.3l1.7 4h-1.3l-.3-.8h-1.5l-.3.8h-1.3l1.7-4zm.8 2.3h.9l-.4-1.2-.5 1.2zm4.2-2.3h-2v4h2a2 2 0 0 0 0-4zm-.2 3h-.6v-2h.6a1 1 0 1 1 0 2z" />
                  </svg>

                  Lihat Panduan Lengkap
                </a>
              </div>

              {/* ACTION */}
              <div className="mt-6 flex justify-end gap-3">
                {activeStep > 1 && (
                  <button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-600 cursor-pointer"
                  >
                    Sebelumnya
                  </button>
                )}

                {activeStep < steps.length && (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="rounded-full bg-[#6B5B51] px-6 py-2 text-sm font-semibold text-white hover:bg-[#5a4c43] cursor-pointer"
                  >
                    Selanjutnya
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.section>


        {/* SECTION: Program Studi */}
        <motion.section id="program-studi" className="mt-16" variants={sectionItem} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <ProdiExplorer />
        </motion.section>

        {/* SECTION: CTA GELOMBANG — disembunyikan saat semua momentum selesai */}
        {momentumState.mode !== "ended" && (
        <motion.section className="mt-16 px-4" variants={sectionItem} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <div className="relative overflow-hidden rounded-2xl"
            style={{ background: "linear-gradient(150deg, #2e2320 0%, #3F3631 45%, #4a3c37 100%)" }}>
            {/* decorative radial glow */}
            <div className="pointer-events-none absolute -top-20 -right-16 w-56 h-56 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(234,179,8,0.12) 0%, transparent 70%)" }} />
            <div className="pointer-events-none absolute -bottom-12 -left-10 w-40 h-40 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(107,91,81,0.25) 0%, transparent 70%)" }} />

            <div className="relative z-10 px-6 py-8 md:px-10 md:py-10">

              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-1.5">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-300">
                  {momentumState.mode === "active"
                    ? `Gelombang ${activeMomentum.label} Sedang Berlaku`
                    : momentumState.mode === "upcoming"
                    ? `${activeMomentum.label} Segera Dibuka – ${formatDateLong(activeMomentum.start)}`
                    : "Pendaftaran Akan Segera Dibuka"}
                </span>
              </div>

              {/* Heading */}
              <h2 className="mb-2 text-2xl font-extrabold leading-tight text-white md:text-3xl">
                {momentumState.mode === "active" ? (
                  <>Jangan Sampai Kehilangan<br />Potongan <span className="text-yellow-300">{formatDPLabel(activeMomentum.dp)}</span></>
                ) : momentumState.mode === "upcoming" ? (
                  <>Amankan Kesempatanmu Sebelum<br /><span className="text-yellow-300">{activeMomentum.label}</span> Dibuka</>
                ) : (
                  <>Pantau Terus Info<br /><span className="text-yellow-300">Pendaftaran UNPAS</span></>
                )}
              </h2>
              {/* <p className="mb-7 text-sm font-medium text-slate-400">
                Setelah 25 Maret, potongan turun jadi Rp 1,5 juta — dan kuota semakin sedikit.
              </p> */}

              {/* Countdown — hanya tampil saat ada target */}
              {momentumState.mode !== "ended" && (
                <div className="mb-6 flex justify-center gap-3">
                  {[
                    { val: urgencyTimeLeft.days, lbl: "Hari" },
                    { val: urgencyTimeLeft.hours, lbl: "Jam" },
                    { val: urgencyTimeLeft.minutes, lbl: "Menit" },
                    { val: urgencyTimeLeft.seconds, lbl: "Detik" },
                  ].map(({ val, lbl }, i, arr) => (
                    <React.Fragment key={lbl}>
                      <div className="text-center">
                        <div className="flex min-w-[52px] items-center justify-center rounded-xl border border-white/10 bg-white/6 py-2"
                          style={{ background: "rgba(255,255,255,0.06)" }}>
                          <span className="text-2xl font-black leading-none text-white md:text-3xl">
                            {String(val).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">{lbl}</div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="flex items-center pb-5 text-xl font-bold text-white/20">:</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* Warning */}
              <div className="mb-5 flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/8 px-4 py-3"
                style={{ background: "rgba(239,68,68,0.07)" }}>
                <span className="flex-shrink-0 text-base">⚠️</span>
                <p className="text-xs font-semibold leading-snug text-red-300">
                  {momentumState.mode === "active"
                    ? `Yang daftar kemarin udah hemat ${formatDPLabel(activeMomentum.dp)}. Kamu kapan?`
                    : momentumState.mode === "upcoming"
                    ? `${activeMomentum.label} dibuka ${formatDateLong(activeMomentum.start)}. Daftar awal, kuota lebih aman — potongan ${formatDPLabel(activeMomentum.dp)} untuk yang bergerak duluan.`
                    : "Ikuti media sosial UNPAS untuk informasi pendaftaran gelombang selanjutnya."}
                </p>
              </div>

              {/* Comparison gelombang — hanya saat masih ada momentum aktif/upcoming */}
              {momentumState.mode !== "ended" && (
                <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {GELOMBANG_PMDK[0].momentums.map((m, idx) => {
                    const today = new Date();
                    const mStart = new Date(m.start + "T00:00:00+07:00");
                    const mEnd = new Date(m.end + "T23:59:59+07:00");
                    const isPast = today > mEnd;
                    const isActive = today >= mStart && today <= mEnd;
                    const isNextUpcoming = momentumState.mode === "upcoming" && activeMomentum === m;
                    const isHighlighted = isActive || isNextUpcoming;
                    const rangeText = `${formatDateShort(m.start)} – ${formatDateShort(m.end)} ${new Date(m.end + "T00:00:00+07:00").getFullYear()}`;
                    const badgeLabel = isPast ? "SELESAI" : isActive ? "SEKARANG" : "SEGERA";
                    return (
                      <div key={idx}
                        className={`rounded-xl border px-3 py-3 text-center ${isPast ? "border-white/10 opacity-50" : isHighlighted ? (isActive ? "border-teal-400/30" : "border-yellow-400/30") : "border-white/10"}`}
                        style={{ background: isPast ? "rgba(255,255,255,0.04)" : isHighlighted ? (isActive ? "rgba(20,184,166,0.07)" : "rgba(234,179,8,0.07)") : "rgba(255,255,255,0.07)" }}>
                        <div className={`mb-1.5 text-[11px] font-bold uppercase tracking-wider ${isPast ? "text-slate-400" : isHighlighted ? (isActive ? "text-teal-400" : "text-yellow-400") : "text-slate-300"}`}>
                          {m.label}
                        </div>
                        <div className={`text-2xl font-black md:text-2xl ${isPast ? "text-slate-400" : isHighlighted ? (isActive ? "text-teal-300" : "text-yellow-300") : "text-white"}`}>
                          {formatDPShort(m.dp)}
                        </div>
                        {(isPast || isHighlighted) ? (
                          <div className={`mt-2 inline-block rounded-sm px-2 py-0.5 text-[9px] font-bold ${isPast ? "bg-white/10 text-slate-500" : isActive ? "bg-teal-400/15 text-teal-400" : "bg-yellow-400/15 text-yellow-400"}`}>
                            {isActive ? rangeText : `${badgeLabel} (${rangeText})`}
                          </div>
                        ) : (
                          <div className="mt-2 text-[10px] font-semibold text-slate-400">{rangeText}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://situ2.unpas.ac.id/spmbfront/jalur-seleksi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-extrabold text-[#2e2320] shadow-lg transition hover:bg-yellow-300"
                  style={{ boxShadow: "0 4px 20px rgba(234,179,8,0.3)" }}
                >
                  {momentumState.mode === "ended" ? "Lihat Jalur Pendaftaran →" : "Daftar Sekarang & Amankan Potongan →"}
                </a>
                <a
                  href="https://pmb.unpas.ac.id/quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 px-6 py-3 text-xs font-semibold text-slate-300 transition hover:border-white/25 hover:bg-white/5"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                >
                  🎯 Belum yakin? Coba Tes Kecocokan Prodi (2 menit)
                </a>
              </div>

              {/* Trust */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                {["Akreditasi Unggul", "27 Prodi S1", "1.900+ Sudah Daftar"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                    <span className="text-emerald-400 font-bold">✓</span>{t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </motion.section>
        )}

        <motion.section>
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
                href="https://pmb.unpas.ac.id/form_refund"
                target="_blank"
                className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-[#6B5B51] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#5a4c43] transition"
              >
                📄 Unduh Dokumen Persetujuan Ketentuan Refund Camaba Universitas Pasundan 2026-2027
              </a>
            </div>

            <div className="w-full mt-4">
              <a
                href="https://pmb.unpas.ac.id/form_refund_fk"
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
        <div className="mx-auto max-w-6xl px-4 py-6 text-center">
          <div className="space-y-1 text-xs text-slate-500">
            <div className="font-semibold text-slate-700">
              Penerimaan Mahasiswa Baru {new Date().getFullYear()} – Universitas Pasundan
            </div>
            <div>© {new Date().getFullYear()} Universitas Pasundan. All rights reserved.</div>
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

      {/* ── PROMO POPUP: USM via Nilai UTBK (otomatis Sesi 1 → Sesi 2 → hilang) ── */}
      {(() => {
        const popupContent = popupVariant === "sesi1" ? {
          badge: "USM Gelombang 2 · via Nilai UTBK · Sesi 1",
          title: "Punya Sertifikat UTBK?",
          subtitle: "Daftar Sekarang — Tanpa Tes Tulis",
          points: [
            { ic: "📤", text: "Upload sertifikat UTBK 2024, 2025, atau 2026" },
            { ic: "⚡", text: "Hasil seleksi keluar dalam 1 hari kerja" },
            { ic: "📅", text: "Upload Sesi 1: 2 – 14 Juni 2026" },
          ],
          cost: "💳 Formulir Rp 350.000",
          deadline: "⏳ Tutup 14 Juni 2026",
          link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/305",
          img: "banner/utbk1.webp",
          imgAlt: "USM Nilai UTBK Sesi 1 – Universitas Pasundan",
        } : popupVariant === "sesi2" ? {
          badge: "USM Gelombang 2 · via Nilai UTBK · Sesi 2",
          title: "Masih Punya Sertifikat UTBK?",
          subtitle: "Sesi 2 Dibuka — Tanpa Tes Tulis",
          points: [
            { ic: "📤", text: "Upload sertifikat UTBK 2024, 2025, atau 2026" },
            { ic: "⚡", text: "Hasil seleksi keluar dalam 1 hari kerja" },
            { ic: "📅", text: "Upload Sesi 2: 15 – 28 Juni 2026" },
          ],
          cost: "💳 Formulir Rp 400.000",
          deadline: "⏳ Tutup 28 Juni 2026",
          link: "https://situ2.unpas.ac.id/spmbfront/jalur-seleksi-detail/306",
          img: "banner/utbk2.webp",
          imgAlt: "USM Nilai UTBK Sesi 2 – Universitas Pasundan",
        } : null;
        if (!popupContent) return null;
        return (
      <AnimatePresence>
        {showPromoPopup && (
          <motion.div
            key="promo-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
            style={{ background: "rgba(8,33,61,0.72)", backdropFilter: "blur(4px)" }}
            onClick={() => setShowPromoPopup(false)}
          >
            <motion.div
              key="promo-modal"
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto flex flex-col md:flex-row md:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol tutup */}
              <button
                onClick={() => setShowPromoPopup(false)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition font-bold text-lg leading-none cursor-pointer shadow-sm"
                aria-label="Tutup"
              >
                ✕
              </button>

              {/* Kolom kiri — banner (hanya tampil di desktop) */}
              <div className="hidden md:block md:w-[42%] overflow-hidden flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}${popupContent.img}`}
                  alt={popupContent.imgAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Kolom kanan — info & CTA */}
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-100 text-teal-700 text-[10px] md:text-[11px] font-bold px-3 py-1 rounded-full mb-2 md:mb-3 self-start tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse inline-block" />
                  {popupContent.badge}
                </div>

                <h2 className="text-lg md:text-xl font-extrabold text-slate-900 leading-tight mb-1">
                  {popupContent.title}
                </h2>
                <p className="text-sm font-semibold text-teal-600 mb-3">
                  {popupContent.subtitle}
                </p>

                {/* Key points */}
                <div className="flex flex-col gap-1.5 mb-3">
                  {popupContent.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-slate-50 rounded-lg px-3 py-2">
                      <span className="text-sm flex-shrink-0">{p.ic}</span>
                      <span className="text-[12px] font-medium text-slate-700 leading-snug">{p.text}</span>
                    </div>
                  ))}
                </div>

                {/* Biaya + deadline chip */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-[11px] md:text-[12px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                    {popupContent.cost}
                  </span>
                  <span className="text-[11px] md:text-[12px] font-bold bg-red-50 text-red-600 px-3 py-1 rounded-full">
                    {popupContent.deadline}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={popupContent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowPromoPopup(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#6B5B51] hover:bg-[#5a4c43] text-white font-bold text-sm py-3 rounded-xl transition mb-2"
                >
                  Lihat Detail & Daftar Sekarang →
                </a>
                <button
                  onClick={() => setShowPromoPopup(false)}
                  className="w-full text-[11px] text-slate-400 hover:text-slate-600 transition py-1 cursor-pointer"
                >
                  Tutup — lihat jalur lainnya
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        );
      })()}

      <ScrollToTop
        smooth
        component={
          <div className="flex h-8 w-11 items-center justify-center rounded-xl bg-[#6B5B51]/70 backdrop-blur border border-white/20 shadow-md hover:bg-[#6B5B51]/90 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
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