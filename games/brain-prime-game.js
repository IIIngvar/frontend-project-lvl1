import { cons } from '@hexlet/pairs';
import userName from '../cli.js';
import getConditionResult from '../utils/getConditionResult.js';
import getRandomInt from '../utils/createData/getRandomInt.js';
import repeatableQuestion from '../index.js';
import checkIsPrime from '../utils/checkIsPrime.js';
import identity from '../utils/identity.js';
import { prevTextBrainPrime } from '../constants/previousMessageTexts.js';
import returnCorrectAnswerCond from '../utils/returnCorrectAnswerCond.js';

const brainPrimeGame = () => repeatableQuestion(
  prevTextBrainPrime,
  getRandomInt,
  identity,
  identity,
  (data, answer) => getConditionResult(cons(answer, returnCorrectAnswerCond(checkIsPrime(data)))),
  userName(),
);
export default brainPrimeGame;
