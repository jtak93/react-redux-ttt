export function calculateMove(board) {
  // this will be a series of rules and return a cell/index for the next AI move
  // check winning moves
  // check if 0 is winning move
  if (!board[0]) {
    if ((board[1] === board[2] && board[1] === 2) ||
    (board[3] === board[6] && board[3] === 2) ||
    (board[4] === board[8] && board[4] === 2)) return 0
  }

  // check if 1 is winning move
  if (!board[1]) {
    if ((board[0] === board[2] && board[0] === 2) ||
    (board[4] === board[7] && board[4] === 2)) return 1
  }

  // check if 2 is winning move
  if (!board[2]) {
    if ((board[0] === board[1] && board[1] === 2) ||
    (board[4] === board[6] && board[4] === 2) ||
    (board[5] === board[8] && board[5] === 2)) return 2
  }

  // check if 3 is winning move
  if (!board[3]) {
    if ((board[0] === board[6] && board[0] === 2) ||
    (board[4] === board[5] && board[4] === 2)) return 3
  }

  // check if 4 is winning move
  if (!board[4]) {
    if ((board[0] === board[8] && board[0] === 2) ||
    (board[2] === board[6] && board[2] === 2) ||
    (board[1] === board[7] && board[1] === 2) ||
    (board[3] === board[5] && board[3] === 2)) return 4
  }

  // check if 5 is winning move
  if (!board[5]) {
    if ((board[2] === board[8] && board[2] === 2) ||
    (board[3] === board[4] && board[3] === 2)) return 5
  }

  // check if 6 is winning move
  if (!board[6]) {
    if ((board[0] === board[3] && board[0] === 2) ||
    (board[2] === board[4] && board[2] === 2) ||
    (board[7] === board[8] && board[7] === 2)) return 6
  }

  // check if 7 is winning move
  if (!board[7]) {
    if ((board[6] === board[8] && board[6] === 2) ||
    (board[1] === board[4] && board[1] === 2)) return 7
  }

  // check if 8 is winning move
  if (!board[8]) {
    if ((board[0] === board[4] && board[0] === 2) ||
    (board[2] === board[5] && board[2] === 2) ||
    (board[6] === board[7] && board[6] === 2)) return 8
  }

  // no winning move => check other player's winning move and block
  // check if 0 is blocked win move
  if (!board[0]) {
    if ((board[1] === board[2] && board[1] === 1) ||
    (board[3] === board[6] && board[3] === 1) ||
    (board[4] === board[8] && board[4] === 1)) return 0
  }

  // check if 1 is blocked win move
  if (!board[1]) {
    if ((board[0] === board[2] && board[0] === 1) ||
    (board[4] === board[7] && board[4] === 1)) return 1
  }

  // check if 2 is blocked win move
  if (!board[2]) {
    if ((board[0] === board[1] && board[1] === 1) ||
    (board[4] === board[6] && board[4] === 1) ||
    (board[5] === board[8] && board[5] === 1)) return 2
  }

  // check if 3 is blocked win move
  if (!board[3]) {
    if ((board[0] === board[6] && board[0] === 1) ||
    (board[4] === board[5] && board[4] === 1)) return 3
  }

  // check if 4 is blocked win move
  if (!board[4]) {
    if ((board[0] === board[8] && board[0] === 1) ||
    (board[2] === board[6] && board[2] === 1) ||
    (board[1] === board[7] && board[1] === 1) ||
    (board[3] === board[5] && board[3] === 1)) return 4
  }

  // check if 5 is blocked win move
  if (!board[5]) {
    if ((board[2] === board[8] && board[2] === 1) ||
    (board[3] === board[4] && board[3] === 1)) return 5
  }

  // check if 6 is blocked win move
  if (!board[6]) {
    if ((board[0] === board[3] && board[0] === 1) ||
    (board[2] === board[4] && board[2] === 1) ||
    (board[7] === board[8] && board[7] === 1)) return 6
  }

  // check if 7 is blocked win move
  if (!board[7]) {
    if ((board[6] === board[8] && board[6] === 1) ||
    (board[1] === board[4] && board[1] === 1)) return 7
  }

  // check if 8 is blocked win move
  if (!board[8]) {
    if ((board[0] === board[4] && board[0] === 1) ||
    (board[2] === board[5] && board[2] === 1) ||
    (board[6] === board[7] && board[6] === 1)) return 8
  }

  // no block => check for forks

  // no forks => take priority empty spots

  // check if middle is open
  if (!board[4]) return 4;

  // check open corners
  const corners = []
  if (!board[0]) corners.push(0)
  if (!board[2]) corners.push(2)
  if (!board[6]) corners.push(6)
  if (!board[8]) corners.push(8)
  const randomOpenCorner = corners[Math.floor(Math.random() * corners.length)];
  if (randomOpenCorner) return randomOpenCorner;

  // check open sides
  const sides = [];
  if (!board[1]) sides.push(1)
  if (!board[3]) sides.push(3)
  if (!board[5]) sides.push(5)
  if (!board[7]) sides.push(7)
  const randomOpenSide = sides[Math.floor(Math.random() * sides.length)];
  if (randomOpenSide) return randomOpenSide;
  return null;
}
