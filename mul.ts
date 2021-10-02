interface MulVals {
  val1: number;
  val2: number;
}

const parseArgv = (args: Array<string>): any => {
  const t = (x: string): Error => {
    throw new Error(x);
  }

  if (args.length < 4) t('Not enough arguments');
  if (args.length > 4) t('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      val1: Number(args[2]),
      val2: Number(args[3])
    }
  } else {
    t('Provided values are not Numbers');
  }
}

const mul = (a: number, b: number, printTxt: string) => {
  console.log(printTxt, a * b);
}

try {
  const { val1, val2 } = parseArgv(process.argv);
  mul(val1, val2, `${val1} x ${val2} results in `);
} catch (e) {
  console.log('Error ', e)
}