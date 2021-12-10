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

// level 2 questions
var q6 = {
    question: 'Father of Draco Malfoy? First name only',
    answer: 'lucius'
};

var q7 = {
    question: 'Who killed Nagini?',
    answer: 'neville'
};

var q8 = {
    question: '"Always" is the famous uttering of which character? Full name.',
    answer: 'severus snape'
};

// level 3 questions
var q9 = {
    question: 'The house of the cleverest folks:',
    answer: 'ravenclaw'
};

var q10 = {
    question: 'Animagus of Sirius Black:',
    answer: 'dog'
};

// Quiz Version 2

// creating an array of all questions
var levelOne = [q1, q2, q3, q4, q5];

var levelTwo = [q6, q7, q8];

var levelThree = [q9, q10];

// initializing score
//var score = 0; // removing global initialization to avoid confusion.

// Highest score array
var hScore = [11];

// function to handle different arrays for the same loop structure
function loopingOverArray(array, scr = 0) {
    var score = scr;
    for (var i = 0; i < array.length; i++){
        var askUser = readlineSync.question(array[i].question);
        console.log('\n');
        if (askUser.toLowerCase() === array[i].answer) {
            score += 3;
        } else {
            score -= 1;
        }
        console.log(`Points Scored: ${score}\n`);
    }
    return score;
}

function harryPotter() {
    // asking username since I plan to use it at places
    var userName = readlineSync.question('Enter your name');
    console.log('Let\'s see what you can do', userName);
    // the main loop for question
    var scoreLevelOne = Math.max(loopingOverArray(levelOne), 0);

    if (scoreLevelOne === 15) {
        console.log('\nWohooo! You made it to the Second Level!!\n');
        var scoreLevelTwo = Math.max(loopingOverArray(levelTwo), 0);
        if (scoreLevelTwo === 9) {
            console.log('\nDamn good potterhead! Keep Going! Level three is waiting for you!!');
            var scoreLevelThree = Math.max(loopingOverArray(levelThree), 0);
        } 
    }

    var fScore = scoreLevelOne + scoreLevelTwo + scoreLevelThree;

    // logging score basis user performance wrt highest score
    if (fScore > hScore[0]) {
        console.log(`${userName}!!!! You have beaten the highest score. Your final score is ${fScore}. Send me the screenshot!`);
    } else {
        console.log(`${userName}, you have scored ${fScore} points.`);
    };
};

harryPotter();

// Add-ons
/*
2. Readlinesync extra functions
3. Use chalk
https://neog.camp/guide/lesson-one
*/