/*
You are monitoring energy usage (deposits/spikes) in a building. You want to find the 4-hour window that had the lowest net energy consumption (i.e., the minimum sum).Input Array ($A$): [10, -5, 2, -10, 8, 1, 4]Window Size ($K$): 4 */

function minimumEnergyUsage(arr, k) {
  const N = arr?.length;
  let minValue = 0;

  for (let i = 0; i < k; i++) {
    minValue += arr[i];
  }

  let currentValue = 0;

  for (let i = k; i < N; i++) {
    console.log('This is i ', i);
    console.log('This is minValue ', minValue);
    currentValue = minValue + arr[i] - arr[i - k];
    console.log('This is currentValue ', currentValue);
    minValue = Math.min(currentValue, minValue);
    console.log('This is minValue ', minValue);
    console.log('******************************************************'); 
  }

  return minValue;
}

console.log(minimumEnergyUsage([10, -5, 2, -10, 8, 1, 4], 4));
