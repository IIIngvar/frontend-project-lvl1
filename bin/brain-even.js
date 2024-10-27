#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

const name = userName();

const getRandomInt = (max = 100) => {
    return Math.floor(Math.random() * max)
}

const brainEven = () => {
    const previousText = 'Answer "yes" if the number is even, otherwise answer "no".'
    console.log(previousText);
    const countOfCoorectAnswers = 3;
    
    let i = 0;
    while(i < countOfCoorectAnswers) {
        const rndInt = getRandomInt();
        console.log(`Question: ${rndInt}`);
        const answer = readlineSync.question('Your answer: ');
        if((answer === 'yes' && rndInt % 2 === 0) || (answer ===  'no' && rndInt % 2 !== 0)){
            console.log('Correct!');
            i++;
        } else {
            console.log(`Let's try again, ${name}!`)
            break;
        }
    }
    if(i === countOfCoorectAnswers) {
        console.log(`Congratulations, ${name}!`)
    }

};

brainEven();