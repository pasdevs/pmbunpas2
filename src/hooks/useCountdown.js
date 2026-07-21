import { useState, useEffect, useCallback } from "react";

// deadlineISO: string ISO date, atau null/falsy jika tidak ada deadline aktif
export function useCountdown(deadlineISO) {
  const calculateTimeLeft = useCallback(() => {
    if (!deadlineISO) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const diff = new Date(deadlineISO).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [deadlineISO]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!deadlineISO) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [deadlineISO, calculateTimeLeft]);

  return timeLeft;
}
