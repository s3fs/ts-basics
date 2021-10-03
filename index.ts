const calcBmi = (h: number, w: number): number | string => {
  const res: number =  w / ((h / 100) ** 2)
  
  if (res < 18.5) {
    return `${res} Underweight`
  } else if (res > 18.5 && res < 24.9) {
    return `${res} Normal`
  } else {
    return `${res} Too big`
  }
}

console.log(calcBmi(180, 70))