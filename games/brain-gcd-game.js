import { cons } from "@hexlet/pairs";
import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createCondGcd } from "../utils/createConditions/createCondGcd.js";
import { createPair } from "../utils/createData/createPair.js";
import { createGcdString } from "../utils/createStrings/createGcdString.js";
import { getConditionResult } from "../utils/getConditionResult.js";

export const braimGcdGame = () => {
    const previousText = 'Find the greatest common divisor of given numbers.';

    const name = userName();

    const condition = (data, answer) => {
        const correctAnswer = String(data);
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }

    repeatableQuestion(previousText, createPair, createGcdString, createCondGcd, condition, name);
};