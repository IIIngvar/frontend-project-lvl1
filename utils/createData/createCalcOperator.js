import { getRandomInt } from "./getRandomInt.js"

export const createCalcOperator = () => {
    const operCount = getRandomInt(3);
    switch(operCount){
        case 0: 
            return "+";
        case 1: 
            return "-";
        case 2: 
            return "*";
    }
};