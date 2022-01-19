// Problem 1: https://projecteuler.net/problem=1

const findMultiplesOf3And5 = (n) => {
  try {
    let arr = []
    for (let i = 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) arr.push(i)
    }
    return arr
  } catch (e) {
    throw new Error(e)
  }
}

const sumMultiplesOf3And5 = (n) => {
  try {
    return new Array(n).fill(0).map((a,i) => i).reduce((acc, cur) => {
      if (cur % 3 === 0 || cur % 5 === 0) return acc + cur
      return acc + 0
    },0)
  } catch (e) {
    throw new Error(e)
  }
}



module.exports = { findMultiplesOf3And5, sumMultiplesOf3And5 }









/* END */
