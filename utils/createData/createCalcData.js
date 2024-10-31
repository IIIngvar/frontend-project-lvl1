import { createCalcOperator } from "./createCalcOperator.js";
import { createPair } from "./createPair.js"
import { cons } from "@hexlet/pairs";

export const createCalcData = () => {
    const pair = createPair();
    const operator = createCalcOperator();
    const resPair = cons(pair, operator);
    return resPair;
};