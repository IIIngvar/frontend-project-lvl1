import { car, cdr } from '@hexlet/pairs';

const createGcdString = (pair) => {
  const a = car(pair);
  const b = cdr(pair);
  return `${a} ${b}`;
};
export default createGcdString;
