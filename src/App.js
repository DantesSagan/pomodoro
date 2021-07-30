import React from 'react';
import './App.css';

export default function App({ initialState }) {
  const [counter, setCounter] = React.useState(5);
  const [session, setSession] = React.useState(25);
  const [timer, setTimer] = React.useState(initialState);

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
        <div className='align-items-center'>
          <div className='col'>Break Length</div>
          <button
            className='col'
            onClick={() => setCounter((prev) => prev - 1)}
          >
            -
          </button>
          <div className='col' style={{ fontSize: '1.5rem' }}>
            {counter}
          </div>
          <button
            className='col'
            onClick={() => setCounter((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <div className='align-items-center'>
          <div className='col'>Session Length</div>
          <button
            className='col'
            onClick={() => setSession((prev) => prev - 1)}
          >
            -
          </button>
          <div className='col' style={{ fontSize: '1.5rem' }}>
            {session}
          </div>
          <button
            className='col'
            onClick={() => setSession((prev) => prev + 1)}
          >
            +
          </button>
        </div>

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
          {' '}
          <button className='col' onClick={() => setSession(() => 25)}>
            +
          </button>
          <h2 className='col'>Session:</h2>
          {session}
        </div>
      </div>
    </div>
  );
}
