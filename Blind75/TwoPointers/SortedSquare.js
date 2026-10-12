function sortedSquares(arr) {
  // the input is in ascending order

  let left = 0;
  let right = arr.length - 1;
  let resArray = [];
  let i = arr.length - 1;
  while (left <= right) {
    const leftSideSquare = arr[left] ** 2;
    const rightSideSquare = arr[right] ** 2;

    if (leftSideSquare < rightSideSquare) {
      resArray[i] = rightSideSquare;
      right -= 1;
      i--;
    } else {
      resArray[i] = leftSideSquare;
      left += 1;
      i--;
    }
  }

  return resArray;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));    // [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 4]));     // [4, 9, 9, 16, 49]
console.log(sortedSquares([5]));    