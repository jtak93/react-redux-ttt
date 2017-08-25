import {
  PLAYER_ONE_MOVE,
  PLAYER_TWO_MOVE,
  PLAYER_WINS,
  RESTART_GAME,
} from './constants'

export function playerOneMove(cell) {
  return {
    type: PLAYER_ONE_MOVE,
    cell,
  };
}

export function playerTwoMove(cell) {
  return {
    type: PLAYER_TWO_MOVE,
    cell,
  };
}

export function playerWins(player) {
  return {
    type: PLAYER_WINS,
    player,
  };
}

export function restartGame() {
  return {
    type: RESTART_GAME,
  }
}
