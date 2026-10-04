/**
 * Given an numsay of integers nums and an integer k, return the number of pairs (i, j) with i < j such that nums[i] + nums[j] == k.

nums = [1, 2, 3, 2, 4], k = 5   →   2
 */

/**
 * 
Finding Edge Cases
Give me two or three. For each one, say what the answer should be. 
(Think about an empty array, repeated numbers, negative numbers, or a number paired with itself.)

if()
 */

function countPairs(nums, k) {
  let count = 0;

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has( k - nums[i])) {
      count += map.get(k- nums[i]);
    }
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  return count;
}

console.log(countPairs([1, 2, 3, 2, 4, 6], 5));
console.log(countPairs([1, 1, 4, 4], 5));
console.log(countPairs([], 5));
console.log(countPairs([-1, 2, 3, 2, 4,6], 5));
console.log(countPairs(nums = [3,1,3,4,3], k = 6))
