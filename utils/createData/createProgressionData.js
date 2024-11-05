import { cons } from '@hexlet/pairs';
import getRandomInt from './getRandomInt.js';
const createProgressionData = () => {
  const progressionLength = getRandomInt(6) + 5;
  const startElem = getRandomInt();
  const progressionIncrement = getRandomInt(4) + 1;
  const hiddenElemIndex = getRandomInt(progressionLength);
  const progressionArr = [startElem];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArr.push(progressionArr[i] + progressionIncrement);
  }
  const hiddenElem = progressionArr[hiddenElemIndex];
  progressionArr[hiddenElemIndex] = '..';
  const progressionData = cons(progressionArr, hiddenElem);
  return progressionData;
};
export default createProgressionData;
