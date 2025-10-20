// single-pass optimization
// Track the Minimum" pattern

/* 
TODO: You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

? Example: Input: prices = [7,6,4,3,1]
*/

function BestDay(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices?.length; i++) {
    let currentProfit = prices[i] - minPrice;
    console.log('This is is i, ', i);
    console.log('Thsi is currentProfit',currentProfit)
    maxProfit = Math.max(currentProfit, maxProfit);
    console.log('This is maxProfit', maxProfit);
    minPrice = Math.min(currentProfit, minPrice);
    console.log('This is minPrice', minPrice);

  }

  return maxProfit;
}
console.log(BestDay([7,6,4,3,1]))
