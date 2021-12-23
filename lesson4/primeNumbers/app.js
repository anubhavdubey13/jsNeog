import { primePrint } from "./primeNumber.js";

var inputDate = document.getElementById('birthdate');
var submit = document.getElementById('btn-submit');
var output = document.getElementById('isPrime');

var birthDay = parseInt(inputDate.value.substr(-2));

function callback() {
    console.log('click success');
    //console.log(inputDate.value, output);
    //console.log(birthDay);
    output.innerText = primePrint(birthDay);
}

submit.addEventListener('click', callback);