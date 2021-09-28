var input = document.querySelector('#input');
var btnTranslate = document.querySelector('#btn-translate');
var output = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function getTranslation(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("Something wrong with the server try again after someitme.")
}

function clickHandler() {
    var textInput = input.value;
    fetch(getTranslation(textInput))
        .then(response => response.json())
        .then(json => {
            var outputText = json.contents.translated;
            output.innerText = outputText;
        })
        .catch(errorHandler);

}

addEventListener("click", clickHandler);