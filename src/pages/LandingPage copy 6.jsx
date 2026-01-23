import React, { useEffect, useMemo, useState } from "react";

// PMB UNPAS – Preview-safe single file (React + Tailwind)
// Notes:
// - No router
// - No external UI libs
// - Tailwind-only classes

const jalurMasuk = [
  {
    tag: "Dibuka",
    title: "USM (Ujian Saringan Masuk)",
    desc: "Jalur reguler untuk semua calon mahasiswa. Proses jelas, cepat, dan transparan.",
    cta: "Lihat Detail",
  },
  {
    tag: "Dibuka",
    title: "PMDK",
    desc: "Jalur tanpa tes untuk siswa eligible. Unggah berkas dan pantau status seleksi.",
    cta: "Lihat Detail",
  },
  {
    tag: "Ditutup",
    title: "Early Bird",
    desc: "Periode promo sudah berakhir. Lihat informasi gelombang berjalan dan peluang berikutnya.",
    cta: "Info Selengkapnya",
  },
];

const quickLinks = [
  { title: "Prodi 50+", desc: "Eksplor semua program studi UNPAS lintas fakultas.", href: "#prodi" },
  { title: "Beasiswa", desc: "Lihat opsi beasiswa & potongan yang tersedia.", href: "#beasiswa" },
  { title: "Simulasi Biaya", desc: "Estimasi biaya kuliah sesuai prodi & skema pembayaran.", href: "#simulasi" },
];

function Badge({ children, tone = "emerald" }) {
  const tones = {
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    slate: "bg-slate-50 text-slate-700 ring-slate-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-200",
    amber: "bg-amber-50 text-amber-800 ring-amber-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${tones[tone] || tones.emerald
        }`}
    >
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6">{children}</div>
    </div>
  );
}

function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

function GhostButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="mb-3">
          <Badge>{eyebrow}</Badge>
        </div>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 text-slate-600">{desc}</p> : null}
    </div>
  );
}

function scrollToHash(hash) {
  if (typeof window === "undefined") return;
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navbar() {
  return (
    <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-600 text-white font-extrabold">
            U
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">PMB UNPAS</div>
            <div className="text-xs text-slate-500">Portal Penerimaan Mahasiswa Baru</div>
          </div>
        </div>

        <div className="hidden items-center gap-6 sm:flex">
          <a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#jalur">
            Jalur Masuk
          </a>
          <a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#prodi">
            Prodi
          </a>
          <a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#beasiswa">
            Beasiswa
          </a>
          <a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#simulasi">
            Simulasi Biaya
          </a>
        </div>

        <div className="flex items-center gap-2">
          <GhostButton
            onClick={() => alert("Bantuan/FAQ: hubungkan ke halaman /bantuan atau widget helpdesk.")}
          >
            Bantuan
          </GhostButton>
          <PrimaryButton onClick={() => alert("Arahkan ke flow pendaftaran (mis. /daftar).")}>
            Daftar Sekarang
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

// -----------------------------
// Gelombang Schedule Utilities
// -----------------------------

function buildGelombangSchedule(year) {
  const y = year;
  return [
    {
      id: "g1",
      label: "Gelombang 1",
      start: new Date(y, 0, 10, 0, 0, 0),
      end: new Date(y, 2, 31, 23, 59, 59),
    },
    {
      id: "g2",
      label: "Gelombang 2",
      start: new Date(y, 3, 1, 0, 0, 0),
      end: new Date(y, 5, 30, 23, 59, 59),
    },
    {
      id: "g3",
      label: "Gelombang 3",
      start: new Date(y, 6, 1, 0, 0, 0),
      end: new Date(y, 8, 30, 23, 59, 59),
    },
    {
      id: "g4",
      label: "Gelombang 4",
      start: new Date(y, 9, 1, 0, 0, 0),
      end: new Date(y, 11, 20, 23, 59, 59),
    },
  ];
}

function computeGelombangStatus(now, g) {
  if (now < g.start) return "upcoming";
  if (now > g.end) return "ended";
  return "active";
}

function getActiveGelombang(now = new Date()) {
  const year = now.getFullYear();
  const list = buildGelombangSchedule(year).map((g) => ({
    ...g,
    status: computeGelombangStatus(now, g),
  }));

  const active = list.find((g) => g.status === "active");
  if (active) return active;

  const upcoming = list.find((g) => g.status === "upcoming");
  if (upcoming) return upcoming;

  return list[list.length - 1];
}

function formatCountdown(ms) {
  if (ms <= 0) return "00:00:00:00";
  const sec = Math.floor(ms / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// -----------------------------
// Hero Section
// -----------------------------

function Hero() {
  const [now, setNow] = useState(new Date());
  const active = useMemo(() => getActiveGelombang(now), [now]);
  const isActive = active.status === "active";
  const targetDate = isActive ? active.end : active.start;
  const remaining = Math.max(0, targetDate.getTime() - now.getTime());
  const countdown = formatCountdown(remaining);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const badgeTone =
    active.status === "active" ? "emerald" : active.status === "upcoming" ? "amber" : "slate";

  return (
    <div className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4">
              <Badge tone={badgeTone}>
                {active.status === "active"
                  ? `${active.label} sedang dibuka`
                  : active.status === "upcoming"
                    ? `${active.label} akan dibuka`
                    : `${active.label} telah ditutup`}
              </Badge>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Penerimaan Mahasiswa Baru <span className="text-emerald-600">UNPAS</span>
            </h1>

            <p className="mt-4 text-slate-600">
              Daftar kuliah di Universitas Pasundan melalui berbagai jalur pendaftaran yang tersedia.
              Proses pendaftaran cepat, transparan, dan bisa dilakukan sepenuhnya secara online.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PrimaryButton onClick={() => alert("Masuk ke alur pendaftaran.")}>
                Mulai Pendaftaran
              </PrimaryButton>
              <GhostButton onClick={() => scrollToHash("#jalur")}>
                Lihat Jalur Masuk
              </GhostButton>
            </div>

            <div className="mt-8">
              <div className="text-sm font-medium text-slate-700">
                {active.status === "active" ? "Pendaftaran ditutup dalam:" : "Dibuka dalam:"}
              </div>
              <div className="mt-2 flex items-center gap-2 text-2xl font-mono font-bold tracking-wider text-slate-900">
                {countdown.split(":").map((p, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Format: Hari : Jam : Menit : Detik
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-emerald-100 blur-3xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm text-slate-500">Gelombang Aktif</div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">
                    {active.label}
                  </div>
                  <div className="mt-2 text-xs text-slate-500">
                    {active.start.toLocaleDateString("id-ID")} –{" "}
                    {active.end.toLocaleDateString("id-ID")}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm text-slate-500">Status</div>
                  <div className="mt-1">
                    <Badge tone={badgeTone}>
                      {active.status === "active"
                        ? "Dibuka"
                        : active.status === "upcoming"
                          ? "Akan Datang"
                          : "Ditutup"}
                    </Badge>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4 sm:col-span-2">
                  <div className="text-sm text-slate-500">Catatan</div>
                  <div className="mt-1 text-sm text-slate-700">
                    Jadwal dapat berubah sewaktu-waktu mengikuti kebijakan universitas.
                    Silakan pantau informasi resmi PMB UNPAS secara berkala.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------
// Jalur Masuk Section
// -----------------------------

function JalurMasuk() {
  return (
    <section id="jalur" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Jalur Pendaftaran"
          title="Pilih Jalur Masuk Sesuai Kebutuhan"
          desc="UNPAS menyediakan beberapa jalur pendaftaran untuk mengakomodasi berbagai latar belakang calon mahasiswa."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jalurMasuk.map((item, idx) => (
            <Card key={idx}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.desc}
                  </p>
                </div>
                <Badge tone={item.tag === "Dibuka" ? "emerald" : "slate"}>
                  {item.tag}
                </Badge>
              </div>

              <div className="mt-6">
                <GhostButton
                  onClick={() =>
                    alert(`Detail jalur ${item.title} (hubungkan ke halaman detail).`)
                  }
                >
                  {item.cta}
                </GhostButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Quick Links Section
// -----------------------------

function QuickLinks() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {quickLinks.map((item, idx) => (
            <Card key={idx}>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {item.desc}
              </p>
              <div className="mt-6">
                <PrimaryButton onClick={() => scrollToHash(item.href)}>
                  Jelajahi
                </PrimaryButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Prodi Section
// -----------------------------

const prodiList = [
  "Ilmu Hukum",
  "Manajemen",
  "Akuntansi",
  "Ilmu Komunikasi",
  "Administrasi Publik",
  "Teknik Informatika",
  "Sistem Informasi",
  "Teknik Industri",
  "Teknik Mesin",
  "Teknik Sipil",
  "Farmasi",
  "Psikologi",
];

function Prodi() {
  return (
    <section id="prodi" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Program Studi"
          title="Lebih dari 50 Program Studi"
          desc="Pilih program studi sesuai minat dan bakat kamu di Universitas Pasundan."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {prodiList.map((name, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="font-medium text-slate-900">{name}</div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <PrimaryButton
            onClick={() =>
              alert("Lihat semua program studi (hubungkan ke halaman prodi).")
            }
          >
            Lihat Semua Prodi
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Beasiswa Section
// -----------------------------

function Beasiswa() {
  return (
    <section id="beasiswa" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Beasiswa"
          title="Kesempatan Beasiswa & Potongan Biaya"
          desc="UNPAS menyediakan berbagai skema beasiswa untuk mendukung calon mahasiswa berprestasi."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900">
              Beasiswa Prestasi
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Untuk siswa dengan prestasi akademik maupun non-akademik unggulan.
            </p>
            <div className="mt-4">
              <Badge>Akademik</Badge>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900">
              Beasiswa Keluarga Pasundan
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Potongan biaya khusus bagi keluarga besar Pasundan.
            </p>
            <div className="mt-4">
              <Badge tone="amber">Internal</Badge>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900">
              Beasiswa Mitra
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Kerja sama UNPAS dengan mitra institusi dan industri.
            </p>
            <div className="mt-4">
              <Badge tone="slate">Eksternal</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Simulasi Biaya Section
// -----------------------------

function Simulasi() {
  const [prodi, setProdi] = useState("");
  const [gelombang, setGelombang] = useState("");

  function handleSimulasi() {
    if (!prodi || !gelombang) {
      alert("Pilih program studi dan gelombang terlebih dahulu.");
      return;
    }

    // Dummy logic simulasi
    const base = 6000000;
    const factor =
      gelombang === "Gelombang 1" ? 0.9 : gelombang === "Gelombang 2" ? 1 : 1.1;
    const total = Math.round(base * factor);

    alert(
      `Estimasi biaya untuk ${prodi} (${gelombang}): Rp ${total.toLocaleString(
        "id-ID"
      )}`
    );
  }

  return (
    <section id="simulasi" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Simulasi Biaya"
          title="Hitung Estimasi Biaya Kuliah"
          desc="Gunakan simulasi ini untuk mendapatkan gambaran awal biaya kuliah di UNPAS."
        />

        <div className="mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Program Studi
              </label>
              <select
                value={prodi}
                onChange={(e) => setProdi(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Pilih Prodi</option>
                {prodiList.map((p, i) => (
                  <option key={i} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Gelombang
              </label>
              <select
                value={gelombang}
                onChange={(e) => setGelombang(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Pilih Gelombang</option>
                <option value="Gelombang 1">Gelombang 1</option>
                <option value="Gelombang 2">Gelombang 2</option>
                <option value="Gelombang 3">Gelombang 3</option>
                <option value="Gelombang 4">Gelombang 4</option>
              </select>
            </div>

            <div className="pt-2">
              <PrimaryButton onClick={handleSimulasi}>
                Hitung Estimasi
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// CTA Section
// -----------------------------

function CTASection() {
  return (
    <section className="bg-emerald-600 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Siap Menjadi Bagian dari UNPAS?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
          Jangan tunda lagi. Daftarkan dirimu sekarang dan wujudkan masa depan
          bersama Universitas Pasundan.
        </p>
        <div className="mt-6">
          <PrimaryButton onClick={() => alert("Masuk ke flow pendaftaran.")}>
            Daftar Sekarang
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Footer
// -----------------------------

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              PMB Universitas Pasundan
            </div>
            <div className="mt-1 text-xs text-slate-500">
              © {new Date().getFullYear()} Universitas Pasundan. All rights
              reserved.
            </div>
          </div>

          <div className="flex gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-slate-900">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-slate-900">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// -----------------------------
// Root App Component
// -----------------------------

export default function PMBPortalPreview() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <JalurMasuk />
      <QuickLinks />
      <Prodi />
      <Beasiswa />
      <Simulasi />
      <CTASection />
      <Footer />
    </div>
  );
}