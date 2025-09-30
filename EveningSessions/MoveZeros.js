const moveZeroes = (nums) => {
  const N = nums?.length;
  let numbersOfZeros = 0;
  let i = 0;
  while (i < N ) {
    if (nums[i] == 0) {
      numbersOfZeros += 1;
      nums = [...nums.slice(0, i), ...nums.slice(i + 1)];
    } else {
      i++;
    }
  }
  for (let i = 0; i < numbersOfZeros; i++) {
    nums.push(0);
  }
  console.log(nums);
};

moveZeroes([0,1,0,3,12]);

