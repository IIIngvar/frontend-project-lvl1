import readlineSync from 'readline-sync';

export const userName = () => {
    const greeting = 'Welcome to the Brain Games!';
    console.log(greeting);
    
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    return name; 
}