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
