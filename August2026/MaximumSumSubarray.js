function maxSubarray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// console.log(maxSubarray((arr = [2, 1, 5, 1, 3, 2]), (k = 3)));
console.log(maxSubarray(nums = [2,-3,4,-2,2,1,-1,4]))
console.log(maxSubarray(nums = [-1]))
