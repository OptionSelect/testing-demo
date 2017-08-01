const { sum, subtract, multiply, divide, modulo, exponent } = require('../src/arithmetic')

describe('Subtract can find the difference', () => {
  test('32 and 14', () => {
    expect(subtract(32, 14)).toBe(18)
  })

  test('5 and 4', () => {
    expect(subtract(5, 4)).toBe(1)
  })
})

describe('Sum can add', () => {
  test('4 and 5', () => {
    expect(sum(4, 5)).toBe(9)
  })

  test('negative numbers', () => {
    expect(sum(-42, -32)).toBe(-74)
  })

  test('large numbers', () => {
    expect(sum(4096, 2048)).toBe(6144)
  })
})

describe('Multiply can multiply', () => {
  test('4 and 5', () => {
    expect(multiply(4, 5)).toBe(20)
  })

  test('large numbers', () => {
    expect(multiply(1000, 5)).toBe(5000)
  })
})

describe('Divide can divide', () => {
  test('8 and 4', () => {
    expect(divide(8, 4)).toBe(2)
  })

  test('large numbers', () => {
    expect(divide(1000, 4)).toBe(250)
  })
})

describe('Modulo can mod', () => {
  test('8 and 4', () => {
    expect(modulo(8, 4)).toBe(0)
  })

  test('weird numbers', () => {
    expect(modulo(5, 4)).toBe(1)
  })
})

describe('Exponent can multiply the mess out of', () => {
  test('2 and 3', () => {
    expect(exponent(2, 3)).toBe(8)
  })

  test('negative numbers', () => {
    expect(exponent(-1, 3)).toBe(-1)
  })
})
