import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as boardActionCreators from './actions'
import { connect } from 'react-redux'
import Board from './Board'

import './style.css'

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick(evt) {
    // cell index
    const cell = parseInt(evt.target.getAttribute('data'));
    // if player 1 turn do player 1 move and cell isn't full
    if (this.props.turnCounter % 2 === 0 && !this.props.board[cell].isFull) {
      console.log('player one move')
      this.props.playerOneMove(cell)
    }
    //player 2 move
    if (this.props.turnCounter % 2 === 1 && !this.props.board[cell].isFull) {
      console.log('player two move')
      this.props.playerTwoMove(cell)
    }
  }

  checkWinner() {

  }

  render() {
    return (
      <Board
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer)
