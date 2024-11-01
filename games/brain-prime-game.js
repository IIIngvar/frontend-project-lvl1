import { userName } from "../cli.js";
import { getConditionResult } from "../utils/getConditionResult.js";
import { cons } from "@hexlet/pairs";
import { getRandomInt } from "../utils/createData/getRandomInt.js";
import { repeatableQuestion } from "../index.js";
import { checkIsPrime } from "../utils/checkIsPrime.js";
import { identity } from "../utils/identity.js";
import { previousTextBrainPrime } from "../constants/previousMessageTexts.js";

export const brainPrimeGame = () => {

    const condition = (data, answer) => {
        const condPrime = checkIsPrime(data);
        const correctAnswer = condPrime ? 'yes' : 'no';
        const answerCompare = cons(answer, correctAnswer);
        return getConditionResult(answerCompare);
    }

    repeatableQuestion(previousTextBrainPrime, getRandomInt, identity, identity, condition, userName());
}