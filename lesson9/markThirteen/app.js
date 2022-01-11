// function to reverse a string
function reverseString(stringInput){
    // split
    var charArr = stringInput.split('');
    // reverse
    var reverseArr = charArr.reverse();
    // join
    return reverseArr.join('');
}

// palindrome check
function isPalindrome(stringInput){
    //console.log(stringInput,reverseString(stringInput));
    return (stringInput === reverseString(stringInput));
}

// variation of date
function dateFormats(dateInput){
    var dateNoHyphen = dateInput.replaceAll('-','');
    var dateDay = dateNoHyphen.substring(6);
    var dateMonth = dateNoHyphen.substring(4,6);
    var dateYear = dateNoHyphen.substring(0,4);
    var dateYearShort = dateYear.substring(2);
    var allDateArr = [];
    allDateArr.push(dateDay+dateMonth+dateYear, dateMonth+dateDay+dateYear,
        dateYear+dateMonth+dateDay, dateDay+dateMonth+dateYearShort,
        dateMonth+dateDay+dateYearShort, dateYearShort+dateMonth+dateDay); 
    // DD-MM-YYYY// MM-DD-YYYY// YYYY-MM-DD// DD-MM-YY// MM-DD-YY// YY-MM-DD
    return allDateArr;
}

// check palindrome for all
function bdayPalindrome(dateArr){
    var palinArr = dateArr.map(element => isPalindrome(element));
    //console.log('true' in palinArr);
    return (palinArr.includes(true));
}

// variables

var submit = document.getElementById('submitBirthday');
var output = document.getElementById('outputPalindrome');

// final function
function finalReturn(){
    var birthday = document.getElementById('inputBirthday');
    var birthdayFormattedArr = dateFormats(birthday.value);
    var finalAnswer = bdayPalindrome(birthdayFormattedArr);
    //console.log(birthdayFormattedArr);
    return finalAnswer;
}


// callback
function callback(){
    //console.log('clicked');
    var tellMe = finalReturn();
    if(tellMe){
        output.innerText = 'Yes';
    } else {
        output.innerText = 'No';
    }
}

submit.addEventListener('click', callback);