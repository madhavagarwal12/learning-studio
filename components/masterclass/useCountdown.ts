
import { useEffect, useState } from 'react';

// Shared anchor so every countdown on the page ticks from the same clock,
// regardless of when each component mounts (e.g. the checkout modal opens
// later than the page loads) — they all stay in sync as long as they share
// the same duration.
const SESSION_START = Date.now();

const getRemainingSeconds = (durationSeconds: number) => {
  const elapsed = Math.floor((Date.now() - SESSION_START) / 1000);
  return durationSeconds - (elapsed % durationSeconds);
};

export const useCountdown = (durationSeconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(() => getRemainingSeconds(durationSeconds));

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(getRemainingSeconds(durationSeconds));
    }, 1000);
    return () => clearInterval(interval);
  }, [durationSeconds]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
