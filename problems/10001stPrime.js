// Problem 7: https://projecteuler.net/problem=7


const isPrime = (n) => {
  for(let i = 2; i <= Math.sqrt(n); i++)
    if(n % i === 0) return false;
  return true;
}

const findPrimes = (n) => {
  try {
    let prime = 2
    let primeCount = 0
    let primes = []
    while (true) {
      if (isPrime(prime)) {
        primes.push(prime)
        primeCount += 1
        prime += 1
      }
      else prime += 1
      if (primeCount === n) return primes
    }
  } catch (e) {
    throw new Error(`Find primes: ${e}`)
  }
}

const nthPrime = (n) => {
  return findPrimes(n)[n-1]
}

module.exports = { nthPrime }





















/* END */
