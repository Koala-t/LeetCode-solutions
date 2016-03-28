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
    // I could also refactor this by setting a max-variable to 1
    // If I pass in 1 as the second parameter I can increment the second parameter on each iteration
    // and if the second parameter gets larger than the max
    // reset the max to equal the new parameter value
    // returning max at the end
    // I won't do this because I would rather spend the time studying
    
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


