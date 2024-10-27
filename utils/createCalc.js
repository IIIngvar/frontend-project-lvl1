import { getRandomInt } from "./getRandomInt.js";

export const createCalc = () => {
    const a = getRandomInt();
    const b = getRandomInt();
    const operCount = getRandomInt(3);
    let operator;
    switch(operCount) {
        case 0:
            operator = '+';
            break;
        case 1: 
            operator = '-';
            break;
        case 2: 
            operator = '*';
            break;
    }
    const exp = `${a}${operator}${b}`

    return exp
};