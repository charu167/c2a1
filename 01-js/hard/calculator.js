/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0
  }

  add(n) {
    this.result = this.result + n
  }

  subtract(n) {
    this.result = this.result - n
  }

  multiply(n) {
    this.result = this.result * n
  }

  divide(n) {
    if (n === 0) {
      throw new Error("Division by Zero Not Allowed")
    } else {
      this.result = this.result / n
    }
  }

  clear(n) {
    this.result = 0
  }

  getResult() {
    return this.result
  }

  itop(str) {

  }



  prec(c) {
    if (c === '*' || c === '/') {
      return 2
    } else if (c === '+' || c === '-') {
      return 1
    }
  }

  operation(a, b, op) {
    if (op === '+') {
      return a + b
    }
    else if (op === '-') {
      return a - b
    }
    else if (op === '*') {
      return a * b
    }
    else if (op === '/') {
      return a / b
    }
  }

  calculate(str) {
    return eval(str)
  }
}

const a = new Calculator()
let b = a.calculate('2 + 3 * 4')
console.log(b)

module.exports = Calculator;


