// Let's see how much of a potterhead you are

// importing the module
var readlineSync = require('readline-sync');

// importing chalk. IMP: In replit, change the version to 4 instead of 5. 5 is not working right now
var chalk = require('chalk');


// questions and answers
var q1 = {
    question: 'Voldemort\'s full original name? ',
    answer: 'tom marvolo riddle'
};

var q2 = {
    question: 'Arthur Weasely was married to whom? (First name only) ',
    answer: 'molly'
};

var q3 = {
    question: 'Most famous journalist in the magic world? ',
    answer: 'rita skeeter'
};

var q4 = {
    question: 'Mother of Albus Dumbledore? (First name only) ',
    answer: 'kendra'
};

var q5 = {
    question: 'How many brothers of Ginny? ',
    answer: '6' // to avoid conflict later
};

// level 2 questions
var q6 = {
    question: 'Father of Draco Malfoy? First name only ',
    answer: 'lucius'
};

var q7 = {
    question: 'Who killed Nagini? ',
    answer: 'neville'
};

var q8 = {
    question: '"Always" is the famous uttering of which character? Full name. ',
    answer: 'severus snape'
};

// level 3 questions
var q9 = {
    question: 'The house of the cleverest folks: ',
    options: ['Gryffindor','Hufflepuff', 'Ravenclaw', 'Slytherin'],
    answer: 2 // since index starts from 0
};

var q10 = {
    question: 'Animagus of Sirius Black: ',
    options: ['cat','wolf','rat','dog'],
    answer: 3
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
        var askUser = readlineSync.question(chalk.blue(array[i].question));
        console.log('\n');
        if (askUser.toLowerCase() === array[i].answer) {
            score += 3;
        } else {
            score -= 1;
        }
        console.log(chalk.bold(`Points Scored: ${score}\n`));
    }
    return score;
}

// introducing a new function for different question type
function multipleChoice(array, scr = 0) {
    var score = scr;
    for (var i = 0; i < array.length; i++){
        var mcq = readlineSync.keyInSelect(array[i].options, array[i].question, {cancel:false});
        console.log('\n');
        if (mcq === array[i].answer) {
            score += 3;
        } else {
            score -= 1;
        };
        console.log(chalk.bold(`Points Scored: ${score}\n`));
    }
    return score;
}

function harryPotter() {
    // asking username since I plan to use it at places
    var userName = readlineSync.question(chalk.bold('Enter your name: '));
    console.log('\n');
    console.log(chalk.red.bold('Rules:\n1. Cheating is allowed\n2. Focus on spellings\n3. Correct: 3 points, Incorrect: -1 points\n4. Press Enter after answering'));
    console.log('\n');
    console.log(chalk.bold('Let\'s see what you can do', chalk.italic(userName)));
    console.log('\n');
    // the main loop for question
    //var scoreLevelOne = loopingOverArray(levelOne);
    var cumulativeScore = loopingOverArray(levelOne);

    if (cumulativeScore === 15) {
        console.log(chalk.green.bold('\nWohooo! You made it to the Second Level!!\n'));
        var cumulativeScore = loopingOverArray(levelTwo,cumulativeScore);
        if (cumulativeScore === 9) {
            console.log(chalk.green.bold('\nDamn good potterhead! Keep Going! Level three is waiting for you!!'));
            var cumulativeScore = multipleChoice(levelThree,cumulativeScore);
        } 
    }

    var fScore = cumulativeScore;

    // logging score basis user performance wrt highest score
    if (fScore > hScore[0]) {
        console.log(chalk.bgGreen.bold(`${userName}!!!! You have beaten the highest score. Your final score is ${fScore}. Send me the screenshot!`));
    } else {
        console.log(chalk.bgRed.bold(`${userName}, you have scored ${fScore} points.`));
    };
};

harryPotter();


// https://neog.camp/guide/lesson-one