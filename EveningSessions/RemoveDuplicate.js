var removeDuplicates = function (nums) {
  const N = nums?.length;
  if (N == 0) return 0;

  let i = 0;
  for (let j = 1; j < N; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i+1;
};

console.log(removeDuplicates([1, 1, 2]));
// removeDuplicates([0,0,1,1,1,2,2,3,3,4]);


[6,8,11,1]

[1,2,3,4,5,5,5,7]

4>0