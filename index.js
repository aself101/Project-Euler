/*
  Project Euler: https://projecteuler.net
*/

const { findMultiplesOf3And5, sumMultiplesOf3And5 } = require('./problems/multiplesOf3And5')
const { sumEvenFibonacciNumbers, fibonacci } = require('./problems/evenFibonacciNumbers')
const { maxPrimeFactor } = require('./problems/primeFactorization')
const { largestPalindromicNumber } = require('./problems/largestPalindrome')
const { findSmallestMultiple } = require('./problems/smallestMultiple')
const { sumSquareDiff } = require('./problems/sumSquareDifference')
const { nthPrime } = require('./problems/10001stPrime')
const { pythagoreanTriplet } = require('./problems/specialPythagoreanTriplet')
const { sumPrimes } = require('./problems/sumPrimes')
const { largestProductInSeries } = require('./problems/largestProductInSeries')
const { largestProductInGrid } = require('./problems/largestProductInGrid')
const { divisibleTriangleNumber } = require('./problems/highlyDivisibleTriangleNumber')
const { firstTenDigitsOfSum } = require('./problems/largeSum')
const { longestCollatzSequence } = require('./problems/collatzSequence')
const { powerDigitSum } = require('./problems/powerDigitSum')
const { numberLetterCounts } = require('./problems/numberLetterCounts')

const main = () => {
  try {
    //let { letterSum, lettersSpelledOut } = numberLetterCounts(1000)
    //console.log(powerDigitSum(1000))
    //console.log(longestCollatzSequence(1000000))
    //console.log(firstTenDigitsOfSum(10))
    //console.log(divisibleTriangleNumber(500))
    //console.log(largestProductInGrid(20))
    //console.log(sumPrimes(2000000))
    //console.log(pythagoreanTriplet())
    //console.log(nthPrime(10001))
    //console.log(sumSquareDiff(100))
    //console.log(findSmallestMultiple(20))
    //console.log(largestPalindromicNumber(9999))
    //console.log(maxPrimeFactor(600851475143))
    //console.log(sumEvenFibonacciNumbers(4000000))
    //console.log(sumMultiplesOf3And5(1000))
  } catch (e) {
    throw new Error(e)
  } finally {
    console.log('Done!')
  }
}

main()

/* END */
