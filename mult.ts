type Operation = 'multiply' | 'add' | 'divide';
type Result = string | number;

const calc = (a: number, b: number, op: Operation): Result => {
  if (op === 'multiply') {
    return a * b;
  } else if (op === 'add') {
    return a + b;
  } else if (op === 'divide') {
    if (b === 0) return 'can\'t divide by 0';
    return a / b;
  }
  return 'hehe'
}

console.log(calc(2, 10, 'add'))