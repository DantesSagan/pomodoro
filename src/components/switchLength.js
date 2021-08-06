export default function SwitchLength({
  time,
  title,
  formatTimeLength,
  changeTime,
  type,
  label,
  decrement,
  length,
  increment,
}) {
  return (
    <div>
      <div className='align-items-center'>
        <div className='col' id={label}>
          {title}
        </div>
        <button
          value='-'
          className='col'
          id={decrement}
          onClick={() => changeTime(-60, type)}
        >
          -
        </button>
        <div id={length} className='col' style={{ fontSize: '1.5rem' }}>
          {formatTimeLength(time)}
        </div>
        <button
          value='+'
          className='col'
          id={increment}
          onClick={() => changeTime(60, type)}
        >
          +
        </button>
      </div>
    </div>
  );
}
