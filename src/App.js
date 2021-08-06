import SwitchLength from './components/switchLength';
import useTimer from './hooks/useTimer';
import breakSound from './audio/breakSound.mp3';
import './App.css';

export default function App() {
  const {
    displayTime,
    setDisplayTime,
    timerBr,
    setTimerBr,
    timer,
    isActive,
    isPaused,
    setTimer,
    handlePause,
    handleResume,
    handleReset,
    handleStart,
    audio
  } = useTimer();

  const startStop = () => {
    return (
      <div className='col'>
        <div id='start_stop'>
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
        </div>
        <button
          id='reset'
          onClick={handleReset}
          // disabled={!isActive}
        >
          Reset
        </button>
      </div>
    );
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const ss = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) + ':' + (ss < 10 ? '0' + ss : ss)
    );
  };
  const formatTimeLength = (time) => {
    return time / 60;
  };

  const changeTime = (amount, type) => {
    if (type === 'Break') {
      if ((timerBr <= 60 && amount < 0) || timerBr >= 60 * 60) {
        return;
      }
      setTimerBr((prev) => prev + amount);
    } else {
      if ((timer <= 60 && amount < 0) || timer >= 60 * 60) {
        return;
      }
      setTimer((prev) => prev + amount);
      if (!isActive) {
        setDisplayTime(timer + amount);
      }
    }
  };
  return (
    <div
      className='container algin-items-center justify-content-center '
      style={{
        marginTop: '125px',
        padding: '100px',
        display: 'block',
        textAlign: 'center',
      }}
    >
      {' '}
      <h1 className='align-items-start'>25 + 5 Clock</h1>
      <SwitchLength
        time={timerBr}
        title={'Break Length'}
        formatTime={formatTime}
        changeTime={changeTime}
        type={'Break'}
        label={'break-label'}
        decrement={'break-decrement'}
        length={'break-length'}
        increment={'break-increment'}
        formatTimeLength={formatTimeLength}
      />
      <SwitchLength
        time={timer}
        title={'Session Length'}
        formatTime={formatTime}
        changeTime={changeTime}
        type={'Session'}
        label={'session-label'}
        decrement={'session-decrement'}
        length={'session-length'}
        increment={'session-increment'}
        formatTimeLength={formatTimeLength}
      />
      <div
        className='align-items-end'
        style={{
          fontSize: '2rem',
          margin: '15px',
          padding: '15px',
          backgroundColor: 'wheat',
          border: '1px solid black',
          borderRadius: '30px',
        }}
      >
        <div className='col'>
          <label id='timer-label'>{timerBr ? 'Break' : 'Session'}</label>
          <div id='time-left' className='col'>
            {formatTime(displayTime) 
            
            }
            
          </div>
          {startStop()}
        </div>
        {audio()}
      </div>
    </div>
  );
}
