// Check if User Birthday is a Prime Number

// importing the module
var readlineSync = require('readline-sync');

// Disclaimer: I am not gonna build a function that determines a number to prime. Would have loved to. may be some other day

// array of prime number
var primeNumbers = [2,3,5,7,11,13,17,19,23,29,31];

// function which iterates through the array; returns true if there is a match
function isPrime(num) {
    for (var i=0; i < primeNumbers.length; i++){
        if (primeNumbers[i] === num) {
            return true;
        }
    }
    return false;
};

// testing function:
// isPrime(16);

// function to take inputs
function takeInput() {
    // asking for name
    var userName = readlineSync.question('What\'s your name, homie? ');
    // Enter your birthday
    console.log('\n');
    var birthday = readlineSync.question(`Hi ${userName}, enter your birthday in the format: dd-mm\nIf you are born on 1 Jan, type 01-01\n`);
    if (isValidFormat(birthday)){
        return [userName, birthday.substr(0,2)];
    } else {
        console.log('Ooops! Wrong input format. Try again!');
        takeInput();
    }
};

// checking input validity: 1. dd-mm, 2. 01 <= dd <= 31, 3. 01 <= mm <= 12 (Not considering: 4. combo of months)
function isValidFormat(birthday){
    var validFormat = /^\d{2}-\d{2}$/;
    if (birthday.match(validFormat)){
        if ((birthday.substr(0,2) >= 1) & (birthday.substr(0,2) <= 31) & (birthday.substr(3) >= 1) & (birthday.substr(3) <= 12)){
            return true;
        }
    } 
    return false;
};  

// final function
function bornPrime(){
    var [name, day] = takeInput();
    if (isPrime(parseInt(day))) {
        console.log(`You were born on a prime day, ${name}! Share it on your socials!`);
    } else {
        console.log(`${name}, you were born on a composite day!! Share it on your socials!`);
    }
};

bornPrime()




/* create a CLI app to check whether user's birthday is a prime number.

Ask user her name
Ask her Date of Birth
This time ask only DD/MM and don't take year
Calculate and show her whether it's a prime number or not.
If yes, ask her to share this on social media */