import { cons } from "@hexlet/pairs";
import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { getRandomInt } from "../utils/createData/getRandomInt.js";
import { getConditionResult } from "../utils/getConditionResult.js";
import { identity } from "../utils/identity.js";

export const brainEvenGame = () => {
    const previousText = 'Answer "yes" if the number is even, otherwise answer "no".'

    const name = userName();
    
    const condition = (data, answer) => {
        const condEven = data % 2 === 0;
        const correctAnswer = condEven ? 'yes' : 'no';
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }

    repeatableQuestion(previousText, getRandomInt, identity, identity, condition, name);

};