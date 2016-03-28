/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var newTree = {}

    var inversion = function (fromNode, toNode) {
    	
    	// make a tree node
    	toNode.val = fromNode.val;
    	toNode.right = null;
    	toNode.left = null;
    	
    	// if theres another right node in the input tree
    	if (fromNode.right !== null) {
    		// give the new tree a left node
    		toNode.left = {};
    		// recurse so that the val from the input-tree's right-node-value 
    		// winds up in the new-tree's left-node-value
    		inversion(fromNode.right, toNode.left);
    	}

    	// repeat for the left node of the input tree
    	if (fromNode.left !== null) {
    		toNode.right = {};
    		inversion(fromNode.left, toNode.right);
    	}

    }

    inversion(root, newTree);

    // return the new tree
    return newTree;
};