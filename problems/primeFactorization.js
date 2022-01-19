// Problem 3: https://projecteuler.net/problem=3

// Find prime factors
const primeFactors = (n) => {
  try {
    let arr = []
    let prime = 2
    while (n > Math.pow(prime, 2)) {
      if (n % prime === 0) {
        arr.push(prime)
        n = n / prime
      } else prime = prime + 1
    }
    arr.push(n)
    return arr
  } catch (e) {
    throw new Error(e)
  }
}

const maxPrimeFactor = (n) => {
  try {
    return Math.max(...primeFactors(n))
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = { maxPrimeFactor }



















/* END */
