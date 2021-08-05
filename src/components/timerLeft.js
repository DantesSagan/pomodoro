export default function TimerLeft({
  timerBr,
  formatTime,
  displayTime,
  startStop,
  type,
}) {
  return (
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
        <label id='timer-label'>{displayTime ? type : type}</label>
        <div id='time-left' className='col'>
          {formatTime(displayTime)}
        </div>
        {startStop()}
      </div>
    </div>
  );
}
