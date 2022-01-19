// Problem 6: https://projecteuler.net/problem=6
const sumOfSquares = (n) => {
  try {
    return new Array(n).fill(0).map((a,i) => i+1).reduce((acc, cur) => {
      return acc + Math.pow(cur, 2)
    },0)
  } catch (e) {
    throw new Error(`Sum of square: ${e}`)
  }
}

const squareOfSum = (n) => {
  try {
    return Math.pow(new Array(n).fill(0).map((a,i) => i+1).reduce((acc,cur) => {
      return acc + cur
    },0),2)
  } catch (e) {
    throw new Error(`Square of sum: ${e}`)
  }
}

const sumSquareDiff = (n) => {
  return squareOfSum(n) - sumOfSquares(n)
}

module.exports = { sumSquareDiff }




















/* END */
