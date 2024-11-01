import { cons } from "@hexlet/pairs";
import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { getRandomInt } from "../utils/createData/getRandomInt.js";
import { getConditionResult } from "../utils/getConditionResult.js";
import { identity } from "../utils/identity.js";
import { previousTextBrainEven } from "../constants/previousMessageTexts.js";

export const brainEvenGame = () => {
    
    const conditionEven = (data, answer) => {
        const correctAnswerEven = data % 2 === 0 ? 'yes' : 'no';
        return getConditionResult(cons(answer, correctAnswerEven));
    }

    repeatableQuestion(previousTextBrainEven, getRandomInt, identity, identity, conditionEven, userName());

};