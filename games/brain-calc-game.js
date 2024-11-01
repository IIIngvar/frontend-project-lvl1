import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createCalcString } from "../utils/createStrings/createCalcString.js";
import { createCalcData } from "../utils/createData/createCalcData.js";
import { createCondCalc } from "../utils/createConditions/createCondCalc.js";
import { cons } from "@hexlet/pairs";
import { getConditionResult } from "../utils/getConditionResult.js";
import { previousTextBrainCalc } from "../constants/previousMessageTexts.js";

export const brainCalcGame = () =>  repeatableQuestion(previousTextBrainCalc, createCalcData, createCalcString, createCondCalc, (data, answer) =>  getConditionResult(cons(answer, String(data))), userName());