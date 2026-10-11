function twoSortedSum(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === k) {
      return [arr[left], arr[right]];
    }

    if (sum < k) {
      left += 1;
    }

    if (sum > k) {
      right -= 1;
    }
  }

  return [];
}

console.log(twoSortedSum([1, 2, 4, 7, 11], 9));   // [2, 7]
console.log(twoSortedSum([1, 3, 5, 8], 8));       // [3, 5]
console.log(twoSortedSum([1, 2, 3], 100));        // []
