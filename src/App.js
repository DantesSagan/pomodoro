import useTimer from './hooks/useTimer';
import './App.css';

export default function App() {
  const {
    counter,
    minutes,
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
  } = useTimer();

  return (
    <div className='App'>
      <div
        className='container algin-items-center justify-content-center '
        style={{
          marginTop: '150px',
          padding: '100px',
          display: 'block',
        }}
      >
        <h1 className='align-items-start'>25 + 5 Clock</h1>
        <div className='align-items-center' id='break-label'>
          <div className='col' id='break-label'>
            Break Length
          </div>
          <button
            className='col'
            id='break-decrement'
            onClick={() => setCounter((prev) => prev - 1)}
          >
            -
          </button>
          <div
            id='break-length'
            onChange={(e) => setCounter(e.target.value)}
            value={counter || ''}
            className='col'
            style={{ fontSize: '1.5rem' }}
          >
            {counter}
            <button onClick={start2}>Start</button>
          </div>
          <button
            className='col'
            id='break-increment'
            onClick={() => setCounter((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <div className='align-items-center' id='session-label'>
          <div className='col'>Session Length</div>
          <button
            id='session-decrement'
            className='col'
            onClick={() => setMinutes((prev) => prev - 1)}
          >
            -
          </button>
          <div
            id='session-length'
            className='col'
            style={{ fontSize: '1.5rem' }}
          >
            {minutes}
          </div>
          <button
            id='session-increment'
            className='col'
            onClick={() => setMinutes((prev) => prev + 1)}
          >
            +
          </button>
        </div>

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
              onChange={(e) => setMinutes(e.target.value)}
              value={minutes || ''}
            >
              {timer}
            </div>
            <div className='col'>
              <div id='start_stop'>
                {!isActive && !isPaused ? (
                  <button onClick={start}>Start</button>
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
          </div>
        </div>
      </div>
    </div>
  );
}
