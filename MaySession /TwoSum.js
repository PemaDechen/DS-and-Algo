const TwoSum = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (obj.hasOwnProperty(difference)) {
      return [obj[difference], i];
    }

    obj[nums[i]] = i;
  }
  return [];
};

console.log(TwoSum((nums = [4, 5, 6]), (target = 10)));
// console.log(TwoSum((nums = [5, 5]), (target = 10)));
