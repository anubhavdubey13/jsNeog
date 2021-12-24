import { msgLeap } from './leapYear.js';
// need to add name input

var elementGoButton = document.querySelector('#btn-leapCheck');

var elementBirthday = document.querySelector('#bday');

var elementOutput = document.querySelector('#output');


function callback(){
    console.log('I got clicked, babes!');
    elementGoButton.style.backgroundColor = "white";
    elementGoButton.style.color = "blueviolet";

    var inputBirthday = elementBirthday.value;
    console.log(`Birth date is ${inputBirthday}`); // format: yyyy-mm-dd

    var inputYear = parseInt(inputBirthday.substring(0,4));
    console.log(`Birth year is ${inputYear}`, 'Type:', typeof inputYear);

    elementOutput.innerText = msgLeap(inputYear);
    //var outputResult = elementOutput.value;
    //console.log(outputResult);
};

function clear(){
    elementOutput.innerText = '';
    elementGoButton.style.backgroundColor = "blueviolet";
    elementGoButton.style.color = "white";
}
elementGoButton.addEventListener('click', callback);
elementBirthday.addEventListener('click', clear);