import getRandomInt from './getRandomInt.js';

const createCalcOperator = () => {
  const operCount = getRandomInt(3);
  let operator;
  switch (operCount) {
    case 0:
      operator = '+';
      break;
    case 1:
      operator = '-';
      break;
    case 2:
      operator = '*';
      break;
    default:
      operator = '+';
      break;
  }
  return operator;
};
export default createCalcOperator;
