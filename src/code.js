
// implement an autocomplete function
// dictionary: ['aha', 'foo', 'bar', 'ahoo', 'fish']
// input 'ah'
// output: aha ahoo
//
// input 'f'
// output: foo fish

import RootNode from "./rootNode";
import { notDeepEqual } from "assert";

const dictionary = ["aha", "foo", "bar", "ahoo", "fish"];

// maybe tree should be represented by its own class..
let root = new RootNode(null);

// Insert dictionary into tree
dictionary.forEach((word) => {
    root.addWord(word);
});

root.showDictionary();

// process user input
var inputEl = document.getElementById("textinput");
//document.getElementById("textoutput").appendChild(textnode);

document.addEventListener("keydown", (e) => {
    setTimeout(() => {
        if (document.activeElement === inputEl) {
            //console.log("keydown event : " + inputEl.value);
            var predictions = root.predictWord(inputEl.value);
            var displayPredictions = predictions.join(' ');
            document.getElementById("textoutput").innerHTML = displayPredictions;
        }
    }, 25);
});

