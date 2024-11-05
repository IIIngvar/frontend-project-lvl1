import { car, cdr, cons } from '@hexlet/pairs';
const euclidNodAlgorhytm = (pair) => {
  const a = car(pair);
  const b = cdr(pair);
  const max = Math.max(a,b);
  const min = Math.min(a,b);
  const CountOfMin = Math.floor(max/min);
  const divRest = max % (CountOfMin*min);
  const newPair = cons(min, divRest);
  return divRest === 0 ? min : euclidNodAlgorhytm(newPair);
};
export default euclidNodAlgorhytm;
