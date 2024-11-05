import getRandomInt from './getRandomInt.js';
const createCalcOperator = () => {
  const operCount = getRandomInt(3);
  switch (operCount){
  case 0:
    return '+';
  case 1:
    return '-';
  case 2:
    return '*';
  }
};
export default createCalcOperator;
