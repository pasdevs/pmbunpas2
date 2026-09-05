import { useState, useRef, useEffect, useCallback } from "react";

export const LANGUAGES = [
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

export function useGoogleTranslate() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("id");
  const langRef = useRef(null);

  const changeLanguage = useCallback((lang) => {
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
  }, []);

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
  }, [changeLanguage]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { langOpen, setLangOpen, selectedLang, setSelectedLang, langRef, changeLanguage };
}
