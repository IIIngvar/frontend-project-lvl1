import { userName } from "../cli.js";
import { getConditionResult } from "../utils/getConditionResult.js";
import { cons } from "@hexlet/pairs";
import { getRandomInt } from "../utils/createData/getRandomInt.js";
import { repeatableQuestion } from "../index.js";
import { checkIsPrime } from "../utils/checkIsPrime.js";
import { identity } from "../utils/identity.js";
import { previousTextBrainPrime } from "../constants/previousMessageTexts.js";
import { returnCorrectAnswerCond } from "../utils/returnCorrectAnswerCond.js";

export const brainPrimeGame = () => repeatableQuestion(previousTextBrainPrime, getRandomInt, identity, identity, (data, answer) => getConditionResult(cons(answer, returnCorrectAnswerCond(checkIsPrime(data)))), userName());