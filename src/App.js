import useTimer from './hooks/useTimer';
import './App.css';

export default function App() {
  const {
    // start,
    // start2,
    // end,
    // setTimer,
    // setMinutes,
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
  } = useTimer();

  const switchMinutesSession = () => {
    return (
      <div
        className='align-items-end'
        id='timer-label'
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
          <label id='timer-label'>Session:</label>
          <div
            id='time-left'
            className='col'
            onChange={(e) => setTimer(e.target.value)}
            value={timer}
          >
            {formatTime(timer)}
          </div>
          {startStop()}
        </div>
      </div>
    );
  };
  const switchMinutesBr = () => {
    return (
      <div
        className='align-items-end'
        id='timer-label'
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
          <label id='timer-label'>Break:</label>
          <div
            id='time-left'
            className='col'
            onChange={(e) => setTimer(e.target.value)}
            value={timerBr}
          >
            {formatTimes(timerBr)}
          </div>
          {startStop()}
        </div>
      </div>
    );
  };

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
        <button id='reset' onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>
    );
  };
  const formatTime = () => {
    const ss = `${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const mm = `${minutes % 90}`.slice(-2);
    const seconds = ss < 10 ? '0' + ss : ss;
    const minutess = mm < 10 ? '0' + mm : mm;
    return `${minutess}:${seconds}`;
  };
  const formatTimes = () => {
    const ss = `0${timerBr % 60}`.slice(-2);
    const minutes = `${Math.floor(timerBr / 60)}`;
    const mm = `0${minutes % 60}`.slice(1, 2);

    return `${mm}:${ss}`;
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
      <h1 className='align-items-start'>25 + 5 Clock</h1>
      <div className='align-items-center' id='break-label'>
        <div className='col' id='break-label'>
          Break Length
        </div>
        <button
          value='-'
          className='col'
          id='break-decrement'
          onClick={() => setTimerBr((prev) => prev - 60)}
        >
          -
        </button>
        <div
          id='break-length'
          value={timerBr || ''}
          className='col'
          style={{ fontSize: '1.5rem' }}
        >
          {formatTimes(timerBr).slice(0, -3)}
          {/* <button onClick={start2}>Start</button> */}
        </div>
        <button
          value='+'
          className='col'
          id='break-increment'
          onClick={() => setTimerBr((prev) => prev + 60)}
        >
          +
        </button>
      </div>

      <div className='align-items-center' id='session-label'>
        <div className='col'>Session Length</div>
        <button
          value='-'
          id='session-decrement'
          className='col'
          onClick={() => setTimer((prev) => prev - 60)}
        >
          -
        </button>
        <div
          value={timer}
          id='session-length'
          className='col'
          style={{ fontSize: '1.5rem' }}
        >
          {formatTime({timer}, () => {
            console.log(timer, 'timer');
          }).slice(0, -3)}
        </div>
        <button
          value='+'
          id='session-increment'
          className='col'
          onClick={() => setTimer((prev) => prev + 60)}
        >
          +
        </button>
      </div>
      {timer < 0 ? switchMinutesBr() : switchMinutesSession()}
    </div>
  );
}
