interface Sol {
  len: number
  train: number
  targ: number
  avg: number
  reach: boolean
  rat: number
}

const calcExec = (a: Array<number>, t: number): Sol => {
  const avg: number = a.reduce((x: number, y: number) => x + y) / a.length

  return {
    len: a.length,
    train: a.filter(x => x > 0).length,
    targ: t,
    avg: avg,
    reach: avg >= t ? true : false,
    rat: Math.floor(Math.random() * 10)
  }
}

console.log(calcExec([3, 0, 2, 4.5, 0, 3, 1], 2))