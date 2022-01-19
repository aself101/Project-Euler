// Problem 12: https://projecteuler.net/problem=12

const isPrime = (n) => {
  for(let i = 2; i <= Math.sqrt(n); i++)
    if(n % i === 0) return false;
  return true;
}

const getFactorsOfN = (n) => {
  let factors = []
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) factors.push(i) // Divisors equal
      else {
        factors.push(i)
        factors.push(n/i)
      }
    }
  }
  return factors
}

const divisibleTriangleNumber = (n) => {
  try {
    let count = 1
    while (true) {
      if (isPrime(count)) { count += 1 } // Skip all primes
      else {
        let triangleNumber = new Array(count).fill(0).reduce((acc, cur, i) => { return acc + i+1 }, 0)
        let factors = getFactorsOfN(triangleNumber)
        count += 1
        if (factors.length >= n) return { triangleNumber, factors }
      }
    }
  } catch (e) {
    throw new Error(`Divisible triangle number: ${e}`)
  }
}



module.exports = { divisibleTriangleNumber }










/* END */
