const sum = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

const modulo = (a, b) => a % b

const exponent = (a, b) => (b === 0 ? 1 : a ** b)

const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1
  }
  for (let i = a - 1; i > 1; i--) {
    a *= i
  }
  return a
}

const perf = function(a) {
  let sum = 0
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      sum += i
    }
  }
  return sum / 2 === a ? true : false
}

module.exports = { sum, subtract, multiply, divide, modulo, exponent, factorial, perf }
