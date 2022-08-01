import React from 'react'
import '../stylesheets/Result.css'

function Result(props) {
  return (
    <div className='result'>
        <div className='resultDeclare'>
            {props.draw ? <span>Draw</span> : <span>you {props.winner ? <span className='win-lose'>Won</span> : <span className='win-lose'>lose</span>}</span>}
        </div>
        <div>
            <button onClick={props.onPlayAgainClick}  className='playAgain'>Play again</button>
        </div>
    </div>
  )
}

export default Result