function maxMinSubArray(arr) {
  // FirstFindMinimumAndMaximumValue
  let max = -Infinity;
  let min = +Infinity;
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  console.log('This is min ', min);
  console.log('This is max ', max);
}


maxMinSubArray([1, 3, 2, 4, 1, 5, 2, 6]) 