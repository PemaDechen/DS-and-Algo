function minMax(arr) {
  const N = arr.length;

  if (N == 0) return { min: undefined, max: undefined };
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < N; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return { min, max };
}

console.log(minMax([]));
console.log(minMax([3, 7, 1, 9, 4, 6, 2]));
console.log(minMax([-5, -1, -8, -3, -2]));
console.log(minMax([42]));
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([5, 4, 3, 2, 1]));
