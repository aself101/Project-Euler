// Problem 16 https://projecteuler.net/problem=16




const powerDigitSum = (n) => {
  try {
    return BigInt(2 ** n).toString().split('').reduce((acc, cur) => {
      return acc + Number(cur)
    },0)
  } catch (e) {
    throw new Error(`Power digit sum: ${e}`)
  }
}

module.exports = { powerDigitSum }






/* END */
