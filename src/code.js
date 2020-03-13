
// implement an autocomplete function
// dictionary: ['aha', 'foo', 'bar', 'ahoo', 'fish']
// input 'ah'
// output: aha ahoo
//
// input 'f'
// output: foo fish

import TreeNode from "./TreeNode";
import TreeUtils from "./treeUtils";

const dictionary = ["aha", "foo", "bar", "ahoo", "fish"];
// const dictionary = ["aha", "ahoo"];

let root = new TreeNode('');



// Insert dictionary into tree structure
dictionary.forEach((e) => {
    let currNode = root; // set current pointer to root
    let chars = e.split('');
    // insert every letter into tree
    chars.forEach((c) => {
        currNode = TreeUtils.insertIntoSubTree(c, currNode);
    });
});

function dfs(node) {
    if (node.childNodes.length === 0) {
        console.log(node.data);
        return node.data;
    }
    
    node.childNodes.forEach((child) => {
        // return this.dfs(child) + ' ' + node.data;
        return node.data + ' ' + dfs(child);
    });
}

console.log(root);
// use pre-order traversal to parse tree
// root node is a blank, so begin traversal a level below root
var letters = ""
root.childNodes.forEach((node) => {
    letters = TreeUtils.dfs(node);
});

console.log("letters: " + letters);


// process user input

