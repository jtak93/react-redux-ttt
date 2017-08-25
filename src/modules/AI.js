export function calculateMove(board) {
  // this will be a series of rules and return a cell/index for the next AI move
  // take winning move
  // check if 0 is winning move
  if (!board[0].isFull) {
    if ((board[1].value === board[2].value && board[1].value === 2) ||
    (board[3].value === board[6].value && board[3].value === 2) ||
    (board[4].value === board[8].value && board[4].value === 2)) return 0
  }
  // check if 1 is winning move
  if (!board[1].isFull) {
    if ((board[0].value === board[2].value && board[0].value === 2) ||
    (board[4].value === board[7].value && board[4].value === 2)) return 1
  }
  // check if 2 is winning move
  if (!board[2].isFull) {
    if ((board[0].value === board[1].value && board[1].value === 2) ||
    (board[4].value === board[6].value && board[4].value === 2) ||
    (board[5].value === board[8].value && board[5].value === 2)) return 2
  }
  // check if middle is open
  if (!board[4].isFull) return 4;

  // check open corners
  const corners = []
  if (!board[0].isFull) corners.push(0)
  if (!board[2].isFull) corners.push(2)
  if (!board[6].isFull) corners.push(6)
  if (!board[8].isFull) corners.push(8)
  const randomOpenCorner = corners[Math.floor(Math.random() * corners.length)];
  if (randomOpenCorner) return randomOpenCorner;

  // check open sides
  const sides = [];
  if (!board[1].isFull) sides.push(1)
  if (!board[3].isFull) sides.push(3)
  if (!board[5].isFull) sides.push(5)
  if (!board[7].isFull) sides.push(7)
  const randomOpenSide = sides[Math.floor(Math.random() * sides.length)];
  if (randomOpenSide) return randomOpenSide;
  return null;
}
