function secondLargestNumber(arr) {
  const N = arr.length;
  if (N < 2) return undefined;
  let max = arr[0];
  let secondLargest;

  for (let i = 1; i < N; i++) {
    if (max < arr[i]) {
      secondLargest = max;
      max = arr[i];
    }

    if ((max > arr[i] && secondLargest < arr[i]) || !secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestNumber([7])) // 7
console.log(secondLargestNumber([3, 7, 1, 9, 4, 6, 2])) // 7
console.log(secondLargestNumber([1, 1, 1, 1]))           // 1
console.log(secondLargestNumber([1, 2]))                 // 1
console.log(secondLargestNumber([5, 4, 3, 2, 1])); // 4
