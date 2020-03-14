// represents the root node with instance method to add words
import TreeNode from "./treeNode";

class RootNode extends TreeNode {
    constructor() {
        super(null); // instantiate a root node with a null string;
    }
    
    // method to add words at the root
    /* public */
    addWord(word) {
        // add letters of the word
        /*private */ 
        const addLetters = function (node, substring) {
            // first letter is key in of childNodes map
            const firstLetter = substring[0];
            if (!node.childNodes.hasOwnProperty(firstLetter)) {
                node.childNodes[firstLetter] = new TreeNode(firstLetter, (substring.length === 1));
            } /* else do nothing */

            // if not end of the word yet, make a recursive call
            if (substring.length > 1) {
                let remainder = substring.slice(1); // eject char that's already inserted
                addLetters(node.childNodes[firstLetter], remainder);
            }
        }

        addLetters(this, word);
    }
}

export default RootNode;