import { getRandomInt } from "./getRandomInt.js";
import { cons } from "@hexlet/pairs";

export const createPair = () => {
    const a = getRandomInt();
    const b = getRandomInt();
    const pair = cons(a, b);
    return pair;
}