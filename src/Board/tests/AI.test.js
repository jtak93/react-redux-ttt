import { calculateMove } from '../../modules/AI'

describe('AI move calculation', () => {
  test('winning top row position 0', () => {
    let topRow = [
      {value: 0, isFull: false},
      {value: 2, isFull: true},
      {value: 2, isFull: true},
      {value: 1, isFull: true},
      {value: 1, isFull: true},
      {value: 0, isFull: false},
      {value: 1, isFull: true},
      {value: 0, isFull: false},
      {value: 0, isFull: false}
    ]
    expect(calculateMove(topRow)).toBe(0)
  })

  test('winning left col position 0', () => {
    let leftCol = [
      {value: 0, isFull: false},
      {value: 1, isFull: true},
      {value: 1, isFull: true},
      {value: 2, isFull: true},
      {value: 1, isFull: true},
      {value: 0, isFull: false},
      {value: 2, isFull: true},
      {value: 0, isFull: false},
      {value: 0, isFull: false}
    ]
    expect(calculateMove(leftCol)).toBe(0)
  })
  test('winning diag position 0', () => {
    let diag = [
      {value: 0, isFull: false},
      {value: 1, isFull: true},
      {value: 1, isFull: true},
      {value: 1, isFull: false},
      {value: 2, isFull: true},
      {value: 0, isFull: false},
      {value: 0, isFull: false},
      {value: 0, isFull: false},
      {value: 2, isFull: true}
    ]
    expect(calculateMove(diag)).toBe(0)
  })
})
