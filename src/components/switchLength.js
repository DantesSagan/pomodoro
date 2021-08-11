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
        <div className='col' id={label} style={{ fontSize: '1.5em' }}>
          <p>{title}</p>
        </div>
        <button
          className='col material-icons'
          id={decrement}
          onClick={() => changeTime(-60, type)}
          style={{
            border: '1px solid black',
            borderRadius: '30px',
            cursor: 'pointer',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
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
            cursor: 'pointer',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
