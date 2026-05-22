function isSorted(arr) {
  const N = arr.length;
  let firstNumber = arr[0];
  for (let i = 1; i < N; i++) {
    if (arr[i] < firstNumber) {
      return "Array is not sorted";
    }
    firstNumber = arr[i];
  }

  return "Array is sorted";
}

console.log(isSorted([1, 2, 3, 4, 5]))    // sorted
console.log(isSorted([5, 4, 3, 2, 1]))    // not sorted
console.log(isSorted([1, 3, 2, 4, 5]))    // not sorted
console.log(isSorted([1]))                // sorted
console.log(isSorted([1, 1, 1, 1]))       // sorted

