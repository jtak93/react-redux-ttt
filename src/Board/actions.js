import {
  PLAYER_ONE_MOVE,
  PLAYER_TWO_MOVE,
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
