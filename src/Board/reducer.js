import {
  PLAYER_ONE_MOVE,
  PLAYER_TWO_MOVE,
} from './constants'

const boardInitialState = {
  board: [
    {value: 0, isFull: false},
    {value: 0, isFull: false},
    {value: 0, isFull: false},
    {value: 0, isFull: false},
    {value: 0, isFull: false},
    {value: 0, isFull: false},
    {value: 0, isFull: false},
    {value: 0, isFull: false},
    {value: 0, isFull: false}
  ],
  turnCounter: 0
}
function boardReducer(state = boardInitialState, action) {
  let board;
  switch (action.type) {
    case PLAYER_ONE_MOVE:
      board = state.board
      board[action.cell].value = 1
      board[action.cell].isFull = true
      return {
        ...state,
        board,
        turnCounter: state.turnCounter + 1
      }
    case PLAYER_TWO_MOVE:
      board = state.board
      board[action.cell].value = 2
      board[action.cell].isFull = true
      return {
        ...state,
        board,
        turnCounter: state.turnCounter + 1
      }
    default:
      return state;
  }
}

export default boardReducer
