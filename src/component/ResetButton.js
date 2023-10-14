import React from 'react'

import './ResetButton.css';

export default function ResetButton({resetBoard}) {
console.log(resetBoard);

  return (

    <button className='reset-btn' onClick={resetBoard} >Reset</button>
  )
}
