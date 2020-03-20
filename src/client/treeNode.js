// Define a tree node

class TreeNode {
    constructor(data, endOfWord) {
        this.data = data;
        this.childNodes = [];
        this.endOfWord = (typeof endOfWord == 'undefined') ? null : endOfWord;
    }
}

export default TreeNode;