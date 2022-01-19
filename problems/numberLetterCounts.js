// Problem 17: https://projecteuler.net/problem=17

const NUMBER_COUNTS = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand'
}


const numberLetterCounts = (n) => {
  try {
    let letterSum = 0
    let lettersSpelledOut = []
    let and = 'and'
    let ones = ''
    let tens = ''
    let hundreds = ''
    let _hundreds = ''
    for (let i = 1; i <= n; i++) {
      let intStrRep = i.toString()
      let strRep = ''
      ones = strRep[0]

      switch (intStrRep.length) {
        case (1):
          lettersSpelledOut.push(NUMBER_COUNTS[i])
          break
        case (2):
          if (NUMBER_COUNTS.hasOwnProperty(intStrRep)) {
            lettersSpelledOut.push(NUMBER_COUNTS[i])
            tens = NUMBER_COUNTS[i]
          }
          ones = intStrRep[intStrRep.length-1]
          if (i > 20 && NUMBER_COUNTS[ones] !== undefined) {
            lettersSpelledOut.push(`${tens}${NUMBER_COUNTS[ones]}`)
          }
          break
        case (3):
          if (NUMBER_COUNTS.hasOwnProperty(intStrRep)) {
            lettersSpelledOut.push(`${NUMBER_COUNTS[intStrRep[0]]}${NUMBER_COUNTS[i]}`)
            hundreds = NUMBER_COUNTS[i]
          }
          let val = intStrRep.split('')
          ones = val[2]
          tens = `${val[1]}${ones}`
          _hundreds = val[0]
          if (Number(tens) === 0) lettersSpelledOut.push(`${NUMBER_COUNTS[intStrRep[0]]}${hundreds}`)
          if (Number(tens) > 0 && Number(tens) < 10) lettersSpelledOut.push(`${NUMBER_COUNTS[_hundreds]}${hundreds}${and}${NUMBER_COUNTS[ones]}`)
          if (Number(tens) >= 10 && Number(tens) < 20) lettersSpelledOut.push(`${NUMBER_COUNTS[_hundreds]}${hundreds}${and}${NUMBER_COUNTS[tens]}`)
          if (Number(tens) >= 20) {
            tens = `${val[1]}0`
            if (NUMBER_COUNTS[ones] === undefined) lettersSpelledOut.push(`${NUMBER_COUNTS[_hundreds]}${hundreds}${and}${NUMBER_COUNTS[tens]}`)
            else lettersSpelledOut.push(`${NUMBER_COUNTS[_hundreds]}${hundreds}${and}${NUMBER_COUNTS[tens]}${NUMBER_COUNTS[ones]}`)
          }
          break
        case (4):
          if (NUMBER_COUNTS.hasOwnProperty(intStrRep)) {
            lettersSpelledOut.push(`${NUMBER_COUNTS[intStrRep[0]]}${NUMBER_COUNTS[i]}`)
            hundreds = NUMBER_COUNTS[i]
          }
          break
        default:
          break
      }

    }
    let letters = new Set(lettersSpelledOut)
    return {
      letterSum: Array.from(letters).reduce((acc, cur) => {
        return acc + cur.length
      },0),
      lettersSpelledOut: Array.from(letters)
    }
  } catch (e) {
    throw new Error(`Number letter counts: ${e}`)
  }
}


module.exports = { numberLetterCounts }



















/* END */
