const frequentK = (nums, k) => {
  const obj = {};
  const arr = [];
  for (let ele of nums) {
    obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
  }

  const sortedKeys = Object.entries(obj)
    .sort((a, b) => b[1] - a[1]) // sort by value descending
    .map(([key]) => key); // extract only the keys

  console.log(sortedKeys); // [ 'e', 'c', 'a', 'b', 'd' ]
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(+sortedKeys[i]);
  }
  return result;
};

// console.log(frequentK((nums = nums = [1, 2, 2, 3, 3, 3]), (k = 2)));
// console.log(frequentK((nums = nums = [1, 1, 1, 2, 2, 3]), (k = 2)));
console.log(frequentK((nums = nums = [1, 2]), (k = 2)));
