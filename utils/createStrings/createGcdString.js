import { car, cdr } from "@hexlet/pairs";

export const createGcdString = (pair) => {
    const a = car(pair);
    const b = cdr(pair);
    return `${a} ${b}`;
}