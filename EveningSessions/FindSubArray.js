const findSubArray = (nums) => {
  if (nums.length < 2) return false;
  let sum = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] + nums[i + 1];
    if (arr.includes(sum)) {
      return true;
    }
    arr.push(sum);
  }
  return false;
};

console.log(
  findSubArray([
    77, 95, 90, 98, 8, 100, 88, 96, 6, 40, 86, 56, 98, 96, 40, 52, 30, 33, 97,
    72, 54, 15, 33, 77, 78, 8, 21, 47, 99, 48,
  ])
);
