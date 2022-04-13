import SwitchLength from './components/switchLength';
import useTimer from './hooks/useTimer';
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
    // handlePause,
    // handleResume,
    handleReset,
    handleStart,
    audio,
  } = useTimer();

  const startStop = () => {
    return (
      <div className='grid grid-flow-col'>
        <div className='col ' id='start_stop' onClick={handleStart}>
          {isActive ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 material-icons'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              style={{
                border: '1px solid black',
                borderRadius: '30px',
                cursor: 'pointer',
                margin: '5px',
              }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 material-icons'
              fill='transparent'
              viewBox='0 0 24 24'
              stroke='currentColor'
              style={{
                border: '1px solid black',
                borderRadius: '30px',
                cursor: 'pointer',
                margin: '5px',
              }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          )}
        </div>
        <div id='reset' onClick={handleReset}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-16 w-16 material-icons'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            style={{
              border: '1px solid black',
              borderRadius: '30px',
              cursor: 'pointer',
              margin: '5px',
            }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
            />
          </svg>
        </div>
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
      className='mx-auto rounded-xl d-flex p-3 mt-44 back back-color'
      style={{
        textAlign: 'center',
        width: '300px',
        color: 'black',
        fontFamily: `'Teko', 'sans-serif'`,
      }}
    >
      {' '}
      <h1 className='align-items-start' style={{ fontSize: '3em' }}>
        25 + 5 Clock
      </h1>
      <div className='grid grid-flow-col '>
        <SwitchLength
          time={timerBr}
          title={'Break Length'}
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
          changeTime={changeTime}
          type={'Session'}
          label={'session-label'}
          decrement={'session-decrement'}
          length={'session-length'}
          increment={'session-increment'}
          formatTimeLength={formatTimeLength}
        />
      </div>
      <div
        className='align-items-end'
        style={{
          fontSize: '2rem',
          margin: '15px',
          padding: '15px',
          border: '1px solid black',
          borderRadius: '30px',
          display: 'inline-block',
        }}
      >
        <div className='col'>
          <h2 id='timer-label' style={{ fontSize: '1.5em' }}>
            {isPaused ? 'Break' : 'Session'}
          </h2>
          <hr />
          <div id='time-left' className='col' style={{ fontSize: '2.2em' }}>
            {formatTime(displayTime)}
          </div>
          <hr />
          <div style={{ display: 'inline-block' }}>{startStop()}</div>
        </div>
        {audio()}
      </div>
      <span>
        <p>
          <i><a href='https://github.com/DantesSagan/pomodoro'>Coded by @DantesSagan</a></i>
        </p>
      </span>
    </div>
  );
}
