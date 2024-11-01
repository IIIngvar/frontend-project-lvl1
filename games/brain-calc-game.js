import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createCalcString } from "../utils/createStrings/createCalcString.js";
import { createCalcData } from "../utils/createData/createCalcData.js";
import { createCondCalc } from "../utils/createConditions/createCondCalc.js";
import { cons } from "@hexlet/pairs";
import { getConditionResult } from "../utils/getConditionResult.js";

export const brainCalcGame = () => {
    const previousText = 'What is the result of the expression?';

    const name = userName();

    const condition = (data, answer) => {
        const correctAnswer = String(data);
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }

    repeatableQuestion(previousText, createCalcData, createCalcString, createCondCalc, condition, name);
}