import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { incorrectAnswerMsg } from './utils/incorrectAnswerMsg.js';

export const repeatableQuestion = (initText, innerDataFunc, innerStringFunc, conditionDataFunc, condition, name, countOfMaxRounds = 3) => {
    let countOfRounds = 0;
    console.log(initText);
    while(countOfRounds < countOfMaxRounds) {
        const innerData = innerDataFunc()
        const stringData = innerStringFunc(innerData);              //преобразуем исходные данные в строку для показа вопроса
        const conditionData = conditionDataFunc(innerData);         //преобразуем исходные данные для вставки в условие проверки ответа

        console.log(`Question: ${stringData}`);

        const answer = readlineSync.question('Your answer: ');      //ловим ответ
        
        const conditionReturn = condition(conditionData, answer);
        const logicCondition = car(conditionReturn);
        const answersCompare = cdr(conditionReturn)
        if(logicCondition) {                                        //сравниваем ответ
            console.log('Correct!');
            countOfRounds++;
        } else {
            console.log(incorrectAnswerMsg(answersCompare))
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }
    if(countOfRounds === countOfMaxRounds) {                        //если счётчик раундов дошёл до максимально заданного, то выводим поздравление
        console.log(`Congratulations, ${name}!`);
    }
}