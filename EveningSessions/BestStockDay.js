function maxProfit(prices) {
    if (!prices || prices.length < 2) {
        return 0;
    }

    // 1. Initialize variables:
    // minPrice must start high to be correctly updated by the first element.
    let minPrice = prices[0]; 
    
    // maxProfit starts at 0 (the default if no profit is possible).
    let maxProfit = 0; 

    // 2. Iterate through the array starting from the second element (Day 1)
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        // Step 1: Calculate Profit for today
        // If we bought at the minPrice seen so far, what is the profit today?
        const currentProfit = currentPrice - minPrice;

        // Step 2: Update Max Profit
        // Record the best profit found across all days.
        maxProfit = Math.max(maxProfit, currentProfit);

        // Step 3: Update Min Price for future days
        // If today's price is a new low, update our best potential buy price.
        // NOTE: This MUST happen AFTER calculating the profit for today.
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
}

console.log(`Max Profit for [7, 1, 5, 3, 6, 4]: ${maxProfit([7, 1, 5, 3, 6, 4])}`); // Output: 5
console.log(`Max Profit for [7, 6, 4, 3, 1]: ${maxProfit([7, 6, 4, 3, 1])}`); // Output: 0
