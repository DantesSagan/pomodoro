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
    handlePause,
    handleResume,
    handleReset,
    handleStart,
    audio,
  } = useTimer();

  const startStop = () => {
    return (
      <div className='col'>
        <div
          className='col btn-large deep-green lighten-2'
          id='start_stop'
          onClick={handleStart}
        >
          <i
            className='material-icons'
            style={{
              border: '1px solid black',
              borderRadius: '30px',
              margin: '5px',
              fontSize: '4rem',
              cursor: 'pointer',
            }}
          >
            play_circle_filled
          </i>{' '}
          <i
            className='material-icons'
            onClick={handlePause}
            style={{
              border: '1px solid black',
              borderRadius: '30px',
              margin: '5px',
              fontSize: '4rem',
              cursor: 'pointer',
            }}
          >
            pause_circle_filled
          </i>
        </div>
        <div
          id='reset'
          className='material-icons'
          onClick={handleReset}
          style={{
            border: '1px solid black',
            borderRadius: '30px',
            margin: '5px',
            fontSize: '4rem',
            cursor: 'pointer',
          }}
          // disabled={!isActive}
        >
          refresh
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
      className='container algin-items-center justify-content-center '
      style={{
        marginTop: '50px',
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
          display: 'inline-block',
        }}
      >
        <div className='col'>
          <h2 id='timer-label' style={{ fontSize: '4rem' }}>
            {isPaused ? 'Break' : 'Session'}
          </h2>
          <hr />
          <div id='time-left' className='col' style={{ fontSize: '4rem' }}>
            {formatTime(displayTime)}
          </div>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {startStop()}
          </div>
        </div>
        {audio()}
      </div>
    </div>
  );
}
