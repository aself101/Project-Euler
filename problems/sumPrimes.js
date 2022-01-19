// Problem 10: https://projecteuler.net/problem=10


const isPrime = (n) => {
  for(let i = 2; i <= Math.sqrt(n); i++)
    if(n % i === 0) return false;
  return true;
}

const findPrimes = (n) => {
  try {
    let prime = 2
    let primes = []
    while (true) {
      if (isPrime(prime)) {
        primes.push(prime)
        prime += 1
      }
      else prime += 1
      if (prime > n) return primes
    }
  } catch (e) {
    throw new Error(`Find primes: ${e}`)
  }
}

const sumPrimes = (n) => {
  return findPrimes(n).reduce((acc, cur) => {
    return acc + cur
  },0)
}

module.exports = { sumPrimes }
