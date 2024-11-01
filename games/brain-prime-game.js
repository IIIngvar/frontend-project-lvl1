import { userName } from "../cli.js";
import { getConditionResult } from "../utils/getConditionResult.js";
import { cons } from "@hexlet/pairs";
import { getRandomInt } from "../utils/createData/getRandomInt.js";
import { repeatableQuestion } from "../index.js";
import { checkIsPrime } from "../utils/checkIsPrime.js";
import { identity } from "../utils/identity.js";
import { previousTextBrainPrime } from "../constants/previousMessageTexts.js";

export const brainPrimeGame = () => {

    const conditionPrime = (data, answer) => {
        const correctAnswerPrime = checkIsPrime(data) ? 'yes' : 'no';
        return getConditionResult(cons(answer, correctAnswerPrime));
    }

    repeatableQuestion(previousTextBrainPrime, getRandomInt, identity, identity, conditionPrime, userName());
}