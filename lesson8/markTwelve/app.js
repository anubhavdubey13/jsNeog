// Mad Angles
var angleOne = document.querySelector('#angleOne');
var angleTwo = document.querySelector('#angleTwo');
var angleThree = document.querySelector('#angleThree');
var angleSubmit = document.querySelector('#angleSubmit');
var angleValid = document.querySelector('#angleValid');

function madAngles(){
    var a1 = Number(angleOne.value);
    var a2 = Number(angleTwo.value);
    var a3 = Number(angleThree.value);
    if (a1 && a2 && a3){
        if ((a1+a2+a3)===180){
            return 'Triangle will be formed';
        } else {
            return 'Triangle won\'t be formed';
        }
    } else {
        return 'Enter all three angles';
    }
}

function callbackAngle(){
    //console.log('Angle clicked');
    angleValid.innerHTML = madAngles();
}

angleSubmit.addEventListener('click', callbackAngle);

// Hypotenuse
var sideOne = document.getElementById('sideOne');
var sideTwo = document.getElementById('sideTwo');
var hypotenuseSubmit = document.getElementById('hypotenuseSubmit');
var hypotenuseOutput = document.getElementById('hypotenuseOutput');

function hypotenuse(){
    var s1 = Number(sideOne.value);
    var s2 = Number(sideTwo.value);
    if (s1 && s2) {
        var hyp = Math.round(Math.sqrt(s1**2 + s2**2)*100)/100;
        return hyp;
    } else {
        return 'Enter both sides';
    }
}

function callbackHypo(){
    //console.log('Clicked Hypotenuse');
    hypotenuseOutput.innerHTML = hypotenuse();
}

hypotenuseSubmit.addEventListener('click', callbackHypo);