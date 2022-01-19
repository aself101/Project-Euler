// Problem 9: https://projecteuler.net/problem=9

const pythagoreanTriplet = () => {
  try {
    const SPECIAL_NUM = 1000
    let triplet = { a: null, b: null, c: null }
    let product = null
    for (let i = 0; i < SPECIAL_NUM / 2; i++) {
      for (let j = 0; j < SPECIAL_NUM / 2; j++) {
        for (let k = 0; k < SPECIAL_NUM / 2; k++) {
          if (Math.pow(i,2) + Math.pow(j,2) === Math.pow(k,2)) {
            if (i + j + k === SPECIAL_NUM) {
              triplet.a = i
              triplet.b = j
              triplet.c = k
              product = i * j * k
            }
          }
        }
      }
    }
    return { triplet, product }
  } catch (e) {
    throw new Error(`Special pythagorean triplet: ${e}`)
  }
}

module.exports = { pythagoreanTriplet }

/* END */
