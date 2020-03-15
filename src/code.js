
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
//document.getElementById("textoutput").appendChild(textnode);

document.addEventListener("keydown", (e) => {
    setTimeout(() => {
        if (document.activeElement === inputEl) {
            //console.log("keydown event : " + inputEl.value);
            var predictions = root.predictWord(inputEl.value);
            var displayPredictions = predictions.join('<BR>');
            document.getElementById("textoutput").innerHTML = displayPredictions;
        }
    }, 10);
});

