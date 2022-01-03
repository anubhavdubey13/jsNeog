var inputText = document.querySelector('.inputText');
var button = document.querySelector('#btn-translate');
var output = document.querySelector('#output-translated');

//var tanayURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';
var shakesURL = 'https://api.funtranslations.com/translate/shakespeare.json';

function errorHandler(error){
    console.log('Something wrong!', error);
    alert('Server error! Please try again after some time.');
};

function translator(url, text){
    var full = url + '?text=' + text;
    var translation = fetch(full)
                        .then(response => response.json())
                        .then(json => {
                            var translated = json.contents.translated;
                            output.innerText = translated;
                        })
                        .catch(errorHandler);
    return translation;
};

function callback(){
    //console.log('Button Clicked!')
    translator(shakesURL, inputText.value);
};

function clear(){
    inputText.value = '';
};

button.onclick = callback;
inputText.onclick = clear;
