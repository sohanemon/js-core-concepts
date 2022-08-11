/* --------------------------------------------------------------------- */
/*                        factorial using function                       */
/* --------------------------------------------------------------------- */

const getFactorial = (number) => {
  if (number <= 1) return number;
  return number * getFactorial(number - 1);
};
console.log(getFactorial(10));
