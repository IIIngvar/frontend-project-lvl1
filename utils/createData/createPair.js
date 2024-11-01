import { getRandomInt } from "./getRandomInt.js";
import { cons } from "@hexlet/pairs";

export const createPair = () => cons(getRandomInt(), getRandomInt());
