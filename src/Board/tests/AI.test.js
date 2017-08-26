import { calculateMove } from '../../modules/AI'

describe('AI move calculation', () => {
  test('winning top row position 0', () => {
    let topRow = [null, 2, 2, 1, 1, null, 1, null, null]
    expect(calculateMove(topRow)).toBe(0)
  })

  test('winning left col position 0', () => {
    let leftCol = [null,1,1,2,1,null,2,null,null]
    expect(calculateMove(leftCol)).toBe(0)
  })
  test('winning diag position 0', () => {
    let diag = [null,1,1,1,2,null,null,null,2]
    expect(calculateMove(diag)).toBe(0)
  })
})
