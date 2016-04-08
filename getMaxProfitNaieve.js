// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// example:
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

var getMaxProfit = function(priceArray) {
	var copyArray = priceArray.slice(0);
	var maxProfit = -Infinity;
	var lowestPrice = Infinity;
	var highestPrice = -Infinity;
	var lowestIndex, profit;

	var recurse = function() {

		copyArray.forEach(function(price) {
			// find the lowest value in the array
			if (price < lowestPrice) {
				lowestPrice = price;
			}
		})
		// find the highest value in the array which comes after the lowest value
		lowestIndex = copyArray.indexOf(lowestPrice);
		// make sure the lowest price isn't the last price
		for (var i = lowestIndex; i < copyArray.length; i++) {
			highestPrice = Math.max(copyArray[i], highestPrice);
			
		}	
		profit = highestPrice - lowestPrice;
		maxProfit = Math.max(profit, maxProfit);
		
		//	find the next lowest value in the array...
		copyArray.splice(lowestIndex, 1);
		if (copyArray.length > 0) {
			recurse();
		}
	}
	recurse();

	return maxProfit;
}