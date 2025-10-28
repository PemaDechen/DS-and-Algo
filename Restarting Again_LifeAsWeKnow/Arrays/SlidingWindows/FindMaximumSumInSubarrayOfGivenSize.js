function findMaxSum(arr, k) {
  const N = arr?.length;

  // 1st Brute force find the sum of 1st kth Numbers
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  let newSum = 0;
  let maxValue = currentSum;

  newSum = currentSum;
  for (let i = 0; i < N; i++) {
    newSum = newSum - arr[i] + arr[k];
    k += 1;

    if (newSum > maxValue) {
      maxValue = newSum;
    }
  }
  return maxValue;
}

console.log(findMaxSum((A = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]), (K = 3)));
