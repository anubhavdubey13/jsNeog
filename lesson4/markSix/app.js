var inputText = document.querySelector('#txt-area');
var pushButton = document.querySelector('#btn-push');
var output = document.querySelector('#output');

var newURL = 'https://api.funtranslations.com/translate/minion.json'

function errorHandler(err){
    console.log('Error!');
    alert('Server error! Try again later.');
}

function someAPI(url, txt){
    var fullURL = url + '?text=' + txt;
    return fetch(fullURL)
        .then(response => response.json())
        .then(json => {var final = json.contents.translated;
            output.innerText=final;})
        .catch(errorHandler);
        
}

function callback(){
    console.log('Click success!');
    //console.log('Input text:', inputText);
    //console.log(inputText.value);
    //output.innerText = inputText.value;
    someAPI(newURL, inputText.value);
}

function clear(){
    output.innerText='';
    inputText.value = '';
}

pushButton.addEventListener('click', callback);
inputText.addEventListener('click', clear);