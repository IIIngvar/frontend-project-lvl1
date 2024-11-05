import { car, cdr } from '@hexlet/pairs';
const createCalcString = (data) => {
  const pair = car(data);
  const operator = cdr(data);
  const left = car(pair);
  const right = cdr(pair);
  const exp = `${left} ${operator} ${right}`;
  return exp;
};
export default createCalcString;
