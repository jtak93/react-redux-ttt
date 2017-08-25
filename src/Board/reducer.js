import {
  PLAYER_ONE_MOVE,
  PLAYER_TWO_MOVE,
  PLAYER_WINS,
  RESTART_GAME,
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
  turnCounter: 0,
  isGameOver: false,
  winner: null,
}
function boardReducer(state = boardInitialState, action) {
  let board;
  switch (action.type) {
    case PLAYER_ONE_MOVE:
      console.log('p1 move')
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
    case PLAYER_WINS:
      alert(`player ${action.player} wins`)
      return {
        ...state,
        winner: action.player,
        isGameOver: true,
      }
    case RESTART_GAME:
      return {
        ...state,
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
        turnCounter: 0,
        isGameOver: false,
        winner: null,
      }
    default:
      return state;
  }
}

export default boardReducer
