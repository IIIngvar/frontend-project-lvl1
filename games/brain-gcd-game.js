import { cons } from "@hexlet/pairs";
import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createCondGcd } from "../utils/createConditions/createCondGcd.js";
import { createPair } from "../utils/createData/createPair.js";
import { createGcdString } from "../utils/createStrings/createGcdString.js";
import { getConditionResult } from "../utils/getConditionResult.js";
import { previousTextBrainGcd } from "../constants/previousMessageTexts.js";

export const braimGcdGame = () => {

    const condirionGcd = (data, answer) => getConditionResult(cons(answer, String(data)));

    repeatableQuestion(previousTextBrainGcd, createPair, createGcdString, createCondGcd, condirionGcd, userName());
};