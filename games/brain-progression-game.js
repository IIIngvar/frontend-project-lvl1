import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createProgressionData } from "../utils/createData/createProgressionData.js";
import { createProgressionString } from "../utils/createStrings/createProgressionString.js";
import { createCondProg } from "../utils/createConditions/createCondProg.js";
import { cons } from "@hexlet/pairs";
import { getConditionResult } from "../utils/getConditionResult.js";
import { previousTextBrainProgression } from "../constants/previousMessageTexts.js";


export const brainProgressionGame = () => {
    
    const condition = (data, answer) =>  {
        const correctAnswer = String(data);
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }
  
    repeatableQuestion(previousTextBrainProgression, createProgressionData, createProgressionString, createCondProg, condition, userName());
    
}