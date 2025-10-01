const BestTimeToBuyOrSell = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;
    console.log("Prices", prices);
    for (let price of prices) {
      if (price < minPrice) {
        minPrice = price;
      } else {
        maxProfit = Math.max(maxProfit, price - minPrice);
        console.log("price - minPrice", price - minPrice);
        console.log("price", price);
        console.log("minPrice", minPrice);
        console.log("This is maxProfit inside loop", maxProfit);
        console.log("This is price", price);
      }
    }

    console.log("This is maxProfit", maxProfit);
    return maxProfit;

//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let price of prices) {
//     if (price < minPrice) {
//       minPrice = price;
//     } else {
//       maxProfit = Math.max(maxProfit, price - minPrice);
//     }
//   }

//   return maxProfit;
};

// // console.log(BestTimeToBuyOrSell([7,1,5,3,6,4]));
console.log(BestTimeToBuyOrSell([7, 6, 4, 3, 1]));
