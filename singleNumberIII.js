// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// For example:

// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

// input: array of nums
// output: array of 2 nums

var singleNumber = function(nums) {
   var storage = {};
   var result = [];

   nums.forEach(function(number) {
     if (storage[number] || storage[number] === 0) {
     	delete(storage[number]);
     } else {
     	storage[number] = number;
     }
   })

   for (property in storage) {
     result.push(storage[property]);
   }
   return result;
};