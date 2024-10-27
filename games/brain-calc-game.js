import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { createCalc } from "../utils/createCalc.js";

export const brainCalcGame = () => {
    const previousText = 'What is the result of the expression?';

    const name = userName();

    const condition = (data, answer) => {
        return eval(data) === Number(answer)
    }

    repeatableQuestion(previousText, createCalc, condition, name)
}