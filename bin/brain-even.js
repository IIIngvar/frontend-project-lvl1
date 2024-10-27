#!/usr/bin/env node

import { getRandomInt, repeatableQuestion } from '../cli.js';

const brainEven = () => {
    const previousText = 'Answer "yes" if the number is even, otherwise answer "no".'
    
    const condition = (data, answer) => {
        const condAnswerYes = answer === 'yes';
        const condAnswerNo = answer === 'no';
        const condEven = data % 2 === 0;
        const condNotEven = data % 2 !== 0;
        const condRightEven = condAnswerYes && condEven;
        const condRightNotEven = condAnswerNo && condNotEven;
        return condRightEven || condRightNotEven
    }

    repeatableQuestion(previousText, getRandomInt, condition)

};

brainEven();