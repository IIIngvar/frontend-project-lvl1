import { cons } from '@hexlet/pairs';
import userName from '../cli.js';
import repeatableQuestion from '../index.js';
import createProgressionData from '../utils/createData/createProgressionData.js';
import createProgressionString from '../utils/createStrings/createProgressionString.js';
import createCondProg from '../utils/createConditions/createCondProg.js';
import getConditionResult from '../utils/getConditionResult.js';
import { previousTextBrainProgression } from '../constants/previousMessageTexts.js';

const brainProgressionGame = () => repeatableQuestion(
  previousTextBrainProgression,
  createProgressionData,
  createProgressionString,
  createCondProg,
  (data, answer) => getConditionResult(cons(answer, String(data))),
  userName(),
);
export default brainProgressionGame;
