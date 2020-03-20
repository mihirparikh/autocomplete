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

    // predictive guidance
    predictWord(string) {
        const matchingWords = [];

        // match characters to find the sub-tree
        var getSubTree = (partWord, tree) => {
            var node = tree;
            let match = node.childNodes.hasOwnProperty(partWord[0]);
            while (partWord && match) {
                node = node.childNodes[partWord[0]];
                partWord = partWord.substr(1);
            }
            return (match) ? node : null;
        };
    
        // use partial entries to construct array of suggested words
        const parseDictionary = (subString, subTree) => {
            Object.values(subTree.childNodes).forEach((child) => {
                var str = subString + child.data;
                if (child.endOfWord) {
                    matchingWords.push(str);
                }
                parseDictionary(str, child);
            });
        };
    
        var subTree = getSubTree(string, this);
        // look for words only if subTree is not at root
        if (subTree) {
            // if already at word boundry add to the hint array
            if (subTree.endOfWord) {
                matchingWords.push(string);
            }
            // check if there are other matching words in the tree
            parseDictionary(string, subTree);
        } else {
            return [];
        }
    
        return matchingWords;
    }

    // debug output to show the enitre dictionary
    showDictionary(str) {
        console.log(this.predictWord(''));
    }
}

export default RootNode;