import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createProgressionData } from "../utils/createData/createProgressionData.js";
import { createProgressionString } from "../utils/createStrings/createProgressionString.js";
import { createCondProg } from "../utils/createConditions/createCondProg.js";
import { cons } from "@hexlet/pairs";
import { getConditionResult } from "../utils/getConditionResult.js";

export const brainProgressionGame = () => {
    const previousText = 'What number is missing in the progression?';

    const name = userName();
    
    const condition = (data, answer) =>  {
        const correctAnswer = String(data);
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }

    
    repeatableQuestion(previousText, createProgressionData, createProgressionString, createCondProg, condition, name);
    
}