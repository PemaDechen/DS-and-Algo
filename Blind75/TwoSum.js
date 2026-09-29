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

function twoSum(nums, target) {
  //  3 things I can use is map, set or array right but the things is to check we if it exists we use set(boolean), count use map
  // use set?

  const exist = new Map();

  for (let i = 0; i < nums.length; i++) {
    // check if the number exists
    if (exist.has(nums[i])) {
      return [exist.get(nums[i]), i];
    }
    const newNumberNeeded = target - nums[i];

    exist.set(newNumberNeeded, i);
  }

  return [];
}

console.log(twoSum([4, 5, 6], 10));
console.log(twoSum([5, 5], 10));
