let factorialOfNum3 = require("../factorial/index.js");
let ratioOfNum1Num2 = require("../ratio/index.js");

let ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfNum1Num2(num1, num2);
  const factorial = factorialOfNum3(num3);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
