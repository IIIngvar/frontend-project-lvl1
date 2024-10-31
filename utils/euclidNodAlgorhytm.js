import { car, cdr, cons } from "@hexlet/pairs";

export const euclidNodAlgorhytm = (pair) => {
    const a = car(pair);
    const b = cdr(pair);
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    let CountOfMin = Math.floor(max/min);
    let divRest = max % (CountOfMin*min);
    const newPair = cons(min, divRest)   
    return divRest === 0 ? min : euclidNodAlgorhytm(newPair);
}