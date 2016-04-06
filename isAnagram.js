// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.



var isAnagram = function(s, t) {
    var storage = {};

    // populate storage with the numbers of letters in s
    for (var i = 0; i < s.length; i++) {
    	var letter = s[i];
    	if (storage.hasOwnProperty(letter)) {
    		storage[letter]++;
    	} else {
    		storage[letter] = 1;
    	}
    }

    // reduce the value of properties in storage
    for (var i = 0; i < t.length; i++) {
    	var letter = t[i];
    	if (storage.hasOwnProperty(letter)) {
    		storage[letter]--;
    		// if the property value reaches 0
    		if (storage[letter] === 0) {
    			// delete the property
    			delete storage[letter];
    		}
    	} else {
    		return false;
    	}
    }
    // if storage !== {}
    for (var letter in storage) {
    	if (letter) {
    		return false;
    	} 
    }
    // return true if the input strings are anagrams
    return true;
};