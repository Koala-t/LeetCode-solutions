// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// p is the root node of one tree 
// q is the root node of another
var isSameTree = function(p, q) {
	var bool = true;
	var traverse = function (pNode, qNode) {
	   	// if one node value doesn't equal the other
	   	if (pNode === null || qNode === null || pNode.val !== qNode.val) {
	    	//return false
	   		return bool = false;
	   	}
	    // if one of the trees has a left node
	    if (pNode.left !== null || qNode.left !== null) {
	    	// recurse on the left nodes
	    	traverse(pNode.left, qNode.left);
	    }
	    // if one of the trees has a right node
	    if (pNode.right !== null || qNode.right !== null) {
	    	// traverse on the right nodes
	    	traverse(pNode.right, qNode.right);
	    }
	}
    traverse(p, q);
    return bool;
};