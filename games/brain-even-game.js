import { cons } from "@hexlet/pairs";
import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createCondEven } from "../utils/createConditions/createCondEven.js";
import { getRandomInt } from "../utils/createData/getRandomInt.js";
import { createEvenString } from "../utils/createStrings/createEvenString.js";
import { getConditionResult } from "../utils/getConditionResult.js";

export const brainEvenGame = () => {
    const previousText = 'Answer "yes" if the number is even, otherwise answer "no".'

    const name = userName();
    
    const condition = (data, answer) => {
        const condEven = data % 2 === 0;
        const correctAnswer = condEven ? 'yes' : 'no';
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }

    repeatableQuestion(previousText, getRandomInt, createEvenString, createCondEven, condition, name)

};