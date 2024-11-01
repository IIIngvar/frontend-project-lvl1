import { car, cdr, cons } from "@hexlet/pairs"

export const getConditionResult = (pairAnswers) => {
    const answer = car(pairAnswers);
    const correctAnswer = cdr(pairAnswers);
    const logic = correctAnswer === answer;
    const result = cons(logic, pairAnswers);
    return result;
}