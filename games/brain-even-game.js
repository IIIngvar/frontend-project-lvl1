import { cons } from "@hexlet/pairs";
import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { getRandomInt } from "../utils/createData/getRandomInt.js";
import { getConditionResult } from "../utils/getConditionResult.js";
import { identity } from "../utils/identity.js";
import { previousTextBrainEven } from "../constants/previousMessageTexts.js";

export const brainEvenGame = () => {
    
    const condition = (data, answer) => {
        const condEven = data % 2 === 0;
        const correctAnswer = condEven ? 'yes' : 'no';
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }

    repeatableQuestion(previousTextBrainEven, getRandomInt, identity, identity, condition, userName());

};