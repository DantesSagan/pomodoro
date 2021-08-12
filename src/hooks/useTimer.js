/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';
import breakSound from '../audio/breakSound.wav';

export default function useTimer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(25 * 60);
  const [timerBr, setTimerBr] = useState(5 * 60);
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const countRef = useRef(null);
  let [breakAudio] = useState(new Audio(breakSound));

  const audio = () => {
    return <audio id='beep' ref={(s) => (breakAudio = s)} src={breakSound} />;
  };

  const playBreakSound = () => {
    breakAudio.volume = 0.5;
    breakAudio.currentTime = 0;
    breakAudio.play();
  };

  useEffect(() => {
    if (displayTime <= 0) {
      if (!isPaused && timerBr <= 0) {
        setIsPaused(true);
      }
      playBreakSound();
    } else if (!isActive && displayTime === timerBr) {
      setIsPaused(false);
    }
  }, [displayTime, isPaused, isActive, timerBr, timer]);

  const handleStart = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = isPaused;
    if (!isActive) {
      let interval = (countRef.current = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplayTime((prev) => {
            if (prev <= 0 && !onBreakVariable) {
              onBreakVariable = true;
              setIsPaused(true);
              return timerBr;
            } else if (prev <= 0 && onBreakVariable) {
              onBreakVariable = false;
              setIsPaused(false);
              return timer;
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 1000));
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    }
    if (isActive) {
      clearInterval(localStorage.getItem('interval-id'));
    }
    setIsActive(!isActive);
  };

  const handlePause = () => {
    // Pause button logic here
    clearInterval(localStorage.getItem('interval-id'));
    setIsPaused(false);
    breakAudio.pause();
  };

  const handleResume = () => {
    // Resume button logic here
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setDisplayTime((timer) => timer - 1);
    }, 1000);
  };

  const handleReset = () => {
    // Reset button logic here
    clearInterval(localStorage.getItem('interval-id'));
    setIsActive(false);
    setIsPaused(false);
    setTimer(25 * 60);
    setTimerBr(5 * 60);
    setDisplayTime(25 * 60);
    breakAudio.currentTime = 0;
    breakAudio.pause();
  };
  return {
    displayTime,
    setDisplayTime,
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
    audio,
  };
}
