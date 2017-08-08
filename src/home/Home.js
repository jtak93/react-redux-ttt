import React from 'react'

const Home = props => (
  <div>
    <h1>Tic-Tac-Toe</h1>
    <div className='ttt-board'>
      <div className='col one'>
        {props.board[0].map((cell,idx) => {
          return <div className={`cell${idx} square`}>{cell}</div>
        })}
      </div>
      <div className='col two'>
        {props.board[1].map((cell,idx) => {
          return <div className={`cell${idx + 3} square`}>{cell}</div>
        })}
      </div>
      <div className='col three'>
        {props.board[2].map((cell,idx) => {
          return <div className={`cell${idx + 6} square`}>{cell}</div>
        })}
      </div>
    </div>
  </div>
)

export default Home
