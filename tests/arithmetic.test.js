const { sum, subtract, multiply, divide, modulo, exponent, factorial, perf } = require('../src/arithmetic')

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

  test('3 and 1', () => {
    expect(exponent(3, 1)).toBe(3)
  })

  test('3 and 0', () => {
    expect(exponent(3, 0)).toBe(1)
  })

  test('negative numbers', () => {
    expect(exponent(-1, 3)).toBe(-1)
  })
})

describe('Factorial can multiply to the factor of', () => {
  test('4', () => {
    expect(factorial(4)).toBe(24)
  })

  test('6', () => {
    expect(factorial(6)).toBe(720)
  })

  test('5', () => {
    expect(factorial(5)).toBe(120)
  })
})

describe('Perfect numbers are perfect!', () => {
  test('6', () => {
    expect(perf(6)).toBe(true)
  })

  test('28', () => {
    expect(perf(28)).toBe(true)
  })

  test('10', () => {
    expect(perf(10)).toBe(false)
  })

  test('8128', () => {
    expect(perf(28)).toBe(true)
  })
})
