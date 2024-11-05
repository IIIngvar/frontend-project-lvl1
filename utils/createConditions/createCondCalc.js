import { car, cdr } from '@hexlet/pairs';

const createCondCalc = (data) => {
  const opearands = car(data);
  const operator = cdr(data);
  const leftOperand = car(opearands);
  const rightOperand = cdr(opearands);
  let result;
  switch (operator) {
    case '+':
      result = leftOperand + rightOperand;
      break;
    case '-':
      result = leftOperand - rightOperand;
      break;
    case '*':
      result = leftOperand * rightOperand;
      break;
    default:
      result = leftOperand + rightOperand;
  }
  return result;
};
export default createCondCalc;
