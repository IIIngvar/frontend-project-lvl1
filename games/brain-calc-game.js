import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createCalcString } from "../utils/createStrings/createCalcString.js";
import { createCalcData } from "../utils/createData/createCalcData.js";
import { createCondCalc } from "../utils/createConditions/createCondCalc.js";

export const brainCalcGame = () => {
    const previousText = 'What is the result of the expression?';

    const name = userName();

    const condition = (data, answer) => {
        return data === Number(answer)      
    }

    repeatableQuestion(previousText, createCalcData, createCalcString, createCondCalc, condition, name)
}