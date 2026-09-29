/**
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
 */

function twoSum(n, target) {
  //  3 things I can use is map, set or array right but the things is to check we if it exists we use set(boolean), count use map
  // use set?

  const exist = new Map();
  const numberNeeded = exist.set(target - n[0], 0);

  for (let i = 1; i < n.length; i++) {
    // check if the number exists
    if (exist.has(n[i])) {
      return [exist.get(n[i]), i];
    }
    const newNumberNeeded = target - n[i];

    exist.set(newNumberNeeded, i);
  }

  return -1;
}

console.log(twoSum((nums = [4, 5, 6]), (target = 10)));
console.log(twoSum(nums = [5,5], target = 10))