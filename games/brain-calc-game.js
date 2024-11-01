import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createCalcString } from "../utils/createStrings/createCalcString.js";
import { createCalcData } from "../utils/createData/createCalcData.js";
import { createCondCalc } from "../utils/createConditions/createCondCalc.js";
import { cons } from "@hexlet/pairs";
import { getConditionResult } from "../utils/getConditionResult.js";
import { previousTextBrainCalc } from "../constants/previousMessageTexts.js";

export const brainCalcGame = () => {

    const condition = (data, answer) => {
        const correctAnswer = String(data);
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }

    repeatableQuestion(previousTextBrainCalc, createCalcData, createCalcString, createCondCalc, condition, userName());
}