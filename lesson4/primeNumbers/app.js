import { primePrint } from "./primeNumber.js";

var inputDate = document.getElementById('birthdate');
var submit = document.getElementById('btn-submit');
var output = document.getElementById('isPrime');


function callback() {
    console.log('click success');
    //console.log(inputDate.value, output);
    var birthDay = parseInt(inputDate.value.substr(-2));
    //console.log(birthDay);
    output.innerText = primePrint(birthDay);
}

function clear(){
    output.innerText = '';
}

submit.addEventListener('click', callback);
inputDate.addEventListener('click',clear);