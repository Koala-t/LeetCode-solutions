/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/



var moveZeroes = function(nums) {
	var numZeroes = 0;
	var zeroPositions = [];

	// find the locations of the zeroes
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			numZeroes++;
			zeroPositions.unshift(i);
		}
	}

	//remove the zeroes
	for (var j = 0; j < zeroPositions.length; j++) {
		nums.splice(zeroPositions[j], 1);
	}

	// add new zeroes to the end
	for (var k = 0; k < numZeroes; k++) {
		nums.push(0);
	}    

	return nums;
};