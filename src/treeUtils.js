// class with static utility methods

import TreeNode from "./treeNode";

class TreeUtils {
    // insert node into the sub-tree starting at currNode
    static insertIntoSubTree(char, subTree) {
        let found = subTree.childNodes.find(node => node.data === char);
        if (found === undefined) {
            var newNode = new TreeNode(char);
            subTree.childNodes.push(newNode);
            console.log("added " + newNode.data);
            return newNode; 
        }
        return found;
    }

    static dfs(node) {
        if (node.childNodes.length === 0) {
            console.log(node.data);
            return node.data;
        }
        
        node.childNodes.forEach((child) => {
            // return this.dfs(child) + ' ' + node.data;
            return node.data + ' ' + this.dfs(child);
        });
    }
}

export default TreeUtils;