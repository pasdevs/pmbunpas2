{/* SECTION: JALUR PENDAFTARAN */ }
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