// A CLI App to check if user born in a leap year

// importing readline sync
var readlineSync = require('readline-sync');

// importing chalk. IMP: In replit, change the version to 4 instead of 5. 5 is not working right now
var chalk = require('chalk');

// valid format check
function isValidFormat(year){
    var validFormat = /^\d{2}-\d{2}-\d{4}$/;
    if (year.match(validFormat)){
        return true;
    } else {
        return false;
    }
};

// leap year calculator function
function leapYearCheck(year){
    var iVF = isValidFormat(year);
    if (iVF) {
        if (year%100 === 0) {
            if (year%400 === 0) {
                return true;
            } else {
                return false;
            }
        } else if (year%4 === 0){
            return true;
        } else {
            return false;
        }
    } else {
        console.log(chalk.red.bold.bgWhite("Invalid Input Format!! Kindly try again."));
        break;
    }
    
};

// getting birthday in a format & extracting the year
// replit is a beauty
function yourBirthday(){
    console.log(chalk.bold.blue('Input your birthday in "dd-mm-yyyy" format.'));
    console.log(chalk.bold.blue('If you were born on 14 Jan 2001, enter 14-01-2001'));
    var userBirthday = readlineSync.question();
    var yearOfBirth = userBirthday.substr(-4);
    return yearOfBirth; 
};

// final app
function leap(){
    var userName = readlineSync.question(chalk.bold('Naam kya hai tumhara? What\'s your name?'));
    console.log(chalk.bold('Welcome,', userName, '!'));
    var year = yourBirthday();
    var leapYear = leapYearCheck(year);
    if (leapYear) {
        console.log(chalk.bold(`Woah, ${userName}! You were born in a leap year. Share it on Social Media!`));
    } else {
        console.log(chalk.bold(`${userName}, 75% of extra-ordinary people are born in non-leap year! You are one of them. Share on your socials!`));
    };
};

// final call
leap();

/*create a CLI app to check whether user was born in a leap year.

Ask user her name
Ask her Date of Birth (give her a format prompt)
Calculate and show her whether it's a leap year or not.
If yes, ask her to share this on social media
Chalk to make it beautiful
Bonus (Optional) : check the input type and show an error if user entered "potato" instead of a date format*/