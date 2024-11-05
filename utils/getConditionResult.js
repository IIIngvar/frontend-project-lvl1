import { car, cdr, cons } from '@hexlet/pairs';

const getConditionResult = (pairAnswers) => {
  const answer = car(pairAnswers);
  const correctAnswer = cdr(pairAnswers);
  const logic = correctAnswer === answer;
  const result = cons(logic, pairAnswers);
  return result;
};
export default getConditionResult;
