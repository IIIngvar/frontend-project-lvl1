import { cdr } from "@hexlet/pairs"

export const createCondProg = (data) => {
    const hidden = cdr(data);
    return hidden;
}