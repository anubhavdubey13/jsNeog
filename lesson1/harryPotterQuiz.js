// Let's see how much of a potterhead you are

// importing the module
var readlineSync = require('readline-sync');

// questions and answers
var q1 = {
    question: 'Voldemort\'s full original name?',
    answer: 'tom marvolo riddle'
};

var q2 = {
    question: 'Arthur Weasely was married to whom? (First name only)',
    answer: 'molly'
};

var q3 = {
    question: 'Most famous journalist in the magic world?',
    answer: 'rita skeeter'
};

var q4 = {
    question: 'Mother of Albus Dumbledore? (First name only)',
    answer: 'kendra'
};

var q5 = {
    question: 'How many brothers of Ginny?',
    answer: '6' // to avoid conflict later
};

// Quiz Version 1

// creating an array of all questions
var levelOne = [q1, q2, q3, q4, q5];

// initializing score
var score = 0;

// Highest score array
var hScore = [11];

function harryPotter() {
    // asking username since I plan to use it at places
    var userName = readlineSync.question('Enter your name');
    console.log('Let\'s see what you can do', userName);
    // the main loop for question
    for (var i = 0; i < levelOne.length; i++){
        var askUser = readlineSync.question(levelOne[i].question);
        if (askUser.toLowerCase() === levelOne[i].answer) {
            score += 3;
        } else {
            score -= 1;
        }
    }
    // logging score basis user performance wrt highest score
    if (score > hScore[0]) {
        console.log(`${userName}!!!! You have beaten the highest score. Your final score is ${score}. Send me the screenshot!`);
    } else {
        console.log(`${userName}, you have scored ${score} points.`);
    };
};

harryPotter();

// Add-ons
/*
1. Levels
2. Readlinesync extra functions
3. Use chalk
https://neog.camp/guide/lesson-one
*/