/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxDepth = function(root) {
    var result = [1];
    //if there is no root, return a depth of 0
    if (!root) {
	    return 0;
    }

    //declare a recursive function which takes a node as a parameter
    var measureBranches = function (node, position) {
    	// if the right node isn't null 
    	if (node.right !== null) {
    		if (result[position] === undefined) {
				result[position] = (result[position - 1] + 1);
			}	
    		// recurse on that node
    		measureBranches(node.right, position + 1);
    	}

    	// if the left node isn't null
    	if (node.left !== null) {
    		if (result[position] === undefined) {
    			result[position] = (result[position - 1] + 1);
    		}
    		// recurse on that node
    		measureBranches(node.left, position + 1);
    	}
	}

    //start the recursive function passing in the root node
    measureBranches(root, 1);

    //return the largest value in the array (should be the last)
    // its the same as the result length + 1, lol
    return result[result.length - 1];
};


