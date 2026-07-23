
import { useEffect, useState } from 'react';

export const useCountdown = (initialSeconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => (prev <= 0 ? initialSeconds : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [initialSeconds]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const label = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return label;
};
