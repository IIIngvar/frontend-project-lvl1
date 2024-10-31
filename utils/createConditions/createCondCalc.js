import { createCalcString } from "../createStrings/createCalcString.js"

export const createCondCalc = (data) => {
    const stringExpression = createCalcString(data);
    return eval(stringExpression)
}