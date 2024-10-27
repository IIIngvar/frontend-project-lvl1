import readlineSync from 'readline-sync';

export const repeatableQuestion = (initText, functionData, conditionFunction, name, countOfMaxRounds = 3) => {
    let countOfRounds = 0;
    console.log(initText);
    while(countOfRounds < countOfMaxRounds) {
        const questionData = functionData();
        console.log(`Question: ${questionData}`);
        const answer = readlineSync.question('Your answer: ');
        if(conditionFunction(questionData, answer)) {
            console.log('Correct!');
            countOfRounds++;
        } else {
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }
    if(countOfRounds === countOfMaxRounds) {
        console.log(`Congratulations, ${name}!`);
    }
}