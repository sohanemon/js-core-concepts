/* --------------------------------------------------------------------- */
/*             how a function takes an argument, and returns             */
/* --------------------------------------------------------------------- */

const testFunction = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(testFunction(23, 34));
