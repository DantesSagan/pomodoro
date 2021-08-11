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
    <div className='backLength'>
      <div className='align-items-center'>
        <div className='col' id={label}>
          <h3>{title}</h3>
        </div>
        <button
          className='col material-icons'
          id={decrement}
          onClick={() => changeTime(-60, type)}
          style={{
            border: '1px solid black',
            borderRadius: '30px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          <h2 style={{marginTop: '-10px'}}>-</h2>
        </button>
        <div id={length} className='col' style={{ fontSize: '1.5rem' }}>
          {formatTimeLength(time)}
        </div>
        <button
          className='col material-icons'
          id={increment}
          onClick={() => changeTime(60, type)}
          style={{
            border: '1px solid black',
            borderRadius: '30px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          <h2>+</h2>
        </button>
      </div>
    </div>
  );
}
