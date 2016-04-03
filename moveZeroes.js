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
	nums.forEach(function(number, index) {
		if (number === 0) {
			numZeroes++;
			zeroPositions.unshift(index);
		}
	}) 

	//remove the zeroes
	zeroPositions.forEach(function(position) {
		nums.splice(position, 1);		
	})

	// add new zeroes to the end
	for (var i = 0; i < numZeroes; i++) {
		nums.push(0);
	}    

	//return the transformed array;
	return nums;
};