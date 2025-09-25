const oddNumber = (arr) => {
  const hashObj = {};
  arr.map((data) => (hashObj[data] = hashObj[data] ? hashObj[data] + 1 : 1));

  for (const key in hashObj) {
    if (hashObj[key] !== 3) {
      // To find a true 'odd' frequency
      return parseInt(key); // Convert the key (which is a string) back to a number
    }
  }
};

console.log(oddNumber([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]))
