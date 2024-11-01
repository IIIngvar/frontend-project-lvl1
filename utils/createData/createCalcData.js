import { createCalcOperator } from "./createCalcOperator.js";
import { createPair } from "./createPair.js"
import { cons } from "@hexlet/pairs";

export const createCalcData = () => cons(createPair(), createCalcOperator());