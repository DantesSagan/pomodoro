/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';
import breakSound from '../audio/breakSound.mp3';

export default function useTimer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(25 * 60);
  const [timerBr, setTimerBr] = useState(5 * 60);
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const countRef = useRef(null);
  let [breakAudio, setBreakAudio] = useState(new Audio(breakSound));

  const audio = () => {
    return <audio id='beep' ref={(s) => (breakAudio = s)} src={breakSound} />;
  };

  useEffect(() => {
    if (displayTime <= 0) {
      setIsPaused(true);
      playBreakSound();
    } else if (!isActive && displayTime === timerBr) {
      setIsPaused(false);
    }
  }, [displayTime, isPaused, isActive, timerBr, timer]);

  const playBreakSound = () => {
    breakAudio.volume = 0.5;
    breakAudio.currentTime = 0;
    breakAudio.play().catch((error) => {
      //  when an exception is played, the exception flow is followed
    });
  };
  // it('assertion success', async () => {
  //   const result = await displayTime;
  //   expect(result).to.equal('promise resolved');
  // });
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    let onBreakVariable = timerBr;
    countRef.current = setInterval(() => {
      setDisplayTime((prev) => {
        if (prev <= 0 && !onBreakVariable) {
          onBreakVariable = true;
          setTimerBr(true);
          return timerBr;
        } else if (prev <= 0 && onBreakVariable) {
          onBreakVariable = false;
          setTimerBr(false);
          return timer;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
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
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(25 * 60);
    setTimerBr(5 * 60);
    setDisplayTime(25 * 60);
    breakAudio.pause();
    breakAudio.currentTime = 0;
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
