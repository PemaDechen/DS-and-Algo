// "Compare neighbors, swap if wrong, biggest bubbles to end, repeat with shorter array."
function bubbleSort(arr) {
  const N = arr.length;
  for (let i = 0; i < N; i++) {
    let swap = false;
    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
console.log(bubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5] already sorted
console.log(bubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5] reverse sorted
console.log(bubbleSort([1])); // [1]
console.log(bubbleSort([3, 3, 3])); // [3, 3, 3]

// So in bubble sorting what we do is outer-loop is just to ensure the number of iteration everytime
