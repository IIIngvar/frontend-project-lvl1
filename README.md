[![Maintainability](https://api.codeclimate.com/v1/badges/d79827d051b325ec4ba0/maintainability)](https://codeclimate.com/github/IIIngvar/frontend-project-lvl1/maintainability)

# Игры разума  
## Описание  
Проект является набором из нескольких консольных игр, запускаемых в командной строке (Windiws) или терминале (для Linux, MacOS, и прочих UNIX-подобных ОС).  
***
## Требования  
Для работы с данным проектом необходимо иметь установленные свежие версии Git и NodeJS.
***
## Инструкции по установке и использованию:  
* Клонировать данный репозиторий на локальный ПК  
* В командной строке (терминале) выполнить команду *npm install*. Далее будут установлены необходимые пакеты. После установки пакетов проект полностью готов к работе.  
___
### Примеры использования (аскинемы):  
___
#### brain-games:  
##### Цель игры - ввести имя.  
IIIngvar:brain-games $ brain-games  
Welcome to the Brain Games!  
May I have your name? IIIngvar  
Hello, IIIngvar!  
IIIngvar:brain-games $ logout  
___
#### brain-even:  
##### Цель игры - ответить правильно три раза подряд верно на вопрос, чётное ли число.  
###### успешное прохождение:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-even  
May I have your name? IIIngvar  
Hello, IIIngvar!  
Answer 'yes' if number even otherwise answer 'no'.  
Question: 82  
Your answer: yes  
Correct!  
Question: 35  
Your answer: no  
Correct!  
Question: 13  
Your answer: no  
Correct!  
Congratulations, IIIngvar!  
IIIngvar:brain-games $ logout  
###### прохождение с ошибкой:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-even  
May I have your name? IIIngvar  
Hello, IIIngvar!  
Answer 'yes' if number even otherwise answer 'no'.  
Question: 44  
Your answer: no  
'no' is wrong answer ;(. Correct answer was 'yes'.  
Let's try again, IIIngvar!  
IIIngvar:brain-games $ logout  
___
#### brain-calc:  
##### Цель игры - три раза подряд дать правильный результат математического выражения.  
###### успешное прохождение:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-calc  
Welcome to the Brain Games!  
May I have your name? IIIngvar  
Hello, IIIngvar!  
What is the result of the expression?  
Question: 3 + 92  
Your answer: 95  
Correct!  
Question: 4 * 15  
Your answer: 60  
Correct!  
Question: 39 - 5  
Your answer: 34  
Correct!  
Congratulations, IIIngvar!  
IIIngvar:brain-games $ logout  
###### прохождение с ошибкой:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-calc  
Welcome to the Brain Games!  
May I have your name? IIIngvar  
Hello, IIIngvar!  
What is the result of the expression?  
Question: 34 * 83  
Your answer: I don't know  
'I don't know' is wrong answer ;(. Correct answer was '2822'.  
Let's try again, IIIngvar!  
IIIngvar:brain-games $ logout  
___
#### brain-gcd:  
##### Цель игры - три раза подряд правильно найти НОД (наименьший общий делитель) случайной пары целых чисел.  
###### успешное прохождение:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-gcd  
Welcome to the Brain Games!  
May I have your name? IIIngvar  
Hello, IIIngvar!  
Find the greatest common divisor of given numbers.  
Question: 55 15  
Your answer: 5  
Correct!  
Question: 76 77  
Your answer: 1  
Correct!  
Question: 10 10  
Your answer: 10  
Correct!  
Congratulations, IIIngvar!  
IIIngvar:brain-games $ logout  
###### прохождение с ошибкой:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-gcd  
Welcome to the Brain Games!  
May I have your name? IIIngvar  
Hello, IIIngvar!  
Find the greatest common divisor of given numbers.  
Question: 44 4  
Your answer: 11  
'11' is wrong answer ;(. Correct answer was '4'.  
Let's try again, IIIngvar!  
IIIngvar:brain-games $ logout  
___
#### brain-progression:  
##### Цель игры - три раза подряд правильно найти недостающий элемент арифетической прогрессии.  
##### #успешное прохождение:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-progression  
Welcome to the Brain Games!  
May I have your name? IIIngvar  
Hello, IIIngvar!  
What number is missing in this progression?  
Question: 3 4 5 6 7 8 9 ..  
Your answer: 10  
Correct!  
Question: 2 4 6 .. 10 12 14 16 18 20  
Your answer: 8  
Correct!  
Question: 51 55 .. 63 67 71 75  
Your answer: 59  
Correct!  
Congratulations, IIIngvar!  
IIIngvar:brain-games $ logout  
###### прохождение с ошибкой:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-progression  
Welcome to the Brain Games!  
May I have your name? IIIngvar  
Hello, IIIngvar!  
Question: 20 23 .. 29 32 35 38 41 44 47 50  
Your answer: 26  
Correct!  
Congratulations, IIIngvar!  
'11' is wrong answer ;(. Correct answer was '4'.  
Let's try again, IIIngvar!  
IIIngvar:brain-games $ logout  
___
#### brain-prime:  
##### Цель игры - ответить правильно три раза верно на вопрос, простое ли число.  
###### успешное прохождение:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-prime  
May I have your name? IIIngvar  
Hello, IIIngvar!  
Answer 'yes' if given number is prime. Otherwise answer 'no'.  
Question: 13  
Your answer: yes  
Correct!  
Question: 85  
Your answer: no  
Correct!  
Question: 5  
Your answer: yes  
Correct!  
Congratulations, IIIngvar!  
IIIngvar:brain-games $ logout  
###### прохождение с ошибкой:  
IIIngvar:brain-games $  
IIIngvar:brain-games $ brain-prime  
May I have your name? IIIngvar  
Hello, IIIngvar!  
Answer 'yes' if given number is prime. Otherwise answer 'no'.  
Question: 90  
Your answer: yes  
'yes' is wrong answer ;(. Correct answer was 'no'.  
Let's try again, IIIngvar!  
IIIngvar:brain-games $ logout  