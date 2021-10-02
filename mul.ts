const mul = (a: number, b: number, printTxt: string) => {
  console.log(printTxt, a * b)
}

const num1: number = Number(process.argv[2])
const num2: number = Number(process.argv[3])

mul(num1, num2, `${num1} x ${num2} results in `)