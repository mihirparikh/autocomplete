
// implement an autocomplete function
import RootNode from "./rootNode";
import {Dictionary} from "./dictionary";

console.log("Dictionary length: " + Dictionary.length);

// maybe tree should be represented by its own class..
let root = new RootNode(null);

// Insert dictionary into tree
Dictionary.forEach((word) => {
    root.addWord(word);
});

// root.showDictionary();

// process user input
var inputEl = document.getElementById("textinput");
const outputBlock = document.getElementById('textoutput');
const zeroState = '<div id="zerospan"><span>Begin Typing...</span><br></div>';

function removeElementById(id) {
    let elem = document.getElementById(id);
    if (elem) {
        elem.parentNode.removeChild(elem);
    }
}

// future proof
var wordSelectHandler = (payload) => {
    // console.log("selected : " + payload);
    inputEl.focus();
    inputEl.value = payload;
    inputHandler(25);
};

function inputHandler(pause) {
    pause = pause || 25; // 25ms by default

    setTimeout(() => {    
        if (document.activeElement === inputEl) { 
            if (inputEl.value.length) {
                // lowercase all input
                let inputVal = inputEl.value;
                inputVal = inputVal + ''; // coerce to string
                inputVal = inputVal.toLowerCase();

                var predictions = root.predictWord(inputVal);

                removeElementById('zerospan'); // remove zerostate node
                removeElementById('innerdiv'); // remove prior innerdiv
                
                // new innerdiv
                const innerDiv = document.createElement('DIV');
                innerDiv.id = "innerdiv";
            
                let wordCount = '<span id="wordcount">Word Count: ' + predictions.length + '</span><br>';
                innerDiv.insertAdjacentHTML('afterbegin', wordCount);
                outputBlock.appendChild(innerDiv);

                if (predictions.length > 0) {   
                    predictions.forEach((word) => {
                        let span = document.createElement('SPAN');
                        span.innerHTML = word;
                        span.id = word;
                        span.style.cursor = "pointer";
                        span.onclick = function() {
                            wordSelectHandler(word);
                        }
                        innerDiv.insertAdjacentElement('beforeend', span);
                        innerDiv.insertAdjacentHTML('beforeend', '<br>');
                    });     
                }
            } else {
                // when input field is blank, go back to zero message
                removeElementById('innerdiv');
                outputBlock.innerHTML = zeroState;
            }
        }
    }, pause);
}

// keypress event
document.addEventListener("keydown", (e) => {
    // console.log("keydown event: " + e.key);
    inputHandler(25);
});
