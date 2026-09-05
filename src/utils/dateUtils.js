export const wibDate = (dateStr, endOfDay) => {
  const [y, m, d] = dateStr.split('-').map(Number);
  return endOfDay
    ? new Date(Date.UTC(y, m - 1, d, 16, 59, 59))    // 23:59:59 WIB = 16:59:59 UTC
    : new Date(Date.UTC(y, m - 1, d - 1, 17, 0, 0)); // 00:00:00 WIB = 17:00:00 UTC hari sebelumnya
};

// Ambil gelombang aktif, atau berikutnya jika di gap, atau terakhir jika semua tutup
export const getSmartActive = (list) => {
  const today = new Date();
  const active = list.find(g => today >= wibDate(g.start, false) && today <= wibDate(g.end, true));
  if (active) return active;
  const next = list.find(g => today < wibDate(g.start, false));
  return next || list[list.length - 1];
};

// GET MOMENTUM AKTIF
export const getActiveMomentum = (momentums) => {
  const today = new Date();
  return momentums.find(m => today >= wibDate(m.start, false) && today <= wibDate(m.end, true)) || null;
};

// 4 state: closed | soon | closing | open
export const getStatusInfo = (startDate, endDate) => {
  const today = new Date();
  const diffStart = (wibDate(startDate, false) - today) / (1000 * 60 * 60 * 24);
  const diffEnd   = (wibDate(endDate, true)   - today) / (1000 * 60 * 60 * 24);

  if (diffEnd < 0)   return { status: 'closed',  text: 'Sudah Ditutup' };
  if (diffStart > 0) return { status: 'soon',    text: `Dibuka ${Math.ceil(diffStart)} hari lagi` };
  if (diffEnd <= 3)  return { status: 'closing', text: 'Segera Ditutup' };
  return               { status: 'open',    text: 'Sedang Dibuka' };
};

export const getDeadlineLabel = (deadlineStr) => {
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

export const formatDateShort = (dateStr) => {
  const months = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
  const d = new Date(dateStr + "T00:00:00+07:00");
  return `${d.getDate()} ${months[d.getMonth()]}`;
};

export const formatDateLong = (dateStr) => {
  const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const d = new Date(dateStr + "T00:00:00+07:00");
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
