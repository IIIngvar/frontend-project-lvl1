import { userName } from "../cli.js";
import { repeatableQuestion } from "../index.js";
import { getRandomInt } from "../utils/getRandomInt.js";

export const brainEvenGame = () => {
    const previousText = 'Answer "yes" if the number is even, otherwise answer "no".'

    const name = userName();
    
    const condition = (data, answer) => {
        const condAnswerYes = answer === 'yes';
        const condAnswerNo = answer === 'no';
        const condEven = data % 2 === 0;
        const condNotEven = data % 2 !== 0;
        const condRightEven = condAnswerYes && condEven;
        const condRightNotEven = condAnswerNo && condNotEven;
        return condRightEven || condRightNotEven
    }

    repeatableQuestion(previousText, getRandomInt, condition, name)

};