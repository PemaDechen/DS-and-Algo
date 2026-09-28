class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    //! Brute Force
    // function multiply(l, r, arr) {
    //   // multiply numbers;
    //   let res = 1;
    //   for (let i = l; i <= r; i++) {
    //     res *= nums[i];
    //   }
    //   return res;
    // }
    // let totalMultiply = [];
    // let leftMultiply = 1;
    // let rightMultiply = 1;
    // for (let i = 0; i < nums.length; i++) {
    //   if (i == 0) {
    //     leftMultiply = 1;
    //   } else {
    //     leftMultiply = multiply(0, i - 1);
    //   }
    //   if (i == nums.length - 1) {
    //     rightMultiply = 1;
    //   } else {
    //     rightMultiply = multiply(i + 1, nums.length - 1);
    //   }
    //   totalMultiply.push(leftMultiply * rightMultiply);
    // }
    // return totalMultiply;
    // ! Tried Optimised version
    // ! Unoptimised and TLE
    // So, I am thinking prefix sum like
    /**
     * Like finding product for all numbers and dividing with the index's value??
     * But what if it is Zero when it is zero we cannot it==divide it with 0
     * What if there is one zero we tend to make the entire multiplication Zero
     */
    // Trying with the above approach
    // let totalMultiply = 1;
    // for (let i = 0; i < nums.length; i++) {
    //   if (nums[i] !== 0) {
    //     totalMultiply *= nums[i];
    //   }
    // }
    // // Real solution
    // let res = [];
    // for(let i =0;i<nums.length; i++){
    //     if(nums[i]===0){
    //         res.push(totalMultiply);
    //     }else{
    //         res.push(totalMultiply/nums[i]);
    //     }
    // }
    // return res;
    // !Final Optimised solution

    const left = [];
    left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
      left[i] = left[i - 1] * nums[i - 1];
    }
    console.log("this is left ", left);
    const right = [];
    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
      right[i] = right[i + 1] * nums[i + 1];
    }
    console.log('This is right ', right)
    const output = [];
    for (let i = 0; i < nums.length; i++) {
      output[i] = left[i] * right[i];
    }
    return output;
  }
}

const s = new Solution();
console.log(s.productExceptSelf((nums = [1, 2, 4, 6])));
