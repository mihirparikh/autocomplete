
// implement an autocomplete function
// dictionary: ['aha', 'foo', 'bar', 'ahoo', 'fish']
// input 'ah'
// output: aha ahoo
//
// input 'f'
// output: foo fish

// import TreeNode from "./TreeNode";
// import TreeUtils from "./treeUtils";
import RootNode from "./rootNode";

// const dictionary = ["aha", "foo", "bar", "ahoo", "fish"];
const dictionary = ["aha", "bar", "ahoo"];
// const dictionary = ["aha"];

// maybe tree should be represented by its own class..
let root = new RootNode(null);

// Insert dictionary into tree
dictionary.forEach((word) => {
    root.addWord(word);
});

console.log(root);

// // use pre-order traversal to parse tree
// // root node is a blank, so begin traversal a level below root
// var letters = ""
// root.childNodes.forEach((node) => {
//     TreeUtils.dft(node);
// });

// process user input

