var inputDate = document.querySelector('#date');
var inputNum = document.querySelector('#lucky-number');
var buttonSubmit = document.querySelector('#btn-submit');
var luckOutput = document.querySelector('#textOutput');

// values
// idk why but this causes trouble
/*var dateWithHyphen = inputDate.value;
var luckyNum = inputNum.value;*/

// handler for num=0

//var dateWOHyphen = date.replaceAll('-','');

// function for input validation
// tried multiple ways but this isn't just working
// it was because of storing inputs here
/*function inputVal(date, num){
    if(!(date && num )){
        console.log('Missing input(s)!!!');
    } else {
        console.log('chill');
    }
};*/

function valDate(dob){
    if(!Date.parse(dob)){
        return false;
    } else {
        return true;
    }
}

function valNum(num){
    if(!(num)){
        return false;
    }
    return true;
}

function sumDig(dig){
    var sumOfDig=0;
    for(var i=0; i<dig.length; i++){
        sumOfDig += Number(dig[i]);
    }
    return sumOfDig;
}

function isDivisible(numerator, denominator){
    if((numerator%denominator) === 0){
        return true;
    }
    return false;
}

function isBirthdayLucky(dob, num){
    //console.log(valDate(dob), valNum(num));
    if(valDate(dob) && valNum(num)){
        var dateFinal = dob.replaceAll('-','');
        //console.log(dateFinal);
        var numerator = sumDig(dateFinal);
        //console.log(numerator);
        //console.log(isDivisible(numerator, num));
        var isLucky = isDivisible(numerator, num);
        if(isLucky){
            return 'Lucky!';
        } else {
            return 'Make your own!';
        }
    } else {
        // replace by innerHTML for output
        //console.log('didnt work');
        return 'Enter both fields :/';
    }
}

function callback(){
    //console.log('Date:', inputDate.value, 'Lucky Number:', inputNum.value);
    //inputVal(dateWithHyphen, luckyNum);
    //console.log(valDate(inputDate.value));
    //console.log(valNum(inputNum.value));
    //inputVal(inputDate.value, inputNum.value);
    luckOutput.innerHTML = isBirthdayLucky(inputDate.value, inputNum.value);
}

buttonSubmit.addEventListener('click', callback);