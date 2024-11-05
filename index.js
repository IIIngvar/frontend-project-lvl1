import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import incorrectAnswerMsg from './utils/incorrectAnswerMsg.js';

const repeatableQuestion = (
  initText,
  innerDataFunc,
  innerStringFunc,
  conditionDataFunc,
  condition,
  name,
  countOfMaxRounds = 3,
) => {
  let countOfRounds = 0;
  console.log(initText);
  while (countOfRounds < countOfMaxRounds) {
    const innerData = innerDataFunc();
    const stringData = innerStringFunc(innerData);
    const conditionData = conditionDataFunc(innerData);
    console.log(`Question: ${stringData}`);
    const answer = readlineSync.question('Your answer: ');
    const conditionReturn = condition(conditionData, answer);
    const logicCondition = car(conditionReturn);
    const answersCompare = cdr(conditionReturn);
    if (logicCondition) {
      console.log('Correct!');
      countOfRounds += 1;
    } else {
      console.log(incorrectAnswerMsg(answersCompare));
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (countOfRounds === countOfMaxRounds) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default repeatableQuestion;
