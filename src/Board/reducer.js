import {
  PLAYER_ONE_MOVE,
  PLAYER_TWO_MOVE,
  PLAYER_WINS,
  RESTART_GAME,
} from './constants'

const boardInitialState = {
  board: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
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
      board[action.cell] = 1
      return {
        ...state,
        board,
        turnCounter: state.turnCounter + 1
      }
    case PLAYER_TWO_MOVE:
      board = state.board
      board[action.cell] = 2
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
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
