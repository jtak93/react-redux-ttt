import React from 'react'

const Board = props => (
  <div>
    <h1>Tic-Tac-Toe</h1>
    <button onClick={props.onRestartGame}>Restart Game</button>
    <div className='ttt-board'>
      <div className='col one'>
        <div data='0' onClick={props.onCellClick} className={`cell0 square`}>{props.board[0].value}</div>
        <div data='3' onClick={props.onCellClick} className={`cell1 square`}>{props.board[3].value}</div>
        <div data='6' onClick={props.onCellClick} className={`cell2 square`}>{props.board[6].value}</div>
      </div>
      <div className='col two'>
        <div data='1' onClick={props.onCellClick} className={`cell3 square`}>{props.board[1].value}</div>
        <div data='4' onClick={props.onCellClick} className={`cell4 square`}>{props.board[4].value}</div>
        <div data='7' onClick={props.onCellClick} className={`cell5 square`}>{props.board[7].value}</div>
      </div>
      <div className='col three'>
        <div data='2' onClick={props.onCellClick} className={`cell6 square`}>{props.board[2].value}</div>
        <div data='5' onClick={props.onCellClick} className={`cell7 square`}>{props.board[5].value}</div>
        <div data='8' onClick={props.onCellClick} className={`cell8 square`}>{props.board[8].value}</div>
      </div>
    </div>
  </div>
)

export default Board
