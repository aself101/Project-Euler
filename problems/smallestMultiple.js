// Problem 5: https://projecteuler.net/problem=5

const numberDivisible1ThroughN = (n) => {
  try {
    let count = 1
    while (true) {
      let divisibleCount = 0
      for (let j = 1; j <= n; j++) {
        if (count % j === 0) divisibleCount += 1
        else break
        if (divisibleCount === n) return count
      }
      count += 1
    }
  } catch (e) {
    throw new Error(e)
  }
}

const findSmallestMultiple = (n) => {
  try {
    return numberDivisible1ThroughN(n)
  } catch (e) {
    throw new Error(e)
  }
}


module.exports = { findSmallestMultiple }



















/* END */
