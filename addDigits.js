var addDigits = function(num) {
    //stringify the input number
    var numString = '' + num;
    // make an array of digits out of the stringified number
    var digits = numString.split('');
    // declare a result variable and set it to a value greater than 10
    var result = 100;
    // declare a recursive function
    var addition = function () { 	
      //base case
      // if the result is less than 10
      if (result < 10) {
        //return the result
      	return result;
      } 
      //recursive case
      // reset result to 0
      result = 0;
      // iterate through the digits array
      for (var i = 0; i < digits.length; i++) {
      	var digit = digits[i];
        // use parseInt to change the strings into numbers and add them to result
      	result += parseInt(digit);
      }
      // reassign numString to a stringified version of result
      numString = '' + result;
      // reassign digits to an array of the new numString
      digits = numString.split('')
      //call addition
      return addition()
    }
    //call addition
    return addition();
};