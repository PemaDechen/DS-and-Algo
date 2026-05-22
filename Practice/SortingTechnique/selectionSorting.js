/*
How to remember Selection Sort forever —
"Find the minimum, place it at front, repeat for remaining."
Difference from Bubble Sort —

Bubble Sort → many swaps per pass, neighbors only
Selection Sort → one swap per pass, finds minimum first
 */
function selectionSort(arr) {
  const N = arr.length;
  for (let i = 0; i < N; i++) {
    let indexOfMin = i;
    let isMinChanged = false;
    for (let j = i + 1; j < N; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
        isMinChanged = true;
      }
    }

    if (isMinChanged) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 1, 2]))   // [1, 2, 3, 5, 8]
console.log(selectionSort([1, 2, 3, 4, 5]))   // already sorted
console.log(selectionSort([5, 4, 3, 2, 1]))   // reverse sorted
console.log(selectionSort([1]))               // [1]
console.log(selectionSort([3, 3, 3]))         // [3, 3, 3]