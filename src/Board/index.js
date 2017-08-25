import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as boardActionCreators from './actions'
import { connect } from 'react-redux'
import Board from './Board'
import { calculateMove } from '../modules/AI'

import './style.css'

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
    this.AIMove = this.AIMove.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.turnCounter % 2 === 1) {
      this.AIMove()
    }
  }

  handleCellClick(evt) {
    // cell index
    const cell = parseInt(evt.target.getAttribute('data'));
    // make sure game isnt over
    if (!this.props.gameOver) {
      // if player 1 turn do player 1 move and cell isn't full
      if (this.props.turnCounter % 2 === 0 && !this.props.board[cell].isFull) {
        this.props.playerOneMove(cell)
        this.checkWinner(this.props.board)
      }
      //player 2 move
      if (this.props.turnCounter % 2 === 1 && !this.props.board[cell].isFull) {
        console.log('player two move')
        this.props.playerTwoMove(cell)
      }
    }
  }

  checkWinner(board) {
    let triples = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    // iterate through triples and check to see if board values are equal at triple indices
    triples.map(triple => {
      if (!this.props.gameOver && board[triple[0]].value === board[triple[1]].value
        && board[triple[1]].value === board[triple[2]].value
        && board[triple[0]].isFull && board[triple[1]].isFull && board[triple[2]].isFull) {
          this.props.playerWins(board[triple[0]].value)
      }
    })
  }

  handleRestartGame() {
    let confirm = window.confirm('Press OK to confirm restart')
    if (confirm) {
      this.props.restartGame()
    }
  }

  AIMove() {
    if (!this.props.gameOver) {
      let nextMove = calculateMove(this.props.board);
      // check if there is available move
      if (nextMove) {
        this.props.playerTwoMove(nextMove)
        this.checkWinner(this.props.board)
      }
    }
  }

  render() {
    return (
      <Board
        onRestartGame={this.handleRestartGame}
        onCellClick={this.handleCellClick}
        board={this.props.board}
      />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(boardActionCreators, dispatch)

const mapStateToProps = state => {
  return {
    board: state.game.board,
    turnCounter: state.game.turnCounter,
    gameOver: state.game.isGameOver,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer)
