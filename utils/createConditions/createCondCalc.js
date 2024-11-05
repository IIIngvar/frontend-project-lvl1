import createCalcString from '../createStrings/createCalcString.js';
const createCondCalc = (data) => {
  const stringExpression = createCalcString(data);
  return eval(stringExpression);
};
export default createCondCalc;
