import { car } from "@hexlet/pairs";

export const createProgressionString = (data) => String(car(data)).split(',').join(' ');

