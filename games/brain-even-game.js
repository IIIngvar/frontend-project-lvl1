import { cons } from "@hexlet/pairs";
import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { getRandomInt } from "../utils/createData/getRandomInt.js";
import { getConditionResult } from "../utils/getConditionResult.js";
import { identity } from "../utils/identity.js";
import { previousTextBrainEven } from "../constants/previousMessageTexts.js";
import { returnCorrectAnswerCond } from "../utils/returnCorrectAnswerCond.js";

export const brainEvenGame = () => repeatableQuestion(previousTextBrainEven, getRandomInt, identity, identity, (data, answer) => getConditionResult(cons(answer, returnCorrectAnswerCond(data % 2 === 0))), userName());