function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const neededNumber = target - nums[i];
    if (map.has(neededNumber)) {
      return [ map.get(neededNumber), i ];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([3, 4, 5, 6], 7));
