import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createProgressionData } from "../utils/createData/createProgressionData.js";
import { createProgressionString } from "../utils/createStrings/createProgressionString.js";
import { createCondProg } from "../utils/createConditions/createCondProg.js";
import { cons } from "@hexlet/pairs";
import { getConditionResult } from "../utils/getConditionResult.js";
import { previousTextBrainProgression } from "../constants/previousMessageTexts.js";

export const brainProgressionGame = () => {
    
    const conditionProgression = (data, answer) =>  getConditionResult(cons(answer, String(data)));
  
    repeatableQuestion(previousTextBrainProgression, createProgressionData, createProgressionString, createCondProg, conditionProgression, userName());
    
}