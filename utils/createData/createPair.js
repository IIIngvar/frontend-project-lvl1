import { cons } from '@hexlet/pairs';
import getRandomInt from './getRandomInt.js';

const createPair = () => cons(getRandomInt(), getRandomInt());
export default createPair;
