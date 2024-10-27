import readlineSync from 'readline-sync';

export const userName = () => {
    const greeting = 'Welcome to the Brain Games!';
    console.log(greeting);
    
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    return name; 
}

export const getRandomInt = (max = 100) => {
    return Math.floor(Math.random() * max)
    // for brain-even
}

const nameOfUser = userName()

export const repeatableQuestion = (initText, functionData, conditionFunction, countOfMaxRounds = 3, name = nameOfUser) => {
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