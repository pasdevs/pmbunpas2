export const formatRupiah = (val) => {
  if (!val) return "—";
  return `−Rp ${val.toLocaleString("id-ID")}`;
};

export const formatDPLabel = (dp) => {
  if (!dp) return "—";
  const juta = dp / 1000000;
  return `Rp ${juta % 1 === 0 ? juta : juta.toFixed(1).replace(".", ",")} Juta`;
};

export const formatDPShort = (dp) => {
  if (!dp) return "—";
  const juta = dp / 1000000;
  return `−Rp ${juta % 1 === 0 ? juta : juta.toFixed(1).replace(".", ",")}jt`;
};
