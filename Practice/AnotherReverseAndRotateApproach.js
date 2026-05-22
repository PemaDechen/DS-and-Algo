function reverse(arr, left, right) {
  const N = arr.length;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

function rotateAnArray(arr, k) {
  const N = arr.length;
  k = k % N;
  arr = reverse(arr, 0, N - 1);
  arr = reverse(arr, 0, k - 1);
  arr = reverse(arr, k, N - 1);
  return arr;
}

// Reverse is working now I need to make sure it reverse based on the params that is sent.

console.log(rotateAnArray([1, 2, 3, 4, 5], 7)); // [4, 5, 1, 2, 3]
// console.log(rotateAnArray([1, 2, 3, 4, 5], 1)); // [5, 1, 2, 3, 4]
// console.log(rotateAnArray([1, 2, 3, 4, 5], 5)); // [1, 2, 3, 4, 5]
// console.log(rotateAnArray([1, 2, 3, 4, 5], 0)); // [1, 2, 3, 4, 5]
// console.log(rotateAnArray([42], 1));
