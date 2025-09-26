let profit = 0, hold = 0 - prices[0];

    for (let index = 1; index < prices.length; index++) {
        const currentPrice = prices[index];

        profit = Math.max(profit, currentPrice + hold);
        hold = Math.max(hold, 0 - currentPrice);
    }

    return profit;