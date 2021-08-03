/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState } from 'react';

export default function useTimer() {
  // const [end, setEnd] = useState();
  // const start = () => setEnd(Date.now() + minutes * 60000 + 100);
  // const start2 = () => setEnd(Date.now() + counter * 60000 + 100);
  // const pad = (n) => ('0' + n).slice(-2);
  // const millisecondsToTimer = (ms) => {
  //   if (ms < 0) {
  //     return '0:00';
  //   }
  //   const minutes = Math.floor(ms / 60000);
  //   const seconds = pad(Math.floor((ms - minutes * 60000) / 1000));
  //   return `${minutes}:${seconds}`;
  // };

  // useEffect(() => {
  //   if (!end) {
  //     return;
  //   }
  //   setIsActive(true);
  //   setIsPaused(true);
  //   countRef.current = setInterval(
  //     () => setTimer(millisecondsToTimer(end - Date.now())),
  //     1000
  //   );
  //   setTimer(millisecondsToTimer(end - Date.now()));
  //   return () => clearInterval(countRef.current);
  // }, [end]);
  // const [counter, setCounter] = useState(5);
  // const [minutes, setMinutes] = useState(25);

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(1500);
  const [timerBr, setTimerBr] = useState(3900);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    // Resume button logic here
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handleReset = () => {
    // Reset button logic here
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(1500);
    setTimerBr(3900);
  };
  return {
    // end,
    // start,
    // start2,
    // counter,
    // minutes,
    // setCounter,
    // setMinutes,
    timerBr,
    timer,
    isActive,
    isPaused,
    setTimerBr,
    handleStart,
    setTimer,
    handlePause,
    handleResume,
    handleReset,
  };
}
