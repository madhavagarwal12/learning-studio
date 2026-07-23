
import { useEffect, useState } from 'react';

// Shared anchor so every countdown on the page counts down from the same
// clock, regardless of when each component mounts (e.g. the checkout modal
// opens later than the page loads).
const SESSION_START = Date.now();

const getRemainingSeconds = (durationSeconds: number) => {
  const elapsed = Math.floor((Date.now() - SESSION_START) / 1000);
  return durationSeconds - (elapsed % durationSeconds);
};

// A single, page-wide ticker (rather than one setInterval per hook instance)
// so every timer recomputes inside the exact same tick — independent
// per-component intervals drift out of phase with each other and can show
// different seconds for up to ~1s even though they share the same anchor.
type Listener = () => void;
const listeners = new Set<Listener>();
let tickerId: ReturnType<typeof setInterval> | null = null;

const subscribe = (listener: Listener) => {
  listeners.add(listener);
  if (!tickerId) {
    tickerId = setInterval(() => {
      listeners.forEach(l => l());
    }, 1000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && tickerId) {
      clearInterval(tickerId);
      tickerId = null;
    }
  };
};

export const useCountdown = (durationSeconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(() => getRemainingSeconds(durationSeconds));

  useEffect(() => {
    setSecondsLeft(getRemainingSeconds(durationSeconds));
    return subscribe(() => setSecondsLeft(getRemainingSeconds(durationSeconds)));
  }, [durationSeconds]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
