import React from 'react'
import '../stylesheets/ScoreHeader.css'

const ScoreHeader = (props) => {
  return (
    <div className='head-section'>
        <div className='app_name'>
            <div>ROCK</div>
            <div>PAPER</div>
            <div>SCISSORS</div>
        </div>
        <div className='scoreCard'>
            <div className='scoreText'>score</div>
            <div className='Score'>{props.score}</div>
        </div>
    </div>
  )
}

export default ScoreHeader