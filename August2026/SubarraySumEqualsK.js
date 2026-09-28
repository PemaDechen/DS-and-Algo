function subarraySum(arr, k) {
  let runningSum = 0;
  let count = 0;
  let map = { 0: 1 };
  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i];
    if (map[runningSum - k]) {
      count += map[runningSum - k];
    }
    map[runningSum] = (map[runningSum] || 0) + 1;
  }
  return count;
}
console.log(subarraySum([1, 2, 3], 3)); // should be 2
console.log(subarraySum([1, 1, 1], 2)); // should be 2
console.log(subarraySum([3], 3));        // should be 1