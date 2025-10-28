/*
Q1: Stock Market Volatility (Fixed-Size Window)You are tracking the daily gains/losses of a stock. You want to find the 3-day window that had the highest net gain.Input Array ($A$): [1, 5, 2, 7, 8, 1, 6]Window Size ($K$): 3Task: Find the maximum sum of any contiguous subarray of size 3.
*/

function findMaxSubArray(arr, k) {
  const N = arr?.length;
  let maxValue = 0;

  for (let i = 0; i < k; i++) {
    maxValue += arr[i];
  }

  let currentValue = 0;

  for (let i = k; i < N; i++) {
    currentValue = maxValue + arr[i] - arr[i - k];
    maxValue = Math.max(currentValue, maxValue);
  }

  return maxValue;
}

console.log(findMaxSubArray([1, 5, 2, 7, 8, 1, 6], 3));
