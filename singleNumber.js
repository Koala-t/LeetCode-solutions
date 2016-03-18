/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //make a storage object
    var storage = {};

    //iterate through the input array
    for (var i = 0; i < nums.length; i++){
      var number = nums[i];
      // if the storage object does not have a key with the name of the iteratee
      if (!storage.hasOwnProperty('' + number)) {
        // add a key to the storage object which equals the number and assign it's value to the number
        storage[number] = number;
      }
      // otherwise 
      else {
        // remove the key-value pair from the object
        delete storage[number]; 
      }
    }
    //return the value of the only property left in the object
    for (var num in storage) {
        return storage[num];
    }
};