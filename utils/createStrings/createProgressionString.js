import { car } from '@hexlet/pairs';
const createProgressionString = (data) => String(car(data)).split(',').join(' ');
export default createProgressionString;
