/*
Blind 75 — Top K Frequent Elements (LeetCode 347)

Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

Example:
  nums = [1,1,1,2,2,3], k = 2  →  [1, 2]

Approach (Idea B — sort by count):
  1. Count how many times each number appears (use a Map)
  2. Turn the Map into an array of [num, count] pairs
  3. Sort the pairs by count, high → low
  4. Take the first k numbers
*/

const topKFrequent = (nums, k) => {
  // Step 1: count frequencies
  const freq = new Map();
  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }

  // Step 2: Map → array of [num, count] pairs

  const newArr = [...freq];
  // console.log(newArr)

  // Step 3: sort by count (high → low)

  newArr.sort((a, b) => b[1] - a[1]);
  // return newArr;

  // Step 4: take the first k numbers and return them
  return newArr.slice(0, k).map((pair) => pair[0]); // I like this syntax.
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([4, 4, -1, -1, -1, 7], 1)); // [-1]
