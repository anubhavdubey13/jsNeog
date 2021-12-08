// Lesson 1

// Ex1: Output your name
console.log('Hi! My name is Anubhav');

//====================================================================

// Ex2: Read the name of your user
// Ex3: Welcome your user
// Ex4: Do it all together

// importing the required module
var readlineSync = require('readline-sync');
// asking user for the name
var userName = readlineSync.question('Namaste! What\'s your name?');
// logging it
console.log('Welcome to the matrix, ' + userName);

//=====================================================================

// Ex5: Print right/wrong if age greater than 25
// Version 1
// asking user for age and storing it in a variable
var userAge = readlineSync.question('What\'s my age sweetheart?');
// wrong or right
if (userAge > 25) {
    console.log('Galat baat!');
} else {
    console.log('I already like you.')
};
// Version 2
var impQuestion = readlineSync.question('Is my age greater than 25? Type yes or no.');
// right/wrong
if (impQuestion.toLowerCase() === 'yes') {
    console.log('WTH!!!!!! How can you be so wrong?');
} else {
    console.log('Bahaut khoob!');
};

//=====================================================================

// Ex6: Increment score if the right answer
// initialize score variable
var score = 0;
// question for the user
var myHomeQuestion = readlineSync.question('Where is my home? Hint: Facebook');
// check & increment
if (myHomeQuestion.toLowerCase() === 'metaverse') {
    score += 1;
};
console.log('Your score is:', score);

//=====================================================================

// Ex7: Function to add two numbers
function add(a,b) {
    return (a+b);
};

add(2,3);

//=====================================================================

// Ex8: Function to check the answer
// initialize score
var scr = 0;
// define question and answer
var q = 'Melody itni chocolatey kyu hoti hai?';
var a = 'kuch bhi';

// function takes in question & right answer. compares with user answer. increments score if right
function qA(question, answer) {
    var askUser = readlineSync.question(question);
    if (askUser.toLowerCase() === answer) {
        scr += 1;
        console.log('Right! Well done.');
    } else {
        console.log('Better luck next time.')
    }
    console.log('Your score is:', scr);
};

qA(q,a);

//=====================================================================

// Ex9: Print your name 5 times
// BONUS (optional): Print the number with your name
var myName = 'Anubhav';
for (var i = 0; i < 5; i++){
    console.log(`Iteration: ${i}. Name: ${myName}`);
};

//=====================================================================

// Homework: star pattern
for (var i = 0; i < 5; i++){
    var star_pat = '';
    for (var j = 0; j < i+1; j++){
        star_pat += '*';
    }
    console.log(star_pat);
};

// Bonus: Inverted pattern
for (var i = 0; i < 5; i++){
    var inv_star = '';
    for (var j = 0; j < 5 - i; j++){
        inv_star += '*';
    }
    console.log(inv_star);
};

//=====================================================================

// Ex10: List grocery items to buy
var groceryItems = ['aloo','chawal','daal','tel','namak'];
// printing 1st, 3rd, 5th item
console.log('First Item:', groceryItems[0], 'Third Item:', groceryItems[2], 'Fifth Item:', groceryItems[4]);

//=====================================================================

// Ex11: Print every item on the list
for(var i = 0; i < groceryItems.length; i++){
    console.log('Item Number', i+1, 'is', groceryItems[i]);
};

//=====================================================================

// Ex12: Club info about a superhero together
var superman = {
    power: 500,
    IQ: 300,
    EQ: 800,
    origin: 'Alien'
};

var batman = {
    power: 100,
    IQ: 700,
    EQ: 400,
    origin: 'Earth'
};

//=====================================================================

// Ex13: Put a list of questions together
questionOne = {
    question: "Who is my favorite superhero?",
    answer: "Bob"
  }
  
  questionTwo = {
    question: "Which is my favorite sad song?",
    answer: "Deep Learning"
  }

//=====================================================================

// Ex14: Club everything to make the game
// Ex15: Print the final score to the user
var quizScore = 0;
var arrayQuestions = [questionOne, questionTwo];
var highestScore = [2];

function quiz(){
    for (var i = 0; i < arrayQuestions.length; i++){
        var userPrompt = readlineSync.question(arrayQuestions[i].question);
        if (userPrompt.toLowerCase() === arrayQuestions[i].answer) {
            score += 3;
        } else {
            score -= 1;
        };
    };
    if (quizScore > highestScore) {
        console.log(`Your final score is ${quizScore}. You have beaten the highest score. Send us the screenshot.`);
    } else {
        console.log(`Your final score is ${quizScore}. The highest score is ${highestScore[0]}`);   
    }
};

quiz();

//continue: https://neog.camp/guide/lesson-one