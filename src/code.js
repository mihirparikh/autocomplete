
// implement an autocomplete function
import RootNode from "./rootNode";
// import { notDeepEqual } from "assert";
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
const zeroState = '<span>Begin Typing..</span>';
document.getElementById("textoutput").innerHTML = zeroState;

// keypress event
document.addEventListener("keydown", (e) => {
    setTimeout(() => {    
        if (document.activeElement === inputEl) {
            var predictions = root.predictWord(inputEl.value);
            let displayPredictions = zeroState;
            if (inputEl.value.length) {
                displayPredictions = "Word Count: " + predictions.length + "<BR>"; 
                if (predictions.length > 0) {
                    displayPredictions += predictions.join('<BR>');          
                }
            } else {
                displayPredictions = zeroState;
            }
            document.getElementById("textoutput").innerHTML = displayPredictions;
        }
    }, 10);
});

