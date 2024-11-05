import { car, cdr } from '@hexlet/pairs';

const incorrectAnswerMsg = (pair) => {
  const answer = car(pair);
  const correctAnswer = cdr(pair);
  return `'${String(answer)}' is wrong answer ;(. Correct answer was '${String(correctAnswer)}'.`;
};
export default incorrectAnswerMsg;
