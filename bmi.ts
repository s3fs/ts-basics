interface Parsed {
  val1: number
  val2: number
}

const parse = (argv: Array<string>): Parsed => {
  if (argv.length < 4) {
    throw new Error('Provide height and weight values')    
  } else if (isNaN(Number(argv[2])) || isNaN(Number(argv[3]))) {
    throw new Error('Provided values are not numbers')
  }

  return {
    val1: Number(argv[3]),
    val2: Number(argv[2])
  }
}

const calcBmi = (w: number, h: number): number | string => {
  const res: number =  w / ((h / 100) ** 2)
  
  if (res < 18.5) {
    return `${res} Underweight`
  } else if (res > 18.5 && res < 24.9) {
    return `${res} Normal`
  } else {
    return `${res} Too big`
  }
}

try {
  const { val1, val2 } = parse(process.argv)
  console.log(calcBmi(val1, val2))
} catch (e) {
  console.log(e)
}