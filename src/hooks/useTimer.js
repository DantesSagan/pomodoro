/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';

export default function useTimer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const [counter, setCounter] = useState(5);
  const [end, setEnd] = useState();
  const [minutes, setMinutes] = useState(25);
  const [timer, setTimer] = useState();
  const start = () => setEnd(Date.now() + minutes * 60000 + 100);
  const start2 = () => setEnd(Date.now() + counter * 60000 + 100);

  const pad = (n) => ('0' + n).slice(-2);
  const millisecondsToTimer = (ms) => {
    if (ms < 0) {
      return '0:00';
    }
    const minutes = Math.floor(ms / 60000);
    const seconds = pad(Math.floor((ms - minutes * 60000) / 1000));
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (!end) {
      return;
    }
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(
      () => setTimer(millisecondsToTimer(end - Date.now())),
      1000
    );
    setTimer(millisecondsToTimer(end - Date.now()));
    return () => clearInterval(countRef.current);
  }, [end]);

  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    // Resume button logic here
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    // Reset button logic here
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setCounter(5);
    setMinutes(25);
    setTimer(`${'25:00'}`);
  };
  return {
    counter,
    minutes,
    end,
    timer,
    isActive,
    isPaused,
    start,
    start2,
    setCounter,
    setMinutes,
    handlePause,
    handleResume,
    handleReset,
  };
}
