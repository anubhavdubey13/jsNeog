// https://neog.camp/guide/lesson-four

// ex02: using javascript
// challenge
// 1.use external JS
// 2.show prompt to get user data
//var userName = prompt('What\'s your name?');

// 3.show alert box to give user output
//alert(`${userName}, welcome to the matrix!`);

// ex03: wiring button click
// challenge
// 1.create a button in html - DONE
// 2.reference Button using querySelector()
//var elementButton = document.querySelector('#btn-to-click');
// 3.add event listener to button
// 4.console "clicked" on click.
//const callback = () => console.log('clicked');
//elementButton.addEventListener('click', callback);

// ex04: wiring textarea input
// challenge
// 1.put a textarea input tag. - DONE
// 2.reference that in javascript.
//var elementTextarea = document.querySelector('#txt-area');
// 3. read the value of the tag. You can do this only inside event. There are two events which you can listen to
// 3.i.onchange on textarea, we will learn this method in next class while doing React
// 3.ii.onclick on button, let's do this now.
// 4.console this value to complete the exercise. refresh and try few more times.
//var elementButton = document.querySelector('#btn-to-click');
/*const callback = () => {
    var inputText = elementTextarea.value;
    console.log('Mission Successful!', `Input text is ${inputText}`);
    elementOutput.innerText = inputText;
}*/

//elementButton.addEventListener('click', callback);

// ex05: wire a div to show output
// challenge
// 1.create an output div - DONE
// 2.reference it in js
//var elementOutput = document.querySelector('#output');
// 3.use innerText to write to this div dynamically when button click happens - DONE ABOVE


// ex06: call a mock server (from Postman) - DONE

// ex07: call a mock server (from JS) - DONE
function testApp(url1, text) {
    var userInput = url + '?text=' + text;
    return fetch(userInput)
    .then(response => response.json())
    .then(json => console.log(json))}

// ex09: wire fetch call in app
// challenge
// 1.move the fetch call to fire when button clicked
// 2.parse the data from the output.
// 3.update the output from .then() of the fetch call

// ex10: error handling

var htmlTextarea = document.querySelector('#txt-area');
var htmlButton = document.querySelector('#btn-to-click');
var htmlOutput = document.querySelector('#output');

var tanayServerURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

function errorHandler(error) {
    console.log('Error detected', error);
    alert('Something wrong with the server! Try again after some time.');
}

function fetchIt(url, code) {
    var userInput = url + '?text=' + code;
    return fetch(userInput)
            .then(response => response.json())
            .then(json => {
                var output = json.contents.translated;
                htmlOutput.innerText = output;
            })
            .catch(errorHandler);
}

// ex11: replace the mock url

// https://funtranslations.com/
var minionAPI = 'https://api.funtranslations.com/translate/minion.json';
var encoded_url = encodeURI(minionAPI)

function callback() {
    //htmlOutput.innerText = htmlTextarea.value;
    //console.log('success', htmlTextarea.value);
    fetchIt(encoded_url, htmlTextarea.value);
}

htmlButton.addEventListener('click',callback);

// unsure about encodeURI