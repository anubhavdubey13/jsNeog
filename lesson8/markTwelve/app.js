// display functionality
var angles = document.querySelector('.angles');
angles.style.display='none';
var quiz = document.querySelector('.quiz');
quiz.style.display='none';
var hypotenuse = document.querySelector('.hypotenuse');
hypotenuse.style.display='none';
var area = document.querySelector('.area');
area.style.display='none';

var funAngles = document.querySelector('#funAngles');
var funQuiz = document.querySelector('#funQuiz');
var funHypotenuse = document.querySelector('#funHypotenuse');
var funArea = document.querySelector('#funArea');

funAngles.addEventListener('click', ()=>{
    angles.style.display="block";
    quiz.style.display='none';
    hypotenuse.style.display='none';
    area.style.display='none';
});

funQuiz.addEventListener('click', ()=>{
    angles.style.display="none";
    quiz.style.display='block';
    hypotenuse.style.display='none';
    area.style.display='none';
});

funHypotenuse.addEventListener('click', ()=>{
    angles.style.display="none";
    quiz.style.display='none';
    hypotenuse.style.display='block';
    area.style.display='none';
});

funArea.addEventListener('click', ()=>{
    angles.style.display="none";
    quiz.style.display='none';
    hypotenuse.style.display='none';
    area.style.display='block';
});

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


// Quiz // error in the logic here. will revisit with a clear head
var formQuiz = document.getElementById('quiz');
var quizSubmit = document.getElementById('quizSubmit');
var quizOutput = document.getElementById('quizOutput');

var correctAnswers = ["90","bh/2"];

function callbackQuiz(){
    var index=0;
    var score=0;
    var fD = new FormData(formQuiz);
    //console.log(fD.values());
    for(let value of fD.values()){
        console.log(value);
        console.log(fD.values().length);
        if(value === correctAnswers[index]){
            score += 1;
        }
        index += 1;
    }
    //console.log('clicked');
    quizOutput.innerText = score;
}

quizSubmit.addEventListener('click', callbackQuiz);

// Hypotenuse
var sideOne = document.getElementById('sideOne');
var sideTwo = document.getElementById('sideTwo');
var hypotenuseSubmit = document.getElementById('hypotenuseSubmit');
var hypotenuseOutput = document.getElementById('hypotenuseOutput');

function hypotenuseFunction(){
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
    hypotenuseOutput.innerHTML = hypotenuseFunction();
}

hypotenuseSubmit.addEventListener('click', callbackHypo);

// area of triangle
var base = document.getElementById('base');
var height = document.getElementById('height');
var areaSubmit = document.getElementById('areaSubmit');
var areaOutput = document.getElementById('areaOutput');

function areaTriangle(){
    var b = Number(base.value);
    var h = Number(height.value);
    if (b && h){
        var ar = 0.5*b*h;
        var finalSentence = `${ar} sq. cm`;
        return finalSentence;
    } else {
        return 'Enter both fields';
    }
}

function callbackArea(){
    //console.log('Clicked ARea');
    areaOutput.innerHTML = areaTriangle();
}

areaSubmit.addEventListener('click', callbackArea);