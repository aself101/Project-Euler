// Problem 2: https://projecteuler.net/problem=2

const fibonacci = (n) => {
  if (n <= 1) return n
  let arr = []
  let first = 0
  let second = 1
  let tmp = 0
  for (let i = 1; i <= n; i++) {
    tmp = first + second
    first = second
    second = tmp
    if (tmp < n) arr.push(tmp)
  }
  return arr
}

const sumEvenFibonacciNumbers = (n) => {
  try {
    return fibonacci(n).reduce((acc, cur) => {
      if (cur % 2 === 0) return acc + cur
      return acc + 0
    },0)
  } catch (e) {
    throw new Error(e)
  }
}



module.exports = { sumEvenFibonacciNumbers, fibonacci }







/* END */
