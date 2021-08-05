// export default function Length({ time, title, type, formatTime, changeTime }) {
//   return (
//     <div>
//       <div className='align-items-center' id='break-label'>
//         <div className='col' id='break-label'>
//           {title}
//         </div>
//         <button
//           value='-'
//           className='col'
//           id='break-decrement'
//           onClick={() => changeTime(-60, type)}
//         >
//           -
//         </button>
//         <div
//           id='break-length'
//           value={time || ''}
//           className='col'
//           style={{ fontSize: '1.5rem' }}
//         >
//           {formatTime(time).slice(0, -3)}
//           {/* <button onClick={start2}>Start</button> */}
//         </div>
//         <button
//           value='+'
//           className='col'
//           id='break-increment'
//           onClick={() => changeTime(60, type)}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }
