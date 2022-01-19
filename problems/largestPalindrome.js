// Problem 4: https://projecteuler.net/problem=4
const palindromicNumbers = (max) => {
  try {
    let palindromes = []
    for (let i = 100; i <= max; i++) {
      for (let j = 100; j <= max; j++) {
        let product = (i * j).toString().split('')
        let firstHalf = product.slice(0, product.length / 2).reverse()
        let secondHalf = product.slice(product.length / 2, product.length)
        if (firstHalf.join('') === secondHalf.join('')) palindromes.push(Number(product.join('')))
      }
    }
    return palindromes
  } catch (e) {
    throw new Error(e)
  }
}

const largestPalindromicNumber = (max) => {
  try {
    return Math.max(...palindromicNumbers(max))
  } catch (e) {
    throw new Error(e)
  }
}


module.exports = { largestPalindromicNumber }

















/* END */
