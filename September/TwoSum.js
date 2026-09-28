function TwoSum(nums, target) {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashmap[complement] !== undefined) {
      // complement exists — return both indices
      return [hashmap[complement], i];
    }

    // complement not found — store current number
    hashmap[nums[i]] = i;
  }
}

console.log(TwoSum((nums = [4, 5, 6]), (target = 10)));
