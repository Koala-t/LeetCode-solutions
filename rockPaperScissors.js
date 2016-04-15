 /*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

// declare the function
var rockPaperScissors = function (rounds) {
	// declare the possible choices for a single round
	var choices = ['rock', 'paper', 'scissors'];
	var allCombos = [];

	// declare a recursive function
	var makeCombos = function(roundsLeft, comboSoFar) {
		// set comboSoFar equal to itself or if it is undefined, set it to an empty array
		comboSoFar = comboSoFar || [];
		// once we have reached the desired number of rounds
		if (roundsLeft === 0) {
			// save the comboSoFar in the allCombos array
			allCombos.push(comboSoFar);
			// end the recursion
			return;
		}
		// iterate through the choices array
		choices.forEach(function(choice){
			// invoke the recursive function reducing the number of rounds left and adding the iteratee to comboSoFar
			makeCombos(roundsLeft - 1, comboSoFar.concat(choice));
		});
	}
	// invoke the recursive function passing in the number of rounds
	makeCombos(rounds);
	// return all the combos
	return allCombos;
}


























=======
var rockPaperScissors = function (
) {
  // TODO: your solution here
  return true;
};
>>>>>>> 48348b84224829cebe495bd0433fb035dd5d13fe
