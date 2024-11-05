import { cons } from '@hexlet/pairs';
import createCalcOperator from './createCalcOperator.js';
import createPair from './createPair.js';

const createCalcData = () => cons(createPair(), createCalcOperator());
export default createCalcData;
