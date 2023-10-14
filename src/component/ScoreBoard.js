import React from 'react'
import './ScoreBoard.css'

export default function ScoreBoard({scores,xplaying}) {
const {xScore,oScore}=scores;


  return (
    <div className='scoreboard'>
 <span className={`score x-score ${!xplaying && "inactive"}`}>X - {xScore}</span>
 <span className={`score o-score ${xplaying && "inactive"}`} >O - {oScore}</span>
    </div>
  )
}
