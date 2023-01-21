// const num = '11010'
let valPosBase2 = []
const valDecimalEachDigit = []

function binaryToDecimal(num) {
  // * num:string
  const ArrNumStr = Array.from(num) // * ArrNumbStr: string[]
  const ArrNum = ArrNumStr.splice(',').map(Number) // * ArrNum: number[]

  for (let i = 0; i < ArrNum.length; i++) {
    valPosBase2[i] = 2 ** i
  }

  valPosBase2 = valPosBase2.reverse()

  for (let i = 0; i < ArrNum.length; i++) {
    for (let j = 0; j < valPosBase2.length; j++) {
      if (i === j) {
        valDecimalEachDigit[i] = ArrNum[i] * valPosBase2[j]
      }
    }
  }

  return valDecimalEachDigit.reduce((acc, cur) => acc + cur, 0)
}

// * user need to enter binary number as a string
console.log(binaryToDecimal('10011011'))
