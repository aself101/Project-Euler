// Problem 14: https://projecteuler.net/problem=14

const isEven = (n) => n % 2 === 0
const isOdd = (n) => n % 2 !== 0
const evenNum = (n) => n / 2
const oddNum = (n) => 3 * n + 1

const longestCollatzSequence = (n) => {
  try {
    let collatzSeq = null
    let collatzNum = null

    for (let i = 2; i < n; i++) {
      let num = i
      let seq = [num]
      while (num !== 1) {
        if (isEven(num)) {
          num = evenNum(num)
          seq.push(num)
        } else if (isOdd(num)) {
          num = oddNum(num)
          seq.push(num)
        }
      }
      if ((collatzSeq === null || collatzSeq.length < seq.length)) {
        collatzNum = seq[0]
        collatzSeq = seq
      }
    }
    return { collatzNum, collatzSeq }
  } catch (e) {
    throw new Error(`Longest collatz sequence: ${e}`)
  }
}

module.exports = { longestCollatzSequence }











/* END */
