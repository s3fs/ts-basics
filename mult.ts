type Operation = 'multiply' | 'add' | 'divide';

const calc = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Cant divide by zero haha');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not of acceptable type');
  }
}

try {
  console.log(calc(2, 10, 'add'));
  console.log(calc(2, 0, 'divide'));
} catch (e: any) {
  console.log(`Uh oh...`, e.message);
}